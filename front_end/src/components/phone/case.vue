<template>
    <div class="case_area">

        <div class="section_title">
            <h3>案例</h3>
        </div>
        <div class="container"></div>
    </div>
</template>

<script>
    export default {
        name: "Case"
    }
</script>

<style scoped>
    .case_area {
        height: 452px;
        background-color: #008800;
    }
    .case_area h3 {
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
    .container {
        max-width: 117em;
        padding-right: 1.5em;
        padding-left: 1.5em;
        margin-right: auto;
        margin-left: auto;
    }
</style>