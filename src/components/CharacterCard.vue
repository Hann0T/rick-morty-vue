<template>
  <div class="relative">
    <img :src="character.image" :alt="character.name" class="rounded-md w-full" />
    <div
      class="flex item-center justify-around bg-black w-full pl-4 py-4 opacity-80 text-white font-bold rounded-b-md absolute bottom-0"
    >
      <p>{{ character.name }}</p>
      <p class="underline">
        <router-link :to="{ name: 'Character', params: { id: character.id } }">detalles</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CharacterCard",
  props: {
    character: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
