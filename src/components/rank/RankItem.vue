<template>
  <v-card hover elevation="5" class="pl-3 ml-5 mr-5 mt-2" color="#EF7880" dark>
    <v-card-title class="body-1"> {{ user.username }} </v-card-title>
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