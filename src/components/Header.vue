<template>
    <header>
        <nav>
            <div class="slogan_container">
                <h2>{{ title }}</h2>
            </div>
            <ul>
                <li>
                    <router-link to="/" class="router-link">Search</router-link>
                </li>
                <li>
                    <router-link to="/all" class="router-link">All Beers</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: "Header",
    props: {
        title: {
            type: String
        }
    }
}
</script>

<style>
    ul {
        list-style-type: none;
    }
</style>

<style scoped>
    header {
        width: 100%;
        height: auto;
        padding: 1rem 0 1.7rem 0;    
    }

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    ul > li {
        display: inline-block;
        font-size: .9rem;
    }

    ul > li:nth-last-child(1) {
        padding-left: 1.1rem
    }

    .router-link {
        text-decoration: none;
        color: #2b2e4a;
    }
</style>