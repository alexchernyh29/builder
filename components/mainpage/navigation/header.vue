<template>
	<div class="container-mit">
		<div class="header-container">
			<div class="header">
				<div class="header__item">
					<div ref="elem10" :class="{'show': showIt10}" class="header__logo">
						<a href="#" class="header__logo-icon">
							<img src="/images/logo.svg" class="logo logo_size_header" />
						</a>
						<div class="header__slogan">Нам<br>не фиолетово</div>
					</div>
					<div class="header__right">
						<div class="header__right-button">
							<MainpageAtomMainButton title="Подать заявку" href="/intro"/>
						</div>
						<div class="header__right-text">
							Ассоциация специалистов, инвесторов и организаций в сфере информационных технологий «МИТ - Мы ИТ»
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
const elem10 = ref(null);
const showIt10 = ref(false)

const bodyModal = useBodyModal()
const user = useSupabaseUser()

onMounted(() => {
	const options10 = {
				root: null, // для события используем вьюпорт
				rootMargin: '10px', // к телу элемента добавить 10px на срабатывание события
				threshold: 0.1 // событие должно сработать, когда во вьюпорте появится 10% объекта
		}
		const observer10 = new IntersectionObserver((entries10, observer10) => {
				entries10.forEach(entry => {
						if (entry.isIntersecting) {
								showIt10.value = true // здесь прописываем какое событие должно сработать, когда элемент появится по вьюпорте (все вокруг - это служебное api)
								observer10.unobserve(elem10.value) // отключаем слежение за объектом
						}
				})
		}, options10)
		observer10.observe(elem10.value); // включить слежение за объектом
});
</script>

<style lang="scss" scoped>
@import "./assets/scss/mainpage.scss";
.header__logo{
	position: relative;
	transform: translateX(-300px);
	transition: 0.9s;
	transition-timing-function: ease-out;
	opacity: 0;
	&.show{
		opacity: 1;
		transform: inherit;
	}
}
.header-container {
	position: relative;
	background: #000;
	border-radius: 120px;
}
.header {
	padding: 96px;
	border-radius: 120px;
	background: #ffffff;
}
.header__item {
	position: relative;
	display: flex;
	justify-content: space-between;
}
.header__right{
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
.header__right-button {
	position: relative;
	z-index: 12;
	display: flex;
	justify-content: flex-end;
	align-items: center;
}
.header__button-chat {
	display: block;
	padding: 16px 26px;
	background: #34057b;
	border-radius: 60px;
	font-family: "Inter";
	font-weight: 600;
	font-size: 17px;
	line-height: 18px;
	color: #ffffff;
	text-transform: uppercase;
	cursor: pointer;
	word-wrap: nowrap;
}
.header__button-menu {
	width: 184px;
	height: 100px;
	background: #921cbc;
	border-radius: 60px;
	cursor: pointer;
	transition: all 0.5s ease;
}
.header__button-menu-text {
	display: block;
	color: #ffffff;
	font-family: "Inter";
	font-weight: 600;
	font-size: 17px;
	line-height: 18px;
	text-transform: uppercase;
	transition: all 0.5s ease;
}
.header__button-menu.loading {
	display: block;
	width: 100px;
	height: 100px;
	border-radius: 50%;
	border: 2px solid #921cbc;
	display: flex;
	justify-content: center;
	align-items: center;
	background: none;
	cursor: pointer;
}

.header__button-menu.loading:before {
	content: "";
	position: absolute;
	width: 20px;
	height: 2px;
	background: #921cbc;
	border-radius: 5px;
	transform: rotate(-45deg) translate(0px, 0px);
	transition: all 0.5s ease;
}

.header__button-menu.loading:after {
	content: "";
	position: absolute;
	width: 20px;
	height: 2px;
	background: #921cbc;
	border-radius: 5px;
	transform: rotate(45deg) translate(0px, 0px);
	transition: all 0.5s ease;
}

.circle:hover .header__button-menu-burger {
	display: none;
}
.header__right-text {
	font-family: "Inter";
	color: #828282;
	text-align: right;
	font-weight: 400;
	max-width: 870px;
	padding-top: 230px;
	@include adaptiv-size(28, 14, 0);
	@include adaptiv-height(32, 16, 0);
}
.header__slogan {
	position: absolute;
	font-family: "Inter";
	font-style: normal;
	font-weight: 400;
	font-size: 64px;
	line-height: 72px;
	color: #34057b;
	top: 88px;
	left: 970px;
	bottom: 96px;
	width: 440px;
}

.logo_size_header {
	height: 424px;
}


@media only screen and (max-width: 1921px) {
	.header-container {
		border-radius: 90px;
	}
	.header__logo{
		width: 1150px;
	}
	.header__slogan{
		left: 760px;
		top: 60px;
	}
	.header {
		padding: 72px;
		border-radius: 90px;
	}
	.logo_size_header {
		height: 318px;
		width: 800px;
	}

	.header__button-chat {
		width: auto;
		height: 50px;
		font-size: 12px;
	}
	.header__button-menu {
		width: 92px;
		height: 50px;
	}

	.header__button-menu-text {
		font-size: 12px;
	}
	.header__button-menu.loading {
		width: 50px;
		height: 50px;
	}

	.header__button-menu.loading:before {
		width: 14px;
	}

	.header__button-menu.loading:after {
		width: 14px;
	}
}
@media only screen and (max-width: 1500px) {
	.header__slogan{
		left: 720px;
	}
}
@media only screen and (max-width: 1350px) {
	.header__slogan{
		left: 685px;
	}
}
@media only screen and (max-width: 1281px) {
	.header {
		border-radius: 60px;
		padding: 48px;
	}
	.header__logo{
		width: 766px;
		height: 212px;
	}
	.header__slogan{
		left: 500px;
	}
	.logo_size_header {
		height: 212px;
		width: 500px;
	}
	.header__slogan {
		font-size: 38px;
		line-height: 48px;
		top: 45px;
		bottom: 96px;
	}
	.header__right-text{
		padding-top: 130px;
		width: 438px;
	}
}

@media only screen and (max-width: 1020px) {
	.header-container {
		position: relative;
		background: #000;
		border-radius: 0 0 32px 32px;
	}
	.header {
		height: 100%;
		border-radius: 32px;
		padding: 24px 20px;
	}
	.header__item {
		align-items: center;
	}
	.header__slogan {
		display: none;
	}
	.header__right-text {
		display: none;
	}
	.header__logo{
		width: 75px;
		height: 32px;
		opacity: 1;
		transform: inherit;
	}
	.logo_size_header {
		width: 76px;
		height: 32px;
	}

	.logo_size_header {
		width: 76px;
	}
}

@media only screen and (max-width: 1000px) {
	.header-container {
		z-index: 11;
	}
	.header__button-chat {
		display: none;
	}
}

@media only screen and (max-width: 782px) {
	.header {
		padding: 20px 24px;
	}
	.logo_size_header {
		width: 76px;
	}
}

@media only screen and (max-width: 450px) {
	.header {
		border-radius: 24px;
	}

	.header__button-menu {
		display: none;
	}
	.header__button-menu.loading {
		display: none;
	}
	.header__button-menu-burger {
		display: block;
		width: 32px;
		height: 32px;
		background: #921cbc;
		border-radius: 50%;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
	}

	.header__button-menu-burger:before {
		content: "";
		position: absolute;
		width: 16.8px;
		height: 2px;
		background: #fff;
		border-radius: 5px;
		transform: translateY(-5px);
		box-shadow: 0 5px 0 #fff;
		transition: all 0.5s;
	}

	.header__button-menu-burger:after {
		content: "";
		position: absolute;
		width: 16.8px;
		height: 2px;
		background: #fff;
		border-radius: 2px;
		transform: translateY(5px);
		transition: all 0.5s;
	}

	.change:before {
		box-shadow: none;
		width: 9px;
		transform: rotate(-45deg) translate(0px, 0px);
		transition: all 0.5s;
	}
	.change:after {
		box-shadow: none;
		width: 9px;
		transform: rotate(45deg) translate(0px, 0px);
		transition: all 0.5s;
	}
}
</style>
