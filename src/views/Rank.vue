<template>
<div>
    <rank-my-rank></rank-my-rank>
    <rank-title></rank-title>
    <rank-item-list></rank-item-list>
    <rank-home-button></rank-home-button>
</div>
</template>

<script>
import RankTitle from '../components/rank/RankTitle.vue';
import RankItemList from '../components/rank/RankItemList.vue';
import RankMyRank from '../components/rank/RankMyRank.vue';
import RankHomeButton from '../components/rank/RankHomeButton.vue';

export default {
  name: "Rank",

  components: {
      RankTitle,
      RankItemList,
      RankMyRank,
      RankHomeButton,
  },
};
</script>
