import Vue from 'vue'
import VueRouter from 'vue-router'
import { hasUser } from '../utils/tools'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/layout'),
    children: [
      {
        path: '',
        name: 'home',
        redirect: '/hot',
        component: () => import('@/views/Home'),
        children: [
          {
            path: '/following',
            component: () => import('@/views/Following'),
          },
          {
            path: '/hot',
            component: () => import('@/views/Hot'),
          },
          {
            path: '/latest',
            component: () => import('@/views/Latest'),
          },
          {
            path: 'latest/:topic',
            component: () => import('@/views/Latest'),
          },
          {
            path: '/tweet',
            component: () => import('@/views/Tweet'),
          },
          {
            path: '/series',
            component: () => import('@/views/Series'),
          },
          {
            path: '/series/:id',
            component: () => import('@/views/SeriesDetail'),
            props: true,
          },
          {
            path: '/video',
            component: () => import('@/views/Video'),
          },
          {
            path: '/book-store',
            component: () => import('@/views/BookStore'),
          },
        ],
      },
      {
        path: '/search',
        name: 'search',
        component: () => import('@/views/Search'),
      },
      {
        path: '/signin',
        name: 'signin',
        component: () => import('@/views/SignIn'),
      },
      {
        path: '/signup',
        name: 'signup',
        component: () => import('@/views/SignUp'),
      },
      {
        path: '/favorites',
        name: 'favorites',
        component: () => import('@/views/MyFavorites'),
      },
    ],
  },
]

const router = new VueRouter({
  routes,
})
router.beforeEach((to, from, next) => {
  // console.log(localStorage.getItem('USER'))
  let flag = hasUser()
  if (flag) {
    // console.log('hasuser')
    if (to.path == '/signin') {
      next({ path: '/' })
    }
  } else {
    // console.log('nouser')
    next()
  }
  next()
})

export default router
