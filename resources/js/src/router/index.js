import Vue from 'vue'
import VueRouter from 'vue-router'
import routesAuth from './routesAuth'
import routesOthers from './routesOthers'
import routesTest from './routesTest'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
        return { x: 0, y: 0 }
    }
  },
  routes: [
    ...routesAuth,
    ...routesOthers,
    ...routesTest,
  ],
})

// ? For splash screen
// Remove afterEach hook if you are not using splash screen
router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = 'none'
  }
})

export default router
