<template>
  <div class="about">
    <h1>This is an 구글피트니스 토큰 page</h1>
  </div>
</template>

<script>
export default {
    created: function() {
        console.log('hihihi');
        console.log(this.$route);
        console.log(this.$route.query.code);

        // const code = this.$route.query.code;
        // const client_id = ;
        // const client_secret =;
        // const redirect_uri= 'http://localhost:8080';
        // const grant_type = 'authorization_code';

        this.$axios.post("https://www.googleapis.com/oauth2/v4/token")
    }
}
</script>
