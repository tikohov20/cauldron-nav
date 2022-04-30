<template>
  <div>
    <h2 style="margin-bottom: 1rem">Purchase one of those bad boys!!</h2>
    <div class="listing">
      <figure>
        <small
          ><RouterLink :to="{ name: 'cauldron-potion' }"
            >For potions</RouterLink
          ></small
        >
      </figure>
      <figure>
        <small
          ><RouterLink :to="{ name: 'cauldron-boom' }"
            >For explosives</RouterLink
          ></small
        >
      </figure>
    </div>
    <RouterView />
  </div>
</template>

<script>
import { useBreadcrumb } from "@/state.js";
export default {
  name: "Claudron-Index",
  setup() {
    const { routes } = useBreadcrumb();
    return {
      routes,
    };
  },
};
</script>
