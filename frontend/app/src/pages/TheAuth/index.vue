<template>
    <section>
        <the-header></the-header>
        <auth-panel></auth-panel>
        <the-footer></the-footer>
    </section>
</template>

<script>
import AuthPanel from './AuthPanel.vue';
import TheHeader from '../../components/layout/TheHeader.vue';
import TheFooter from '../../components/layout/TheFooter.vue';
export default {
    components: {
        AuthPanel,
        TheHeader,
        TheFooter
    }
}
</script>

<style scoped>
    section{
        width:100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    @media screen and (max-width: 360px) {
        section {
            background-color: #fcf0da;
        } 
    }

</style>