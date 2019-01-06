<template>
    <div class="industry_area">
        <div class="section_title">
            <h3>行业</h3>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Industry"
    }
</script>

<style scoped>
    .industry_area {
        height: 318px;
        background-color: #880000;
    }
    .industry_area h3 {
        font-size: 2em;
        height: 0.5em;
        margin: 1em auto;
        top: 1em;
        position: relative;
    }
    ul {
        margin: 0;
        padding: 0;
    }
    ol, ul {
        margin-top: 0;
        margin-bottom: 1em;
    }
    .myworks-list li {
            height: 5.8em;
            overflow: hidden;
            margin: 0.1em;
            position: relative;
        }
    .section_title {
        height: 3em;
        text-align: center;
    }
</style>