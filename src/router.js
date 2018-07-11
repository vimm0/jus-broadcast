/*global Vue*/
import Router from 'vue-router'
import Home from '@/views/Home'
import VideoList from '@/components/app/video/VideoList.vue'
// import ExternalVideoDetail from '@/components/app/video/detail/ExternalVideoDetail.vue'
// import LocalVideoDetail from '@/components/app/video/detail/LocalVideoDetail.vue'
import WatchList from '@/components/app/video/feature/WatchList.vue'
// import SignUp from '@/components/app/user/SignUp.vue'
// import SignIn from '@/components/app/user/SignIn.vue'
import Profile from '@/components/app/user/Profile.vue'
// import Card from '@/components/app/payment/Card.vue'
// import Invoice from '@/components/app/payment/Invoice.vue'
// import Subscription from '@/components/app/payment/Subscription.vue'
// import Error from '@/components/UIComponent/Error.vue'

Vue.use(Router)

module.exports = new Router({
    // modes: history,
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        // {
        //     path: '/signup',
        //     name: 'Sign Up',
        //     component: SignUp
        // },
        // {
        //     path: '/signin',
        //     name: 'Sign In',
        //     component: SignIn
        // },
        // {
        //     path: '/video',
        //     name: 'VideoList',
        //     component: VideoList
        // },
        // {
        //     path: ':slugId',
        //     name: 'External Video Detail',
        //     component: ExternalVideoDetail
        // },
        // {
        //     path: ':slugId',
        //     name: 'Local Video Detail',
        //     component: LocalVideoDetail
        // },
        {
            path: '/watchlist',
            name: 'WatchList',
            component: WatchList
        },
        // {
        //     path: '/card',
        //     name: 'Card',
        //     component: Card
        // },
        // {
        //     path: '/subscription',
        //     name: 'Subscription',
        //     component: Subscription
        // },
        // {
        //     path: '/invoice',
        //     name: 'Invoice',
        //     component: Invoice
        // },
        {
            path: '/profile',
            name: 'Profile',
            component: Profile
        },
        // {
        //     path: '*',
        //     name: 'Error',
        //     component: Error
        // }
    ]
})
