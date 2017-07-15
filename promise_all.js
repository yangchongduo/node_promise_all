// var p1 = new Promise(function (resolve, reject) {
// 	//
// 	// throw  new Error('')
// 	setTimeout(() => reject(new Error('fail')), 3000)
// })
//
// var p2 = new Promise(function (resolve, reject) {
// 	setTimeout(() => resolve(p1), 1000)
// })
//
// p2
// 	.then(result => console.log(result))
// 	.catch(error => console.log(error))
// var promise = new Promise((resolve,rejcet)=>{
// 	throw new Error('xxx')
// })
// promise.catch(err=>{
// 	console.log('err',err)
// });
// // reject 等同于 throw new Error的错误
// var promise = new Promise((resolve,reject)=>{
// 	try {
// 		ddd
// 		// throw  new Error('xxxx')
// 	}catch (e){
// 		reject(e)
// 	}
// });
// promise.catch(err=>{
// 	console.log(err)
// })
// var someAsyncThing = function() {
// 	return new Promise(function(resolve, reject) {
// 		// 下面一行会报错，因为x没有声明
// 		resolve(x + 2);
// 	});
// };
// someAsyncThing().then(function() {
// 	console.log('everything is great');
// });
// Promise.all中的各个promise实例中，不要有自己的catch方法,如果有的话，不会被all的 catch捕获
// const p1 = new Promise((resolve, reject) => {
// 	resolve('hello');
// })
// 	.then(result => result)
// 	.catch(e => e);
//
// const p2 = new Promise((resolve, reject) => {
// 	throw new Error('报错了');
// })
// 	.then(result => result)
// 	.catch(e => e); //如果有.catch()//  。该实例执行完catch方法后，也会变成resolved，导致Promise.all()方法参数里面的两个实例都会resolved，
//
// Promise.all([p1, p2])
// 	.then(result => console.log(result))
// 	.catch(e => console.log('all中promise抛出的错误，不会被catch',e));
var fn1 = 1;
var fn2 = 2;
var fn3 = function () {
	return 'xx'
}
Promise.all([fn1,fn2,fn3()]).then((resolve,rejcet)=>{
	console.log(resolve)
})

// const f = () => console.log('now');
// Promise.try(f);
// console.log('next');
//

