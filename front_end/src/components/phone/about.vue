<template>
    <div class="about_area">
        <div class="pagename aboutpage-name">
            <div class="title">
                <h1>
                    关于我们
                </h1>
            </div>
        </div>

    <div class="container">
            <div class="pagelist"  style="background-color: #ea4c57;" >
                <div class="section">
                    <router-link class="about_link" to="/about/Introduction">
                        <h2>公司介绍</h2>
                    </router-link>
                </div>

            </div>
        <div class="pagelist"  style="background-color: #4894f8;" >
            <div class="section">
                <router-link class="about_link" to="/about/Business">
                    <h2>核心业务</h2>
                </router-link>
            </div>

        </div>
        <div class="pagelist"  style="background-color: #f894f8;" >
            <div class="section">
                <router-link class="about_link" to="/about/Idea">
                    <h2>公司理念</h2>
                </router-link>
            </div>

        </div>
        <div class="pagelist"  style="background-color: #7ae55d;" >
            <div class="section">
                <router-link class="about_link" to="/about/Pattern">
                    <h2>经营模式</h2>
                </router-link>
            </div>

        </div>
        <div class="pagelist"  style="background-color: #dad656;" >
            <div class="section">
                <router-link class="about_link" to="/about/Advantage">
                    <h2>团队优势</h2>
                </router-link>
            </div>

        </div>
        <div class="pagelist"  style="background-color: #f4aa3c;" >
            <div class="section">
                <router-link class="about_link" to="/about/Prize">
                    <h2>奖项证书</h2>
                </router-link>
            </div>
            
        </div>
</div>

    </div>
</template>

<script>
    export default {
        name: "about"
    }
</script>

<style scoped>
    .about_area {
        height: 100%;
    }
    .about_area h3 {
        font-size: 2em;
        height: 0.5em;
        margin: 1em auto;
        top: 1em;
        position: relative;
    }
    .container {
        max-width: 117em;
        padding-right: 1.5em;
        padding-left: 1.5em;
        margin-right: auto;
        margin-left: auto;
    }
    .about_link {
        text-decoration: none;
        text-align: center;
        color: white;
        line-height: 3em;
    }
    .pagelist {
        height: 5em;
        margin: 0.3em auto;
        padding: 1em 0;
    }

</style>