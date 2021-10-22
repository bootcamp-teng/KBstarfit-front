<template>
<div>
  <current-point-card></current-point-card>
  <point-history-card></point-history-card>
</div>
</template>

<script>
import CurrentPointCard from '../components/point/CurrentPointCard.vue';
import PointHistoryCard from '../components/point/PointHistoryCard.vue';

export default {
  name: "PointHistory",

  components: {
    CurrentPointCard,
    PointHistoryCard,
  },
};
</script>
