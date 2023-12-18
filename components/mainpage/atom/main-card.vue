<template>
    <div class="wrap__card-main" :class="cssClass">
        <div>
            <div class="card__header">
                <MainpageAtomTag :title="tag"/>
                <MainpageAtomImageCaterpillar
                    :img1="main_img_caterpillar_1"
                    :img2="main_img_caterpillar_2"
                    :img3="main_img_caterpillar_3"
                    :img4="main_img_caterpillar_4"
                    cssClass="small_img"
                />
            </div>
            <p class="wrap__card-title">{{ title }}</p>
            <p class="wrap__card-text">{{ text }}</p>
            <MainpageAtomTagQuestion v-if='tag_question_1' :text="tag_question_1"/>
            <div class="tag-indent"><MainpageAtomTagQuestion v-if='tag_question_4' :text="tag_question_4"/></div>
            <div class="tag-indent"><MainpageAtomTagQuestion v-if='tag_question_5' :text="tag_question_5"/></div>
            <div class="card__wrap-question">
                <MainpageAtomTagQuestion v-if='tag_question_2' :text="tag_question_2" style="margin-right: 16px;"/>
                <div class="tag-margin">
                <MainpageAtomTagQuestion v-if='tag_question_3' :text="tag_question_3"/>
                </div>
            </div>
        </div>
        <div>
            <div class="wrap__card-footer">
                <MainpageAtomImageCaterpillar
                    :title="title_caterpillar"
                    :img1="img_caterpillar_1"
                    :img2="img_caterpillar_2"
                    :img3="img_caterpillar_3"
                    :img4="img_caterpillar_4"
                    :img5="img_caterpillar_5"
                    :img6="img_caterpillar_6"
                    cssClass="large_img"
                />
                <a :href="link" target="_blank" class="wrap__card-next">
                    <svg class="btn-plane" viewBox="0 0 75 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="0.5" width="75" height="75" rx="37.5" class="bg-plane"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.3873 35.4978C27.6615 30.4173 35.1795 27.068 38.9411 25.4498C49.6813 20.8294 51.913 20.0268 53.3676 20.0003C53.6875 19.9945 54.4029 20.0765 54.8662 20.4653C55.2575 20.7937 55.3651 21.2373 55.4167 21.5486C55.4682 21.8599 55.5323 22.5691 55.4813 23.1233C54.8993 29.4482 52.3809 44.7972 51.0997 51.8812C50.5576 54.8787 49.4902 55.8838 48.4567 55.9822C46.2109 56.1959 44.5054 54.447 42.3302 52.9723C38.9264 50.6645 37.0034 49.2279 33.6995 46.976C29.8811 44.3735 32.3564 42.9431 34.5324 40.6055C35.1019 39.9937 44.9973 30.6845 45.1888 29.84C45.2128 29.7344 45.235 29.3407 45.0089 29.1328C44.7827 28.925 44.449 28.996 44.2081 29.0526C43.8668 29.1327 38.4291 32.85 27.8952 40.2045C26.3518 41.3007 24.9537 41.8348 23.7012 41.8068C22.3203 41.7759 19.6641 40.9993 17.6895 40.3354C15.2675 39.5211 13.3426 39.0906 13.5102 37.7077C13.5975 36.9874 14.5565 36.2508 16.3873 35.4978Z" class="plane"/>
                    </svg>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
		title: {
			default: "title",
			type: String
		},
        text: {
			default: "",
			type: String
		},
        tag: {
			default: "tag",
			type: String
		},
        link: {
			default: "https://t.me/MIT_union",
			type: String
		},
        tag_question_1: {
			default: "",
			type: String
		},
        tag_question_2: {
			default: "",
			type: String
		},
        tag_question_3: {
			default: "",
			type: String
		},
        tag_question_4: {
			default: "",
			type: String
		},
        tag_question_5: {
			default: "",
			type: String
		},
        title_caterpillar: {
			default: "",
			type: String
		},
        img_caterpillar_1: {
			default: "",
			type: String
		},
        img_caterpillar_2: {
			default: "",
			type: String
		},
        img_caterpillar_3: {
			default: "",
			type: String
		},
        img_caterpillar_4: {
			default: "",
			type: String
		},
        img_caterpillar_5: {
			default: "",
			type: String
		},
        img_caterpillar_6: {
			default: "",
			type: String
		},
        main_img_caterpillar_1: {
			default: "",
			type: String
		},
        main_img_caterpillar_2: {
			default: "",
			type: String
		},
        main_img_caterpillar_3: {
			default: "",
			type: String
		},
        main_img_caterpillar_4: {
			default: "",
			type: String
		},
        cssClass: {
            
        }
    })
</script>
<style lang="scss" scoped>
@import "./assets/scss/mainpage.scss";
.arrow{
    margin-left: 16px;
}
.wrap__card-main{
    height: 1150px;
    padding: 96px;
    background: #FFFFFF;
    border-radius: 60px;
    transition: 0.5s;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.wrap__card-main:hover{
    transform: scale(1.03);
    transition: 0.5s;
    box-shadow: 5px 5px 50px 10px rgba(0, 0, 0, 0.3);
}
.large_card{
    width: 66%;
}
.large_card-first{
    width: 66%;
    margin-right: 48px;
}
.large_card-left{
    width: 65%;
    margin-left: 35%;
    margin-top: 48px;
    z-index: 2;
}
.card__header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.wrap__card-title{
    padding: 134px 0 64px;
    font-family: 'Inter';
    font-weight: 600;
    @include adaptiv-size(56, 28, 24);
    @include adaptiv-height(64, 32, 32);
    display: flex;
    align-items: center;
    color: #000000;
}
.card__wrap-question{
    display: flex;
    flex-direction: row;
}

.wrap__card-footer{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0;
}

.wrap__card-next{
    border: none;
    width: 100px;
    height: 100px;
    border-radius: 25px;
}
.btn-plane{
    width: 100px;
    height: 100px;
}
.wrap__card-next:hover .plane{
    fill: #025BFF;
    transition: 0.5s;
}
.wrap__card-next:hover .bg-plane{
    fill: transparent;
    transition: 0.5s;
}
.plane{
    fill: #FFFFFF;
    transition: 0.5s;
}
.bg-plane{
    fill: #025BFF;
    transition: 0.5s;
}
.wrap__card-text{
    max-width: 900px;
    font-family: 'Inter';
    font-weight: 400;
    @include adaptiv-size(36, 18, 16);
    @include adaptiv-height(56, 28, 24);
    color: #828282;
}
.tag-indent{
    margin-top: 32px;
}
@media only screen and (max-width: 2100px) {
.wrap__card-main{
    padding: 72px;
  }
}
@media (max-width: 1921px) {
    .wrap__card-main{
        height: 850px;
    }
    .wrap__card-title{
        padding: 100px 0 48px;
    }
    .large_card-left{
        margin-top: 36px;
    }
    .large_card-first{
        width: 66%;
        margin-right: 36px;
    }
    .btn-plane{
        width: 75px;
        height: 75px;
    }
    .wrap__card-next{
        width: 75px;
        height: 75px;
    }
    .tag-indent{
        margin-top: 24px;
    }
}
@media only screen and (max-width: 1500px) {
    .wrap__card-main{
        padding: 48px;
    }
    .wrap__card-main{
        height: 700px;
    }
}
@media (max-width: 1281px) {
    .wrap__card-main{
        height: 600px;
    }
    .wrap__card-title{
        padding: 67px 0 32px;
    }
    .large_card-left{
        margin-top: 24px;
    }
    .large_card-first{
        width: 66%;
        margin-right: 24px;
    }
    .btn-plane{
        width: 50px;
        height: 50px;
    }
    .wrap__card-next{
        width: 50px;
        height: 50px;
    }
    .tag-indent{
        margin-top: 16px;
    }
}
@media only screen and (max-width: 1000px) {
    .wrap__card-main{
        margin-top: 16px;
        padding: 24px;
        border-radius: 32px;
        width: 100%;
        height: 350px;
    }

    .large_card{
        width: 100%;
        padding: 24px;
    }
    .large_card-left{
        margin-left: 0;
        padding: 24px;
    }
    .card__wrap-question{
        flex-direction: column;
        padding-top: 0px;
    }
    .wrap__card-next{
        width: 32px;
        height: 32px;
    }

    .wrap__card-title{
        padding-top: 24px;
        padding-bottom: 16px;
    }
    .wrap__card-text{
        color: #1B1B29;
    }

    .arrow{
        width: 12px;
        height: 12px;
        margin-left: 10px;
    }
    .btn-plane{
        width:32px;
        height: 32px;
    }
    .tag-indent{
        margin-top: 12px;
    }
    .tag-margin{
        margin-top: 12px;
    }
}
@media only screen and (max-width: 768px) {
    .wrap__card-main{
        padding: 24px;
    }
}
@media only screen and (max-width: 650px) {
    .wrap__card-main{
        height: 100%;
    }
    .wrap__card-footer{
        padding-top: 24px;
    }
}
</style>
