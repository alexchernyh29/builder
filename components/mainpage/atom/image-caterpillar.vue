<template>
    <div class="wrap">
        <div class="wrap-img">
            <img v-if='img1' :src="img1" class="img numb-0 " :class="cssClass">
            <img v-if='img2' :src="img2" class="img numb-1 " :class="cssClass">
            <img v-if='img3' :src="img3" class="img numb-2 " :class="cssClass">
            <img v-if='img4' :src="img4" class="img numb-3 " :class="cssClass">
            <img v-if='img5' :src="img5" class="img numb-4 " :class="cssClass">
            <img v-if='img6' :src="img6" class="img numb-5 " :class="cssClass">
        </div>
        <p class="card__partners-text" v-if='title'>{{ title }}</p>
    </div>
</template>

<script setup>
    const props = defineProps({
		title: {
			default: "",
			type: String
		},
        img1: {
			default: "",
			type: String
		},
        img2: {
			default: "",
			type: String
		},
        img3: {
			default: "",
			type: String
		},
        img4: {
			default: "",
			type: String
		},
        img5: {
			default: "",
			type: String
		},
        img6: {
			default: "",
			type: String
		},
        cssClass: {
            
        }
    })
</script>
<style lang="scss" scoped>
@import "./assets/scss/mainpage.scss";
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
    @include adaptiv-size(28, 14, 14);
    @include adaptiv-height(32, 16, 16);
    display: flex;
    align-items: center;
    color: #828282;
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
