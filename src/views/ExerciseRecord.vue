<template>
  <div class="about">
    <h1>This is an 운동기록 page</h1>
  </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    created: function() {
        console.log(this.$route);
    },
    watch: {
        $route: function (to, from) {
            console.log(to + "에서 " + from + "으로 이동");
        }
    }
}
</script>