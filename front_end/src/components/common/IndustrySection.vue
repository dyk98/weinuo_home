<template>
        <div class="section">
         <div class="one">
                <div class="industry_section">
                    <router-link to="IndustrySection.vue">
                        <img :src="operation" class="industry_img1">
                        <div class="industry_head"><b>企业应用</b></div>
                    </router-link>
                </div>
        </div>
        <div class="totle">
            <div class="two">
                <div class="industry_section">
                    <router-link to="IndustrySection.vue">
                        <img :src="government" class="industry_img2">
                        <div class="industry_head"><b>政府</b></div>
                    </router-link>
                </div>
                <div class="industry_section">
                    <router-link to="IndustrySection.vue">
                        <img :src="furniture" class="industry_img2">
                        <div class="industry_head"><b>家具</b></div>
                    </router-link>
                </div>
            </div>
            <div class="three">
                <div class="industry_section">
                    <router-link to="IndustrySection.vue">
                        <img :src="medical" class="industry_img3">
                        <div class="industry_head"><b>医用</b></div>
                    </router-link>
                </div>
                <div class="industry_section">
                    <router-link to="IndustrySection.vue">
                        <img :src="transpotatin" class="industry_img3">
                        <div class="industry_head"><b>交通</b></div>
                    </router-link>
                </div>
                <div class="industry_section">
                    <router-link to="IndustrySection.vue">
                        <img :src="bodybuilding" class="industry_img3">
                        <div class="industry_head"><b>健身</b></div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "IndustrySection",
        data() {
            return {
                operation: require("../../assets/operation.png"),
                government: require("../../assets/government.png"),
                furniture: require("../../assets/furniture.png"),
                medical: require("../../assets/medical.png"),
                transpotatin: require("../../assets/transportatin.png"),
                bodybuilding: require("../../assets/bodybuilding.png")
            }
        }
    }
</script>

<style scoped>
.heading {
    text-align: center;
    font-size: 25px;
    color: #181D23;
}
.section {
    height: 400px;
    width: 100%;
    padding: 25px 0;
    display: flex;
    flex-direction: row;
    /*flex-flow: wrap;*/
}
.one {
    height: 400px;
    width: 525px;
}
.two {
    display: flex;
    flex-direction: row;
}
.three {
    display: flex;
    flex-direction: row;

}
.industry_section {
    position:relative;
}
.industry_head  {
    position:absolute;
    z-indent: 2;
    left: 20px;
    top: 5px;
    color: #181D23;
    font-size: 20px;
}
.industry_img1 {
    height: 400px;
    width: 525px;
    opacity:0.4;
    filter:alpha(opacity=40);
}
.industry_img1:hover {
    opacity:1.0;
    filter:alpha(opacity=100);
}
.industry_img2 {
    height: 210px;
    width: 100%;
    opacity:0.4;
    filter:alpha(opacity=40);
}
.industry_img2:hover {
    opacity:1.0;
    filter:alpha(opacity=100);
}
.industry_img3 {
    height: 190px;
    width: 99.3%;
    margin-top: -3px;
    opacity:0.4;
    filter:alpha(opacity=40);
}
.industry_img3:hover {
    opacity:1.0;
    filter:alpha(opacity=100);
}
</style>