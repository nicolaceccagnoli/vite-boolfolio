<script >
import axios from 'axios';
import ProjectCard from './ProjectCard.vue';

    export default {
        data() {
            return {
                // Definisco un array vuoto dove inserirò i risultati dell'API
                projects: []
            };
        },
        components: {
            ProjectCard
        },
        methods: {

        },
        created() {
            axios.get('http://127.0.0.1:8000/api/projects')
                .then(res => {
                    console.log(res.data);

                    this.projects = res.data.results.data;
                })
        }

    }
</script>

<template>

    <main>

        <h1 class="text-center">
            Tutti i Projects
        </h1>

        <div class="row g-0 justify-content-around flex-wrap">
            <ProjectCard v-for="singleProject in projects" :key="singleProject.id" :project="singleProject"/>
        </div>
        
    </main>
    
</template>

<style lang="scss" scoped>
</style>
