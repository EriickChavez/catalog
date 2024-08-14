<template>
  <div class="pl-10 pr-10 pt-10 pb-10">
    <p class="text-h4" multi-line>Obtenga una cotización o programe una cita</p>
    <span class="text-h6 pb-10 text-grey">Obtenga una cotización o programe una cita</span>
    <form class="pl-5 pr-5 pt-10 pb-10 border rounded-lg" validate-on="submit lazy">
      <div>
        <v-card-subtitle>Nombre</v-card-subtitle>
        <v-text-field v-model="name" :counter="10" label="Name" variant="outlined" />
      </div>
      <div>
        <v-card-subtitle>Email</v-card-subtitle>
        <v-text-field v-model="email" label="E-mail" variant="outlined" />
      </div>
      <div>
        <v-card-subtitle>Numero telefonico</v-card-subtitle>
        <v-text-field v-model="phone" :counter="9" label="Phone Number" variant="outlined" />
      </div>
      <div>
        <v-card-subtitle>Producto o Servicio</v-card-subtitle>
        <v-text-field v-model="service" :counter="9" label="Product/Service" variant="outlined" />
      </div>
      <div>
        <v-card-subtitle>Mensaje</v-card-subtitle>
        <v-text-field v-model="msg" :counter="9" label="Phone Number" variant="outlined" />
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
