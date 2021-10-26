<template>
  <div class="container" style="padding-top: 0; width: 350px; height: 330px; overflow: scroll; margin-bottom: 10px;">
    <rank-item v-for="user in users" :key="user.id" :user="user"></rank-item>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import RankItem from './RankItem.vue';

export default {
    mounted: function() {
      this.$store.dispatch('rank/AC_GET_USERS_AND_ME');
    },
    computed: {
        ...mapGetters('rank', [
            'GE_USERS',
        ]),
        users() { return this.GE_USERS; },
    },
    components: {
        RankItem,
    }
}
</script>
