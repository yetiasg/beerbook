<template>
    <button v-if="!link" :class="mode">
        <slot></slot>
    </button>
    <router-link v-else :to="to" :class="mode">
        <slot></slot>
    </router-link>
</template>

<script>
export default {
    props: {
        mode: {
            type: String,
            required: false,
            default: null
        },
        link: {
            type: Boolean,
            required: false,
            dafault: false
        },
        to: {
            type: String,
            required: false,
            dafault: '/'
        }
    }
}
</script>

<style scoped>
    @media screen and (max-width: 360px) {
        button{
            font-size: 0.8rem;
            padding: 0;
        }
    }

    @media screen and (min-width: 361px) {
        button{
            font-size: 1rem;
            cursor: pointer;
            min-width: 7.5rem;
        }

        .filledBtn, .borderBtn{
            margin: 10px;
        }
    }
    
    button{
        letter-spacing: 1px;
        padding: 0.5rem 1rem;
        margin:10px;

    }

    .clearBtn{
        border: none;
        background-color: transparent;
        border-radius: 20px;
    }

    .filledBtn{
        background-color: rgb(246, 227, 192);
        border: 2px solid rgb(246, 227, 192);
        border-radius: 20px;
        width:100%;
        transition: 0.1s;
    }

    .filledBtn:hover{
        background-color: rgb(241, 218, 172);
        border: 2px solid rgb(241, 218, 172);
    }

    .borderBtn{
        border: 2px solid rgb(246, 227, 192);
        background-color: transparent;
        border-radius: 20px;
        box-sizing: border-box;
        width:100%;
        transition: 0.1s;        
    }

    .borderBtn:hover{
        border: 2px solid rgb(246, 227, 192);
        background-color: rgb(246, 227, 192);
    }
</style>