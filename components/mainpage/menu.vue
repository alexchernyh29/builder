<template>
  <div class="container-mit"></div>
  <transition name="menu" appear>
    <div v-if="false" class="menu">
      <div class="menu__wrap">
        <div class="container-mit">
          <div class="menu__header">
            <div class="menu__header-logo">Меню</div>

            <ul class="menu__header-connection">
              <li class="menu__header-connection-list">
                <a href="#" class="menu__header-connection-list-link">
                  +7 999 999 99 99
                </a>
              </li>
              <li class="menu__header-connection-list">
                <a href="#" class="menu__header-connection-list-link">
                  info@mitinfo
                </a>
              </li>
              <li class="menu__header-connection-list">
                <a href="#" class="menu__header-connection-list-link">
                  Notion
                </a>
              </li>
              <li class="menu__header-connection-list">
                <a href="#" class="menu__header-connection-list-link">
                  Телеграм
                </a>
              </li>
            </ul>
            <div class="header__right-button"></div>
          </div>

          <div class="menu__content">
            <div class="menu__content-shape">
              <ul class="menu__content-list">
                <li class="menu__content-link">
                  <a href="#" class="menu__header-content-list-link">
                    Главная
                  </a>
                </li>
                <li class="menu__content-link">
                  <a
                    href="#"
                    class="menu__header-content-list-link menu__link-flex"
                  >
                    <p>База знаний</p>
                    <p class="link-quantity">312</p>
                  </a>
                </li>
                <li class="menu__content-link">
                  <a
                    href="#"
                    class="menu__header-content-list-link menu__link-flex"
                  >
                    <p>Кейсы</p>
                    <p class="link-quantity">312</p>
                  </a>
                </li>
                <li class="menu__content-link">
                  <a
                    href="#"
                    class="menu__header-content-list-link menu__link-flex"
                  >
                    <p>Отчеты НКО</p>
                    <p class="link-quantity">312</p>
                  </a>
                </li>
                <li class="menu__content-link">
                  <a href="#" class="menu__header-content-list-link">
                    Об организации
                  </a>
                </li>
                <li class="menu__content-link">
                  <a href="#" class="menu__header-content-list-link">
                    Контакты
                  </a>
                </li>
                <li class="menu__content-link">
                  <a href="#" class="menu__header-content-list-link">
                    Скачать реквизиты
                  </a>
                </li>
              </ul>
              <div class="menu__content-picture">
                <img src="/images/avatar-wrapper.png" />
              </div>
            </div>

            <div class="wrap__card-auxiliary-slaider">
              <MainpageAtomSlideMenu />
              <!-- <div class="card__header">
                <p class="card__header-tag">аккредитация</p>
              </div>
              <p class="wrap__smallcard-title">Аккредитация IT — компаний</p>
              <p class="wrap__card-text">
                Поддержание диалога между сотрудниками индустрии и Минцифрами.
                Регулярно наполняемая База знаний с ответами и инструкциями
              </p>
              <div class="wrap__smallcard-footer">
                <div class="card__partners">
                  <p class="wrap__card-question">317 компаний</p>
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
              <div class="radio">
                <div class="radio__marker"></div>
                <div class="radio__marker"></div>
                <div class="radio__marker"></div>
              </div> -->
            </div>
            <ul class="menu__header-connection-mobail">
              <li class="menu__header-connection-list">
                <a href="#" class="menu__header-connection-list-link">
                  +7 999 999 99 99
                </a>
              </li>
              <li class="menu__header-connection-list">
                <a href="#" class="menu__header-connection-list-link">
                  info@mitinfo
                </a>
              </li>
              <li class="menu__header-connection-list">
                <a href="#" class="menu__header-connection-list-link">
                  Notion
                </a>
              </li>
              <li class="menu__header-connection-list">
                <a href="#" class="menu__header-connection-list-link">
                  Телеграм
                </a>
              </li>
              <div class="menu__header-connection-mobail-button">
                <button class="header__button-chat">Написать нам</button>
              </div>
            </ul>
          </div>
          <div class="menu__footer">
            <p class="menu__footer-text">
              Некоммерческая организация, объединяющая представителей отрасли
              цель которых — конструктивное взаимодействие как внутринеё, так и
              с государственными структурами
            </p>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.container-mit {
  max-width: 2560px;
  width: 100%;
  margin: 0 auto;
}
.menu-enter-active,
.menu-leave-active {
  transition: all 0.5s;
}

.menu-enter-from,
.menu-leave-to {
  transform: translateY(-100%);
}
.menu {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  background-color: #000000;
  z-index: 10;
  width: 100%;
  min-height: 100vh;
  overflow: auto;
}

.menu__header {
  display: flex;
  justify-content: space-between;
  padding: 116px 50px 50px 50px;
}
.menu__header-mobail {
  display: none;
}
.menu__header-logo {
  font-family: "Inter";
  font-weight: 500;
  font-size: 60px;
  line-height: 52px;
  text-transform: uppercase;
  color: #ffffff;
}

.menu__header-connection {
  display: flex;
  align-items: center;
}
.menu__header-connection-list-link {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 28px;
  color: #f2f2f2;
}
.menu__header-content-list-link {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  color: #ffffff;
}

.menu__header-connection-list {
  padding-left: 32px;
}
.menu__header-connection-list:first-child {
  padding-left: 0px;
}

.menu__wrap {
  overflow: auto;
}

.menu__content {
  display: flex;
  justify-content: center;
  padding: 0 50px;
}
.menu__content-shape {
  position: relative;
  width: 100%;
  padding: 40px 48px;
  background: linear-gradient(45deg, #921cbc 0%, #34057b 100%);
  border-radius: 32px;
}
.menu__content-link {
  padding-top: 24px;
}
.menu__content-link:first-child {
  padding-top: 0;
}
.menu__link-flex {
  display: flex;
  justify-content: flex-start;
}
.link-quantity {
  font-family: "Inter";
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  padding-left: 12px;
}
.menu__content-link {
  font-family: "Inter";
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  color: #ffffff;
}
.menu__content-picture {
  position: absolute;
  top: 23px;
  left: 493px;
}
.wrap__card-auxiliary-slaider {
  padding: 48px;
  background: #ffffff;
  border-radius: 60px;
  margin-left: 24px;
  flex-basis: 380px;
  flex-grow: 0;
  flex-shrink: 0;
}
.menu__header-connection-mobail {
  display: none;
}
.menu__footer {
  font-family: "Inter";
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: right;
  color: #828282;
  padding: 32px 50px 58px 691px;
  background: #000000;
}

@media only screen and (min-width: 1290px) {
  .menu__content-shape {
    width: 60%;
  }
  .menu__content-picture {
    left: 70%;
  }
  .wrap__card-auxiliary-slaider {
    flex-basis: 40%;
  }
}

@media only screen and (min-width: 1900px) {
  .menu__content-picture {
    left: 80%;
  }
}

@media only screen and (max-width: 1921px) {
  .menu__header {
    padding: 72px 50px 50px 50px;
  }

  .menu__header-logo {
    font-size: 48px;
  }

  .menu__header-connection-list-link {
    font-size: 18px;
  }
}

@media only screen and (max-width: 1281px) {
  .menu__content-picture {
    left: 60%;
  }
  .menu__footer {
    text-align: center;
    padding: 50px;
  }
  .menu__header-connection {
    margin-right: 23%;
  }
}

@media only screen and (max-width: 1000px) {
  .menu__content {
    padding: 0 15px;
  }
  .menu__header {
    display: none;
  }

  .menu__content-picture {
    display: none;
  }
  .wrap__card-auxiliary-slaider {
    display: none;
  }
  .menu__content {
    flex-direction: column;
  }
  .menu__header-connection-mobail {
    display: block;
    padding: 40px 48px;
    border-radius: 32px;
    background: #ffffff;
  }

  .menu__header-connection-list {
    padding: 16px 0 0 0;
  }
  .menu__header-connection-list:first-child {
    padding: 0;
  }
  .menu__header-connection-mobail-button {
    padding-top: 24px;
  }
  .header__button-chat {
    background: #34057b;
    border-radius: 60px;
    font-family: "Inter";
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    color: #ffffff;
    text-transform: uppercase;
    cursor: pointer;
    padding: 16px 106px;
    width: 100%;
  }
  .menu {
    top: 250px;
  }
  .menu__header-connection-list-link {
    color: #000000;
  }
}

@media only screen and (max-width: 782px) {
  .menu__content-link {
    padding-top: 16px;
  }
  .menu__content-shape,
  .menu__header-connection-mobail {
    padding: 32px 24px 32px 24px;
    margin-top: 2px;
  }
  .menu__header-content-list-link {
    font-size: 18px;
    line-height: 28px;
  }
  .header__button-chat {
    width: 100%;
  }
  .menu__footer {
    text-align: left;
    padding: 26px 55px 24px 24px;
    font-size: 14px;
    line-height: 16px;
  }
  .menu {
    top: 125.5px;
  }
  .link-quantity {
    display: none;
  }
}

@media only screen and (max-width: 450px) {
  .menu {
    top: 72px;
  }

  .menu__content-shape,
  .menu__header-connection-mobail {
    border-radius: 24px;
  }
}
</style>
