<template>
    <div id="menuBar">
        <div id="bar"></div>
        <div id="circle"></div>
        <span id="options">
            <ul>
                <li>Z</li>
                <li>Y</li>
                <li>X</li>
            </ul>
        </span>
    </div> 
</template>

<script lang="ts">
    
    
    export default {
        
    }
</script>

<style>
    #menuBar {
        max-height: 50px;
    }

    #bar {
        -webkit-app-region: drag;
        -webkit-user-select: none;
        width: 100vw;
        height: 50px;
        background-color: grey;
    }

    #circle {
        width: 75px;
        height: 75px;
        border-radius: 50%;
        background-color: midnightblue;
        position: relative;
        top: -50px;
    }

    #options {
        position: relative;
        margin: 0px;

        
    }

    #options ul {
        margin: 0px;
        list-style: none;
    }

    #options ul li {
        float: left;
        padding-right: 15px
    }
</style>