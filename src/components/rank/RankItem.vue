<template>
  <v-row no-gutters>
    <v-col cols="1" align-self="center">
      <span class="caption font-weight-black">{{ user.rank }}</span>
    </v-col>

    <v-col cols="11">
      <v-card hover elevation="5" class="mt-2 mb-2 rounded-card" style='border: 2px solid #EFB775;'>
        <v-row no-gutters>
          <v-col cols="3">
            <v-avatar class="ma-3">
              <img
                alt="Avatar"
                src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
              />
            </v-avatar>
          </v-col>

          <v-col cols="3" align-self="center">
            <span class="body-2 font-weight-black">{{ user.username }}</span>
          </v-col>

          <v-col cols="6" align-self="center">
            <span class="caption">{{ user.exer }} 걸음</span>
            <v-icon v-if="user.id === 1" color="#FFD700">military_tech</v-icon>
            <v-icon v-if="user.id === 2" color="#C0C0C0">military_tech</v-icon>
            <v-icon v-if="user.id === 3" color="#800000">military_tech</v-icon>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    user: Object,
  },
};
</script>

<style scoped>
.rounded-card {
  border-radius: 50px;
}
</style>
