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

.maincolor {
  background: #EFB775;
}

.point-color-pink {
  background: #EF7880;
}

.point-color-green {
  background: #4B8B90;
}

.point-color-blue {
  background: #6782D4;
}

.light-blue {
  background: #D2EEE8;
}

.light-pink {
  background: #FCE4E4;
}

</style>