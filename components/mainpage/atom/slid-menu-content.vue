<template>
  <div>
    <div class="card__header">
      <p class="card__header-tag">{{ slider_menu_data.tag }}</p>
    </div>
    <p class="wrap__smallcard-title">{{ slider_menu_data.title }}</p>
    <p class="wrap__card-text">
      {{ slider_menu_data.text }}
    </p>
    <div class="wrap__smallcard-footer">
      <div class="card__partners">
        <p class="wrap__card-question">{{ slider_menu_data.question }}</p>
      </div>
      <button class="wrap__card-next">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="arrow"
        >
          <path
            d="M1.99969 9H15.9997"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M9.99969 3L16.4997 9L9.99969 15"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  slider_menu_data: {
    type: Object,
    default: () => [],
  },
});
</script>

<style lang="scss" scoped>
.card__header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.card__header-tag {
  font-family: "Inter";
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  color: #ffffff;
  padding: 10px 24px 12px;
  background: #921cbc;
  border-radius: 120px;
}
.wrap__smallcard-title {
  padding-top: 46px;
  padding-bottom: 24px;
  font-family: "Inter";
  font-weight: 600;
  font-size: 28px;
  line-height: 32px;
  display: flex;
  align-items: center;
  color: #000000;
}
.wrap__card-text {
  font-family: "Inter";
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  color: #828282;
}
.radio {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 48px;
}
.wrap__smallcard-footer {
  padding-top: 46px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.card__partners {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.wrap__card-question {
  font-family: "Inter";
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #921cbc;
  padding: 10px 16px 12px;
  border: 1px solid #921cbc;
  border-radius: 120px;
}
.wrap__card-next {
  border: none;
  width: 50px;
  height: 50px;
  background: #025bff;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
</style>
