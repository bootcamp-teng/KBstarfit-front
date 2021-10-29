<template>
    <div class="container">
        <v-row
            no-gutters
            style="margin-bottom: 50px;"
        >
            <v-col
                cols="12"
                style="text-align: center;"
            >
                <span class="lg-text" style="font-weight: 900">포인트 활용법</span>
            </v-col>
        </v-row>
        <v-row
            no-gutters
        >
            <v-col
                cols="12"
            >
                <span class="m-text" style="font-weight: 900;">적금으로 혜택받기</span>
            </v-col>
        </v-row>
        <v-row
            no-gutters
            style="margin-bottom: 50px;"
        >
            <v-col
                cols="12"
                style="text-align: center;"
            >
                <v-card
                    color="#F07880"
                    dark
                    height="150px"
                    style="padding-top: 40px;"
                >
                    <span class="m-text" style="font-weight: bold;">KB국민은행의 "스타핏 적금"과<br> 함께 높은 이율을 경험하세요</span>
                </v-card>
            </v-col>
        </v-row>
        <v-row
            no-gutters
        >
            <v-col
                cols="12"
            >
                <span class="m-text" style="font-weight: 900;">현금으로 혜택받기</span>
            </v-col>
        </v-row>
        <v-row
            no-gutters
            style="margin-bottom: 50px;"
        >
            <v-col
                cols="12"
                style="text-align: center;"
            >
                <v-card
                    color="#4C8A90"
                    dark
                    height="150px"
                    style="padding-top: 40px;"
                >
                    <span class="m-text" style="font-weight: bold;">현금처럼 사용가능한 포인트리로<br /> 교환해서 사용할 수 있어요</span>
                </v-card>
            </v-col>
        </v-row>
        <v-row
            no-gutters
        >
            <v-col
                cols="12"
                style="text-align: right;"
            >
                <v-btn
                    color="primary"
                    class="m-text"
                    style="font-weight: 900;"
                    @click="goSetGoal()"
                >
                    확인
                </v-btn>
            </v-col>
        </v-row>
        
        
    </div>
</template>

<script>
  export default {
    methods: {
        goSetGoal () {
            this.$router.push('/setGoal')
        }
    }
  }
</script>

<style scoped>
    .m-text {
        font-size: 1.3rem;
    }

    .lg-text {
        font-size: 1.7rem;
    }
</style>