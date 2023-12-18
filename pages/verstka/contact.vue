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
                <p class="header__info-title">Контакты</p>
                <div class="header__info-wrap">
                    <p class="header__info-wrap-text">главная</p>
                    <p class="header__info-wrap-text">контакты</p>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="content__circle-card">
                <div class="content__circle-card-content">
                    <MainpageAtomImageCaterpillar
                        img1="/images/photo-0.png"
                        img2="/images/photo-1.png"
                        img3="/images/photo-2.png"
                        img4="/images/photo-3.png"
                        img5="/images/photo-4.png"
                        img6="/images/photo-5.png"
                        cssClass="large_img"
                    />
                    <div class="content__circle-card-content-text">
                        <p class="content__circle-card-content-text-title">
                            50 000 +
                        </p>
                        <p class="content__circle-card-content-text-subtitle">
                            Участников и волонтеров<br>по всей России
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
                        <img src="/images/6.png" alt="img" class="content__card-header-img">
                        <div class="content__card-header-wrap">
                            <p class="content__card-header-title">Евгений Титаренко</p>
                            <p class="content__card-header-text">Лидер Мы ИТ</p>
                        </div>
                    </div>
                <p class="content__card-text">Лидер Мы IT. Отвечает за все что здесь происходит, курирует и связывается с разными высокопоставленными чиновниками и всегда будет рад всем помочь. Лидер Мы IT. Отвечает за все что здесь происходит, курирует и связывается с разными высокопоставленными чиновниками и всегда будет рад всем помочь.</p>
                </div>
                <div class="content__card-footer">
                    <a href="" class="content__card-footer-button">написать в телеграмм</a>
                    <div class="content__card-footer-wrap">
                        <img src="/images/button-prev.png" alt="prev" class="content__card-footer-wrap-arrow">
                        <img src="/images/button-next.png" alt="next" class="content__card-footer-wrap-arrow">
                    </div>
                </div>
            </div>
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
    }

    &__info-title {
        font-family: 'Inter';
        font-weight: 700;
        font-size: 96px;
        line-height: 96px;
        color: #1B1B29;
        @media only screen and (max-width: 900px) {
            font-size: 40px;
            line-height: 56px;
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
    max-width: 1920px;
    max-height: 960px;
    width: 100vw;
    height: 50vw;
    display: flex;
    flex-direction: row;
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
        height: 50vw;
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
        @include adaptiv-size(124, 96, 24);
        @include adaptiv-height(124, 96, 34);
        @media only screen and (max-width: 900px) {
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
        margin-top: 24px;
        font-weight: 400;
        @include adaptiv-size(64, 32, 12);
        @include adaptiv-height(80, 40, 22);
        @media only screen and (max-width: 900px) {
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
</style> 