<template>
    <div id="page">
        <grid :width=10 :height=15></grid>
    </div>
</template>

<script lang="ts">
    import Grid from './Grid.vue'

    export default {
        components: {
            grid: Grid,
        }
    }
</script>

<style>
    body {
        margin: 0px;
        overflow-x: hidden;
    }

    #page {
        width: 100vw;
        height: 100vh;
    }
</style>

