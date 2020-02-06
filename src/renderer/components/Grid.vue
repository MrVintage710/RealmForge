<template>
    <div :style="setStyle" class="grid"></div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import $ from 'jquery';
    import ui from 'jquery-ui';
    import {ResizeSensor} from 'css-element-queries'

    export default {
        props: {
            rows: Number,
            columns: Number,
        },
        data: function() {
            return {
                objects: [{row:2, col:2, content:"<p>Test</p>"}],
                
                inject() {
                    this.el.empty();
                    this.objects.forEach((element, index) => {
                        if(element.row && element.col) {
                            if(element.content && element.content instanceof Vue) {
                                this.el.append(`<div id="${"obj:"+this._uid + "_" + index}" style="grid-row-start:${element.row}; grid-column-start:${element.col}"></div>`)
                                element.content.$mount(`#${"obj:"+this._uid + "_" + index}`)
                            } else {
                                this.el.append(`<div id="${"obj:"+this._uid + "_" + index}" style="grid-row-start:${element.row}; grid-column-start:${element.col}">${element.content}</div>`)
                            }
                        }  
                    });
                },

                add(row : Number, col : Number, content : Vue & String, rowSpan : Number, colSpan : Number) {
                    this.objects.push({
                        "row": row, 
                        "col": col,
                        "content": content,
                        'row-span': rowSpan ? rowSpan : 0,
                        'col-span': colSpan ? colSpan : 0, 
                    })
                    this.inject();
                }
            }
        },

        mounted: function() {
            this.el = $(this.$el);
            this.inject()
        },

        computed: {
            setStyle: function() {
                const rows = this._props.rows ? this._props.rows : 10;
                const columns = this._props.columns ? this._props.columns : 10;

                var gridColumns = "";
                var gridRows = "";

                for(var r = 0; r < rows; r++) {
                    gridRows += '1fr '
                }

                for(var c = 0; c < columns; c++) {
                    gridColumns += '1fr '
                }

                return {
                    display: 'grid',
                    gridTemplateRows: gridRows,
                    gridTemplateColumns: gridColumns,
                }
            }
        }
    }
</script>

<style>
    .grid {
        height: 100%;
        width: 100%;
    }
</style>