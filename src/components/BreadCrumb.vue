<template>
  <div>
    <template v-for="(route, index) in routes" :key="route">
      <RouterLink :to="{ name: route }">
        {{ route }}
      </RouterLink>
      {{ index == routes.length - 1 ? "" : " > " }}
    </template>
  </div>
</template>

<script>
import { useBreadcrumb } from "@/state.js";
export default {
  setup() {
    const { routes } = useBreadcrumb();
    return {
      routes,
    };
  },
};
</script>
<style scoped>
.router-link-exact-active {
  color: grey;
}
</style>
