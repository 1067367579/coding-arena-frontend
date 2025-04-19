import { getToken } from '@/utils/cookie'
import { createRouter, createWebHistory } from 'vue-router'
import '@/assets/main.scss'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/oj/login',
      name: 'Login',
      component: () => import("@/views/Login.vue")
    },
    {
      path: '/oj/layout',
      name: 'layout',
      component: () => import('@/views/Layout.vue'),
      children: [
        {
          path: 'question',
          name: 'question',
          component: () => import('@/views/Question.vue'),
        },
        {
          path: 'exam',
          name: 'exam',
          component: () => import('@/views/Exam.vue'),
        },
        {
          path: 'cuser',
          name: 'cuser',
          component: () => import('@/views/Cuser.vue'),
        },
        {
          path: 'updateExam',
          name: 'updateExam',
          component: () => import('@/views/UpdateExam.vue'),
        },
      ]
    },
    {
      path: '/',
      redirect: '/oj/login'
    }
  ],
})

//跳转之前发生的逻辑 to要跳往的页面 from就是现在 next函数
router.beforeEach((to,from,next)=> {
  //判断token是否在cookie中存在
  if(getToken()) {
    //都存了token就不用登录了 直接跳到layout
    if(to.path === '/oj/login') {
      next({
        path: '/oj/layout/cuser'
      });
    } else {
      //不是登录页 并且已经有令牌 执行即可
      next();
    }
  } else {
    //没有令牌 又不是登录页 就需要跳到登录页
    if(to.path !== '/oj/login') {
      //不是登录页 跳转到登录页
      next({
        path: '/oj/login'
      })
    } else {
      next();
    }
  }
})

export default router
