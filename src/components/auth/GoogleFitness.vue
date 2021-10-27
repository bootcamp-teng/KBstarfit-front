<template>
  <v-btn class="mx-2" fab dark small color="#EFB775" :href="`https://accounts.google.com/o/oauth2/v2/auth?client_id=${client_id}&response_type=${response_type}&redirect_uri=${redirect_uri1}&scope=${scope}&access_type=${access_type}&approval_prompt=${approval_prompt}`">
    <v-icon dark>mdi-google-fit</v-icon>
  </v-btn>
</template>

<script>
export default {
  data() {
    return {
      client_id:
        "515071488860-s2aoiepptpuhc5tkj18qj763iq1b1lf9.apps.googleusercontent.com",
      redirect_uri1: "http://teng.169.56.174.139.nip.io/auth/google/callback",
      redirect_uri2: "http://localhost:8080/auth/google/callback",
      response_type: "code",
      scope: "https://www.googleapis.com/auth/fitness.activity.read",
      access_type: "offline",
      approval_prompt: "force",
    };
  },
};
</script>
