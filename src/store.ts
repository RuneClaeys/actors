// store.js
import { reactive } from "vue";
import { Actor } from "./actor.interface";

interface StoreState {
  favoriteActors: Array<Actor>;
}

export const store = reactive<StoreState>({
  favoriteActors: [],
});
