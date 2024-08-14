<template>
  <div class="scroll-container">
    <div class="scrollable-row">
      <div v-for="c in chipContent" :key="c.id" class="d-flex">
        <div @click="selected(c.id)">
          <v-chip :closable="c.isClosable" disabled> {{ c.name }} </v-chip>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  const chipContent = ref([
    { id: 1, name: 'Electronics', isClosable: false },
    { id: 2, name: 'Clothing', isClosable: false },
    { id: 3, name: 'Books', isClosable: false },
    { id: 4, name: 'Sports', isClosable: false },
    { id: 5, name: 'Grocery', isClosable: false },
  ])

  const selected = (id: number) => {
    chipContent.value = chipContent.value.map(c => {
      if (c.id === id) {
        c.isClosable = !c.isClosable
        return c
      }
      return c
    })
  }
</script>

<style scoped>
.scroll-container {
  width: 100%;
  overflow-x: auto;
}

.scrollable-row {
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;
  padding: 10px;
}

.scrollable-row::-webkit-scrollbar {
  height: 8px;
}

.scrollable-row::-webkit-scrollbar-thumb {
  background-color: #ff0000;
  border-radius: 4px;
}

.scrollable-row::-webkit-scrollbar-thumb:hover {
  background-color: #0004ff;
}
</style>
