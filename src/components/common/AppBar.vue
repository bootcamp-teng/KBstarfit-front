<template>
  <v-app-bar flat app fixed dark color="#EFB775">
    <v-btn icon @click="pushBack">
      <v-icon>mdi-arrow-left-circle</v-icon>
    </v-btn>
    <v-toolbar-title class="font-weight-bold pl-1 my-font-thin" @click="pushHome"
      >STARFIT</v-toolbar-title
    >

    <v-spacer></v-spacer>

    <v-btn v-if="isLoggedIn === false" icon @click="pushLogin">
      <v-icon>mdi-account-key</v-icon>
    </v-btn>

    <v-btn v-else-if="isLoggedIn === true" icon>
      <v-icon>mdi-account-heart</v-icon>
    </v-btn>

    <v-btn icon @click="pushRank">
      <v-icon>mdi-star-face</v-icon>
    </v-btn>
    <v-menu v-if="isLoggedIn === true" offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
        <!-- <v-btn color="primary" dark v-bind="attrs" v-on="on"> Dropdown </v-btn> -->
      </template>
      <v-list>
        <v-list-item>
          <v-btn @click="logoutUser" text style="color: black"
            ><v-icon>mdi-handshake</v-icon>로그아웃</v-btn
          >
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    pushLogin: function () {
      this.$router.push({ name: "Login" });
    },
    ...mapActions(["logoutUser"]),
    logout: function () {
      console.log("로그아웃");
    },
    pushHome: function () {
      this.$router.push({ name: "Home" });
    },
    pushRank: function () {
      this.$router.push({ name: "Rank" });
    },
    pushBack: function () {
      this.$router.go(-1);
    },
  },
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
};
</script>

<style scoped>
* {
  color: white;
}
</style>
