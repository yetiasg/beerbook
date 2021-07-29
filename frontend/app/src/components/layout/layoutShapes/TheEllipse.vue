<template>
    <div class='ellipse'>
    </div>
</template>

<style scoped>
    .ellipse{
        --widthEllipse: 110%;
        position: relative;
        left: calc(50% - var(--widthEllipse)/2);
        width: var(--widthEllipse);
        height: 300px;
        background-color: #FCF0DA;
        border-radius: 50%;
    }
</style>