<template>
    <section class="search_container">
        <header>
        <div class="slogan_container">
            <h3>Search through Brewdog's expansive back catalogue of beer.</h3>
        </div>
        <form class="search-area" @submit="getBeer">
            <input type="text" v-model="beerInput" name="beer-input" placeholder="Search for beer">
            <input type="submit" value="Get Beer">
        </form>
        </header>
    </section>
    <hr class="line">
    <section class="card_container" v-if="Object.keys(searchedBeer).length != 0">
        <Card class="_card" :id="searchedBeer.id" :imgSrc="searchedBeer.image_url" :name="searchedBeer.name" :tagline="searchedBeer.tagline" :description="searchedBeer.description"/>
    </section>
</template>

<script>
import axios from 'axios';
import Card from '../components/Card';
import Header from '../components/Header';

export default {
    name: 'SearchArea',
    components: {
        Card,
        Header
    },
    data() {    
        return {
            beerInput: "",
            searchedBeer: {},
        }
    },
    methods: {
        async getBeer(e) {
            e.preventDefault();
            //make request
            await axios.get(`https://api.punkapi.com/v2/beers?beer_name=${this.beerInput}`)
                    .then(response => this.searchedBeer = response.data[0])
        },
    }
}
</script>

<style>
    

    /* Breakpoints */
    @media only screen and (min-width: 768px) {
        .card_container {
            width: 85%;
        }

        ._card {
            width: 100%;
        }

        .slogan_container > h3 {
            font-size: 1.43rem;
            margin-bottom: .6rem;
        }
    }

    @media only screen and (min-width: 992px) {
        
        .line {
            margin: 0 auto;
            height: 1px;
            width: 70%;
            background-color: #2b2e4a;
            opacity: .1;
        }
        
        .slogan_container {
        margin: 1rem 0;  
        text-align: center;  
        }
    }

</style>

<style scoped>

    .search-area {
        margin: .6rem 0;  
    }

    .search-area {
    display: flex;
    justify-content: center;
    align-items: center;
    }

    input[type=text] {
        width: 70%;
        padding: 13px 13px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #2b2e4a;
        border-top-left-radius: 2px;
        border-bottom-left-radius: 2px;
        color: #2b2e4a;
    }

    input[type=text]::placeholder {
        font-family: 'Poppins', sans-serif;
        font-size: .7rem;
        opacity: .35;
    }
    
    input[type=submit] {
    width: 30%;
    background-color: #2b2e4a;
    border: none;
    color: white;
    padding: 13px 13px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: .8rem;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    font-family: 'Poppins', sans-serif;
    }

    .search_container {
    margin: .6rem 0;  
    text-align: center;  
    }

    .slogan_container > h3 {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: .4rem;
    }

    .slogan_container > h4 {
    opacity: .8;
    font-size: .9rem;
    }

    .card_container {
            margin: 1.65rem 0;
            width: 75%;
    }
</style>