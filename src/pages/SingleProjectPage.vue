<script >
import axios from 'axios';
    export default {
        data() {
            return {
                project: null
            };
        },
        methods: {
            
            getProject() {
                axios.get('http://127.0.0.1:8000/api/projects/' + this.$route.params.slug)
                    .then(res => {
                        console.log(res.data);

                        // Se la chiamata ha buon fine
                        if (res.data.success) {
                            // Si vedrà il singolo progetto
                            this.project = res.data.results;
                        } else {
                            // Altrimenti restituiamo la pagina d'errore
                            this.$router.push({ name: 'not-found' });
                        }
                    })

            },

        },
        created() {
            this.getProject();
        }
    }
</script>

<template>

        <div v-if="project != null" class="col-3 single-project">

            <h2 class="text-center text-primary">
                {{ project.title }}
            </h2>

            <h5 class="my-3 text-success">
                Linguaggio: {{ project.type?.title ?? 'NULL' }}
                <!-- Linguaggio: {{ project.type ? project.type.title : 'NULL' }} -->
            </h5>

            <div v-if="project.cover_img != null">
                <img :src="project.full_cover_img" :alt="project.title">
            </div>

            <div class="row">
                <div class="col-12">
                    Tecnologie: 
                    <span v-for="technology in project.technologies" :key="technology.id" class="badge rounded-pill text-bg-primary">
                        {{ technology.title }}
                    </span>
                </div>
            </div>
        </div>
    
</template>

<style lang="scss" scoped>
    .single-project {
        border: 2px solid black;
        border-radius: 5px;
        padding: 15px;
        margin: 20px auto;
        height: 400px;

        img {
            width: 100%;
        }
    }

</style>
