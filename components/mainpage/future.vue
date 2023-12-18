<template>
  <div class="container-mit">
    <div class="wrap__section">
      <p ref="elem2" :class="{'show': showIt2}" class="background-text"><span class="style-text">24</span>/7</p>
      <div class="wrap__header">
        <div class="wrap__author">
          <!-- <MainpageAtomVideoContent :isMinimal="true" /> -->
          <img src="/images/6.png" alt="author-img" class="wrap__author-img">
          <div class="wrap__author-info">
            <p class="wrap__author-name">Евгений Титаренко</p>
            <p class="wrap__author-description">Лидер Мы ИТ</p>
          </div>
        </div>
        <div class="wrap__header-slogan">
          <p class="wrap__header-title">Меняем будущее вместе с вами</p>
          <p class="wrap__header-description">
            — создавая новую форму<br />взаимодействия<br />ит-отрасли с
            госорганами,<br />которая показала свою эффективность
          </p>
        </div>
        <div class="wrap__header-mobile">
          <p class="header__description-mobile">
            — Мы смогли создать новую форму взаимодействия it-отрасли с
            госорганами, которая показала свою эффективность
          </p>
        </div>
      </div>
      <div ref="elem3" :class="{'show': showIt3}" class="wrap__card">
        <MainpageAtomMainCard
          tag="поддержка"
          title="IT — Отсрочки от частичной мобилизации"
          text="Инициировали и помогли реализовать Минцифры РФ систему отсрочек от частичной мобилизации для ИТ-специалистов аккредитованных компаний. Консультируем ИТ-специалистов по вопросам отсрочки от призыва на срочную службу."
          title_caterpillar="— Наши волонтёры"
          link="https://t.me/MIT_union/44595"
          img_caterpillar_1="/images/photo-0.png"
          img_caterpillar_2="/images/photo-1.png"
          img_caterpillar_3="/images/photo-2.png"
          img_caterpillar_4="/images/photo-3.png"
          img_caterpillar_5="/images/photo-4.png"
          img_caterpillar_6="/images/photo-5.png"
          cssClass="large_card-first"
          />
        <MainpageAtomMainCard
          tag="аккредитация"
          title="Аккредитация ИТ-компаний"
          tag_question_1="Как передать согласие на раскрытие налоговой тайны?"
          tag_question_4="Кто может получить ИТ-аккредитацию?"
          tag_question_5="Как показываем зарплату?"
        />
        
      </div>
      <MainpageAtomMainCard
        tag="инициатива"
        main_img_caterpillar_1="/images/9.png"
        title="Законодательные инициативы"
        tag_question_1="Список ИТ-специальностей для постановления Правительства"
        tag_question_2="ИТ-ипотека"
        tag_question_3="Перечень ОКВЭД для ИТ-аккредитации"
        link="https://t.me/MIT_union/44600"
        title_caterpillar="— Наши партнёры"
        img_caterpillar_1="/images/photo-0.png"
        img_caterpillar_2="/images/photo-1.png"
        img_caterpillar_3="/images/photo-2.png"
        img_caterpillar_4="/images/photo-3.png"
        img_caterpillar_5="/images/photo-4.png"
        cssClass="large_card-left"
      />
      <div ref="elem4" :class="{'show': showIt4}" class="wrap__card">
        <MainpageAtomMainCard
          tag="развитие"
          main_img_caterpillar_1="/images/12.png"
          main_img_caterpillar_2="/images/11.png"
          title="Развитие стартапов"
          text="Консультации по регистрации, оформлению, маркетинговой стратегии, участии в тендерах, поиска инвесторов и стратегических партнеров. Организуем питч-сессии для инвесторов, заказчиков и представителей государства."
          link="https://t.me/MIT_union/44599"
          title_caterpillar="— Наши ангелы"
          img_caterpillar_1="/images/photo-0.png"
          img_caterpillar_2="/images/photo-1.png"
          img_caterpillar_3="/images/photo-8.png"
          img_caterpillar_4="/images/photo-7.png"
          img_caterpillar_5="/images/photo-4.png"
          cssClass="large_card"
        />
        <MainpageAtomQuestionCard
          tag="обучение"
          title="IT — Обучение"
          description="Диалог внутри отрасли по проблемам и перспективам ИТ-образования, формулирование предложений в государственные структуры, связанные с ИТ-образованием."
          link="https://t.me/MIT_union/44601"
        />
      </div>
      <div ref="elem5" :class="{'show': showIt5}" class="wrap__card">
        <MainpageAtomQuestionCard
          tag="инвестиции"
          title="Сообщество ИТ-директоров"
          description="Консультации по вопросам участия в конкурсах и получения грантов/субсидий от государства и частных фондов"
          tag_question="317 компаний"
        />
        <MainpageAtomQuestionCard
          tag="мероприятия"
          title="Тематические зумы и офлайн мероприятия"
          description="Поддержание диалога между сотрудниками индустрии и Минцифры. Регулярно наполняемая База знаний с ответами и инструкциями"
          link="https://t.me/MIT_union/53269"
        />
        <div ref="elem1" :class="{'show': showIt1}" class="card__more small_card">
          <p class="card__more-title">Самое важное<br/>МИТ - Мы ИТ</p>
          <a href="https://t.me/MIT_union/1" target="_blank" class="card__next-white">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="arrow-more"
            >
              <path
                d="M1.99969 9H15.9997"
                class="path-arrow"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M9.99969 3L16.4997 9L9.99969 15"
                class="path-arrow"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
    const elem1 = ref(null);
    const showIt1 = ref(false)
    const elem2 = ref(null);
    const showIt2 = ref(false)
    const elem3 = ref(null);
    const showIt3 = ref(false)
    const elem4 = ref(null);
    const showIt4 = ref(false)
    const elem5 = ref(null);
    const showIt5 = ref(false)

    onMounted(() => {
        const options2 = {
            root: null, // для события используем вьюпорт
            rootMargin: '0px', // к телу элемента добавить 10px на срабатывание события
            threshold: 0.25 // событие должно сработать, когда во вьюпорте появится 10% объекта
        }
        const observer2 = new IntersectionObserver((entries2, observer2) => {
            entries2.forEach(entry => {
                if (entry.isIntersecting) {
                    showIt2.value = true // здесь прописываем какое событие должно сработать, когда элемент появится по вьюпорте (все вокруг - это служебное api)
                    observer2.unobserve(elem2.value) // отключаем слежение за объектом
                }
            })
        }, options2)
        observer2.observe(elem2.value); // включить слежение за объектом
        const options = {
            root: null, // для события используем вьюпорт
            rootMargin: '0px', // к телу элемента добавить 10px на срабатывание события
            threshold: 0.2 // событие должно сработать, когда во вьюпорте появится 10% объекта
        }
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    showIt1.value = true // здесь прописываем какое событие должно сработать, когда элемент появится по вьюпорте (все вокруг - это служебное api)
                    observer.unobserve(elem1.value) // отключаем слежение за объектом
                }
            })
        }, options)
        observer.observe(elem1.value); // включить слежение за объектом

        const options3 = {
            root: null, // для события используем вьюпорт
            rootMargin: '0px', // к телу элемента добавить 10px на срабатывание события
            threshold: 0.2 // событие должно сработать, когда во вьюпорте появится 10% объекта
        }
        const observer3 = new IntersectionObserver((entries3, observer3) => {
            entries3.forEach(entry => {
                if (entry.isIntersecting) {
                    showIt3.value = true // здесь прописываем какое событие должно сработать, когда элемент появится по вьюпорте (все вокруг - это служебное api)
                    observer3.unobserve(elem3.value) // отключаем слежение за объектом
                }
            })
        }, options3)
        observer3.observe(elem3.value); // включить слежение за объектом

        const options4 = {
            root: null, // для события используем вьюпорт
            rootMargin: '0px', // к телу элемента добавить 10px на срабатывание события
            threshold: 0.2 // событие должно сработать, когда во вьюпорте появится 10% объекта
        }
        const observer4 = new IntersectionObserver((entries4, observer4) => {
            entries4.forEach(entry => {
                if (entry.isIntersecting) {
                    showIt4.value = true // здесь прописываем какое событие должно сработать, когда элемент появится по вьюпорте (все вокруг - это служебное api)
                    observer4.unobserve(elem4.value) // отключаем слежение за объектом
                }
            })
        }, options4)
        observer4.observe(elem4.value); // включить слежение за объектом

        const options5 = {
            root: null, // для события используем вьюпорт
            rootMargin: '0px', // к телу элемента добавить 10px на срабатывание события
            threshold: 0.2 // событие должно сработать, когда во вьюпорте появится 10% объекта
        }
        const observer5 = new IntersectionObserver((entries5, observer5) => {
            entries5.forEach(entry => {
                if (entry.isIntersecting) {
                    showIt5.value = true // здесь прописываем какое событие должно сработать, когда элемент появится по вьюпорте (все вокруг - это служебное api)
                    observer5.unobserve(elem5.value) // отключаем слежение за объектом
                }
            })
        }, options5)
        observer5.observe(elem5.value); // включить слежение за объектом
    })
</script>

<style lang="scss" scoped>
@import "./assets/scss/mainpage.scss";
.style-text {
  letter-spacing: -40px;
  padding-right: 30px;
}
.background-text {
  position: absolute;
  top: 41%;
  left: 40%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  @include adaptiv-size(600, 300, 0);
  @include adaptiv-height(760, 380, 0);
  color: #ffffff;
  letter-spacing: -52.0258px;
  opacity: 0.1;
  z-index: 1;
  transition: 0.5s;
  transition-timing-function: ease-out;
  &.show{
    left: 2%;
    opacity: 0.3;
  }
}
.wrap__section {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 96px;
  background: linear-gradient(45deg, #e45289 0%, #921cbc 100%);
  border-radius: 120px;
  position: relative;
}
.wrap__header {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 64px;
}

.wrap__author-info {
  margin-top: 10px;
}
.wrap__author {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 370px;
}

.wrap__header-slogan {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.arrow-more {
  width: 36px;
  height: 36px;
  margin-top: 32%;
  margin-left: 32%;
}
.wrap__header-description {
  font-family: "Inter";
  font-weight: 400;
  @include adaptiv-size(112, 56, 24);
  @include adaptiv-height(118, 59, 32);
  display: flex;
  align-items: center;
  text-align: right;
  letter-spacing: -0.825806px;
  color: #ffffff;
}

.wrap__header-title {
  font-family: "Inter";
  font-weight: 700;
  @include adaptiv-size(112, 56, 24);
  @include adaptiv-height(118, 59, 32);
  display: flex;
  align-items: center;
  text-align: right;
  justify-content: flex-end;
  letter-spacing: -0.825806px;
  color: #ffffff;
}

.wrap__author-name {
  font-family: "Inter";
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  text-align: center;
  color: #ffffff;
}

.wrap__author-description {
  font-family: "Inter";
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  text-align: center;
  color: #ffffff;
}

.wrap__card {
  position: relative;
  top: 150px;
  opacity: 0.2;
  transition: 0.5s;
  transition-timing-function: ease-out;
  width: 100%;
  margin-top: 48px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  &.show{
    top: 0;
    opacity: 1;
  }
}

.card__next-white {
  border: none;
  width: 100px;
  height: 100px;
  background: #fff;
  border-radius: 50%;
  margin-left: 90%;
}
.small_card {
  width: 32%;
  margin-left: 24px;
}

.card__more {
  height: 1150px;
  position: relative;
  top: 150px;
  opacity: 0.5;
  padding: 96px;
  border: 1px solid #ffffff;
  border-radius: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  transition: 0.5s;
  transition-timing-function: ease-out;
  &.show{
    top: 0;
    opacity: 1;
  }
}
.card__more:hover {
  transform: scale(1.03);
  transition: 0.5s;
  background-color: #ffffff;
}

.card__more:hover > .card__more-title {
  color: #025bff;
}

.card__more:hover > .card__next-white {
  background-color: #025bff;
}
.path-arrow {
  stroke: blue;
}

.card__more:hover > .card__next-white > .arrow-more .path-arrow {
  stroke: white;
}



.card__more .small_card {
  width: 35%;
  margin-left: 24px;
}
.card__more-title {
  font-family: "Inter";
  font-weight: 700;
  @include adaptiv-size(80, 40, 24);
  @include adaptiv-height(96, 48, 32);
  color: #ffffff;
}

.wrap__header-mobile {
  display: none;
}
@media only screen and (max-width: 2100px) {
.card__more{
    padding: 72px;
  }
}
@media only screen and (max-width: 1921px) {
  .card__more {
    height: 850px;
  }
  .background-text {
    top: 40%;
    left: 3%;
  }
  .wrap__section {
    padding: 72px;
    border-radius: 90px;
  }
  .wrap__card {
    margin-top: 36px;
  }
  .card__next-white {
    width: 75px;
    height: 75px;
  }
  .arrow-more {
    width: 27px;
    height: 27px;
  }
}
@media only screen and (max-width: 1500px) {
  .card__more {
    height: 700px;
  }
  .card__next-white {
    margin-left: 90%;
  }
  .card__more{
    padding: 48px;
  }
}

@media only screen and (max-width: 1281px) {
  .card__more {
    height: 600px;
  }
  .wrap__section {
    padding: 48px;
    border-radius: 60px;
  }
  .wrap__card {
    margin-top: 24px;
  }
  .wrap__author {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    max-width: 240px;
  }
  .background-text {
    left: 4%;
  }
  .card__next-white {
    width: 50px;
    height: 50px;
  }
  .arrow-more {
    width: 18px;
    height: 18px;
  }
}

@media only screen and (max-width: 1000px) {
  .card__more {
    height: 350px;
  }
  .background-text {
    display: none;
  }
  .wrap__section {
    padding: 24px;
    border-radius: 32px;
  }

  .wrap__header {
    padding-bottom: 0px;
    flex-direction: column-reverse;
  }

  .wrap__author {
    margin-top: 16px;
    flex-direction: row;
  }

  .wrap__header-title {
    text-align: left;
  }

  .wrap__header-description {
    text-align: left;
  }

  .wrap__author-info {
    margin-left: 24px;
  }

  .wrap__author-name {
    text-align: left;
  }

  .wrap__author-description {
    text-align: left;
  }

  .wrap__card {
    flex-direction: column;
    margin-top: 0;
  }

  .card__more {
    margin-top: 16px;
    padding: 24px;
    border-radius: 32px;
  }

  .small_card {
    width: 100%;
    margin-left: 0px;
  }

  .card__more .small_card {
    width: 100%;
    margin-left: 0px;
  }

  .wrap__header-mobile {
    display: block;
  }

  .wrap__header-slogan {
    display: none;
  }
  .header__description-mobile {
    font-family: "Inter";
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    display: flex;
    align-items: center;
    color: #ffffff;
  }

  .card__more-title {
    margin-bottom: 64px;
  }

  .arrow-more {
    width: 12px;
    height: 12px;
    margin-left: 10px;
  }

  .card__next-white {
    width: 32px;
    height: 32px;
    margin-left: 93%;
  }

  .wrap__author-img{
      width: 90px;
  }

  .arrow-more {
    width: 12px;
    height: 12px;
  }
}
@media only screen and (max-width: 600px) {
  .card__next-white {
    width: 32px;
    height: 32px;
    margin-left: 90%;
  }
}
@media only screen and (max-width: 390px) {
  .header__description-mobile {
    font-size: 20px;
    line-height: 28px;
  }
}
</style>
