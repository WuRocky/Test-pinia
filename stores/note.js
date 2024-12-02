
export const useNoteStore = defineStore("notes", () => {
  const notes = ref([
    {
      id: 1,
      title: "Pinia 學習紀錄-1",
      content:
        "這是 Pinia 學習記錄-1",
    },
    {
      id: 2,
      title: "Nuxt 學習紀錄-2",
      content:
        "這是 Nuxt 學習記錄",
    },
    {
      id: 3,
      title: "Vue 學習記錄-3",
      content:
        "這是 Vue 學習記錄-3",
    },
    {
      id: 4,
      title: "JavaScript 學習記錄",
      content:
        "這是 JavaScript 學習記錄",
    },
  ]);

  const searchTerm = ref("");

  const searchedNotes = computed(() => {
    if (searchTerm.value === "") {
      return notes.value;
    } else {
      return notes.value.filter((note) => {
        return note.title.includes(searchTerm.value);
      });
    }
  });

  async function addNote(title, content) {
    setTimeout(() => {
      notes.value.push({
        id: notes.value.length + 1,
        title,
        content,
      });
    }, 2000);
    searchTerm.value = "";
  }

  return {
    notes,
    addNote,
    searchTerm,
    searchedNotes,
  };
});
