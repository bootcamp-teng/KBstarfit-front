<template>
  <v-card tile color="#f9f4ed" class="text-center">
    <v-col>
      <v-row justify="center">
        <img
          class="pa-2"
          width="50%"
          src="../../assets/캐릭터2.png"
          alt="캐릭터"
        />
      </v-row>
      <v-row class="ml-5 mb-2 body-2 font-weight-black"
        >{{title}}</v-row
      >
    </v-col>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      title: '로그인'
    }
  },
  created: function() {
    if(this.$route.name === 'Login')  this.title = '로그인';
    else  this.title = '회원가입';
  }
}
</script>