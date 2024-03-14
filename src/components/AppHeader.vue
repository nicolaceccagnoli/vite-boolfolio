<script >
    export default {
        data() {
            return {

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
                    <li>
                        <router-link :to="{ name: 'home' }" class="classe_css">
                           <span>Home</span> 
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'projects.index' }" class="classe_css">
                            <span>Blog</span>  
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
