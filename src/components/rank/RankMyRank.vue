<template>
  <div class="container" style="width: 350px; height: 100px; margin-bottom: 16px;">
    <span class="pl-3 ml-5 mr-5 mt-2 text-h6">내 랭킹</span>
    <v-card hover elevation="5" class="pl-3 ml-5 mr-5 mt-2" color="#6782D4" dark>
        <v-card-title class="body-1"> {{ me.rank }}등 {{ me.username }} </v-card-title>
        <v-card-subtitle class="body-2 pb-2">
        {{ me.exer }}
        </v-card-subtitle>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters('rank', [
            'GE_ME',
        ]),
        me() { return this.GE_ME; },
    },
}
</script>
