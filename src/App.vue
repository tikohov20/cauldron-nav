<script setup>
import { RouterView } from "vue-router";
import BreadCrumb from "@/components/BreadCrumb.vue";
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/cauldron.jpg"
      width="125"
      height="125"
    />
    <h2>What are we going to brew ? 🤔</h2>
    <div>
      <BreadCrumb />
    </div>
  </header>

  <RouterView />
</template>

<style>
@import "@/assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}
@media only screen and (max-width: 600px) {
  #app {
    padding: 0.75rem;
  }
}

header {
  display: flex;
  flex-direction: column;
}
a {
  text-decoration: none;
  color: rgb(71, 5, 38);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: rgba(71, 5, 38, 0.192);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

body {
  display: flex;
}

header {
  display: flex;
  place-items: center;
  margin-bottom: 3rem;
}

header .wrapper {
  display: flex;
  place-items: flex-start;
  flex-wrap: wrap;
}

.logo {
  margin: 0 2rem 0 0;
}

nav {
  text-align: left;
  margin-left: -1rem;
  font-size: 1rem;

  padding: 1rem 0;
  margin-top: 1rem;
}

.listing {
  display: flex;
}
.listing figure:not(:last-child) {
  margin-right: 1rem;
}
.listing figure {
  width: 128px;
  display: flex;
  flex-direction: column;
}
</style>
