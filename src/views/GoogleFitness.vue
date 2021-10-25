<template>
  <div class="about">
    <h1>This is an 구글피트니스 토큰 page</h1>
  </div>
</template>

<script>
export default {
    created: function() {
        console.log(this.$route);
        console.log(this.$route.query.code);

        const code = this.$route.query.code;
        const client_id = '515071488860-s2aoiepptpuhc5tkj18qj763iq1b1lf9.apps.googleusercontent.com';
        const client_secret = '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';
        const redirect_uri= 'http://localhost:8080/auth/google/callback';
        const grant_type = 'authorization_code';
        const access_type = 'offline';
        const approval_prompt = "force"

        this.$axios.post(`https://www.googleapis.com/oauth2/v4/token?code=${code}&client_id=${client_id}&client_secret=${client_secret}&redirect_uri=${redirect_uri}&grant_type=${grant_type}&access_type=${access_type}&approval_prompt=${approval_prompt}`)
        .then(({data}) => {
            console.log(data);
            this.$cookies.set('fit-access', data['access_token']);
            this.$cookies.set('fit-refresh', data['refresh_token']);
            this.$router.push({name: 'Home'});
        })
        .catch((err) => {
            console.log(err);
        })
    }
}
</script>
