<template>
  <v-app style="background: #FBF2DD">
    <app-bar></app-bar>
    <v-main>
      <router-view />
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import AppBar from './components/common/AppBar.vue';
import Footer from './components/common/Footer.vue';

export default {
  name: "App",

  data: () => ({
    //
  }),
  components: {
    AppBar,
    Footer
  }
};
</script>

<style>
* {
  font-family: 'Nanum Gothic', sans-serif;
}
</style>