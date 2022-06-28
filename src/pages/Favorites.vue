<template>
  <div class="favorites">
    <ActorsList :actors="favoriteActors" />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import ActorsList from "../components/ActorsList.vue";
import { store } from "../store";

const favoriteActors = computed(() => store.favoriteActors);
</script>
