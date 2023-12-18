<template>
  <div class="about-us__slider-text">
    <p class="slider-text-title">
      {{ slider_data.title }}
    </p>
    <p class="slider-text-narration">
      {{ slider_data.text }}
    </p>
    <MainpageAtomImageCaterpillar
      :img1="slider_data.img_one"
      :img2="slider_data.img_two"
      :img3="slider_data.img_three"
      :img4="slider_data.img_four"
      :img5="slider_data.img_five"
      :img6="slider_data.img_six"
      cssClass="large_img"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  // title: {
  // 	default: "title",
  // 	type: String
  // },
  // text: {
  // 	default: "text",
  // 	type: String
  // },
  slider_data: {
    type: Object,
    default: () => [],
  },
});
</script>

<style lang="scss" scoped>
@import "./assets/scss/mainpage.scss";
.about-us__slider-text {
  font-family: "Inter";
  color: #fff;
  transition: 0.1s;
}
.slider-text-title {
  font-weight: 700;
  @include adaptiv-size(96, 48, 32);
  @include adaptiv-height(104, 52, 40);
}

.slider-text-narration {
  max-width: 80%;
  max-height: 280px;
  overflow: hidden;
  margin-top: 48px;
  margin-bottom: 80px;
  font-weight: 400;
  @include adaptiv-size(36, 18, 16);
  @include adaptiv-height(56, 28, 24);
}
@media only screen and (max-width: 1920px) {
  .slider-text-narration {
    margin-top: 36px;
    margin-bottom: 60px;
  }
}
@media only screen and (max-width: 1280px) {
  .slider-text-narration {
    margin-top: 24px;
    margin-bottom: 40px;
  }
}
@media only screen and (max-width: 1120px) {
  .slider-text-narration {
    max-width: 100%;
    margin: 16px 0 24px 0;
    height: 100%;
  }
}
@media only screen and (max-width: 720px) {
  .slider-text-title {
    padding-right: 0;
  }
  .slider-text-narration {
    max-width: 100%;
    margin: 16px 0 24px 0;
    height: 100%;
  }
}
</style>
