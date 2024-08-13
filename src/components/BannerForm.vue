<template>
  <div class="pl-10 pr-10 pt-10 pb-10">
    <v-card-title class="text-h4">Obtenga una cotización o programe una cita</v-card-title>
    <v-card-subtitle class="text-h6 pb-10">Obtenga una cotización o programe una cita</v-card-subtitle>
    <form class="pl-5 pr-5 pt-10 pb-10 border rounded-lg" validate-on="submit lazy">
      <div>
        <h2>Name</h2>
        <v-text-field v-model="name.value" :counter="10" label="Name" variant="outlined" />
      </div>
      <div>
        <h2>Email</h2>
        <v-text-field v-model="email.value" label="E-mail" variant="outlined" />
      </div>
      <div>
        <h2>Phone number</h2>
        <v-text-field v-model="phone.value" :counter="9" label="Phone Number" variant="outlined" />
      </div>
      <div>
        <h2>Phone number</h2>
        <v-text-field v-model="service.value" :counter="9" label="Product/Service" variant="outlined" />
      </div>
      <div>
        <h2>Producto o servicio</h2>
        <v-text-field v-model="msg.value" :counter="9" label="Phone Number" variant="outlined" />
      </div>
      <v-btn block color="success" type="submit"> submit </v-btn>
    </form>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const name = ref('')
  const phone = ref('')
  const email = ref('')
  const service = ref('')
  const msg = ref('')

</script>
