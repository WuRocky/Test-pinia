<script setup>
const noteStore = useNoteStore();
const { searchedNotes } = storeToRefs(noteStore);
</script>

<template>
  <div class="noteList">
    <div v-for="note in searchedNotes" class="note" :key="note.id">
      <h2>{{ note.title }}</h2>
      <article>
        <p>{{ note.content }}</p>
      </article>
    </div>
  </div>
</template>

<style scoped>
.noteList {
  margin: 48px 0;
  display: grid;
  row-gap: 48px;
  width: 100%;
}

.note h2 {
  font-weight: normal;
  margin-bottom: 12px;
}

.note article {
  color: hsl(0deg, 0%, 40%);
}
</style>
