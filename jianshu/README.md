1. creact-react-app：是facebook提供的官网脚手架，公司也可自定义脚手架
2. serviceWorker: PWA: 用户浏览后缓存网页，下次访问即使没有网络也能浏览网页
3. JSX：组件中使用了JSX语法，则必须引入react
4. 自定义组件必须以大写开头：<App>
5. immutable概念：state不允许我们做任何改变，如果要改变，先拷贝一份出来
6. VueX中的方法实际上也是遵循了单身数据流的思想
7. React是一个视图层框架，Redux\Mobx\Flux数据流框架
8. 函数式编程写出来的代码更容易实现前端自动化测试
9. 页面是由render函数进行渲染出来的，页面的state以及Props改变的时候，render函数会重新执行
10. 父组件render执行时，子组件的render也会执行，因为子组件是父组件的一部分
11. JSX是一个模板语法，并不是真正的DOM，方便开发书写，底层是React.creatElement函数
12. JSX -> createElement -> 虚拟DOM (JS对象) -> 真实的DOM
13. key值应该是一个确定的值，方便DIFF算法进行比较，使用索引做为key值不稳定
14. DIFF算法采用同级比较，发现一层不同，则直接将新的虚拟DOM替换掉老的虚拟DOM，下面的不再做比较
15. 生命周期函数的定义：组件在某一时刻会自动执行某个函数
16. 第一个生命周期函数：render函数
17. Redux = Reducer + Flux
18. UI组件 + 容器组件：UI组件只负责内容的显示，不负责任何的逻辑，容器组件负责数据逻辑的操作
19. 无状态组件：当组件只有一个render函数的时候，建议定义为无状态组件，相比类组件性能要高很多
20. redux-thunk可以使异步请求在action中请求，拆分组件请求逻辑，减少组件代码体积
21. redux-saga相对thunk复杂得多，将以将action中的异步请求单独拆分成一个文件
22. immutable库将state变为不可变对象
23. redux-immutable将多个页面独立的reducer组合为一个reducer