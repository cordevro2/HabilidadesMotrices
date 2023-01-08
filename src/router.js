import Vue from 'vue';
import VueRouter from 'vue-router';
import inicio from "./components/inicio";
import menu from "./components/menu";
import contenido from "./components/contenido";
import actividades from "./components/actividades";
import drag from "./components/drag";
import puzzle from "./components/puzzle";
import evaluacion from "./components/evaluacion";
import creditos from "./components/creditos";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: inicio,
  },
  {
    path: '/menu',
    name: 'menu',
    component: menu,

    children: [
      {
        path: '/contenido',
        name: 'contenido',
        component: contenido,
      },
      {
        path: '/actividades/',
        name: 'actividades',
        component: actividades,
        children: [{
          path: '/drag',
          name: 'drag',
          component: drag
        },
        {
          path: '/puzzle',
          name: 'puzzle',
          component: puzzle,
        },
        ]
      },
      {
        path: '/evaluacion',
        name: 'evaluacion',
        component: evaluacion,

      },

      {
        path: '/creditos',
        name: 'creditos',
        component: creditos,

      },]
  },];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
export default router;