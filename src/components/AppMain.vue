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
            <div class="col-3 single-project" v-for="project in projects" :key="project.id">

                <h2 class="text-center text-primary">
                    {{ project.title }}
                </h2>

               <h5 class="my-3 text-success">
                    Linguaggio: {{ project.type.title }}
               </h5>

               <div class="row">
                    <div class="col-12">
                        Tecnologie: 
                        <span v-for="technology in project.technologies" :key="technology.id" class="badge rounded-pill text-bg-primary">
                            {{ technology.title }}
                        </span>
                    </div>
               </div>
            </div>
        </div>

    </main>
</template>

<style lang="scss" scoped>
    .single-project {
        border: 2px solid black;
        border-radius: 5px;
        padding: 15px;
        margin: 20px auto;
    }
</style>
