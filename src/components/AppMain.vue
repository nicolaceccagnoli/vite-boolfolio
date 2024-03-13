<script >
import axios from 'axios';

    export default {
        data() {
            return {
                // Definisco un array vuoto dove inserirò i risultati dell'API
                projects: []
            };
        },
        methods: {

        },
        created() {
            axios.get('http://127.0.0.1:8000/api/projects')
                .then(res => {
                    console.log(res.data);
                })
        }

    }
</script>

<template>
    <main>
        <!-- Compontente (importata grazie a vue-router) mi consente
        di avere,nper URL diversi, contenuti informativi diversi -->
        <router-view></router-view>
    </main>
</template>

<style lang="scss" scoped>
</style>
