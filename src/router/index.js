const routes = [
  {
    path: '/',
    name: '欢迎页',
    key: 'dashboards',
    element: <div>dashboards</div>,
  },
  {
    path: '/tqr',
    name: '欢迎页',
    key: 'dashboard',
    children: [
      {
        path: 'home',
        name: '首页',
        key: 'home',
        children: [
          {
            path: 'list',
            name: '机构l列表',
            key: 'homeList',
            element: <div>homeList</div>
          }
        ]
      },
      {
        path: 'company',
        name: '机构',
        key: 'company',
        children: [
          {
            path: 'list',
            name: '机构l列表',
            key: 'companyList',
            element: <div>companyList</div>
          },
          {
            path: 'add',
            name: '机构添加',
            key: 'companyAdd',
            hidden: true,
            element: <div>companyAdd</div>
          }
        ]
      }
    ]
  },
  {
    path: '/login',
    name: '登录',
    key: 'login',
    element: <div>login</div>
  }
]

export {
  routes
}