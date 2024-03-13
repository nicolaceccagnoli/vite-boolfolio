<script >

    export default {
        data() {
            return {
            };
        },
        methods: {

        },
        props: {   
            project: Object,
            api: String
        }

    }
</script>

<template>

        <div class="col-3 single-project">

            <h2 class="text-center text-primary">
                {{ project.title }}
            </h2>

            <h5 class="my-3 text-success">
                Linguaggio: {{ project.type?.title ?? 'NULL' }}
                <!-- Linguaggio: {{ project.type ? project.type.title : 'NULL' }} -->
            </h5>

            <div v-if="project.cover_img != null">
                <img :src="'http://127.0.0.1:8000/storage/' + project.cover_img" :alt="project.title">
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
