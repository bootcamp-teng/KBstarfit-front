<template>
  <v-card tile color="#EFB775">
    <v-row no-gutters>
      <v-col cols="6" align-self="center" align="center">
        <v-progress-circular
          :rotate="360"
          :size="100"
          :width="7"
          :value="ratio"
          color="#D2EEE8"
          class="ma-2"
        >
          <img
            class="pa-2"
            width="70%"
            :src="character[user.characterId - 1][0]"
            alt="캐릭터"
          />
        </v-progress-circular>
      </v-col>
      <v-col cols="6" align-self="center">
        <v-card-title class="pa-0">
          <p class="font-weight-black jello-horizontal" style="font-size: medium">{{user.name}}</p>
          <p class="" style="font-size: small;">님</p>
        </v-card-title>
        <v-card-subtitle class="pa-0" style="font-size: small"
          >오늘도 건강한 하루 보내세요🏋🏻‍♀️</v-card-subtitle
        >
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  data() {
    return {};
  },
  computed: {...mapGetters(['ratio','user', 'character'])},
};
</script>

<style scoped>
.jello-horizontal {
  -webkit-animation: jello-horizontal 0.9s both;
  animation: jello-horizontal 0.9s both;
}

@-webkit-keyframes jello-horizontal {
  0% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
    transform: scale3d(1.25, 0.75, 1);
  }
  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
    transform: scale3d(0.75, 1.25, 1);
  }
  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
    transform: scale3d(1.15, 0.85, 1);
  }
  65% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
    transform: scale3d(0.95, 1.05, 1);
  }
  75% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
    transform: scale3d(1.05, 0.95, 1);
  }
  100% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
@keyframes jello-horizontal {
  0% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
    transform: scale3d(1.25, 0.75, 1);
  }
  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
    transform: scale3d(0.75, 1.25, 1);
  }
  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
    transform: scale3d(1.15, 0.85, 1);
  }
  65% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
    transform: scale3d(0.95, 1.05, 1);
  }
  75% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
    transform: scale3d(1.05, 0.95, 1);
  }
  100% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

</style>
