<template>
  <div class="pl-5 pr-5 pt-10 pb-10 mt-5 mb-5 mr-5 ml-5">
    <h1 class="text-center">¿Qué Ofrecemos?</h1>
    <p class="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae justo nec
      libero vehicula fringilla. Curabitur at malesuada lacus</p>
    <div class="pl-5 pr-5 pt-10 pb-10 mt-5 mb-5 mr-5 ml-5">
      <v-row class="cent">
        <v-col v-for="item in services" :key="item.id" class="col-md-6 col-sm-12" cols="12" sm="12" md="3" >
          <v-card :style="{ backgroundColor: item.background, color: item.color }" :text="item.description" :title="item.title" />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { useAppStore } from '@/stores/app'
  const appStore = useAppStore()

  const services = ref(appStore.configuration.services)
</script>

<style>
.cent {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
