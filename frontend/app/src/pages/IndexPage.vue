<template>
    <div class="indexPage">
        <the-header></the-header>
        <div class="infoBox">www</div>
        <the-footer></the-footer>
    </div>
</template>

<script>
// import TheCircle from '../components/layout/layoutShapes/TheCircle.vue'
import TheHeader from '../components/layout/TheHeader.vue';
import TheFooter from '../components/layout/TheFooter.vue';
export default {
    components: {
        TheHeader,
        TheFooter
    }
}
</script>

<style scoped>

    @media screen and (max-width: 360px) {
        .indexPage {
            font-size: 0.8rem;
        } 

        .infoBox{
            background-color: white;
            border-radius: 20px;
            width: 92%;
            min-height: 88vh;
            padding: 1rem;
        }
    }
    
    .indexPage{
        background-color: #fcf0dae6;
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
</style>