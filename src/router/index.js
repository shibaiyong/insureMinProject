import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

//const HelloWorld = resolve => require(['@/components/page/HelloWorld'], resolve)
//const HelloEarth = resolve => require(['@/components/page/HelloEarth'], resolve)

const HelloWorld = r => require.ensure([], () => r(require('@/components/page/HelloWorld')), 'HelloWorld')
const HelloEarth = r => require.ensure([], () => r(require('@/components/page/HelloEarth')), 'HelloEarth')
const ImageLazy = r => require.ensure([], () => r(require('@/components/page/ImageLazy')), 'ImageLazy')
const UpDownUpdate = r => require.ensure([], () => r(require('@/components/page/UpDownUpdate')), 'UpDownUpdate')
const VerticalSwiper = r => require.ensure([], () => r(require('@/components/base/VerticalSwiper')), 'VerticalSwiper')


const Home = r => require.ensure([], () => r(require('@/components/page/home/Home')), 'Home')

const instance = new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/home' },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        title: 'Home',
        requireAuth: true,
        roles: ['superadmin']
      }
    }
    // {
    //   path: '/helloearth',
    //   name: 'HelloEarth',
    //   component: HelloEarth,
    //   meta: {
    //     title: 'HelloEarth',
    //     requireAuth: true,
    //     roles: ['admin', 'superadmin']
    //   }
    // },
    // {
    //   path: '/imagelazy',
    //   name: 'ImageLazy',
    //   component: ImageLazy,
    //   meta: {
    //     title: 'ImageLazy',
    //     requireAuth: true,
    //     roles: ['admin', 'superadmin']
    //   }
    // },
    // {
    //   path: '/updownupdate',
    //   name: 'UpDownUpdate',
    //   component: UpDownUpdate,
    //   meta: {
    //     title: 'UpDownUpdate',
    //     requireAuth: true,
    //     roles: ['admin', 'superadmin']
    //   }
    // },
    // {
    //   path: '/verticalswiper',
    //   name: 'VerticalSwiper',
    //   component: VerticalSwiper,
    //   meta: {
    //     title: 'VerticalSwiper',
    //     requireAuth: true,
    //     roles: ['admin', 'superadmin']
    //   }
    // }
  ]
})


instance.beforeEach((to, from, next) => {
  let _title = to.meta.title
  document.title = _title ? _title : '默认标题'
  if (to.meta.requireAuth) {
    next()
  }
})

export default instance


