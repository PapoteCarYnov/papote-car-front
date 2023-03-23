import { createRouter, createWebHistory } from 'vue-router';
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import BookingView from "@/views/BookingView.vue";
import SearchView from "@/views/SearchView.vue";
import RoadmapView from "@/views/RoadmapView.vue";
import CreateRouteView from "@/views/create/CreateRouteView.vue";
import PriceView from "@/views/create/PriceView.vue";
import SummaryView from "@/views/create/SummaryView.vue";
import ChatView from "@/views/ChatView.vue";
import NotFound from "@/views/NotFoundView.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/booking',
    name: 'booking',
    component: BookingView
  }, 
  {
    path: '/search',
    name: 'search',
    component: SearchView
  },
  {
    path: '/roadmap',
    name: 'roadmap',
    component: RoadmapView
  },
  {
    path: '/create-route',
    name: 'create-route',
    component: CreateRouteView
  },
  {
    path: '/price',
    name: 'price',
    component: PriceView
  },
  {
    path: '/summary',
    name: 'summary',
    component: SummaryView
  },
  {
    path: '/chat',
    name: 'chat',
    component: ChatView
  },
  { path: '/404', component: NotFound },
  { path: '/:catchAll(.*)', redirect: '/404' }
];

// function beforeEnter(to, from, next) {
//   if (localStorage.getItem("user-token")) next();
//   else next('/');
// }

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

// eslint-disable-next-line
// router.beforeEach(async (to, from) => {
//   console.log(to.name);
//   if (!localStorage.getItem("user-token")) console.log("no token");
//   else console.log("token ^^ ");
//   return { name: to.name };
// });

export default router;
