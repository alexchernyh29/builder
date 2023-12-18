<template>
  <div class="container-mit">
    <div class="support">
      <div class="support__title">
        Мы решаем конкретные задачи 
        ИТ-индустрии
      </div>
      <!-- <div class="support__title-mobail">
        Мы хотим, чтобы каждый был услышан и значим
      </div> -->
      <div class="support__cards">
        <MainpageAtomInfoCard
          titleTag="инициативы"
          img="/images/emblem.svg"
          title=">50"
          span="Инициатив"
          text="одобрено на&nbsp;уровне министерства"
        />
        <MainpageAtomInfoCard
          colorTag="pink"
          titleTag="поддержка"
          title=">500"
          span="Разъяснений"
          text="и&nbsp;ответов на&nbsp;важные вопросы"
        />
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
@import "./assets/scss/mainpage.scss";
.support {
  padding: 64px 48px 48px;
  background: #ffffff;
  border-radius: 120px;
}
.support__title {
  max-width: 2200px;
  font-family: "Inter";
  font-weight: 600;
  @include adaptiv-size(128, 64, 32);
  @include adaptiv-height(160, 80, 40);
  background: linear-gradient(295.49deg, #8e1cba 60.3%, #3d0881 80.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.support__title-mobail {
  display: none;
}
.support__cards {
  margin-top: 120px;
  display: flex;
}

@media only screen and (max-width: 1921px) {
  .support {
    border-radius: 90px;
  }
  .support__title {
    max-width: 1700px;
  }
}

@media only screen and (max-width: 1281px) {
  .support {
    border-radius: 60px;
  }
  .support__title {
    max-width: 1150px;
  }
}

@media only screen and (max-width: 1279px) {
  .support__cards {
    flex-direction: column;
    align-items: center;
    margin-top: 24px;
  }
}
@media only screen and (max-width: 1000px) {
  .support {
    padding: 24px;
    border-radius: 32px;
  }
  .support__title-mobail {
    display: block;
    font-family: "Inter";
    font-weight: 600;
    font-size: 32px;
    line-height: 40px;
    background: linear-gradient(295.49deg, #8e1cba 60.3%, #3d0881 80.15%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
}
</style>
