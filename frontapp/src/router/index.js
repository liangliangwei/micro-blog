import Vue from 'vue'
import Router from 'vue-router'
import notFount from '../components/404.vue'
const main = () => import('@/views/main.vue')
const articleDetails = () => import('@/views/article/articleDetails.vue')

Vue.use(Router);
export default new Router({
    routes: [
        { path: '*', name: 'notFount', component: notFount },
        { path: '/', component: main, meta: { title: '首页' } },
        { path: '/article/articleDetails/:id', component: articleDetails, meta: { title: "文章详情展示页面" } }
    ]
})