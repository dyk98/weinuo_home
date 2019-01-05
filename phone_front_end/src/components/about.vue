<template>
    <div class="dynamic_area">
        <div class="section_title">
            <h3>关于</h3>
        </div>
       
    </div>
</template>

<script>
    export default {
        name: "Dynamic"
    }
</script>

<style scoped>
    .dynamic_area {
        height: 453px;
        background-color: aqua;
    }
    .dynamic_area h3 {
        font-size: 2em;
        height: 0.5em;
        margin: 1em auto;
        top: 1em;
        position: relative;
    }
    .section_title {
        height: 3em;
        text-align: center;
    }
    #newsTab {
        width: 100%;
    }
    .container {
        max-width: 117em;
        padding-right: 1.5em;
        padding-left: 1.5em;
        margin-right: auto;
        margin-left: auto;
    }
</style>