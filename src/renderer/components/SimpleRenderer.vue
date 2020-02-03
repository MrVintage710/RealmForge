<template>
    <div>
        <canvas id="canvas"></canvas>
    </div> 
</template>

<script lang="ts">
    import * as BABYLON from 'babylonjs';

    window.addEventListener('DOMContentLoaded', function(){
        var canvas = document.getElementById('canvas') as HTMLCanvasElement;

        var engine = new BABYLON.Engine(canvas, true);
        var createScene = function(){
            var scene = new BABYLON.Scene(engine);
            
            //scene.clearColor = new BABYLON.Color3.White();
            var camera = new BABYLON.FreeCamera('camera1', new BABYLON.
            Vector3(0, 0,-10), scene);
            camera.setTarget(BABYLON.Vector3.Zero());

            var box = BABYLON.Mesh.CreateBox("Box",4.0,scene);
            
            return scene;
        }

        var scene = createScene();
        engine.runRenderLoop(function(){
            scene.render();
        });

    });

    export default {
        
    }
</script>

<style>
    #canvas {
        width: 100%;
        height: 100%;
        border: 5px solid black;
        box-sizing: border-box
    }
</style>