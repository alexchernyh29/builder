<template>
  <div class="container-mit">
    <h4 class="footer-title small">
      АССОЦИАЦИЯ СПЕЦИАЛИСТОВ, ИНВЕСТОРОВ И ОРГАНИЗАЦИЙ В СФЕРЕ ИНФОРМАЦИОННЫХ
      ТЕХНОЛОГИЙ МИТ - МЫ ИТ
    </h4>
  </div>
  <div class="footer__wrap">
    <div class="wrap-links">
      <a href="https://t.me/MIT_union" target="_blank" class="footer__wrap-text">Чат МыИТ</a>
			<a href="/docs/" target="_blank" class="footer__wrap-text">Документы</a>
      <a class="footer__wrap-text">ИНН: 7720859286</a>
    </div>
    <div class="wrap-links">
      <!-- <a href="https://spcode.ru" target="_blank" class="footer__wrap-company"
        >© 2023, developed by <u style="margin-left: 5px;">spcode</u></a
      > -->
      <a
        href="https://www.zephyrlab.ru/"
        target="_blank"
        class="footer__wrap-company"
        >© 2023, design by 
          <svg class="logo__zephyr" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.8" y="0.8" width="46.4" height="46.4" stroke="white" stroke-width="1.6"/>
            <g clip-path="url(#clip0_784_18044)">
            <path d="M36.0002 14.7999V8.3999H40.0002V9.27114H36.9514V11.1414H39.5519V12.0028H36.9514V13.9254H40.0002V14.7966H36.0002V14.7999Z" fill="white"/>
            <path d="M39.2364 40.7999L37.8466 38.1043H36.5986V40.7999H35.6001V34.3999H38.1536C39.405 34.3999 40.1977 35.1827 40.1977 36.2701C40.1977 37.1872 39.6243 37.7702 38.8822 37.97L40.4001 40.7999H39.2364ZM38.0794 35.2711H36.5986V37.2756H38.0794C38.7473 37.2756 39.1993 36.9088 39.1993 36.2767C39.1993 35.6478 38.7473 35.2711 38.0794 35.2711Z" fill="white"/>
            <path d="M35.2002 28V27.2H40.4002V28H35.2002Z" fill="white"/>
            <path d="M8.00024 14.7999V13.9647L10.8875 9.27114H8.12175V8.3999H12.0002V9.19253L9.09697 13.9287H12.0002V14.7999H8.00024Z" fill="white"/>
            <path d="M10.3853 25.0832H8.95299V27.6H8.00024V21.2H10.3853C11.6117 21.2 12.4002 22.0258 12.4002 23.1432C12.4002 24.2574 11.6117 25.0832 10.3853 25.0832ZM10.3338 22.0716H8.95299V24.2017H10.3306C10.9937 24.2017 11.4443 23.815 11.4443 23.1399C11.4443 22.4682 10.9937 22.0716 10.3338 22.0716Z" fill="white"/>
            <path d="M10.4027 37.9986V39.5999H9.59778V37.9986H8.00024V37.1918H9.59778V35.5999H10.4027V37.1918H12.0002V37.9986H10.4027Z" fill="white"/>
            <path d="M25.0597 27.9999V25.206H22.5405V27.9999H21.6001V21.5999H22.5405V24.3315H25.0597V21.5999H26.0001V27.9999H25.0597Z" fill="white"/>
            <path d="M24.4847 38.1665V40.7999H23.5155V38.1665L21.6001 34.3999H22.6609L24.0001 37.2134L25.3393 34.3999H26.4001L24.4847 38.1665Z" fill="white"/>
            <path d="M22 9.59985V13.5999L26 11.5999L22 9.59985Z" fill="white"/>
            </g>
            <defs>
            <clipPath id="clip0_784_18044">
            <rect width="32.4" height="32.4" fill="white" transform="translate(8.00024 8.3999)"/>
            </clipPath>
            </defs>
          </svg> 
          <u>zephyr</u></a
      >
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "./assets/scss/mainpage.scss";
.footer-title {
  max-width: 1330px;
  margin: 0 auto;
  padding: 100px 0px;
  font-family: "Inter";
  font-weight: 400;
  @include adaptiv-size(36, 18, 14);
  @include adaptiv-height(56, 28, 16);
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: #f2f2f2;
}

.small {
  padding: 40px 0 0px 0;
}
.footer__wrap {
  border-top: 1px solid rgba(130, 130, 130, 0.5);
  padding: 22px 64px 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.logo__zephyr{
  width: 40px;
  height: 40px;
  margin: 5px 24px;
}
.footer__wrap-text {
  padding-left: 42px;
  font-family: "Inter";
  font-weight: 400;
  font-size: 32px;
  line-height: 48px;
  color: #828282;
}

.footer__wrap-text:first-child {
  padding-left: 0px;
}

.footer__wrap-company {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 42px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 48px;
  color: #fff;
}
.footer__wrap-company:first-child {
  padding-left: 0px;
}
.wrap-links{
  display: flex;
  flex-direction: row;
}
@media only screen and (max-width: 2100px) {
  .footer__wrap {
    padding: 16px 48px 24px;
  }
  .footer__wrap-text {
    padding-left: 32px;
    font-size: 24px;
    line-height: 36px;
  }
  .footer__wrap-company {
    padding-left: 32px;
    font-size: 24px;
    line-height: 36px;
  }
  .logo__zephyr{
    width: 30px;
    height: 30px;
    margin: 4px 24px 0;
  }
  .footer-title {
    max-width: 1000px;
  }
}
@media only screen and (max-width: 1600px) {
  .footer__wrap-text {
    padding-left: 32px;
    font-size: 16px;
    line-height: 24px;
  }
  .footer__wrap-company {
    padding-left: 32px;
    font-size: 16px;
    line-height: 24px;
  }
  .logo__zephyr{
    width: 20px;
    height: 20px;
    margin: 4px 14px 0;
  }
  .footer-title {
    max-width: 670px;
    padding: 40px 0;
  }
}
@media only screen and (max-width: 1100px) {
  .footer__wrap {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .wrap-links {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .footer__wrap-text {
    padding-left: 0px;
  }
  .footer__wrap-company {
    padding-left: 0px;
  }
  .footer-title {
    padding: 40px 0px;
  }
}
@media only screen and (max-width: 768px) {
  .footer-title {
    margin: 0 15px;
    padding: 24px 24px;
    text-align: center;
  }
}
@media only screen and (max-width: 391px) {
  .footer-title {
    margin: 0px auto;
    padding: 24px 8px;
    text-align: center;
    max-width: 312px;
  }
  .footer__wrap-text {
    margin-top: 12px;
    font-size: 14px;
    line-height: 20px;
  }
  .footer__wrap-company {
    margin-top: 12px;
    font-size: 14px;
    line-height: 20px;
  }
}
</style>
