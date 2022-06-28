<template>
  <div class="app">
    <nav class="app__nav">
      <RouterLink class="app__nav__link" active-class="-active" to="/">
        Actors
      </RouterLink>
      <RouterLink class="app__nav__link" active-class="-active" to="/favorites">
        Favorites
      </RouterLink>
    </nav>
    <main class="app__main">
      <RouterView v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
          <Component :is="Component" />
        </Transition>
      </RouterView>
    </main>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { store } from "./store";

onMounted(() => {
  const localFavActors = localStorage.getItem("favoriteActors");
  store.favoriteActors = localFavActors ? JSON.parse(localFavActors) : [];
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

body,
html {
  font-family: "Poppins", sans-serif;
  margin: 0;
}

* {
  box-sizing: border-box;
}

.app {
  padding: 0 1rem;
}

.app__nav {
  display: flex;
  gap: 1rem;

  width: 100%;
  margin-left: -1rem;
  margin-right: -1rem;
  padding: 1rem 1rem;
  position: sticky;
  top: 0;
  background: white;
  z-index: 10;
}
.app__nav__link {
  text-decoration: none;
  color: black;

  &.-active {
    color: rgb(255, 166, 0);
    font-weight: bold;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
