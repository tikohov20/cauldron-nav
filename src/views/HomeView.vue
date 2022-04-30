<template>
  <main>
    <div>
      <RouterLink to="/potions"> Potions 🧪</RouterLink>
      <RouterLink to="/explosives"> Explosives 🧨</RouterLink>
      <RouterLink to="/food"> Food ? 🍔</RouterLink>
    </div>
    <div style="margin-top: 10rem">
      <RouterLink to="/cauldron" style="width: 100%; text-align: center">
        PURCHASE YOUR OWN CAULDRON
      </RouterLink>
    </div>
  </main>
</template>

<style scoped>
a {
  font-size: 1.25rem;
  font-weight: bold;
  padding: 0.5rem;
}

div {
  display: flex;
  justify-content: space-between;
  /* flex-wrap: wrap; */
}
a:not(:last-child) {
  margin-right: 1.25rem;
}
@media only screen and (max-width: 600px) {
  a {
    font-size: 1rem;
  }
  a:not(:last-child) {
    margin-right: .1rem;
  }
}
</style>
