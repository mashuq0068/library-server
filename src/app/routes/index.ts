import express from 'express';
import { bookRoutes } from '../modules/book/book.route';
import { memberRoutes } from '../modules/member/member.route';
import { borrowRoutes } from '../modules/borrowRecord/borrewRecord.route';

const router = express.Router();

const routes = [
  {
    path: '/books',
    routes: bookRoutes,
  },
  {
    path: '/members',
    routes: memberRoutes,
  },
  {
    path: '/',
    routes: borrowRoutes,
  },

];
routes.forEach((route) => router.use(route.path, route.routes));
export const allRoutes = router;
