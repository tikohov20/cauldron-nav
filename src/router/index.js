import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ClaudronView from "../views/Claudron/index.vue";

import { useBreadcrumb } from "../state";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        //no breadcrumb
        breadCrumb: false,
      },
    },
    {
      path: "/potions",
      name: "potions",
      component: () => import("../views/PotionsView.vue"),
      meta: {
        breadCrumb() {
          //custom breadcrumb
          return ["home", "potions", "food", "cauldron", "cauldron-boom"];
        },
      },
    },
    {
      path: "/explosives",
      name: "explosives",
      component: () => import("../views/ExplosivesView.vue"),
      //automatically generated breadcrumb
    },
    {
      path: "/food",
      name: "food",
      component: () => import("../views/FoodView.vue"),
    },
    {
      path: "/cauldron",
      component: ClaudronView,
      name: "cauldron",
      children: [
        {
          path: "/cauldron/boom",
          name: "cauldron-boom",
          component: () => import("../views/Claudron/ExplosiveCauldrons.vue"),
        },
        {
          path: "/cauldron/potion",
          name: "cauldron-potion",
          component: () => import("../views/Claudron/PotionCauldron.vue"),
        },
      ],
    },
  ],
});

const { setBreadCrumbRoutes } = useBreadcrumb();

router.beforeEach((to) => {
  // means we don't want breadcrumbs on this page
  if (to.meta.breadCrumb === false) {
    setBreadCrumbRoutes([]);
  } else if (typeof to.meta.breadCrumb === "function") {
    // set the custom breadcrumbs
    const breadCrumbArray = to.meta.breadCrumb();
    setBreadCrumbRoutes(breadCrumbArray);
  } else {
    //automatically generate breadcrumb
    const breadCrumbArray = [
      "home",
      ...to.matched.map((item) => {
        return item.name;
      }),
    ];
    setBreadCrumbRoutes(breadCrumbArray);
  }
});

export default router;
