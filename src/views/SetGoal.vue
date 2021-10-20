<template>
<div>
  <set-goal-body></set-goal-body>
  <reward-description></reward-description>
  <scrol-list-box></scrol-list-box>
  <goal-button></goal-button>
</div>
</template>

<script>
import SetGoalBody from '../components/goal/SetGoalBody.vue';
import RewardDescription from '../components/goal/RewardDescription.vue';
import GoalButton from '../components/goal/GoalButton.vue';
import ScrolListBox from '../components/goal/ScrolListBox.vue';

export default {
  name: "Home",

  components: {
    SetGoalBody,
    RewardDescription,
    GoalButton,
    ScrolListBox,
  },
};
</script>
