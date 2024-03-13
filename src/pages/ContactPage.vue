<script>
    export default {
        data() {
            return {

            };
        },
        methods: {
            goToHomePage() {
                this.$router.push({ name: 'home' });
            }
        },
        mounted() {
            console.log(this.$route);
        }
    }
</script>


<template>
    <div>
        <h1>
            CONTATTI
        </h1>

        <button @click="goToHomePage()">
            Vai alla Home Page
        </button>
    </div>
</template>

<style lang="scss" scoped>
div {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: plum;

    button {
        width: 150px;
    }
}

</style>