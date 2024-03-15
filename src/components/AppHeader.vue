<script >
    export default {
        data() {
            return {
                links: [
                    {
                        name: 'Home',
                        url: 'home'
                    },                    
                    {
                        name: 'Progetti',
                        url: 'projects.index'
                    },
                    {
                        name: 'Contatti',
                        url: 'contacts'
                    },
                ]
            };
        },
        methods: {

        }

    }
</script>

<template>
    <header>
        <div class="my-container">

            <div>
                LOGO
            </div>

            <nav>
                <ul>
                    <li v-for="link in links">
                        <router-link :to="{ name: link.url }" class="classe_css">
                           <span>{{ link.name }}</span> 
                        </router-link>
                    </li>
                </ul>
            </nav>
        </div>

    </header>
</template>

<style lang="scss" scoped>
header {
    background-color: #5649CD;
    padding: 10px 0;

    .my-container {
        max-width: 1000px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;

        nav {

            ul {
                display: flex;
                list-style: none;
                justify-content: center;
            }

            li {
                margin: 0 10px;
                span {
                    color: #0188AF;
                    text-decoration: none;
                    text-transform: uppercase;
                }

            }
        }
    }

}
</style>
