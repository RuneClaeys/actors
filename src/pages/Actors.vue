<template>
  <div class="actors">
    <p v-if="loading">Loading...</p>
    <ActorsList :actors="actors" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Actor } from "../actor.interface";
import ActorsList from "../components/ActorsList.vue";

const loading = ref(false);
const actors = ref<Array<Actor>>([]);

onMounted(async () => {
  loading.value = true;
  actors.value = await fetch("https://api.tvmaze.com/people")
    .then((res) => res.json())
    .finally(() => (loading.value = false));
});
</script>
