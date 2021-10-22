<template>
  <div class="about">
    <character-card></character-card>
    <login-form></login-form>
  </div>
</template>

<script>
import CharacterCard from '../components/auth/CharacterCard.vue';
import LoginForm from '../components/auth/LoginForm.vue';

export default ({
    data() {
        return {
            
        }
    },
    components: {
        CharacterCard,
        LoginForm
    }
})
</script>

<style scoped>
* {
    background: #f9f4ed;
}
</style>
