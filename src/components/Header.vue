<template>
    <header>
        <nav>
            <div class="title_container">
                <h2>{{ title }}</h2>
            </div>
            <ul>
                <!--We are using here routes to be able to switch 'Search' and 'All Bears view'-->
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
    
    ul {
        display: flex;
        justify-content: center;
        column-gap: 1rem;
    }

    ul > li {
        display: inline-block;
        font-size: .9rem;
        border-bottom: 2px solid transparent;
        transition: all .5s ease-in-out;
    }

    ul > li:hover {
        border-bottom: 2px solid #2b2e4a;
        
    }

    .router-link {
        text-decoration: none;
        color: #2b2e4a;
    }

    /* Breakpoint */

    @media only screen and (min-width: 768px) {
        ul {
            display: flex;
            justify-content: center;
            column-gap: 1.7rem;
        }
    }

    @media only screen and (min-width: 992px) {
        header {
            width: 100%;
            height: auto;
            padding: 1.7rem 5rem;    
        }
    }
</style>