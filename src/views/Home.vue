<template>
  <div class="w-full bg-gray-800">
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 mx-auto lg:w-3/4">
      <CharacterCard v-for="char in data.results" :key="char.id" :character="char" />
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import CharacterCard from "@/components/CharacterCard";

export default {
  name: "Home",
  components: { CharacterCard },
  setup() {
    const data = ref([]);

    const getData = async () => {
      const request = await fetch("https://rickandmortyapi.com/api/character/?page=1");
      const response = await request.json();
      data.value = response;
    };

    onMounted(getData);

    return { data };
  },
};
</script>
