<script setup>
const noteStore = useNoteStore();
</script>

<template>
  <div class="search">
    <input type="text" placeholder="搜尋筆記" v-model="noteStore.searchTerm" />
  </div>
</template>

<style scoped>
.search {
  margin-top: 24px;
  width: 100%;
}
</style>
