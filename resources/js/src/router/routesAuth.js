const routesAuth = [
//   {
//     name: 'SuccessfullySend',
//     path: '/successfully-send',
//     component: () => import(/* webpackChunkName: "successfully-email-send" */ '../views/Auth/SuccessfullySendEmail'),
//     meta: {
//       requiresAuth: false,
//     },
//   },
  {
    name: 'SignIn',
    path: '/signin',
    component: () => import(/* webpackChunkName: "sign-in" */ '@/views/Auth/Login.vue'),
    meta: {
      layout: 'full',
      requiresAuth: false,
    },
  },
  {
    name: 'Register',
    path: '/register',
    component: () => import(/* webpackChunkName: "register" */ '@/views/Auth/Register.vue'),
    meta: {
      layout: 'full',
      requiresAuth: false,
    },
  },
//   {
//     name: 'ForgottenPassword',
//     path: '/forgotten-password',
//     component: () => import(/* webpackChunkName: "forgotten-password" */ '../views/Auth/ForgottenPassword'),
//     meta: {
//       requiresAuth: false,
//     },
//   },
//   {
//     name: 'CreateNewPassword',
//     path: '/create-new-password',
//     component: () => import(/* webpackChunkName: "create-new-password" */ '../views/Auth/CreateNewPassword'),
//     meta: {
//       requiresAuth: false,
//     },
//   },
]

export default routesAuth
