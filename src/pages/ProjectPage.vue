<script >
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';
import { RouterView } from 'vue-router';

    export default {
        data() {
            return {
                // Definisco un array vuoto dove inserirò i risultati dell'API
                projects: [],
                // Dichiaro il valore della pagina corrente
                currentPage: 1,
                // Dichiaro il valore dell'ultima pagina
                lastPage: 5
            };
        },
        components: {
    ProjectCard,
    RouterView
},
        methods: {
            getProjects(page) {
                axios.get('http://127.0.0.1:8000/api/projects', {
                        params: {
                            page
                        }
                    })
                    .then(res => {
                        console.log(res.data);

                        this.projects = res.data.results.data;
                        this.currentPage = res.data.results.current_page;
                        this.lastPage = res.data.results.last_page;
                    })
            },
            nextPage() {
                if (this.currentPage < this.lastPage) {

                    this.currentPage++;

                    console.log('currentPage: ', this.currentPage);

                    this.getProjects(this.currentPage);
                }
            },
            prevPage() {
                if (this.currentPage > 1) {
                     this.getProjects(--this.currentPage);
                }
            }

        },
        created() {
            this.getProjects(this.currentPage);
        }

    }
</script>

<template>

    <main>

        <h1 class="text-center">
            Tutti i Projects
        </h1>

        <h3>
            Pagina Corrente: {{ currentPage }} | Ultima pagina: {{ lastPage }}
        </h3>

        <div class="row g-0 justify-content-around flex-wrap">
            <ProjectCard v-for="singleProject in projects" :key="singleProject.id" :project="singleProject" />
        </div>

        <nav>

            <ul class="pagination">
                <li class="page-item">
                    <button class="page-link" @click="prevPage()" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </button>
                </li>
                <li class="page-item">
                    <button class="page-link" @click="nextPage()" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </button>
                </li>
            </ul>
        </nav>

    </main>
    
</template>

<style lang="scss" scoped>
</style>
