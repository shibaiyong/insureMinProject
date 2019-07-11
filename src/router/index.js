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
const Withdraw = r => require.ensure([], () => r(require('@/components/page/personalcenter/transactiondetails/Withdraw')), 'Widthdraw')
const BuyInto = r => require.ensure([], () => r(require('@/components/page/personalcenter/transactiondetails/BuyInto')), 'BuyInto')
const ProductInfo = r => require.ensure([], () => r(require('@/components/page/productdetail/ProductInfo')), 'ProductInfo')
const ProtocolList = r => require.ensure([], () => r(require('@/components/page/productdetail/ProtocolList')), 'ProtocolList')
const NoticeList = r => require.ensure([], () => r(require('@/components/page/productdetail/NoticeList')), 'NoticeList')
const NoticeDetail = r => require.ensure([], () => r(require('@/components/page/productdetail/NoticeDetail')), 'NoticeDetail')
const ProtocolDetail = r => require.ensure([], () => r(require('@/components/page/productdetail/ProtocolDetail')), 'ProtocolDetail')
const Buy = r => require.ensure([], () => r(require('@/components/page/buy/Buy')), 'Buy')

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
      path: '/productinfo',
      name: 'ProductInfo',
      component: ProductInfo,
      meta: {
        title: 'ProductInfo',
        requireAuth: true,
        roles: ['superadmin']
      }
    },

    {
      path: '/protocollist',
      name: 'ProtocolList',
      component: ProtocolList,
      meta: {
        title: 'ProtocolList',
        requireAuth: true,
        roles: ['superadmin']
      }
    },
    {
      path: '/protocoldetail',
      name: 'ProtocolDetail',
      component: ProtocolDetail,
      meta: {
        title: 'ProtocolDetail',
        requireAuth: true,
        roles: ['superadmin']
      }
    },
    {
      path: '/noticelist',
      name: 'NoticeList',
      component: NoticeList,
      meta: {
        title: 'NoticeList',
        requireAuth: true,
        roles: ['superadmin']
      }
    },
    {
      path: '/noticedetail',
      name: 'NoticeDetail',
      component: NoticeDetail,
      meta: {
        title: 'NoticeDetail',
        requireAuth: true,
        roles: ['superadmin']
      }
    },

    {
      path: '/buy',
      name: 'Buy',
      component: Buy,
      meta: {
        title: 'Buy',
        requireAuth: true,
        roles: ['superadmin']
      }
    },

    {
      path: '/personalcenter',
      name: 'PersonalCenter',
      component: PersonalCenter,
      meta: {
        title: 'PersonalCenter',
        requireAuth: true,
        roles: ['superadmin']
      }
    },
    {
      path: '/transactionlist',
      name: 'TransactionList',
      component: TransactionList,
      meta: {
        title: 'TransactionList',
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
      path: '/withdraw',
      name: 'Withdraw',
      component: Withdraw,
      meta: {
        title: 'Home',
        requireAuth: true,
        roles: ['superadmin']
      }
    },
    {
      path: '/buyinto',
      name: 'BuyInto',
      component: BuyInto,
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


