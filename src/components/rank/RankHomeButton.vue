<template>
    <div class="container text-center">
        <v-btn
            depressed
            color="primary"
        >
            <span class="text-h6" @click="goHome()">돌아가기</span>
        </v-btn>
    </div>
</template>

<script>
export default {
    methods: {
        goHome() {
            this.$router.push('/');
        }
    }
}
</script>