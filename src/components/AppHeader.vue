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
        <nav>
            <ul>
                <li>
                    <router-link :to="{ name: 'home' }" class="classe_css">
                        Home page
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'about' }" class="classe_css">
                        Chi siamo
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'contact' }" class="classe_css">
                        Contatti
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
nav {
    ul {
        display: flex;
        list-style: none;
        justify-content: center;
    }

    li {
        margin: 0 10px;
    }
}
</style>
