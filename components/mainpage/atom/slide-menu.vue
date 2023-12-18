<template>
  <div>
    <transition name="slide-menu" mode="out-in">
      <component
        :is="'MainpageAtomSlidMenuContent'"
        :key="activeSlaidIndex"
        :slider_menu_data="slides[activeSlaidIndex]"
      />
    </transition>

    <div class="radio">
      <div
        class="radio__marker"
        :class="{ active: activeSlaidIndex == 0 }"
      ></div>
      <div
        class="radio__marker"
        :class="{ active: activeSlaidIndex == 1 }"
      ></div>
      <div
        class="radio__marker"
        :class="{ active: activeSlaidIndex == 2 }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "slider_menu",
  data() {
    return {
      slides: [
        {
          id: 1,
          tag: "аккредитация",
          title: "Аккредитация IT — компаний",
          text: "Поддержание диалога между сотрудниками индустрии и Минцифрами. Регулярнонаполняемая База знаний с ответами и инструкциями",
          question: "317 компаний",
        },
        {
          id: 2,
          tag: "обучение",
          title: "IT — Обучение",
          text: "Поддержание диалога между сотрудниками индустрии и Минцифрами. Регулярно наполняемая База знаний с ответами и инструкциями",
          question: "72 курса",
        },
        {
          id: 3,
          tag: "свой софт",
          title: "Замещение импорта",
          text: "Поддержание диалога между сотрудниками индустрии и Минцифрами. Регулярно наполняемая База знаний с ответами и инструкциями",
          question: "43 решения",
        },
      ],
      activeSlaidIndex: 0,
    };
  },
  mounted() {
    setInterval(() => {
      if (this.activeSlaidIndex > 1) this.activeSlaidIndex = 0;
      else this.activeSlaidIndex++;
    }, 3000);
  },
  props: {
    carousel_mrnu_data: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.slide-menu-enter-active {
  transition: all 0.8s ease-out;
}

.slide-menu-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-menu-enter-from {
  transform: translateX(-10%);
  opacity: 0;
}
.slide-menu-leave-to {
  transform: translateX(10%);
  opacity: 0;
}
.radio {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 48px;
}
.radio__marker {
  content: "";
  width: 8px;
  height: 8px;
  background: #828282;
  border-radius: 50%;
  margin-left: 12px;
}
.radio__marker:first-child {
  margin-left: 0;
}
.active {
  background: #921cbc;
}
</style>
