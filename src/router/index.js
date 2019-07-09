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
const TransactionFilter = r => require.ensure([], () => r(require('@/components/page/personalcenter/TransactionFilter')), 'TransactionFilter')
const IncomeFilter = r => require.ensure([], () => r(require('@/components/page/personalcenter/IncomeFilter')), 'IncomeFilter')
const PersonalCenter = r => require.ensure([], () => r(require('@/components/page/personalcenter/PersonCenter')), 'PersonalCenter')
const TransactionList = r => require.ensure([], () => r(require('@/components/page/personalcenter/TransactionList')), 'TransactionList')
const IncomeList = r => require.ensure([], () => r(require('@/components/page/personalcenter/IncomeList')), 'IncomeList')
const WithdrawFail = r => require.ensure([], () => r(require('@/components/page/personalcenter/transactiondetails/WithdrawFail')), 'WidthdrawFail')

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
    },

    {
      path: '/personalcenter',
      name: 'PersonalCenter',
      component: PersonalCenter,
      meta: {
        title: 'Home',
        requireAuth: true,
        roles: ['superadmin']
      }
    },
    {
      path: '/transactionlist',
      name: 'TransactionList',
      component: TransactionList,
      meta: {
        title: 'Home',
        requireAuth: true,
        roles: ['superadmin']
      }
    },

    {
      path: '/transactionfilter',
      name: 'TransactionFilter',
      component: TransactionFilter,
      meta: {
        title: 'Home',
        requireAuth: true,
        roles: ['superadmin']
      }
    },
    {
      path: '/incomefilter',
      name: 'IncomeFilter',
      component: IncomeFilter,
      meta: {
        title: 'Home',
        requireAuth: true,
        roles: ['superadmin']
      }
    },
    {
      path: '/incomelist',
      name: 'IncomeList',
      component: IncomeList,
      meta: {
        title: 'Home',
        requireAuth: true,
        roles: ['superadmin']
      }
    },
    {
      path: '/withdrawfail',
      name: 'WithdrawFail',
      component: WithdrawFail,
      meta: {
        title: 'Home',
        requireAuth: true,
        roles: ['superadmin']
      }
    }
    
  ]
})


instance.beforeEach((to, from, next) => {
  let _title = to.meta.title
  document.title = _title ? _title : '默认标题'
  // if (to.meta.requireAuth) {
  //   next()
  // }
  next()
})

export default instance


