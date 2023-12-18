<template>
	<div class="container-default">
		<div class="header">
            <div class="header__wrap">
                <img src="/images/logo.svg" alt="logo" class="header__logo">
                <p class="header__text">Некоммерческая организация, объединяющая представителей отрасли цель которых — конструктивное взаимодействие как внутри неё, так и с государственными структурами</p>
            </div>
            <div class="header__wrap">
                <a href="" class="header__button-help">Написать нам</a>
                <a href="" class="header__button-menu">МЕНЮ</a>
            </div>
        </div>
        <div class="content">
            <div class="content__wrap">
                <p class="content__info-more">Скоро</p>
                <p class="content__title">Страница<br>в разработке</p>
                <p class="content__info">Наши разработчики трудятся в поте лица и совсем скоро, у нас появится новый раздел! А пока, подпишитесь на наш телеграм канал</p>
                <a href="" class="content__button">Перейти в телеграм</a>
            </div>
        </div>
	</div>
</template>
<script setup>

</script>
<style lang="scss" scoped>
@import "../assets/scss/mainpage.scss";
.header{
    width: 100%;
    padding: 24px 48px;
    background: #FFFFFF;
    border-radius: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    @media only screen and (max-width: 900px) {
        border-radius: 30px;
    }

    &__wrap {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        @media only screen and (max-width: 500px) {
            &:last-child{
                display: none;
            }
        }
    }

    &__logo {
        max-width: 118px;
        width: 100%;
        height: 100%;
        @media only screen and (max-width: 900px) {
            max-width: 75px;
        }
    }

    &__text {
        margin-left: 24px;
        max-width: 500px;
        font-family: 'Inter';
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        color: #828282;
        @media only screen and (max-width: 1000px) {
            display: none;
        }
    }

    &__button-help {
        padding: 16px 26px;
        background: #34057B;
        color: #FFFFFF;
        border-radius: 60px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 18px;
        text-transform: uppercase;
    }

    &__button-menu {
        padding: 16px 26px;
        background: #921CBC;
        color: #FFFFFF;
        border-radius: 60px;
        font-family: 'Inter';
        font-weight: 600;
        font-size: 12px;
        line-height: 18px;
        text-transform: uppercase;
    }
}
.content{
    width: 100%;
    height: 100%;
    background: linear-gradient(202.54deg, #EF5DA8 7.32%, #8E1CBA 70.7%);
    border-radius: 60px;
    @media only screen and (max-width: 900px) {
        border-radius: 30px;
    }

    &__wrap {
        position: relative;
        max-width: 728px;
        padding: 64px 0;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        @media only screen and (max-width: 900px) {
            max-width: 290px;
        }
    }

    &__info-more {
        position: absolute;
        top: 36%;
        left: 80%;
        max-width: 217px;
        padding: 18px 32px;
        background: #E45289;
        border-radius: 112px;
        transform: rotate(-22.39deg);
        font-family: 'Inter';
        font-weight: 700;
        font-size: 48px;
        line-height: 52px;
        color: #FFFFFF;
        @media only screen and (max-width: 900px) {
            font-size: 12px;
            line-height: 22px;
            padding: 3px 12px;
            top: 35%;
            left: 80%;
        }
    }

    &__title {
        font-family: 'Inter';
        font-weight: 700;
        font-size: 96px;
        line-height: 96px;
        text-align: center;
        color: #FFFFFF;
        @media only screen and (max-width: 900px) {
            font-size: 36px;
            line-height: 46px;
        }
    }

    &__info {
        margin-top: 40px;
        font-family: 'Inter';
        font-weight: 400;
        font-size: 24px;
        line-height: 32px;
        text-align: center;
        color: #FFFFFF;
        @media only screen and (max-width: 900px) {
            font-size: 12px;
            line-height: 22px;
            margin-top: 10px;
        }
    }

    &__button{
        max-width: 188px;
        margin-top: 24px;
        padding: 16px 26px;
        border-radius: 60px;
        background-color: #FFFFFF;
        color: #000000;
        font-family: 'Inter';
        font-weight: 600;
        font-size: 12px;
        line-height: 18px;
        text-align: center;
        text-transform: uppercase;
    }
}
</style>