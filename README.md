
src/
├── app.css                 主 css
├── app.js                  应用入口
├── components              应用组件
│   ├── Home                view 中有个 Home 的 view 就要有一个 component
│   │   ├── Table.css       列表组件对应样式
│   │   ├── Table.js        Home 页面的一个列表组件
│   │   └── TableRedux.js   列表组件 reducer, action creator, action type. 整合在一个文件中, 
│   └── shared              不属于任何view的组件, 公共组件
├── containers              
│   ├── DevTools.js         配置 DevTools
│   └── Root.js             被 app.js 依赖, 用于判断环境是否加载 DevTools
├── layouts                 布局相关的组件和样式, 比如菜单, 侧边栏, header, footer
├── redux                   Redux store 相关的配置
│   └── reducers.js         整个应用的 reducer 汇总
├── routes                  路由相关配置
├── styles                  全局公共样式
├── utils                   工具函数
└── views                   应用中某个页面的入口文件, 一般为路由组件
    ├── Home.css            Home 对应样式
    ├── Home.js             首页的入口文件为 Home
    └── HomeRedux.js        Home下所有与 Redux 相关的 reducer, action creator 的汇总, 即 components/Home 下的所有 Redux 汇总