<template>
	<div class="container-default">
		<div class="header">
                <img src="/images/development__logo.png" alt="logo" class="header__logo">
            <div class="header__wrap">
                <a href="" class="header__button-help">Написать нам</a>
                <a href="" class="header__button-menu">МЕНЮ</a>
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
</style> 