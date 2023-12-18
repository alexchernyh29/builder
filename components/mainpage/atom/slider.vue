<template>
  <div class="main-slider__slider">
    <div class="slides">
      <div style="position: relative">
        <transition name="slide-fade" mode="out-in">
          <component
            :is="'MainpageAtomSliderText'"
            :key="activeIndex"
            :slider_data="slides[activeIndex]"
          />
        </transition>
      </div>
    </div>
    <div>
      <div class="main-slider__slider-button">
        <a href="#values-card" class="main-slider__slider-button-link"> Ценности участия </a>
        <div class="main-slider__slider-button-arrows">
          <!-- <button
            @click="prevSlide"
            class="main-slider__button-arrows-shell slider__arrows-left"
            :class="{ disabled: activeIndex <= 0 }"
          ></button>
          <button
            @click="nextSlide"
            class="main-slider__button-arrows-shell slider__arrows-right"
            :class="{ disabled: activeIndex > 1 }"
          ></button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "slider",
  data() {
    return {
      slides: [
        {
          id: 1,
          title: "МИТ - МЫ ИТ",
          text: "Cообщество профессионалов, объединившее сотрудников, собственников и инвесторов ИТ-индустрии. Выстраиваем принципиально новый формат взаимодействия ИТ индустрии и государства",
          img_one: "/images/photo-0.png",
          img_two: "/images/photo-1.png",
          img_three: "/images/photo-2.png",
          img_four: "/images/photo-3.png",
          img_five: "/images/photo-4.png",
          img_six: "/images/photo-5.png",
        },
        // {
        //   id: 2,
        //   title: "! Мы хотим, чтобы каждый был услышан и значим",
        //   text: "Хотим благополучно жить в нашей стране и эффективно развивать её экономику. Для этого мы объединили государство, ИТ-компании и ИТ-специалистов",
        //   img_one: "/images/photo-0.png",
        //   img_two: "/images/photo-1.png",
        //   img_three: "/images/photo-2.png",
        // },
        // {
        //   id: 3,
        //   title: "Мы хотим, ",
        //   text: "!Хотим благополучно жить в нашей стране и эффективно развивать её экономику. Для этого мы объединили государство, ИТ-компании и ИТ-специалистов",
        //   img_one: "/images/photo-0.png",
        //   img_two: "/images/photo-1.png",
        // },
      ],
      activeIndex: 0,
    };
  },
  methods: {
    prevSlide() {
      if (this.activeIndex > 0) {
        this.activeIndex--;
      }
    },
    nextSlide() {
      if (this.activeIndex < this.slides.length - 1) {
        this.activeIndex++;
      }
    },
  },
  props: {
    carousel_data: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all 0.8s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from {
  transform: translateX(-10%);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateX(10%);
  opacity: 0;
}
.main-slider__slider {
  width: 50vw;
  height: 100%;
  background: linear-gradient(45deg, #921cbc 0%, #34057b 100%);
  border-radius: 120px;
  padding: 108px 96px 96px 96px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  position: relative;
}
.main-slider__slider-button {
  padding-top: 70px;
  display: flex;
  justify-content: space-between;
}
.main-slider__slider-button-link {
  display: block;
  text-align: center;
  text-transform: uppercase;
  padding: 32px 52px;
  background: #ffffff;
  border-radius: 60px;
  font-family: "Inter";
  font-weight: 600;
  font-size: 20px;
  line-height: 36px;
  color: #1b1b29;
}
.main-slider__slider-button-arrows {
  display: flex;
}
.main-slider__button-arrows-shell {
  width: 100px;
  height: 100px;
  background: #ffffff;
  border: 1px solid #f2f2f2;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.24);
}
.main-slider__button-arrows-shell:active {
  transform: scale(0.98);
  box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
}
.slider__arrows-right:before {
  content: "";
  position: absolute;
  width: 20px;
  height: 2.5px;
  background: #000;
  border-radius: 5px;
  transform: rotate(-41deg) translate(-1px, 7px);
  transition: all 0.1s;
}

.slider__arrows-right:active:before {
  transform: rotate(-20deg) translate(-1px, 3px);
}

.slider__arrows-right:after {
  content: "";
  position: absolute;
  width: 20px;
  height: 2.5px;
  background: #000;
  border-radius: 5px;
  transform: translateY(-5px);
  transform: rotate(41deg) translate(-1px, -7px);
  transition: all 0.1s;
}
.slider__arrows-right:active:after {
  transform: rotate(20deg) translate(-1px, -3px);
}
.slider__arrows-left:before {
  content: "";
  position: absolute;
  width: 20px;
  height: 2.5px;
  background: #000;
  border-radius: 5px;
  transform: rotate(41deg) translate(1px, 7px);
  transition: all 0.1s;
}

.slider__arrows-left:active:before {
  transform: rotate(20deg) translate(1px, 3px);
}

.slider__arrows-left:after {
  content: "";
  position: absolute;
  width: 20px;
  height: 2.5px;
  background: #000;
  border-radius: 5px;
  transform: translateY(-5px);
  transform: rotate(-41deg) translate(1px, -7px);
  transition: all 0.1s;
}
.slider__arrows-left:active:after {
  transform: rotate(-20deg) translate(1px, -3px);
}
.main-slider__button-arrows-shell:first-child {
  margin-right: 9px;
}
.disabled {
  opacity: 0.5;
  pointer-events: none;
}

@media only screen and (max-width: 1920px) {
  .main-slider__button-arrows-shell {
    width: 75px;
    height: 75px;
  }
  .main-slider__slider-button-link {
    padding: 24px 39px;
    border-radius: 90px;
    font-size: 18px;
    line-height: 27px;
  }
  .main-slider__slider {
    border-radius: 90px;
    padding: 81px 72px 72px 72px;
  }
}

@media only screen and (max-width: 1281px) {
  .main-slider__slider {
    border-radius: 60px;
    padding: 48px;
  }
}
@media only screen and (max-width: 1300px) {
  .main-slider__slider-button {
    padding-top: 40px;
  }
  .main-slider__slider-button-link {
    font-size: 12px;
    line-height: 18px;
    text-transform: uppercase;
    padding: 16px 26px;
    height: 50px;
  }

  .main-slider__button-arrows-shell {
    width: 50px;
    height: 50px;
  }
  .slider__arrows-left:after {
    width: 10px;
    height: 2px;
    transform: rotate(-41deg) translate(1px, -3px);
  }
  .slider__arrows-left:active:after {
    transform: rotate(-20deg) translate(1px, -1px);
  }
  .slider__arrows-left:before {
    width: 10px;
    height: 2px;
    transform: rotate(41deg) translate(1px, 3px);
  }
  .slider__arrows-left:active:before {
    transform: rotate(20deg) translate(1px, 1px);
  }
  .slider__arrows-right:after {
    width: 10px;
    height: 2px;
    transform: rotate(41deg) translate(-1px, -3px);
  }

  .slider__arrows-right:active:after {
    transform: rotate(20deg) translate(-1px, -1px);
  }
  .slider__arrows-right:before {
    width: 10px;
    height: 2px;
    transform: rotate(-41deg) translate(-1px, 3px);
  }
  .slider__arrows-right:active:before {
    transform: rotate(-20deg) translate(-1px, 1px);
  }
}

@media only screen and (max-width: 1120px) {
  .main-slider__slider {
    width: 100%;
  }
}

@media only screen and (max-width: 1000px) {
  .main-slider__slider {
    border-radius: 32px;
  }
}

@media only screen and (max-width: 720px) {
  .main-slider__slider {
    padding: 27px 24px 32px 24px;
  }
  .main-slider__users {
    padding-top: 24px;
  }
  .main-slider__slider-button {
    padding-top: 24px;
  }
  .main-slider__button-arrows-shell:first-child {
    margin-right: 8px;
  }
}
</style>
