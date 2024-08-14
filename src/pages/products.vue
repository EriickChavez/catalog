<template>
  <v-card class="container cent">
    <v-data-iterator :items="products" :items-per-page="6" :search="search">
      <template #header>
        <v-toolbar class="px-2">
          <v-text-field v-model="search" density="comfortable" hide-details placeholder="Search"
            prepend-inner-icon="mdi-magnify" variant="solo" clearable />
        </v-toolbar>
        <CategoryList />
      </template>
      <template #default="{ items }">
        <v-container class="pa-2" fluid>
          <v-row dense>
            <v-col v-for="item in items" :key="item.title" cols="auto" md="4">
              <v-card class="pb-3" elevation="4" flat>
                <div class="d-flex px-4 pt-4 cent">
                  <v-img class="rounded" :src="item.raw.cover" style="min-width: 330px; max-width: 330px;" />
                </div>

                <v-list-item class="mb-2" :subtitle="item.raw.description">
                  <template #title>
                    <strong class="text-h6 mb-2">{{ item.raw.title }}</strong>
                  </template>
                </v-list-item>

                <div class="d-flex justify-space-between px-4">
                  <v-btn block class="py-5" color="primary" size="small">
                    <div class="d-flex align-center text-caption text-medium-emphasis me-1">
                      <v-icon color="surface" icon="mdi-cart" size="18" start />
                      <v-card-subtitle class="text-h6 text-surface">$ {{ item.raw.price }}</v-card-subtitle>
                    </div>
                  </v-btn>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </template>

      <template #footer="{ page, pageCount, prevPage, nextPage }">
        <div class="d-flex align-center justify-center pa-4">
          <v-btn color="primary" destiny="comofortable" icon="mdi-arrow-left" variant="tonal" :disabled="page === 1"
            @click="prevPage" />
          <div class="mx-2 text-caption">
            Page {{ page }} of {{ pageCount }}
          </div>
          <v-btn color="primary" destiny="comofortable" icon="mdi-arrow-right" variant="tonal"
            :disabled="page === pageCount" @click="nextPage" />
        </div>
      </template>
    </v-data-iterator>
  </v-card>
</template>
<script setup>
  import { ref } from 'vue'

  const search = ref('')
  const products = ref([
    { id: 'cat-1', price: 10.00, title: 'Books', description: 'Toys for children of all ages.', cover: 'https://via.placeholder.com/150/24f355', status: 'inactive' },
    { id: 'cat-2', price: 10.00, title: 'Electronics', description: 'Clothing for all seasons.', cover: 'https://via.placeholder.com/150/24f355', status: 'inactive' },
    { id: 'cat-3', price: 10.00, title: 'Clothing', description: 'Category for all kinds of electronics.', cover: 'https://via.placeholder.com/150/24f355', status: 'inactive' },
    { id: 'cat-4', price: 10.00, title: 'Furniture', description: 'Clothing for all seasons.', cover: 'https://via.placeholder.com/150/24f355', status: 'archived' },
    { id: 'cat-5', price: 10.00, title: 'Electronics', description: 'A wide selection of books.', cover: 'https://via.placeholder.com/150/24f355', status: 'active' },
    { id: 'cat-6', price: 10.00, title: 'Clothing', description: 'Furniture for every room in your house.', cover: 'https://via.placeholder.com/150/24f355', status: 'archived' },
    { id: 'cat-7', price: 10.00, title: 'Furniture', description: 'Toys for children of all ages.', cover: 'https://via.placeholder.com/150/24f355', status: 'active' },
    { id: 'cat-8', price: 10.00, title: 'Books', description: 'Category for all kinds of electronics.', cover: 'https://via.placeholder.com/150/24f355', status: 'archived' },
    { id: 'cat-9', price: 10.00, title: 'Electronics', description: 'A wide selection of books.', cover: 'https://via.placeholder.com/150/24f355', status: 'archived' },
    { id: 'cat-10', price: 10.00, title: 'Toys', description: 'A wide selection of books.', cover: 'https://via.placeholder.com/150/24f355', status: 'inactive' },
  ])
</script>

<style>
.cent {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
