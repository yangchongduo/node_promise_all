// const fn1= ()=>{
// 	return new Promise((resolve,reject)=>{
// 		//
// 		setTimeout(resolve,1000,1000)
// 		setTimeout(()=>{
// 			resolve(1000)// 这个写法真low
// 		},1000)
// 	})
// }
// fn1().then((resolve)=>{
// 	console.log(resolve)
// });
// // 一种成功的状态
// Promise.resolve('1000').then((resolve)=>{
// 	console.log('resolve',resolve)
// })


var data = [];
const run = () => {
	const fn1 = new Promise((resolve) => {
		setTimeout(() => {
			resolve('xxx')
		}, 1000)
	})
	console.log(data);
	fn1.then(() => data.shift()())// 这个就是resolve 执行
	return fn1
};
const promise = () => {
	// console.log('..')
	// console.log(data)
	return new Promise(resolve => data.push(resolve)).then(run.bind(null, 'xxx'))
}
// console.log([1,2,4,5].map(promise));
Promise.all([1, 2, 4, 5].map(promise))
const fn1 = function () {
	console.log(this)
}
// new Promise(resolve => {
// 	console.log('cc')
// 	data.push(resolve)
// 	resolve()
// }).then(()=>{
// 	console.log('xx')
// })

var fn2 = () => {
	return new Promise((resolve) => {
		resolve('xxx')
	})
}
var fn3 = () => {
	return new Promise(resolve => {
		console.log('cc')
		data.push(resolve)
	}).then(() => {
		console.log('xx')
	})
};
Promise.all([fn2(), fn3()]).then((resolve) => {
	console.log('----')
	console.log(resolve)
})