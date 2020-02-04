<template>
    <div id="LoginPane">
        <!-- <menubar></menubar> -->
    </div>
</template>

<script lang="ts">
    import MenuBar from './MenuBar.vue'

    export default {
        components: {
            menubar: MenuBar,
        }
    }
</script>

<style>
    body {
        margin: 0px;
        overflow-x: hidden;

        -webkit-app-region: drag;
    }

    #LoginPane {
        width: 100vw;
        height: 100vh;

        background-image: url("../assets/noisy-grid.png");
        background-color: black
    }
</style>