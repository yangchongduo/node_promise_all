// pending.length 0
// running----> 1
// running====> 0
// r=====> { id: '1d623115-c828-4527-a346-36f09069fd4f', rootId: 1 }
// pending.length 0
// running----> 1
// running====> 0
// children [ 2 ]
// pending.length 0// 这个请求已经有结果了 需要将running这个统计请求的数目统计值 出去
// running----> 1
// running====> 0
// children [ 3, 4 ] // 得到两个子节点
// pending.length 0
// running----> 2
// running====> 1
// id 是3 返回了结果，所以就running减少  减少之后，看到结果是 【8，9，10，11】 同时并发，这个时候有5个running
// children [ 8, 9, 10, 11 ]
// id 4 结果返回数据 【5，6，7】running 减少一个
// pending.length 0
// running----> 5
// running====> 4
// children [ 5, 6, 7 ] // 三个并发 刚才的并发数是4个 + 3个，这个时候，限制了5个就pending 剩下的两个pending
// running 5
// running 5
// pending.length 2 // 一个请求中的有返回结果了，就回到pending中 拿去一个执行 之前有5个running的 返回一个
// running----> 5
// running====> 5
// children [ 18 ]
// running 5
// pending.length 2
// running----> 5
// running====> 5
// children [ 26 ]
// pending.length 1
// running----> 5
// running====> 5
// children [ 12, 13 ]
// running 5
// running 5
// running 5
// pending.length 3
// running----> 5
// running====> 5
// children [ 23, 24, 25 ]
// pending.length 2
// running----> 5
// running====> 5
// children [ 19, 20, 21, 22 ]
// running 5
// running 5
// running 5
// running 5
// running 5
// running 5
// running 5
// pending.length 8
// running----> 5
// running====> 5
// children [ 14, 15, 16 ]
// running 5
// running 5
// running 5
// pending.length 10
// running----> 5
// running====> 5
// children [ 17 ]
// running 5
// pending.length 10
// running----> 5
// running====> 5
// pending.length 9
// running----> 5
// running====> 5
// children []
// children [ 44, 45, 46, 47 ]
// running 5
// running 5
// running 5
// running 5
// pending.length 12
// running----> 5
// running====> 5
// children [ 27, 28 ]
// running 5
// running 5
// pending.length 13
// running----> 5
// running====> 5
// children [ 29, 30 ]
// running 5
// running 5
// pending.length 14
// running----> 5
// running====> 5
// children []
// pending.length 13
// running----> 5
// running====> 5
// children []
// pending.length 12
// running----> 5
// running====> 5
// pending.length 11
// running----> 5
// running====> 5
// children [ 48, 49, 50, 51 ]
// children []
// running 5
// running 5
// running 5
// running 5
// pending.length 14
// running----> 5
// running====> 5
// children [ 52, 53 ]
// running 5
// running 5
// pending.length 15
// running----> 5
// running====> 5
// children []
// pending.length 14
// running----> 5
// running====> 5
// children []
// pending.length 13
// running----> 5
// running====> 5
// children [ 31, 32, 33 ]
// running 5
// running 5
// running 5
// pending.length 15
// running----> 5
// running====> 5
// children [ 34, 35, 36 ]
// running 5
// running 5
// running 5
// pending.length 17
// running----> 5
// running====> 5
// children [ 37, 38, 39 ]
// running 5
// running 5
// running 5
// pending.length 19
// running----> 5
// running====> 5
// children [ 40, 41, 42, 43 ]
// running 5
// running 5
// running 5
// running 5
// pending.length 22
// running----> 5
// running====> 5
// children []
// pending.length 21
// running----> 5
// running====> 5
// children []
// pending.length 20
// running----> 5
// running====> 5
// children []
// pending.length 19
// running----> 5
// running====> 5
// children []
// pending.length 18
// running----> 5
// running====> 5
// children []
// pending.length 17
// running----> 5
// running====> 5
// children []
// pending.length 16
// running----> 5
// running====> 5
// children []
// pending.length 15
// running----> 5
// running====> 5
// children []
// pending.length 14
// running----> 5
// running====> 5
// children []
// pending.length 13
// running----> 5
// running====> 5
// children []
// pending.length 12
// running----> 5
// running====> 5
// children []
// pending.length 11
// running----> 5
// running====> 5
// children []
// pending.length 10
// running----> 5
// running====> 5
// children []
// pending.length 9
// running----> 5
// running====> 5
// children []
// pending.length 8
// running----> 5
// running====> 5
// children []
// pending.length 7
// running----> 5
// running====> 5
// children []
// pending.length 6
// running----> 5
// running====> 5
// children []
// pending.length 5
// running----> 5
// running====> 5
// children []
// pending.length 4
// running----> 5
// running====> 5
// children []
// pending.length 3
// running----> 5
// running====> 5
// children []
// pending.length 2
// running----> 5
// running====> 5
// children []
// pending.length 1
// running----> 5
// running====> 5
// children []
// pending.length 0
// running----> 5
// running====> 4
// children []
// pending.length 0
// running----> 4
// running====> 3
// children []
// pending.length 0
// running----> 3
// running====> 2
// children []
// pending.length 0
// running----> 2
// running====> 1
// children []
// pending.length 0
// running----> 1
// running====> 0
// children []
// pending.length 0
// running----> 1
// running====> 0
// pass { pass: true, concurrency: 5, time: 1630 }
// pending.length 0
// running----> 1
// running====> 0
// { msg: 'thank you!' }
