<template>
  <div class="spacing-playground ma-4">
    <v-card  color="#EF7880"  dark>
      <v-card-title class="spacing-playground pb-1">
        <p class="text-h6 spacing-playground mb-1">마안재님의 현재 잔여 포인트: </p>
        <p class="text-h4 spacing-playground mb-0">5700</p>
      </v-card-title>
      <v-card-actions>
        
      </v-card-actions>
    </v-card>
    <v-btn
      color="primary"
      class="mt-2"
      dark
      @click="dialog2 = true"
    >
      포인트로 혜택 받기 💰
    </v-btn>
    <v-dialog
        v-model="dialog2"
        max-width="500px"
      >
        <v-card>
          <v-card-title>
            Dialog 2
          </v-card-title>
          <v-card-text>
            
              Open Dialog 3
            <v-select
              :items="select"
              label="A Select List"
              item-value="text"
            ></v-select>
          </v-card-text>
          <v-card-actions>
            <v-btn
              color="primary"
              text
              @click="dialog2 = false"
            >
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
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
