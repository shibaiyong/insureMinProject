import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

//const HelloWorld = resolve => require(['@/components/page/HelloWorld'], resolve)
//const HelloEarth = resolve => require(['@/components/page/HelloEarth'], resolve)

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
const EnterRealInfo = r => require.ensure([], () => r(require('@/components/page/productdetail/EnterRealInfo')), 'EnterRealInfo')
const BankList = r => require.ensure([], () => r(require('@/components/page/productdetail/BankList')), 'BankList')
const SetPassword = r => require.ensure([], () => r(require('@/components/page/setpassword/SetPassword')), 'SetPassword')
const WithdrawCash = r => require.ensure([], () => r(require('@/components/page/personalcenter/WithdrawCash')), 'WithdrawCash')
const ModifyMobile = r => require.ensure([], () => r(require('@/components/page/set/ModifyMobile')), 'ModifyMobile')
const EnterVerfiCode = r => require.ensure([], () => r(require('@/components/page/set/EnterVerfiCode')), 'EnterVerfiCode')
const ResetPassword = r => require.ensure([], () => r(require('@/components/page/set/ResetPassword')), 'EnterVerfiCode') 
const ElecAccount = r => require.ensure([], () => r(require('@/components/page/personalcenter/ElecAccount')), 'ElecAccount') 
const Help = r => require.ensure([], () => r(require('@/components/page/help/Help')), 'Help') 
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
      path: '/enterrealinfo',
      name: 'EnterRealInfo',
      component: EnterRealInfo,
      meta: {
        title: 'EnterRealInfo',
        requireAuth: true,
        roles: ['superadmin']
      }
    },
    {
      path: '/setpassword',
      name: 'SetPassword',
      component: SetPassword,
      meta: {
        title: 'SetPassword',
        requireAuth: true,
        roles: ['superadmin']
      }
    },
    {
      path: '/banklist',
      name: 'BankList',
      component: BankList,
      meta: {
        title: 'EnterRealInfo',
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
    },
    {
      path: '/withdrawcash',
      name: 'WithdrawCash',
      component: WithdrawCash,
      meta: {
        title: 'WithdrawCash',
        requireAuth: true,
        roles: ['superadmin']
      }
    },

    {
      path: '/elecaccount',
      name: 'ElecAccount',
      component: ElecAccount,
      meta: {
        title: 'ElecAccount',
        requireAuth: true,
        roles: ['superadmin']
      }
    },

    {
      path: '/modifymobile',
      name: 'ModifyMobile',
      component: ModifyMobile,
      meta: {
        title: 'ModifyMobile',
        requireAuth: true,
        roles: ['superadmin']
      }
    },
    {
      path: '/enterverficode',
      name: 'EnterVerfiCode',
      component: EnterVerfiCode,
      meta: {
        title: 'EnterVerfiCode',
        requireAuth: true,
        roles: ['superadmin']
      }
    },

    {
      path: '/resetpassword',
      name: 'ResetPassword',
      component: ResetPassword,
      meta: {
        title: 'ResetPassword',
        requireAuth: true,
        roles: ['superadmin']
      }
    },
    {
      path: '/help',
      name: 'Help',
      component: Help,
      meta: {
        title: 'Help',
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


