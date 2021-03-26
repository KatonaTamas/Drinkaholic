<template>
    <header>
        <div class="slogan_container">
            <h3>There you can see all of Brewdog's beer</h3>
        </div>
    </header>
    <hr class="line">
        <div class="all-cards_container">
            <div class="card_container" v-for="beer in allBeer" :key="beer.id">
                <Card class="__card" :id="beer.id" :imgSrc="beer.image_url" :name="beer.name" :tagline="beer.tagline" :description="beer.description"/>
            </div>
        </div>
</template>
<script>

import Card from '../components/Card.vue';

export default {
    name: "AllBeers",
    components: {
        Card
    },
    data() {
        return {
            allBeer: []
        }
    },
    mounted: async function() {

        try {

        } catch(error) {
            if(error.response) {
                console.alert(`An error has occured - : ${error.response}`);
            }
        }

            await axios.get(`https://api.punkapi.com/v2/beers`)
                              .then(response => this.allBeer = response.data);

                              //console.log(this.allBeer[0].tagline);
    }
}
</script>

<style scoped>

    .all-cards_container {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
    }

    header {
        text-align: center;
        margin: .6rem 0;
    }

    header > h3 {
        font-size: 1.1rem;
        font-weight: 600;
    }

    .card_container > .__card{
        margin: 1.65rem 0 0 0;
    }

    /* Breakpoint */
    @media only screen and (min-width: 992px) {

        .card_container {
            width: 35%;
            padding: .85rem 1rem;
        }

        .__card {
            display: flex;
            width: 100%;
            height: 100%;
        }
    }
</style>