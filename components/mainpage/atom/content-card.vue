<template>
  <div :class="cssClass">
    <img :src="img" class="content-ether-img-withoutIndentation" />
    <div class="communication__content-ether-text">
      <p class="communication__content-ether-text-title font-size-large">{{ title }}</p>
      <p class="communication__content-ether-text-narration font-size-medium">{{ text }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    default: "title",
    type: String,
  },
  text: {
    default: "text",
    type: String,
  },
  img: {
    default: "",
    type: String,
  },
  cssClass: {},
});
</script>
<style lang="scss" scoped>
@import "./assets/scss/mainpage.scss";
  .content-ether-img-withoutIndentation {
    width: 100%;
  }
.communication__content-ether {
  width: 50vw;
  height: 52vw;
  max-width: 1280px;
  max-height: 1336px;
  display: flex;
  flex: 0.5 0 auto;
  align-items: flex-start;
  flex-direction: column;
  padding: 96px;
  border-radius: 120px;
  background: linear-gradient(
    201.95deg,
    #8e1cbb 0.75%,
    rgba(239, 93, 168, 0) 85.64%
  );
}

.content-right-offers {
  background: linear-gradient(202.54deg, #ef5da8 7.32%, #8e1cba 70.7%);
}

.content-right-informing {
  background: none;
}
.communication__content-ether-text {
  font-family: "Inter";
  text-align: center;
  color: #ffffff;
}
.communication__content-ether-text-title {
  font-weight: 700;
  @include adaptiv-size(80, 40, 32);
  @include adaptiv-height(80, 40, 40);
  padding-top: 40px;
}
.communication__content-ether-text-narration {
  padding: 24px 10px 0;
  font-weight: 400;
  @include adaptiv-size(36, 18, 16);
  @include adaptiv-height(56, 28, 24);
}

.communication__content-ether-text-offers-narration {
  padding: 24px 20px 0;
}
@media only screen and (max-width: 1921px) {
  .communication__content-ether {
    border-radius: 90px;
    padding: 72px;
  }
  .communication__content-ether-text-narration {
    padding: 24px 0 0;
  }
  .communication__content-ether-text-title {
    padding-top: 30px;
  }
}

@media only screen and (max-width: 1900px) {
  .communication__content-ether-text-narration {
    padding: 24px 10px 0;
  }
}

@media only screen and (max-width: 1281px) {
  .communication__content-ether {
    border-radius: 60px;
    padding: 48px;
  }
  .communication__content-ether-text-title {
    padding-top: 24px;
  }
}

@media only screen and (max-width: 1279px) {
  .communication__content-narration {
    flex-direction: column;
    align-items: center;
  }
  .communication__content-ether {
    align-items: center;
    width: 100vw;
    height: 100%;
  }
  .content-ether-img-withoutIndentation{
    width: 50%;
  }
}
@media only screen and (max-width: 1000px) {
  .communication__content-ether{
    padding: 24px;
  }
  .communication__content-ether {
    width: calc(100vw - 30px);
  }
  .content-ether-img-withoutIndentation {
    width: 80%;
  }
}
@media only screen and (max-width: 720px) {
  .communication__content-ether {
    border-radius: 32px;
    padding: 24px;
  }
  .communication__content-narration:last-child {
    margin-top: 2px;
  }

  .communication__content-ether-text {
    text-align: inherit;
  }
  .communication__content-ether-text-title {
    padding-top: 24px;
  }
  .communication__content-ether-text-narration {
    padding: 16px 0 0;
  }

  .communication__content-ether-text-offers-narration {
    padding: 16px 0 0;
  }
  .content-ether-img {
    padding: 0 24px;
  }
  .content-ether-img-withoutIndentation {
    padding: 0;
  }
}
@media only screen and (max-width: 390px) {
  .communication__content-ether-text {
    padding: 10px;
  }
}
@media only screen and (max-width: 330px) {
  .communication__content-ether {
    padding: 10px;
  }
}
</style>
