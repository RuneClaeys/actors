<template>
  <li class="actors-list-item">
    <img
      :src="actor?.image?.medium"
      class="actors-list-item__picture"
      alt="N/A"
    />
    <strong class="actors-list-item__name">{{ actor.name }}</strong>
    <p class="actors-list-item__birthday">{{ actor.birthday }}</p>
    <p class="actors-list-item__country">{{ actor?.country?.name }}</p>

    <button
      :class="[
        'actors-list-item__fav-button',
        { '-favorite': !!favoriteActors.find((fa) => fa.id === actor.id) },
      ]"
      @click="toggleFavoriteActor(actor)"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
        <path
          d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"
        />
      </svg>
    </button>
  </li>
</template>

<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { PropType } from "vue";
import { Actor } from "../actor.interface";
import { store } from "../store";

defineProps({
  actor: { type: Object as PropType<Actor>, default: null },
});

const favoriteActors = computed(() => store.favoriteActors || []);

function toggleFavoriteActor(actor: Actor) {
  const index = favoriteActors.value.findIndex((fa) => fa.id === actor.id);
  if (index > -1) store.favoriteActors.splice(index, 1);
  else store.favoriteActors.push(actor);

  localStorage.setItem("favoriteActors", JSON.stringify(store.favoriteActors));
}
</script>

<style lang="scss" scoped>
.actors-list-item {
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1rem;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  gap: 0.5rem;

  position: relative;
}

.actors-list-item__picture {
  height: 60px;
  width: 60px;
  object-fit: cover;
  border-radius: 30px;
}

.actors-list-item__name {
  font-size: 1rem;
  font-weight: bold;
}
.actors-list-item__birthday {
  margin: 0;
}

.actors-list-item__country {
  margin: 0;
}

.actors-list-item__fav-button {
  padding: 0;
  border: none;
  background-color: transparent;

  position: absolute;
  top: 0.5rem;
  right: 0.5rem;

  cursor: pointer;

  svg {
    height: 25px;
    fill: rgb(194, 194, 194);
  }

  &.-favorite {
    svg {
      fill: rgb(255, 166, 0);
    }
  }
}
</style>
