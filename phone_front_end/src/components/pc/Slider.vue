<template>
    <div style="width: 70%; margin:0 auto">
        <div class="swiper-container0">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="slider in sliders">
                    <img :src="slider.img" alt="" style="width: 100%; max-height: 600px">
                </div>
            </div>
        </div>
    </div>
    <!--<div>-->
    <!--<div class="swiper-container0" style="margin: 0 auto;text-align: center">-->
        <!--<div class="swiper-wrapper">-->
            <!--<div class="swiper-slide" v-for="slider in sliders">-->
                <!--<img :src="slider.img" alt="" style="margin: 0 auto;width: 70%; ">-->
            <!--</div>-->
        <!--</div>-->
    <!--</div>-->
    <!--</div>-->
</template>

<script>
    import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.min.css';


    export default {
        name: "Slider",
        data(){
            return {
                sliders: [
                    {
                        img: '/static/img/slide3.png'
                    }, {
                        img: '/static/img/slide2.png'
                    }, {
                        img: '/static/img/slide1.png'
                    },
                ],
            }
        },
        mounted() {
            var mySwiper0 = new Swiper('.swiper-container0', {
                loop: true,
                autoplay: true,
                effect: 'fade',

            })

        }
    }
</script>

<style scoped>

</style>