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
    button{
        font-size: 1rem;
        letter-spacing: 1px;
        cursor: pointer;
    }

    .clearBtn{
        border: none;
        background-color: transparent;
        padding: 0.5rem 1rem;
        border-radius: 20px;
    }

    .filledBtn{
        background-color: rgb(246, 227, 192);
        padding: 0.5rem 1rem;
        border: 2px solid rgb(246, 227, 192);
        border-radius: 20px;
        margin: 10px;
        min-width: 7.5rem;
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
        padding: 0.5rem 1rem;
        border-radius: 20px;
        margin: 10px;
        box-sizing: border-box;
        min-width: 7.5rem;
        width:100%;
        transition: 0.1s;        
    }

    .borderBtn:hover{
        border: 2px solid rgb(246, 227, 192);
        background-color: rgb(246, 227, 192);
    }
</style>