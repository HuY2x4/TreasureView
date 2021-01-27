import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/BasicLayout',
      routes: [
        { path: '/', component: '@/pages/film' },
        { path: '/components', component: '@/pages/comp' },
      ],
    },
  ],
  fastRefresh: {},
  dva: {
    immer: true,
    hmr: false,
  },
});
