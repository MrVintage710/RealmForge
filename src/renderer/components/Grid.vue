<template>
    <div id="element">
        <div id="grid"></div>
    </div>
</template>

<script lang="ts">
    import $ from 'jquery';
    import ui from 'jquery-ui';
    import {ResizeSensor} from 'css-element-queries'

    export default {
        props:{
            width: Number,
            height: Number
        },
        data: function() {
            return {
                cellsize: 50,
            }
        },

        mounted: function() {
            this.el = this.$el;
            this.grid = $('#grid');

            const width = this._props.width;
            const height = this._props.height;

            $(this.grid).width(width*50)
            $(this.grid).height(height*50)

            new ResizeSensor(this.el, ()=> {
                console.log("resized")
            })
        },

        updated: function() {
            const width = this._props.width;
            const height = this._props.height;

            $(this.grid).width(width*50)
            $(this.grid).height(height*50)
        }
    }
</script>

<style>
    #element {
        width: 100%;
        height: 100%;
        background-color: gray;
        overflow: auto;
    }

    #grid {  
        position: relative;
        left: 220px;

        background-image: url("../assets/grid-me.png");
        background-color: white;
    }
</style>