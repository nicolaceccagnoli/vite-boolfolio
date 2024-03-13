<script >

    export default {
        data() {
            return {
            };
        },
        methods: {

        },
        props: {   
            project: Object
        }

    }
</script>

<template>

        <div class="col-3 single-project">

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
    
</template>

<style lang="scss" scoped>
    .single-project {
        border: 2px solid black;
        border-radius: 5px;
        padding: 15px;
        margin: 20px auto;
    }

</style>
