<template>
    <div class="container" style="padding-left: 100px;">
        <div class="inline-block-div" style="margin-right: 50px;"><v-btn depressed @click="goHome()">취소</v-btn></div>
        <v-dialog
            width="500"
        >
        <template v-slot:activator="{ on, attrs }">
            <v-btn
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
            >
            등록
            </v-btn>
        </template>

        <v-card>
            <v-card-title class="text-h5 grey lighten-2">
            목표 제목 설정
            </v-card-title>

            <v-card-text class="pt-4" style="font-size: 1rem">
                <v-text-field
                    label="목표 제목"
                    hide-details="auto"
                    :value="title"
                    v-model="title"
                ></v-text-field>
            </v-card-text>

            <v-divider></v-divider>
            <v-btn
                color="primary"
                text
                @click="submitGoal()"
            >
                설정
            </v-btn>
            <v-card-actions>
            <v-spacer></v-spacer>
            </v-card-actions>
        </v-card>
        </v-dialog>
    </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    data: () => ({
        title: ''
    }),
    methods: {
      ...mapActions('setGoal', [
        'AC_SET_TITLE',
        'AC_SUBMIT_GOAL',
      ]),
      submitGoal() {
        this.AC_SET_TITLE(this.title);
        this.AC_SUBMIT_GOAL();
        this.$router.push('/');
      },
      goHome() {
          this.$router.push('/');
      }
    }
  }
</script>

<style scoped>
    .inline-block-div {
        display: inline-block;        
    }
</style>