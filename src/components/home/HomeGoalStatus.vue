<template>
  <div class="water-waves mt-5">
    <div class="water-wave1" :style="{top: 100 - (ratio) + '%'}"></div>
    <div class="water-wave2" :style="{top: 100 - (ratio + 5) + '%'}"></div>
    <div class="water-wave3" :style="{top: 100 - (ratio + 10) + '%'}"></div>
    <p class="exercise-info body-2 mt-3 font-weight-black">목표: {{goal}}</p>
    <p class="exercise-info text-h5 font-weight-black test">{{ current }}</p>
    <p class="exercise-info caption">걸음</p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["current", "ratio", "goal"]),
  },
  created: function () {
    this.getCurrentAmount();
  },
  methods: {
    ...mapActions(["getCurrentAmount"]),
  },
};
</script>

<style scoped>
* {
  color: black;
}
.exercise-info {
  position: relative;
  z-index: 1;
}
.water-waves {
  background: #d2eee8;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  /* border: 1px solid lightgray; */
  text-align: center;
  line-height: 50px;
  animation: water-waves linear infinite;
  box-shadow: 20px 20px 20px grey;
}

.water-wave1 {
  position: absolute;
  /* top: 45%; */
  left: -25%;
  background: green;
  opacity: 0.7;
  width: 200%;
  height: 200%;
  border-radius: 40%;
  animation: inherit;
  animation-duration: 5s;
}

.water-wave2 {
  position: absolute;
  /* top: 50%; */
  left: -35%;
  background: greenyellow;
  opacity: 0.5;
  width: 200%;
  height: 200%;
  border-radius: 35%;
  animation: inherit;
  animation-duration: 7s;
}

.water-wave3 {
  position: absolute;
  /* top: 55%; */
  left: -35%;
  background: mintcream;
  opacity: 0.3;
  width: 200%;
  height: 200%;
  border-radius: 33%;
  animation: inherit;
  animation-duration: 11s;
}

@keyframes water-waves {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
