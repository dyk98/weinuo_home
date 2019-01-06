<template>
    <div id="app">
        <div class="footer">
            <div class="footer_top">
                <b></b>
            </div>
            <div class="footer_mid">
                <div class="footer_one">
                    <span class="footer_heading">1</span>
                    <div class="footer_menu">
                        <ul class="menu">
                            <li class="menu-item">
                                <router-link to="CompanyInFo" id="click" @mouseover="onOver($event)"  @mouseout="onOut" :style="active">1</router-link>
                            </li>
                            <li class="menu-item">
                                <router-link to="CompanyInFo" id="click" @mouseover="onOver"  @mouseout="onOut" :style="active">2</router-link>
                            </li>
                            <li class="menu-item">
                                <router-link to="CompanyInFo" id="click" @mouseover="onOver"  @mouseout="onOut" :style="active">3</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="footer_two">
                    <span class="footer_heading">2</span>
                    <div class="footer_menu">
                        <ul class="menu">
                            <li class="menu-item">
                            <router-link to="CompanyInFo" id="click" @mouseover="onOver"  @mouseout="onOut" :style="active">1</router-link>
                            </li>
                            <li class="menu-item">
                                <router-link to="CompanyInFo" id="click" @mouseover="onOver"  @mouseout="onOut" :style="active">2</router-link>
                            </li>
                            <li class="menu-item">
                                <router-link to="CompanyInFo" id="click" @mouseover="onOver"  @mouseout="onOut" :style="active">3</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="footer_three">
                    <span class="footer_heading">3</span>
                    <div class="footer_menu">
                        <ul class="menu">
                            <li class="menu-item">
                                <router-link to="CompanyInFo" id="click" @mouseover="onOver"  @mouseout="onOut" :style="active">1</router-link>
                            </li>
                            <li class="menu-item">
                                <router-link to="CompanyInFo" id="click" @mouseover="onOver"  @mouseout="onOut" :style="active">2</router-link>
                            </li>
                            <li class="menu-item">
                                <router-link to="CompanyInFo" id="click" @mouseover="onOver"  @mouseout="onOut" :style="active">3</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer_bot">
                <p class="end-head">1</p>
                <div>
                    <ul class="footer_end">
                        <li class="end-item">
                            <router-link to="CompanyInFo" id="click" @mouseover="onOver"  @mouseout="onOut" :style="active">1</router-link>
                        </li>
                        <li class="end-item">
                            <router-link to="CompanyInFo" id="click" @mouseover="onOver"  @mouseout="onOut" :style="active">2</router-link>
                        </li>
                        <li class="end-item3">
                            <router-link to="CompanyInFo" id="click" @mouseover="onOver"  @mouseout="onOut" :style="active">3</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CompanyInFo",
        el: '#app',
        data () {
            return {
                active: ''
            }
        },

        methods: {
            onOver(e) {
                console.log('mouse enter');
                // e.style.backgroundColor = 'color: red';
                this.active = 'color: red';

            },
            onOut: function() {
                console.log('mouse out');
                this.active = 'color: white';
            }
        }
    }
</script>

<style scoped>
.footer {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
}
.footer_top{
    height: 80px;
    background-color: #181D23;
    border-bottom: 1px solid #3e4247;
    color: #BDBCBC;
    line-height: 80px;
    text-align: center;
    font-size: 18px;
}
.footer_mid {
    height: 250px;
    display: flex;
    justify-content: space-between;
    padding: 0 25px;
    bottom: 0;
    background-color: #181D23;
    color: white;
}
.footer_bot {
    height: 80px;
    background-color: #181D23;
    border-top: 1px solid #3e4247;
    padding: 20px 0;
    text-align: center;
    color: white;
}
.footer_one {
    width: calc(100%/3);
    padding: 25px;
    border-right: 1px solid #3e4247;
}
.footer_two {
    width: calc(100%/3);
    padding: 25px;
    border-right: 1px solid #3e4247;
}
.footer_three {
    width: calc(100%/3);
    padding: 25px;
}
.footer_heading {
    margin-bottom: 22px;
    font-size: 22px;
}
.menu {
    padding-left: 0;
}
.menu-item {
    list-style:none;
    padding: 11px 4px;
    color: #3e4247;
    font-size: 12px;
}
#click {
    text-decoration: none;
    color: white;
}
.end-head{
    margin-top: 0;
}
.footer_end {
    margin: 0;
    padding-left: 0;
    height: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    list-style: none;
    font-size: 12px;
}
.end-item {
    width: 10%;
    border-right: 1px solid #3e4247;
}
.end-item3 {
    width: 10%;
}
</style>