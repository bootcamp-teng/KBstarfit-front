<template>
  <v-app style="background: #FFFAF6">
    <app-bar></app-bar>
    <v-main>
    <!-- <success-alert></success-alert> -->
      <router-view />
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import AppBar from './components/common/AppBar.vue';
import Footer from './components/common/Footer.vue';
// import SuccessAlert from './components/alert/SuccessAlert.vue';

export default {
  name: "App",

  data: () => ({
    //
  }),
  components: {
    AppBar,
    Footer,
    // SuccessAlert
  }
};
</script>

<style>
* {
  font-family: 'Jua', sans-serif;
}

.my-font-thin {
@font-face {
    font-family: 'ROKAMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2104@1.1/ROKAMedium.woff') format('truetype');
    font-weight: normal;
    font-style: normal;
}
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