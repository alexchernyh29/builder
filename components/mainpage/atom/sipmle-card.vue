<template>
	<div class="cards">
        <div class="card__header">
            <slot/>
            <div class="header__wrap">
                <p class="header__wrap-title">{{ price }}</p>
                <p class="header__wrap-text">в год</p>
            </div>
        </div>
        <div class="card__content">
            <p class="card__content-title">{{title}}</p>
            <p class="card__content-text">человек в компании</p>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
		title: {
			default: "title",
			type: String
		},
        price: {
			default: "price",
			type: String
		},
        cssClass:{

        }
    })
</script>
<style lang="scss" scoped>
@import "./assets/scss/mainpage.scss";
.cards{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    background: #F5F3FF;
    border-radius: 50px;
    padding: 96px 86px 96px 96px;
}
.card__header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.header__wrap{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}
.header__wrap-title{
    font-family: 'Inter';
    font-weight: 700;
    @include adaptiv-size(48, 24, 16);
    @include adaptiv-height(64, 32, 16);
    display: flex;
    align-items: center;
    color: #1B1B29;
}
.header__wrap-text{
    font-family: 'Inter';
    font-weight: 400;
    @include adaptiv-size(32, 16, 12);
    @include adaptiv-height(48, 24, 15);
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: #1B1B29;
}
.card__content{
    margin-top: auto;
    display: flex;
    flex-direction: column;
}
.card__content-title{
    font-family: 'Inter';
    font-weight: 700;
    @include adaptiv-size(96, 48, 28);
    @include adaptiv-height(104, 52, 32);
    display: flex;
    align-items: center;
    color: #1B1B29;
}

.card__content-text{
    padding-top: 16px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    @include adaptiv-size(32, 16, 12);
    @include adaptiv-height(48, 24, 14);
    display: flex;
    align-items: center;
    color: #1B1B29;
}

@media (max-width: 1921px) {
    .cards{
        padding: 72px 65px 72px 72px;
    }
    // .card__content{
    //     margin-top: 126px;
    // }
    .card__content-text{
        padding-top: 12px;
    }
}
@media (max-width: 1500px) {
    .cards{
        padding: 48px 43px 48px 43px;
    }
}
@media (max-width: 1281px) {
    .card__content{
        margin-top: 89px;
    }
    .card__content-text{
        padding-top: 8px;
    }
}

@media (max-width: 1000px) {
    .cards{
        padding: 24px;
        width: 100%;
        height: 100%;
        border-radius: 32px;
    }
    .card__content{
        margin-top: 55px;
    }
    .card__content-text{
        padding-top: 5px;
    }
}
@media (max-width: 390px){
    .cards{
        padding: 18px;
        border-radius: 24px;
    }
    .card__header-icon{
        width: 32px;
        height: 32px;
    }
    .header__wrap-text{
        justify-content: flex-end;
    }
}
@media (max-width: 389px){
    .card__content-title{
        font-size: 23px;
        line-height: 28px;
    }   
}

</style>
