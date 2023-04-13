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
    path: '/ride-detail/:id',
    name: 'ride-detail',
    component: RideDetailView
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView
  },
  {
    path: '/create-ride',
    name: 'create-ride',
    component: CreateRideView
  },
  {
    path: '/price/:id',
    name: 'price',
    component: PriceView
  },
  {
    path: '/summary/:id',
    name: 'summary',
    component: SummaryView
  },
  {
    path: '/chat',
    name: 'chat',
    component: ChatView
  },
  {
    path: '/cgu',
    name: 'cgu',
    component: CguView
  },
  { path: '/404', component: NotFound },
  { path: '/:catchAll(.*)', redirect: '/404' }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
