/* eslint-disable */
import { createRouter , createWebHistory} from "vue-router";


const HomeChild = [
  {
    path: 'practice1',
    component: () => import('../components/practice')
  }
]

const routes = [
  {
    path: '/',
    redirect: '/home' 
  },
  {
    path: '/home',
    component: () => import('../views/Home'),
    children: HomeChild
  },
  {
    path: '/test',
    component: () => import('../views/Test')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
