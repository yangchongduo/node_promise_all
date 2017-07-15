'use strict';
/**
 * 设计思想；
 * 1: 5个并发以内通过running 控制，返回结果就减少一个
 * 2: 发送之前running+= 1 ，请求返回之后running-=1；
 * 3: 需要一个队列，这个队列放着pending的请求，一直会维持5个running，一个请求返回，就到pending队列中，取出一个进行请求；
 * 4:*******************************队列的实现方式*********************************************
 *    一个pending的promise，如果这个promise达到了resolve状态（resolve()）就会执行then方法，这个时候从pending
 * 4: 如何模拟并发，将请求全部通过Promise.all()同时并发
 * 5 尽管进行了函数嵌套，但是一个请求就是一个promise的不要变，可以到处then
 * 6 Promise.all中[] 必须是promise，只要有一个promise不到resolve，或者reject都不行。
 * 7 数据传递的方式有两种1： resolve 2 .then(return)
 */
const request = require('request-promise'),
  Promise = require('bluebird');

const mail = 'marching118@gmail.com';
const host = 'hr.amiaodaifu.com';
let questionId;

function buildLimitFunction(n, f) {
  let pending = [];
  let running = 0;

  function run() {
    let runPromise = f(...arguments);
    // 这个then是必须执行的 这个重点说明一下，只有得到结果了才能执行
    runPromise.then(()=>{
      console.log('pending.length',pending.length)
      console.log('running---->',running)
      pending.length ? pending.shift()() : running-- //pending.shift()执行的时候才会 进行下一个执行数据
      console.log('running====>',running)
    })
    // runPromise.then(() => pending.length ? pending.shift()() : running--);
    return runPromise;
  }

  return function () {
    // 1 2
    if (running >= n || pending.length) {
      console.log('running',running)
      // pending 数组里面有很多对象   这边是利用了这new Promise 达到了一个resolve状态执行，就会执行 形成一个私有的作用域将参数存起来
      return new Promise(resolve => pending.push(resolve)).then(run.bind(null, ...arguments)); // 只是改变里面的this并没有执行
    } else {
      console.log('runnind------>',running)
      // 这个会马上执行 请求先发出去，但是拿到结果以后再说
      running++;
      return run(...arguments);
    }
  };
}
const request5 = buildLimitFunction(5, request);

request5({
  method: 'POST',
  url: `http://${host}:50000/1610/new-question`,
  json: {mail}
})
  .then(r => {
    console.log('r=====>',r);
    questionId = r.id;
    const getTree = nodeId => request5(`http://${host}:50000/1610/questions/${questionId}/get-children/${nodeId}`, {json: true})
      .then((childen)=>{
      console.log('children',childen)
       return childen
      })
      .then(children => Promise.all(children.map(getTree)))
      .then(children => ({id: nodeId, children}));


    return getTree(r.rootId);//getTree(r.rootId) 因为本身不是 async 和await的模式，所以 这个位置是promise
  })
  .then(root => request5({
    method: 'POST',
    url: `http://${host}:50000/1610/questions/${questionId}/check`,
    json: {root}
  }))
  .then(r => {
    console.log('pass',r);
    if (r.pass) {
      return request5({
        method: 'POST',
        url: `http://${host}:50000/1610/questions/${questionId}/submit`,
        json: {
          name: '马骎',
          forFun: false,
          phone: '15900000000',
          sourceCode: require('fs').readFileSync('./answer.js', 'utf-8')
        }
      })
    }
  })
  .then(r => console.log(r))
  .catch(e => {
    console.error(e);
  });
