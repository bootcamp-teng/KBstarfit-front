<template>
  <v-footer
    color="#EFB775"
    padless
    class="mt-5"
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-col
        class="#EFB775 py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>STARFIT</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
    }),
  }
</script>
