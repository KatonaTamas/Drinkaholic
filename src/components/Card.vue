<template>
    <div class="card" :key="id">
        <div class="image-wrapper">
          <img :src="imgSrc" :alt="name">
        </div>
        <div class="infos-wrapper">
          <h2>{{name}}</h2>
          <h3>{{tagline}} </h3>
          <p>{{description}}</p>
        </div>
      </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        id: {
            required: true
        },
        imgSrc: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        tagline: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
    .card {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 1rem .95rem;
        -webkit-box-shadow: 0px 0px 30px 4px rgba(43,46,74,0.05); 
        box-shadow: 0px 0px 30px 4px rgba(43,46,74,0.05);
        border-radius: 2px;
    }

    .image-wrapper > img, .infos-wrapper h3, .infos-wrapper > h2 {
        margin-bottom: .7rem;
    }

    .infos-wrapper {
    text-align: center;
    }

    .image-wrapper > img {
        width: 27px;
        height: auto;
    }

    .infos-wrapper > h2 {
        font-size: 1.2rem;
    }

    .infos-wrapper h3 {
        font-size: .95rem;
        font-weight: 400;
    }
    
    .infos-wrapper p {
        font-size: .8rem;
        font-weight: 200;
        word-break: keep-all;
    }

    /* Breakpoints */
    @media only screen and (min-width: 768px) {

        .infos-wrapper > h2 {
            font-size: 1.35;
        }

        .infos-wrapper h3 {
            font-size: 1.05rem;
        }

        .infos-wrapper p {
            font-size: .9rem;
        }
    }
</style>