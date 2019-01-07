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
                <!--<div>-->
                    <!--&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;天津维诺智创有限公司(Tianjin WeiNuo Technology CO., LTD.)成立于2018年，注册资金1009万元，是一家以技术服务为核心业务，并在此基础上提供行业应用软件和服务、IT外包、管理咨询调研、企业信息化管理软件、电子商务、软件定向开发、一系列信息服务。目前公司技术团队9人，本科学历占90%以上，团队技术力量雄厚。<br>-->
                    <!--&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 维诺智创自成立以来，已为数百个用户提供了优秀的信息系统解决方案，涵盖多种应用与技术平台，用户遍布电信、电力、政府、交通、国防、医疗、金融、科研、石化、石油、及制造等行业，成功完成了中国联通通信公司、BP中国股份公司、南方国际航空公司、联想中望等客户的堪称业界典范的应用软件开发和计算机信息系统集成项目。-->

                <!--</div>-->
            </div>
        <div class="pagelist"  style="background-color: #4894f8;" >
            <div class="section">
                <router-link class="about_link" to="/about/Business">
                    <h2>核心业务</h2>
                </router-link>
            </div>
            <!--<div>-->
                <!--公司主营业务是软件外包，管理软件开发，软件定制开发，移动APP应用开发，网站开发，小程序开发，APP开发，系统集成，软件测试外包，IT解决方案，网站设计，软件设计 (Software Development Service, Mobile APP Development, Website Design, Testing Service, Software Localization And Globalization, IT Outsourcing Managed Service, System Integration, IT Consultation, IT Solution)。-->

            <!--</div>-->
        </div>
        <div class="pagelist"  style="background-color: #f894f8;" >
            <div class="section">
                <router-link class="about_link" to="/about/Idea">
                    <h2>公司理念</h2>
                </router-link>
            </div>
            <!--<div>-->
                <!--公司本着“锐意创新、精益求精”的开发思想，遵循社会效益与经济效益并重的企业原则，在发展中一直采取“以市场为导向、以客户为中心”的柔性开发模式，并在与客户的至诚合作过程中逐渐形成了一套集研发、销售、服务于一体的高效运行机制。-->

            <!--</div>-->
        </div>
        <div class="pagelist"  style="background-color: #7ae55d;" >
            <div class="section">
                <router-link class="about_link" to="/about/Pattern">
                    <h2>经营模式</h2>
                </router-link>
            </div>
            <!--<div>-->
                <!--<ul class="txtul">-->
                    <!--<li>-->
                        <!--经营理念：以市场为导向、以客户为中心-->
                    <!--</li>-->
                    <!--<li>-->
                        <!--产品策略：专业、先见、长远-->
                    <!--</li>-->
                    <!--<li>-->
                        <!--服务策略：用心、诚信、分享-->
                    <!--</li>-->
                    <!--<li>-->
                        <!--企业目标：专注且富有远见的软件服务商-->
                    <!--</li>-->
                <!--</ul>-->
            <!--</div>-->
        </div>
        <div class="pagelist"  style="background-color: #dad656;" >
            <div class="section">
                <router-link class="about_link" to="/about/Advantage">
                    <h2>团队优势</h2>
                </router-link>
            </div>
            <!--<div class="txt">-->
                <!--维诺开发人员是一支专业、年轻、充满活力且优秀的团队，90%的员工达到了大学毕业以上，在软件开发有资深经验，承接开发项目范围软件方面如：企业管理软件，企业APP开发，网站开发，电子商务，B/S，C/S系统应用，ERP、DRP、CRM、MIS等管理系统有丰富的项目经验。<br>-->
                <!--<br>-->
                <!--实践出真知，无论是C/S结构的应用系统，还是B/S结构的WEB信息系统，维朗科技都拥有经验丰富项目管理团队，实行国际软件开发流程标准化管理，快速、高效地交付产品。-->
            <!--</div>-->
        </div>
        <div class="pagelist"  style="background-color: #f4aa3c;" >
            <div class="section">
                <router-link class="about_link" to="/about/Prize">
                    <h2>奖项证书</h2>
                </router-link>
            </div>
            <!--<div class="txt">-->
                <!--暂无-->
            <!--</div>-->
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