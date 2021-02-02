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
        {
          path: '/',
          component: '@/pages/film',
        },
        {
          path: '/components',
          component: '@/pages/comp',
          routes: [],
        },
        {
          path: '/skills',
          component: '@/pages/skill',
          routes: [],
        },
      ],
    },
  ],
  fastRefresh: {},
  dva: {
    immer: true,
    hmr: false,
  },
});
