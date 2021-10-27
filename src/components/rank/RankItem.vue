<template>
  <v-card hover elevation="5" class="pl-3 ml-5 mr-5 mt-2" color="#EF7880" dark>
    <v-card-title class="body-1">
      {{ user.rank }}등 {{ user.username }} 
      <v-icon v-if="user.id === 1" color="#FFD700">military_tech</v-icon>
      <v-icon v-if="user.id === 2" color="#C0C0C0">military_tech</v-icon>
      <v-icon v-if="user.id === 3" color="#800000">military_tech</v-icon>
    </v-card-title>
    <v-card-subtitle class="body-2 pb-2">
      {{ user.exer }}
    </v-card-subtitle>
  </v-card>
</template>

<script>
export default {
    props: {
        user: Object
    },
}
</script>