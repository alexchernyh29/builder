<template>
  <div class="container-mit">
    <div class="communication">
      <div class="communication__content">
        <div class="communication__content-narration">
          <div class="circle__card">
            <div ref="elem8" :class="{'show': showIt8}" class="communication__content-left-quantity">
              <MainpageAtomImageCaterpillar
                img1="/images/photo-0.png"
                img2="/images/photo-1.png"
                img3="/images/photo-2.png"
                img4="/images/photo-3.png"
                img5="/images/photo-4.png"
                img6="/images/photo-5.png"
                cssClass="large_img"
              />
              <div class="communication__content-left-quantity-text">
                <p class="communication__content-left-quantity-size width-content">
                  50 000 +
                </p>
                <p class="communication__content-left-quantity-narration">
                  Участников и волонтеров<br>по всей России
                </p>
              </div>
              <img
                src="/images/peeps-avatar.png"
                class="communication__content-left-quantity-avatar"
              />
            </div>
          </div>
          <MainpageAtomContentCard
            cssClass="communication__content-ether content-right-offers"
            title="Что мы&nbsp;сделали"
            img="/images/offerss.png"
            text="Инициировали и помогли реализовать систему IT-отсрочек от мобилизации, улучшили условия по IT ипотеке, сформировали список ИТ-специальностей для постановления Правительства, дополнили перечень ОКВЭД для ИТ-аккредитации, организовали 7&nbsp;вебинаров с&nbsp;Минцифры для участников сообщества МИТ-Мы ИТ"
          />
        </div>
        <div ref="elem7" :class="{'show': showIt7}" class="communication__content-narration">
          <MainpageAtomContentCard
            cssClass="communication__content-ether"
            title="В&nbsp;прямом эфире"
            img="/images/screen-messages.png"
            text="Продуктивное общение в&nbsp;онлайн с&nbsp;другими представителями ИТ-индустрии и&nbsp;государства. Возможность узнать опыт коллег, поделиться своим и&nbsp;оперативно подсветить частные вопросы или решить текущие задачи."
          />
          <MainpageAtomContentCard
            cssClass="communication__content-ether content-right-informing"
            title="Информирование"
            img="/images/informing.png"
            text="База знаний по&nbsp;вопросам ИТ- аккредитации, поддерживающие вебинары с&nbsp;психологами, получение грантов и&nbsp;субсидий"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

  const elem8 = ref(null);
  const showIt8 = ref(false)
  const elem7 = ref(null);
  const showIt7 = ref(false)
  onMounted(() => {
      const options8 = {
          root: null, // для события используем вьюпорт
          rootMargin: '0px', // к телу элемента добавить 10px на срабатывание события
          threshold: 0.2 // событие должно сработать, когда во вьюпорте появится 10% объекта
      }
      const observer8 = new IntersectionObserver((entries8, observer8) => {
          entries8.forEach(entry => {
              if (entry.isIntersecting) {
                  showIt8.value = true // здесь прописываем какое событие должно сработать, когда элемент появится по вьюпорте (все вокруг - это служебное api)
                  observer8.unobserve(elem8.value) // отключаем слежение за объектом
              }
          })
      }, options8)
      observer8.observe(elem8.value); // включить слежение за объектом

      const options7 = {
        root: null, // для события используем вьюпорт
        rootMargin: '0px', // к телу элемента добавить 10px на срабатывание события
        threshold: 0.2 // событие должно сработать, когда во вьюпорте появится 10% объекта
    }
    const observer7 = new IntersectionObserver((entries7, observer7) => {
        entries7.forEach(entry => {
            if (entry.isIntersecting) {
                showIt7.value = true // здесь прописываем какое событие должно сработать, когда элемент появится по вьюпорте (все вокруг - это служебное api)
                observer7.unobserve(elem7.value) // отключаем слежение за объектом
            }
        })
    }, options7)
    observer7.observe(elem7.value); // включить слежение за объектом
  })
</script>

<style lang="scss">
@import "./assets/scss/mainpage.scss";
.circle__card {
  width: 50vw;
  max-width: 1280px;
  max-height: 1280px;
}

.content-right-offers {
  padding: 0 20px;
}
.communication__content {
  display: flex;
  flex-direction: row;
}

.communication__content-left-quantity {
  position: relative;
  transform: scale(0.1);
  transition: .7s;
  transition-timing-function: ease-out;
  width: 50vw;
  height: 50vw;
  max-width: 1280px;
  max-height: 1280px;
  background: #ffffff;
  border-radius: 10000px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
  &.show{
    transform: scale(1);
  }
}
.communication__content-left-quantity-user {
  padding-top: 176px;
}
.communication__content {
    display: flex;
    flex-direction: column;
  }

.communication__content-narration {
  display: flex;
  // justify-content: center;
  align-items: flex-start;
}
.communication__content-left-quantity-text {
  font-family: "Inter";
  color: #1b1b29;
  text-align: center;
}
.communication__content-left-quantity-size {
  margin-top: 48px;
  font-weight: 700;
  @include adaptiv-size(124, 96, 96);
  @include adaptiv-height(124, 96, 96);
}
.communication__content-left-quantity-narration {
  padding-top: 24px;
  font-weight: 400;
  @include adaptiv-size(64, 32, 32);
  @include adaptiv-height(80, 40, 40);
}
.communication__content-left-quantity-avatar {
  padding-top: 25px;
  width: 450px;
}
@media only screen and (max-width: 2559px) {
  .communication__content {
    display: flex;
    flex-direction: column;
  }
}
@media only screen and (max-width: 1920px) {
  .communication__content-left-quantity-size {
    margin-top: 36px;
  }
  .communication__content-left-quantity-avatar {
    padding-top: 20px;
    width: 350px;
  }
}
@media only screen and (max-width: 1380px) {
  .communication__content-left-quantity-avatar {
    padding-top: 20px;
    width: 210px;
  }
}
@media only screen and (max-width: 1280px) {
  .communication__content-left-quantity-size {
    margin-top: 24px;
  }
}
@media only screen and (max-width: 1279px) {
  .communication__content-narration {
    flex-direction: column;
  }
  .communication__content-left-quantity {
    width: 100vw;
    height: 100vw;
  }
  .communication__content-left-quantity-size {
    margin-top: 48px;
    font-weight: 700;
    font-size: 126px;
    line-height: 126px;
  }
  .communication__content-left-quantity-narration {
    padding-top: 24px;
    font-weight: 400;
    font-size: 64px;
    line-height: 80px;
  }
  .communication__content-left-quantity-avatar {
    padding-top: 20px;
    width: 510px;
  }
}
@media only screen and (max-width: 1000px) {
  .communication__content-left-quantity {
    width: calc(100vw - 30px);
    height: calc(100vw - 30px);
  }
  .communication__content-left-quantity-size {
    margin-top: 48px;
    font-weight: 700;
    font-size: 80px;
    line-height: 96px;
  }
  .communication__content-left-quantity-narration {
    padding-top: 24px;
    font-weight: 400;
    font-size: 44px;
    line-height: 64px;
  }
  .communication__content-left-quantity-avatar {
    padding-top: 20px;
    width: 410px;
  }
}
@media only screen and (max-width: 800px) {
  .communication__content-left-quantity-size {
    margin-top: 48px;
    font-weight: 700;
    font-size: 64px;
    line-height: 76px;
  }
  .communication__content-left-quantity-narration {
    padding-top: 24px;
    font-weight: 400;
    font-size: 44px;
    line-height: 64px;
  }
  .communication__content-left-quantity-avatar {
    padding-top: 20px;
    width: 310px;
  }
}
@media only screen and (max-width: 720px) {
  .communication__content-left-quantity {
    width: 100%;
    height: calc(100vw - 30px);
    border-radius: 50%;
  }
  .circle__card{
    width: 100%;
  }
  .communication__content-left-quantity-narration {
    padding: 15px 0px 0;
    text-align: center;
  }
  .communication__content-left-quantity-user {
    padding-top: 78px;
    width: 220px;
  }
  .communication__content-left-quantity-avatar {
    width: 220px;
    padding-top: 9.69px;
  }
  .communication__content-narration:last-child {
    margin-top: 2px;
  }
}
@media only screen and (max-width: 600px) {
  .communication__content-left-quantity-size {
    margin-top: 28px;
    font-weight: 700;
    font-size: 48px;
    line-height: 52px;
  }
  .communication__content-left-quantity-narration {
    padding-top: 24px;
    font-weight: 400;
    font-size: 34px;
    line-height: 54px;
  }
  .communication__content-left-quantity-avatar {
    padding-top: 10px;
    width: 220px;
  }
}
@media only screen and (max-width: 550px) {
  .communication__content-left-quantity-narration {
    padding: 4px 50px 0;
    font-size: 14px;
    line-height: 20px;
  }
  .communication__content-left-quantity-size {
    font-size: 48px;
    line-height: 52px;
  }
}
@media only screen and (max-width: 450px) {
  .communication__content-left-quantity-avatar {
    padding-top: 10px;
    width: 150px;
  }
}
@media only screen and (max-width: 390px) {
  .communication__content-left-quantity {
    width: 100%;
    border-radius: 50%;
  }
  .communication__content-left-quantity-narration {
    padding: 4px 50px 0;
    font-size: 14px;
    line-height: 20px;
  }
  .communication__content-left-quantity-size {
    padding-top: 0;
  }
  .communication__content-left-quantity-avatar {
    width: 100px;
  }
}
</style>
