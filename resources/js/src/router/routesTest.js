const routesTest = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
    meta: {
      pageTitle: 'Home',
      breadcrumb: [
        {
          text: 'Home',
          active: true,
        },
      ],
    },
  },
  {
    path: '/second-page',
    name: 'second-page',
    component: () => import(/* webpackChunkName: "second-page" */ '@/views/SecondPage.vue'),
    meta: {
      pageTitle: 'Second Page',
      breadcrumb: [
        {
          text: 'Second Page',
          active: true,
        },
      ],
    },
  },
  {
    path: '/roles',
    name: 'roles',
    component: () => import(/* webpackChunkName: "roles" */ '@/views/Roles.vue'),
    meta: {
      pageTitle: 'Roles',
      breadcrumb: [
        {
          text: 'Roles',
          active: true,
        },
      ],
    },
  },
  {
    path: '/permissions',
    name: 'permissions',
    component: () => import(/* webpackChunkName: "permissions" */ '@/views/Permissions.vue'),
    meta: {
      pageTitle: 'Permissions',
      breadcrumb: [
        {
          text: 'Permissions',
          active: true,
        },
      ],
    },
  },

  // {
  //   path: '/assign-permission',
  //   name: 'assign-permission',
  //   component: () => import(/* webpackChunkName: "assignPermission" */ '@/views/AssignPermission.vue'),
  //   meta: {
  //     pageTitle: 'Assign Permission',
  //     breadcrumb: [
  //       {
  //         text: 'Assign Permission',
  //         active: true,
  //       },
  //     ],
  //   },
  // },
]

export default routesTest
