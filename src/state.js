import { ref } from "@vue/reactivity";

const routes = ref([]);

export function useBreadcrumb() {
  const setBreadCrumbRoutes = (newRoutes) => {
    routes.value = newRoutes;
  };
  return {
    routes,
    setBreadCrumbRoutes,
  };
}
