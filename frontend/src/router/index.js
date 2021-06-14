/* eslint-disable */
import { createRouter , createWebHistory} from "vue-router";

const TheoryPracticeRoutes = [
  {
    path: 'home',
    name: 'Home',
    component: () => import('../views/TheoryPractice/Home')
  },
  {
    path: 'sxlx',
    name: 'sxlx',
    component: () => import('../views/TheoryPractice/sxlx.vue'),
    props: true
  },
  {
    path: 'zjlx',
    name: 'zjlx',
    component: () => import('../views/TheoryPractice/zjlx.vue'),
    props: true
  },
  {
    path: 'zxlx',
    name: 'zxlx',
    component: () => import('../views/TheoryPractice/zxlx.vue'),
    props: true
  },
  {
    path: 'sjlx',
    name: 'sjlx',
    component: () => import('../views/TheoryPractice/sjlx.vue')
  },
  {
    path: 'fzmnks',
    name: 'fzmnks',
    component: () => import('../views/TheoryPractice/fzmnks.vue')
  },
  {
    path: 'fzks',
    name: 'fzks',
    component: () => import('../views/TheoryPractice/fzks.vue')
  },
  {
    path: 'ctb',
    name: 'ctb',
    component: () => import('../views/TheoryPractice/ctb.vue')
  },
  {
    path: 'sc',
    name: 'sc',
    component: () => import('../views/TheoryPractice/sc.vue')
  }
  ]
const HomeChild = [
  // {
  //   path: '',
  //   redirect: 'subjectf'
  // },
  {
    path: 'subjectf',
    component: () => import('../components/Subject1/SubjectF')
  },
  {
    path: 'practicef',
    component: () => import('../components/Subject1/PracticeF')
  },
  {
    path: 'examf',
    component: () => import('../components/Subject1/ExamF')
  }
]

const routes = [
  {
    path: '/',
    redirect: '/home' 
  },
  {
    path: '/login',
    component: () => import('../views/Login_Register')
  },
  {
    path: '/home',
    component: () => import('../views/Home'),
    children: HomeChild
  },
  {
    path: '/test',
    component: () => import('../views/Test')
  },
  {
    path: '/theorypractice/',
    redirect: '/theorypractice/home',
    component: () => import('../views/TheoryPractice/TheoryPactice'),
    children: TheoryPracticeRoutes
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
