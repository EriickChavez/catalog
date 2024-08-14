<template>
  <v-app-bar color="background" density="compact" sticky>
    <template #prepend>
      <v-avatar :image="image" size="30" />
      <v-app-bar-title class="ml-2">Photos</v-app-bar-title>
    </template>

    <div v-for="page in pages" :key="page.id">
      <router-link :to="{ name: page.route }">
        <div class="ml-5 mr-5 pl-5 pr-5">
          {{ page.text }}
        </div>
      </router-link>
    </div>
  </v-app-bar>
</template>

<script setup>
  import { useAppStore } from '@/stores/app'
  import { ref } from 'vue'

  const appStore = useAppStore()
  const image = ref(appStore.configuration.navbar.image)
  const pages = ref(appStore.configuration.navbar.pages)

</script>
