<template>
    <div id="page">
        <grid v-on:click="console.log('Test')" ref="grid"></grid>
    </div>
</template>

<script lang="ts">
    import Grid from './Grid.vue'

    function test() {
        console.log("Test")
    }

    export default {
        components: {
            grid: Grid,
        },

        mounted: function() {
            this.$refs.grid.add(1, 4, "<p>Nice</p>")
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

