import { createRouter, createWebHistory } from "vue-router";

import PlatformView from "@/views/core/PlatformView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "platform",
      component: PlatformView,
    },
  ],
});

export default router;
