<template>
  <button
    class="flex gap-x-4 rounded-md px-3 py-2 border-2 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600"
    @click="addLikes"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="text-pink-500"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path
        d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"
      ></path>
    </svg>
    <span class="text-xl font-bold text-white"
      >{{ likes }} likes! {{ buttonFace }}</span
    >
  </button>
</template>

<script lang="ts">
// import { ref } from 'vue';

export default {
  data() {
    return {
      likes: 0,
    };
  },
  computed: {
    buttonFace(): string {
      return this.likes == 0 ? '😿' : this.likes >= 5 ? '😻' : '😸';
    },
  },
  methods: {
    addLikes(): void {
      this.likes++;
    },
  },
};
</script>
