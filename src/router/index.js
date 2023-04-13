import { createRouter, createWebHistory } from 'vue-router';
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import BookingView from "@/views/BookingView.vue";
import SearchView from "@/views/SearchView.vue";
import RoadmapView from "@/views/RoadmapView.vue";
import RideDetailView from "@/views/RideDetailView.vue";
import ProfileView from "@/views/ProfileView.vue";
import CreateRideView from "@/views/create/CreateRideView.vue";
import PriceView from "@/views/create/PriceView.vue";
import SummaryView from "@/views/create/SummaryView.vue";
import ChatView from "@/views/ChatView.vue";
import CguView from "@/views/CguView.vue";
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
    path: '/booking/:id',
    name: 'booking',
    component: BookingView,
    beforeEnter: (to, from, next) => beforeEnter(to, from, next)
  }, 
  {
    path: '/search',
    name: 'search',
    component: SearchView
  },
  {
    path: '/roadmap',
    name: 'roadmap',
    component: RoadmapView,
    beforeEnter: (to, from, next) => beforeEnter(to, from, next)
  },
  {
    path: '/ride-detail/:id',
    name: 'ride-detail',
    component: RideDetailView
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView,
    beforeEnter: (to, from, next) => beforeEnter(to, from, next)
  },
  {
    path: '/create-ride',
    name: 'create-ride',
    component: CreateRideView,
    beforeEnter: (to, from, next) => beforeEnter(to, from, next)
  },
  {
    path: '/price/:id',
    name: 'price',
    component: PriceView,
    beforeEnter: (to, from, next) => beforeEnter(to, from, next)
  },
  {
    path: '/summary/:id',
    name: 'summary',
    component: SummaryView,
    beforeEnter: (to, from, next) => beforeEnter(to, from, next)
  },
  {
    path: '/chat',
    name: 'chat',
    component: ChatView,
    beforeEnter: (to, from, next) => beforeEnter(to, from, next)
  },
  {
    path: '/cgu',
    name: 'cgu',
    component: CguView
  },
  { path: '/404', component: NotFound },
  { path: '/:catchAll(.*)', redirect: '/404' }
];

function beforeEnter(to, from, next) {
  if (localStorage.getItem('user-token')) next();
  else next({ name: 'login', force: true, state: { login: true } })
}

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
