<template>
	<AtomWrapper :ab="ab" :abdata="ab_page" :bgcolor="bg" :fullwidth="full">
        <div class="content">
            <div class="content__circle-card">
                <div class="content__circle-card-content">
                    <div class="wrap">
                        <div class="wrap-img">
                            <img v-if='img1' :src="img1" class="img numb-0 " :class="cssClass">
                            <img v-if='img2' :src="img2" class="img numb-1 " :class="cssClass">
                            <img v-if='img3' :src="img3" class="img numb-2 " :class="cssClass">
                            <img v-if='img4' :src="img4" class="img numb-3 " :class="cssClass">
                            <img v-if='img5' :src="img5" class="img numb-4 " :class="cssClass">
                            <img v-if='img6' :src="img6" class="img numb-5 " :class="cssClass">
                        </div>
                        <p class="card__partners-text" v-if='title_image'>{{ title_image }}</p>
                    </div>
                    <div class="content__circle-card-content-text">
                        <p class="content__circle-card-content-text-title">
                            {{ text_counter }}
                        </p>
                        <p class="content__circle-card-content-text-subtitle">
                            {{ text_description }}
                        </p>
                    </div>
                    <img
                        src="/images/peeps-avatar.png"
                        class="content__circle-card-content-avatar"
                    />
                </div>
            </div>
            <div class="content__card">
                <div>
                    <div class="content__card-header">
                        <img :src="img" alt="img" class="content__card-header-img">
                        <div class="content__card-header-wrap">
                            <p class="content__card-header-title">{{ title }}</p>
                            <p class="content__card-header-text">{{ post }}</p>
                        </div>
                    </div>
                <p class="content__card-text">{{ text }}</p>
                </div>
                <div class="content__card-footer">
                    <a :href="link" class="content__card-footer-button">написать в телеграмм</a>
                </div>
            </div>
        </div>
    </AtomWrapper>
</template>
<script setup>
const props = defineProps({
		bg: {
			default: "",
		},
		full: {
			default: false,
		},
		ab_page: {
			default: "0",
		},
		pd:  {
			default: true,
		},
		ab: {
			default: '0'
		},
        title: {
			default: "ФИО",
		},
        text: {
			default: "Описание",
		},
        text_counter: {
			default: "+ 40 000",
		},
        text_description: {
			default: "Описание кружка",
		},
        link: {
			default: "/",
		},
        post: {
			default: "Должность",
		},
        img: {
			default: "",
		},
        title_image: {
			default: "",
			type: String
		},
        img1: {
			default: "/images/photo-0.png",
			type: String
		},
        img2: {
			default: "/images/photo-1.png",
			type: String
		},
        img3: {
			default: "/images/photo-2.png",
			type: String
		},
        img4: {
			default: "/images/photo-3.png",
			type: String
		},
        img5: {
			default: "/images/photo-4.png",
			type: String
		},
        img6: {
			default: "/images/photo-5.png",
			type: String
		},
        cssClass: {
            default: "large_img",
        }
	})
</script>
<style lang="scss" scoped>
.content {
    max-width: 1920px;
    max-height: 960px;
    width: 100%;
    height: 50vw;
    display: flex;
    flex-direction: row;
    background-color: #000;
    @media only screen and (max-width: 1050px) {
        flex-direction: column;
        height: 100%;
        max-height: 100%;
    }

    &__circle-card {
        max-width: 960px;
        max-height: 960px;
        width: 50vw;
        height: 100%;
        display: flex;
        @media only screen and (max-width: 1050px) {
            align-self: center;
        }
        @media only screen and (max-width: 900px) {
            width: 100vw;
            align-self: center;
        }
    }

    &__card {
        padding: 54px 48px 48px;
        width: 50vw;
        max-width: 960px;
        max-height: 960px;
        background: linear-gradient(45deg, #921CBC 0%, #34057B 100%);
        border-radius: 60px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        @media only screen and (max-width: 1050px) {
            width: 100vw;
            height: 100vw;
        }
        @media only screen and (max-width: 900px) {
            padding: 12px;
            border-radius: 30px;
            width: calc(100vw - 30px);
            height: calc(60vw - 30px);
        }
        @media only screen and (max-width: 500px) {
            width: calc(100vw - 30px);
            height: calc(86vw - 30px);
        }
    }

    &__circle-card-content {
        position: relative;
        width: 50vw;
        max-height: 960px;
        background: #ffffff;
        border-radius: 50%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        overflow: hidden;
        @media only screen and (max-width: 900px) {
            width: calc(100vw - 30px);
            height: calc(100vw - 30px);
        }
    }

    &__circle-card-content-text {
        font-family: "Inter";
        color: #1b1b29;
        text-align: center;
    }

    &__circle-card-content-text-title {
        margin-top: 48px;
        font-weight: 700;
        font-size: 124px;
        line-height: 124px;
        @media only screen and (max-width: 1300px) {
            font-size: 96px;
            line-height: 116px;
        }
        @media only screen and (max-width: 650px) {
            margin-top: 10px;
            font-size: 72px;
            line-height: 86px;
        }
        @media only screen and (max-width: 390px) {
            font-size: 48px;
            line-height: 68px;
        }
    }

    &__circle-card-content-text-subtitle {
        max-width: 34vw;
        width: 100%;
        margin-top: 24px;
        font-weight: 400;
        font-size: 64px;
        line-height: 80px;
        @media only screen and (max-width: 1300px) {
            font-size: 44px;
            line-height: 54px;
        }
        @media only screen and (max-width: 650px) {
            margin-top: 5px;
            font-size: 24px;
            line-height: 34px;
        }
        @media only screen and (max-width: 390px) {
            font-size: 18px;
            line-height: 28px;
        }
    }
    
    &__circle-card-content-avatar {
        width: 259px;
        @media only screen and (max-width: 900px) {
            width: 250px;
        }
        @media only screen and (max-width: 500px) {
            width: 100px;
        }
    }

    &__card-header {
        display: flex;
        flex-direction: row;
    }
    &__card-header-wrap {
        margin-left: 24px;
    }

    &__card-header-img{
        max-width: 144px;
        width: 100%;
        @media (max-width: 720px) {
            max-width: 100px;
            height: 100px;
        }
        @media (max-width: 390px) {
            max-width: 50px;
            height: 50px;
        }
    }

    &__card-header-title {
        font-family: 'Inter';
        font-weight: 700;
        font-size: 48px;
        line-height: 52px;
        color: #FFFFFF;
        @media (max-width: 720px) {
            font-size: 18px;
            line-height: 28px;
        }
    }

    &__card-header-text {
        margin-top: 8px;
        font-family: 'Inter';
        font-weight: 400;
        font-size: 18px;
        line-height: 28px;
        color: #F2F2F2;
        @media (max-width: 720px) {
            margin-top: 4px;
            font-size: 14px;
            line-height: 20px;
        }
    }

    &__card-text {
        margin-top: 24px;
        font-family: 'Inter';
        font-weight: 400;
        font-size: 18px;
        line-height: 28px;
        color: #FFFFFF;
        @media (max-width: 720px) {
            margin-top: 15px;
            font-size: 10px;
            line-height: 16px;
        }
    }

    &__card-footer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    &__card-footer-button {
        max-height: 50px;
        padding: 16px 26px;
        font-family: 'Inter';
        font-weight: 600;
        font-size: 12px;
        line-height: 18px;
        text-transform: uppercase;
        color: #1B1B29;
        background-color: #FFFFFF;
        border-radius: 60px;
        @media (max-width: 720px) {
            font-size: 10px;
            line-height: 16px;
            padding: 12px 16px;
            max-height: 40px;
        }
    }

    &__card-footer-wrap {
        display: flex;
        flex-direction: row;
        @media (max-width: 720px) {
            max-width: 50px;
            align-items: center;
        }
    }

    &__card-footer-wrap-arrow {
        width: 50px;
        height: 50px;
        @media (max-width: 720px) {
            width: 25px;
            height: 25px;
        }
    }
}
.wrap{
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
}
.wrap-img{
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
}

.wrap-img:hover > .img {
    margin-left: -18px;
    transition: 0.9s;
}
.img{
    width: 64px;
    height: 64px;
    margin-left: -24px;
    transition: 0.9s;
}

.img:first-child{
    margin-left: 0px;
}
.wrap-img:hover > .img:first-child {
    margin-left: 0px;
}

.numb-1{
    z-index: 1;
}

.numb-2{
    z-index: 2;
}

.numb-3{
    z-index: 3;
}

.numb-4{
    z-index: 4;
}

.numb-5{
    z-index: 5;
}

.small_img{
    width: 54px;
    height: 54px;
}
.large_img{
    width: 128px;
    height: 128px;
    margin-left: -35px;
}

.card__partners-text{
    padding-left: 16px;
    font-family: 'Inter';
    font-weight: 400;
    font-size: 28px;
    line-height: 32px;
    display: flex;
    align-items: center;
    color: #828282;
    @media (max-width: 1400px) {
        font-size: 14px;
        line-height: 16px;
    }
}
@media only screen and (max-width: 1920px) {
    .wrap-img:hover > .img {
        margin-left: -18px;
        transition: 0.9s;
    }
    .img{
        width: 64px;
        height: 64px;
        margin-left: -24px;
        transition: 0.9s;
    }
    .large_img{
        width: 96px;
        height: 96px;
        margin-left: -35px;
    }

    .small_img{
        width: 54px;
        height: 54px;
    }
}
@media only screen and (max-width: 1281px) {
    .text-question{
        margin-top: 16px;
        padding: 10px 16px 12px;
    }
}
@media only screen and (max-width: 1800px){
    .large_img{
        width: 64px;
        height: 64px;
        margin-left: -25px;
    }
}
@media only screen and (max-width: 1000px) {
    .card__partners-text{
        display: none;
    }
    .img{
        width: 48px;
        height: 48px;
    }
    .large_img{
        width: 48px;
        height: 48px;
        margin-left: -25px;
    }
}
@media only screen and (max-width: 360px) {
    .img{
        width: 44px;
        height: 44px;
    }
    .small_img{
        width: 36px;
        height: 36px;
    }
}
</style> 