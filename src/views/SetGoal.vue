<template>
<div>
  <set-goal-body></set-goal-body>
  <set-goal-reward-description></set-goal-reward-description>
  <set-goal-scrol-list-box></set-goal-scrol-list-box>
  <set-goal-submit></set-goal-submit>
</div>
</template>

<script>
import SetGoalBody from '../components/set-goal/SetGoalBody.vue';
import SetGoalRewardDescription from '../components/set-goal/SetGoalRewardDescription.vue';
import SetGoalSubmit from '../components/set-goal/SetGoalSubmit.vue';
import SetGoalScrolListBox from '../components/set-goal/SetGoalScrolListBox.vue';

export default {
  name: "SetGoal",

  components: {
    SetGoalBody,
    SetGoalRewardDescription,
    SetGoalSubmit,
    SetGoalScrolListBox,
  },
};
</script>
