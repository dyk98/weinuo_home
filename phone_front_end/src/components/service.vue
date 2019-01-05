<template>
    <div class="service_area">
        <div class="section_title">
            <h3>服 务</h3>
        </div>
        <div class="container">
            <ul class="guide_list" style="list-style: none;">
                <li class="list_in">
                    <a href="">
                        <i class="iconfont">&#xe605;</i>
                    </a>
                    <h2><a>软件开发</a></h2>
                </li>
                <li class="list_in">
                    <a href="">
                        <i class="iconfont">&#xe605;</i>
                    </a>
                    <h2><a>交互体验</a></h2>
                </li>
                <li class="list_in">
                    <a href="">
                        <i class="iconfont">&#xe605;</i>
                    </a>
                    <h2><a>运营维护</a></h2>
                </li>
                <li class="list_in">
                    <a href="">
                        <i class="iconfont">&#xe605;</i>
                    </a>
                    <h2><a>人力资源配置</a></h2>
                </li>
                <li class="list_in">
                    <a href="">
                        <i class="iconfont">&#xe605;</i>
                    </a>
                    <h2><a>质量管理</a></h2>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Serve"
    }
</script>

<style scoped>
    .service_area {
        height: 25em;
        background-color: #4288ce;
        text-align: center;
    }
    .service_area h3 {
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
    ul,li,ol {
        margin: 0px;
        padding: 0px;
        display: inline-flex;
    }
    .guide_list li h2 a {
        font-size: 1em;
        padding: 0 0 0 0;
    }
    .container {
        max-width: 117em;
        padding-right: 1.5em;
        padding-left: 1.5em;
        margin-right: auto;
        margin-left: auto;
    }
</style>