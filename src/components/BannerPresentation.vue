<template>
  <v-row class="container d-none d-md-flex" :style="{ backgroundColor: realBanner?.background }">
    <v-col class="cent" cols="6">
      <div>
        <v-card-title class="text-h3 text-md-h3 text-lg-h3 text-left" :style="{ color: realBanner?.color }">
          {{ realBanner?.title }}
        </v-card-title>
        <v-card-text class="pre-line-text text-h6 text-md-h6 text-lg-h5 text-left" :style="{ color: realBanner?.color }">
          {{ description }}
        </v-card-text>
      </div>
    </v-col>
    <v-col class="cent" cols="6">
      <div>
        <v-img :src="realBanner?.img" style="width: 450px; height: 450px" />
      </div>
    </v-col>
  </v-row>
</template>

<script setup>
  import { ref } from 'vue'
  import { useAppStore } from '@/stores/app'
  const appStore = useAppStore()

  const props = defineProps({
    screen: String,
  })

  const banners = appStore.configuration.banner

  const realBanner = ref(banners.find(
    b => b.screen.includes(props.screen)
  ))

  const description = ref(realBanner?.value.description.match(/.{1,40}/g).join('\n'))
</script>

<style>
.container {
  height: 60vh;
}
.pre-line-text {
  white-space: pre-line;
}
.cent {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
