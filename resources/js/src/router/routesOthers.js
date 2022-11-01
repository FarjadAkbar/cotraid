const routesOthers = [
  {
    path: '/error-404',
    name: 'error-404',
    component: () => import(/* webpackChunkName: "Error-404" */ '@/views/error/Error404.vue'),
    meta: {
      layout: 'full',
    },
  },
  {
    path: '*',
    redirect: 'error-404',
  },
]

export default routesOthers
