<template>
  <div class="px-4 pt-5 w-screen h-screen bg-gray-800">
    <div
      class="max-w-2xl mx-auto bg-gray-800 rounded-md p-5 text-white flex gap-4 justify-around items-center shadow-lg shadow-sky-500"
    >
      <div class="mr-auto">
        <img class="rounded-md" :src="character.image" :alt="character.name" />
      </div>
      <div>
        <h2 class="text-2xl">{{ character.name }}</h2>
        <p>{{ character.species }}</p>
        <p>{{ character.gender }}</p>
      </div>
    </div>
    <router-link
      to="/"
      class="top-5 relative left-2/4 translate-x-2/4 rounded-md px-4 py-2 text-lg text-white bg-cyan-500"
    >
      Back
    </router-link>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "CharacterDetail",
  setup() {
    const character = ref({});
    const route = useRoute();
    const id = route.params.id;

    const getData = async () => {
      const request = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
      const response = await request.json();
      character.value = response;
    };

    onMounted(getData);

    return { character };
  },
};
</script>
