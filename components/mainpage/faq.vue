<template>
  <div class="container-mit">
    <div class="main__wrap">
      <h4 class="main__wrap-title">А тут ответы</h4>
      <p class="main__wrap-text">На частые вопросы</p>
      <div class="wrap__faq">
        <MainpageAtomFaqCollapse
          title="Всем надо проходить проверку по аккредитации?"
          text="Проверку проходят ВСЕ компании, кроме тех, кто использует льготы (подпункт 1(1) пункта 2 и пункт 2(2) статьи 427 НК РФ). Согласие отправляют ВСЕ компании (включая льготников)"
        />
        <MainpageAtomFaqCollapse
          title="Если ЗП не соответствует уровню при подтверждении, то слетит аккредитация?"
          text="Да! Это обязательное условие. Кроме тех, кто указан в пункте 2, или имеет выручку от реализации собственного ПО, внесенного в реестр. Иных альтернатив нет.  (Данные по ПО подтянутся на форме заявления автоматически по ИНН)"
        />
        <MainpageAtomFaqCollapse
          title="Как происходит проверка средней ЗП по периодам?"
          text="При плановой проверке в июле будут анализироваться данные компании за 4 квартал 2022 года и 1 квартал 2023 года и сравниваться с данными Росстата соответственно за 3 квартал 2022 года и 4 квартал 2022 года.Новые компании, созданные в 2023 году, не будут в текущей (в июле) проверке проверяться по соответствию ЗП."
        />
        <MainpageAtomFaqCollapse
          title="Как подписать справку о доходах?"
          text="Подписывать справку нужно откреплённой усиленной квалифицированной электронной подписью руководителя или руководителя и бухгалтера. На экране <a target='_blank' href='https://gu-st.ru/content/Other/doc/podpisanie_full.pdf'>Подпишите и загрузите документы</a> есть подробная инструкция как это сделать"
        />
        <MainpageAtomFaqCollapse
          title="Как воспользоваться правом на отсрочку от срочной службы для специалистов аккредитованных ИТ-компаний"
          text='<a href="http://publication.pravo.gov.ru/Document/View/0001202204010045" target="_blank">Подать заявку на ГосУслугах в установленные законодательством сроки Постановление Правительства Российской Федерации от 28.03.2022 № 490</a>'
        />
      </div>
      <div class="wrap__feedback">
        <p class="wrap__feedback-title">Остались вопросы?</p>
        <p class="wrap__feedback-text">
          Не стесняйтесь их задать — на все ответим
        </p>
        <a href="https://t.me/MIT_union" target="_blank" class="wrap__feedback-button">мне только спросить</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@import "./assets/scss/mainpage.scss";
.main__wrap {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 128px 160px;
  background: #ffffff;
  border-radius: 120px;
}
.main__wrap-title {
  font-family: "Inter";
  font-weight: 600;
  @include adaptiv-size(128, 64, 30);
  @include adaptiv-height(160, 80, 36);
  display: flex;
  align-items: center;
  text-align: center;
  color: #1b1b29;
}
.main__wrap-text {
  padding-top: 16px;
  font-family: "Inter";
  font-weight: 400;
  @include adaptiv-size(48, 24, 16);
  @include adaptiv-height(64, 32, 24);
  display: flex;
  align-items: center;
  text-align: center;
  color: #1b1b29;
}
.wrap__faq {
  padding-top: 48px;
  width: 100%;
}
.wrap__feedback {
  padding-top: 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.wrap__feedback-title {
  font-family: "Inter";
  font-weight: 600;
  @include adaptiv-size(56, 28, 23);
  @include adaptiv-height(64, 32, 32);
  color: #000000;
}

.wrap__feedback-text {
  padding-top: 16px;
  padding-bottom: 64px;
  font-family: "Inter";
  font-weight: 400;
  @include adaptiv-size(48, 24, 16);
  @include adaptiv-height(64, 32, 24);
  color: #1b1b29;
}

.wrap__feedback-button{
    border: none;
    padding: 16px 26px;
    background: #34057B;
    border-radius: 60px;
    font-family: 'Inter';
    font-weight: 600;
    @include adaptiv-size(24, 12, 12);
    @include adaptiv-height(36, 18, 18);
    text-transform: uppercase;
    color: #FFFFFF;
}

@media only screen and (max-width: 1921px) {
  .main__wrap {
    border-radius: 90px;
    padding: 96px 120px;
  }
  .wrap__feedback-text {
    padding-top: 12px;
    padding-bottom: 48px;
  }
}

@media only screen and (max-width: 1281px) {
  .main__wrap {
    border-radius: 60px;
    padding: 64px 80px;
  }
  .wrap__feedback-text {
    padding-top: 8px;
    padding-bottom: 32px;
  }
}

@media only screen and (max-width: 1000px) {
  .main__wrap {
    border-radius: 32px;
  }
}

@media only screen and (max-width: 768px) {
  .main__wrap {
    padding: 48px 24px;
    width: 100%;
  }
  .main__wrap-text {
    padding-top: 2px;
  }
  .wrap__faq {
    padding-top: 24px;
  }

  .wrap__feedback {
    padding-top: 24px;
  }

  .main__wrap-title{
    align-items: center;
    text-align: center;
  }

  .wrap__feedback-title{
    align-items: center;
    text-align: center;
  }

  .wrap__feedback-text {
    padding-top: 8px;
    padding-bottom: 32px;
    text-align: center;
  }
}
</style>
