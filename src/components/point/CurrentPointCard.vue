<template>
  <div class="spacing-playground ma-4">
    <v-card  color="#EF7880"  dark>
      <v-card-title class="spacing-playground pb-1">
        <p class="text-h6 spacing-playground mb-1">마안재님의 현재 잔여 포인트: </p>
        <p class="text-h4 spacing-playground mb-0">5700</p>
      </v-card-title>
      <v-card-actions>
        <v-btn text >
          포인트로 혜택 받으러 가기 💰 >
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
  export default {
    data: () => ({
      loading: false,
      selection: 1,
    }),

    methods: {
      goBenefitPage () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    },
  }
</script>
