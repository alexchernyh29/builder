<template>
	<div class="container-default">
		<div class="header">
            <div class="header__wrap">
                <img src="/images/logo-1.svg" alt="logo" class="header__logo">
                <div class="header__wrap-button">
                    <a href="" class="header__button-help">Написать нам</a>
                    <a href="" class="header__button-menu">МЕНЮ</a>
                </div>
            </div>
            <div class="header__info">
                <p class="header__info-title">Вопрос про IT аккредитации</p>
                <div class="header__info-wrap">
                    <p class="header__info-wrap-text">главная</p>
                    <p class="header__info-wrap-text">вопрос про IT аккредитации</p>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="content__wrap">
                <div class="content__wrap-row">
                    <p class="content__wrap-row-placeholder">Название компании <span style="color: #E45289;">*</span></p>
                    <input type="text" class="content__wrap-row-input" placeholder="ООО «Наименование компании»">
                    <p class="content__wrap-row-placeholder" style="margin-top: 24px;">ИНН <span style="color: #E45289;">*</span></p>
                    <input type="text" class="content__wrap-row-input" placeholder="000-000-000-000">
                </div>
                <div class="content__wrap-row">
                    <p class="content__wrap-row-placeholder">Ник в телеграмме (туда пришлем ответ) <span style="color: #E45289;">*</span></p>
                    <input type="text" class="content__wrap-row-input" placeholder="@elozinskiy">
                    <p class="content__wrap-row-placeholder" style="margin-top: 24px;">Корпоративный Email <span style="color: #E45289;">*</span></p>
                    <input type="text" class="content__wrap-row-input" placeholder="name_company@ru">
                </div>
            </div>
            <div class="content__wrap-main">
                <p class="content__wrap-row-placeholder">Подробно опишите проблему и в чем вопрос <span style="color: #E45289;">*</span></p>
                <input type="text" class="content__wrap-row-input-main" placeholder="Сначала все было нормально, а потом как началось...">
            </div>
            <div class="content__wrap-main">
                <p class="content__wrap-row-placeholder">Прикрепить документ</p>
                <div class="content__wrap-main-list">
                    <a href="" class="content__wrap-main-list-link">
                        <svg style="margin-right: 8px; margin-top: 2px;" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.64667 6.71341C3.58347 6.66713 3.53055 6.60823 3.49126 6.54046C3.45197 6.47269 3.42716 6.3975 3.41839 6.31966C3.40963 6.24181 3.4171 6.16299 3.44033 6.08818C3.46357 6.01337 3.50206 5.94418 3.55339 5.885C3.60471 5.82581 3.66775 5.77791 3.73852 5.74432C3.80929 5.71073 3.88626 5.69218 3.96456 5.68984C4.04287 5.6875 4.12081 5.70142 4.19346 5.73072C4.26611 5.76002 4.3319 5.80407 4.38667 5.86008L5.33333 6.66675V1.33341C5.33333 1.1566 5.40357 0.987035 5.5286 0.86201C5.65362 0.736986 5.82319 0.666748 6 0.666748C6.17681 0.666748 6.34638 0.736986 6.4714 0.86201C6.59643 0.987035 6.66667 1.1566 6.66667 1.33341V6.66675L7.61333 5.84675C7.6681 5.79074 7.73389 5.74669 7.80654 5.71739C7.87919 5.68808 7.95713 5.67416 8.03544 5.67651C8.11374 5.67885 8.19071 5.6974 8.26148 5.73099C8.33225 5.76458 8.39529 5.81248 8.44661 5.87166C8.49794 5.93085 8.53643 6.00003 8.55967 6.07485C8.5829 6.14966 8.59037 6.22848 8.58161 6.30632C8.57284 6.38417 8.54803 6.45936 8.50874 6.52713C8.46945 6.5949 8.41653 6.65379 8.35333 6.70008L6.35333 8.42008C6.33265 8.43583 6.31029 8.44924 6.28667 8.46008C6.25559 8.4818 6.22202 8.49971 6.18667 8.51341H6.08667H5.98H5.87333H5.77333C5.73798 8.49971 5.70441 8.4818 5.67333 8.46008C5.64971 8.44924 5.62735 8.43583 5.60667 8.42008L3.64667 6.71341ZM11.3333 7.33341C11.1565 7.33341 10.987 7.40365 10.8619 7.52868C10.7369 7.6537 10.6667 7.82327 10.6667 8.00008V10.0001C10.6667 10.1769 10.5964 10.3465 10.4714 10.4715C10.3464 10.5965 10.1768 10.6667 10 10.6667H2C1.82319 10.6667 1.65362 10.5965 1.5286 10.4715C1.40357 10.3465 1.33333 10.1769 1.33333 10.0001V8.00008C1.33333 7.82327 1.2631 7.6537 1.13807 7.52868C1.01305 7.40365 0.843478 7.33341 0.666667 7.33341C0.489856 7.33341 0.320286 7.40365 0.195262 7.52868C0.0702379 7.6537 0 7.82327 0 8.00008V10.0001C0 10.5305 0.210714 11.0392 0.585787 11.4143C0.960859 11.7894 1.46957 12.0001 2 12.0001H10C10.5304 12.0001 11.0391 11.7894 11.4142 11.4143C11.7893 11.0392 12 10.5305 12 10.0001V8.00008C12 7.82327 11.9298 7.6537 11.8047 7.52868C11.6797 7.40365 11.5101 7.33341 11.3333 7.33341Z" fill="white"/>
                        </svg>
                        Приложить документ</a>
                    <p class="content__wrap-row-placeholder" style="margin-left: 16px;">PNG или JPG до 2MB</p>
                </div>
            </div>
            <a href="" class="content__link">отправить</a>
        </div>
    </div>
</template>
<script setup>

</script>
<style lang="scss" scoped>
@import "../assets/scss/mainpage.scss";
@import "./assets/scss/mainpage.scss";
.header{
    width: 100%;
    padding: 24px 48px;
    background: #FFFFFF;
    border-radius: 60px;
    display: flex;
    flex-direction: column;
    @media only screen and (max-width: 900px) {
        border-radius: 30px;
        padding: 12px 24px;
    }

    &__wrap {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        
    }

    &__info {
        margin: 24px auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    &__info-wrap {
        margin-top: 24px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    &__info-wrap-text {
        margin-right: 12px;
        font-family: 'Inter';
        font-weight: 600;
        font-size: 12px;
        line-height: 18px;
        color: #828282;
        text-transform: uppercase;
        &:last-child {
            color: #921CBC;
            margin-right: 0;
        }
        @media only screen and (max-width: 900px) {
            font-size: 10px;
            line-height: 16px;
            margin-right: 11px;
        }
    }

    &__info-title {
        font-family: 'Inter';
        font-weight: 700;
        font-size: 96px;
        line-height: 96px;
        color: #1B1B29;
        text-align: center;
        @media only screen and (max-width: 900px) {
            font-size: 32px;
            line-height: 42px;
        }
    }

    &__logo {
        max-width: 250px;
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
        @media (max-width: 720px) {
            padding: 8px 4px;
        }
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
        @media (max-width: 720px) {
            padding: 8px 4px;
        }
    }
}
.content {
    width: 100%;
    padding: 48px;
    background: #FFFFFF;
    border-radius: 60px;
    @media (max-width: 720px) {
        padding: 24px;
        border-radius: 30px;
    }

    &__wrap {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        @media (max-width: 720px) {
            flex-direction: column;
        }
    }

    &__link {
        margin: 0 auto;
        max-width: 127px;
        width: 100%;
        padding: 16px 26px;
        font-family: 'Inter';
        font-weight: 600;
        font-size: 12px;
        line-height: 18px;
        display: flex;
        align-items: center;
        text-align: center;
        text-transform: uppercase;
        color: #828282;
        background: rgba(146, 28, 188, 0.3);
        border-radius: 60px;
    }

    &__wrap-row {
        margin-left: 56px;
        width: 530px;
        &:last-child {
            margin-left: 16px;
        }
        @media (max-width: 720px) {
            margin-left: 0px;
            width: 100%;
            &:last-child {
                margin-left: 0px;
                margin-top: 24px;
            }
        }
    }

    &__wrap-main {
        margin-top: 24px;
        margin-left: 56px;
        margin-bottom: 64px;
        @media (max-width: 720px) {
            margin-left: 0px;
        }
    }

    &__wrap-row-placeholder {
        margin-bottom: 8px;
        font-family: 'Inter';
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #828282;
    }

    &__wrap-row-input {
        padding: 16px 24px;
        width: 100%;
        background: #F5F3FF;
        border-radius: 12px;
    }

    &__wrap-row-input-main {
        width: 100%;
        padding: 24px 0 172px 24px;
        padding-bottom: 220px;
        background: #F5F3FF;
        border-radius: 12px;
    }

    &__wrap-main-list {
        margin-top: 16px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }

    &__wrap-main-list-link {
        padding: 16px 26px;
        font-family: 'Inter';
        font-weight: 600;
        font-size: 12px;
        line-height: 18px;
        display: flex;
        flex-direction: row;
        text-align: center;
        text-transform: uppercase;
        color: #FFFFFF;
        background: #34057B;
        border-radius: 60px;
    }
}
</style>