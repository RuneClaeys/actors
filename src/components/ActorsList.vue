<template>
  <TransitionGroup tag="ul" class="actors-list" name="list">
    <ActorsListItem
      v-for="actor in actors"
      :key="actor.id"
      :actor="actor"
      class="actors-list__item"
    />
  </TransitionGroup>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { Actor } from "../actor.interface";
import ActorsListItem from "./ActorsListItem.vue";

defineProps({
  actors: { type: Array as PropType<Array<Actor>>, default: () => [] },
});
</script>

<style scoped>
.actors-list {
  display: flex;
  flex-wrap: wrap;

  gap: 2rem;
  padding: 0;
  margin: 0;
}

.actors-list__item {
  width: 220px;
  height: 250px;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
</style>
