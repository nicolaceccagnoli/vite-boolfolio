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
                lastPage: 5,
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
            },
            goToPage(pageNumber) {
                this.getProjects(pageNumber);
            }
        },
        created() {
            this.getProjects(this.currentPage);
        }

    }
</script>

<template>

    <h1 class="text-center my-3">
        Tutti i Projects
    </h1>

    <div class="row g-0">
        
        <ProjectCard v-for="singleProject in projects" :key="singleProject.id" :project="singleProject" />

        <nav class="d-flex justify-content-center mt-3">
            <ul class="my-pagination list-unstyled d-flex">
                <li class="my-page-item me-3">
                    <button class="my-page-link" @click="prevPage()" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </button>
                </li>
                <li class="my-page-item">
                    <button v-for="pageNumber in lastPage" @click="goToPage(pageNumber)" class="my-page-link d-inline-block"
                    :class="(pageNumber == currentPage) ? 'active' : ''">
                        <span aria-hidden="true">{{ pageNumber }}</span>
                    </button>
                </li>
                <li class="my-page-item ms-3">
                    <button class="my-page-link" @click="nextPage()" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </button>
                </li>
            </ul>
        </nav>

    </div>


</template>

<style lang="scss" scoped>
    nav {
        ul {
            li {
                button {
                    background-color: white;
                    border: none;
                    padding: 16px;
                    font-weight: bold;
                }

                & .active{
                    border-bottom: 2px solid #5649CD;
                }
            }
        }
    }
</style>
