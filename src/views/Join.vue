<template>
  <div class="about">
    <character-card></character-card>
    <join-form></join-form>
  </div>
</template>

<script>
import CharacterCard from "../components/auth/CharacterCard.vue";
import JoinForm from "../components/auth/JoinForm.vue";
export default {
  data() {
    return {};
  },
  components: {
    CharacterCard,
    JoinForm,
  },
};
</script>
