<template>
    <div class="container" style="padding-left: 100px;">
        <div class="inline-block-div" style="margin-right: 50px;"><v-btn depressed>취소</v-btn></div>
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
                ></v-text-field>
            </v-card-text>

            <v-divider></v-divider>
            <v-btn
                color="primary"
                text
                @click="test()"
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
  import { mapGetters } from 'vuex';

  export default {
    data: () => ({
        title: ''
    }),
    computed: {
      ...mapGetters('goal', [
        'GE_DAY',
        'GE_STEPS',
        'GE_KINDS'
      ]),
      d() {
        return this.GE_DAY;
      },
      s() {
        return this.GE_STEPS; 
      },
      k() {
        return this.GE_KINDS;
      },
    },
    methods: {
        test() {
            console.log(this.title);
        }
    }
  }
</script>

<style scoped>
    .inline-block-div {
        display: inline-block;        
    }
</style>