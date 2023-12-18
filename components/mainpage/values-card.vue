<template>
	<div class="container-mit">
		<div id="values-card" class="content">
			<div class="content__title">
				Ценности участия в Ассоциации
			</div>
			<div class="toggle-switch">
				<input :checked="checked" type="checkbox" id="switch" /><label for="switch">Toggle</label>
				<div class="checkbox-text">
					<p @click="toggle" class="checkbox-text__left" :class="{'active':!checked}">для компаний</p>
					<p @click="toggle" class="checkbox-text__right" :class="{'active':checked}">для специалистов</p>
				</div>
			</div>
			<div v-if="checked" class="content__wrap">
				<div class="content__wrap-item">
					<div>
						<img src="/images/document.png" alt="" class="content__wrap-item-icon">
						<p class="content__wrap-item-title">Скидки на обучение и сертификацию</p>
					</div>
					<!-- <div class="content__wrap-item-footer">
						<div class="content__wrap-item-footer-info">
							<p class="content__wrap-item-footer-info-text">Подробная информация по карточке</p>
						</div>
						<p class="content__wrap-item-footer-size">Подробнее</p>
					</div> -->
				</div>
				<div class="content__wrap-item">
					<div>
						<img src="/images/document.png" alt="" class="content__wrap-item-icon">
						<p class="content__wrap-item-title">Скидки на участие в профильных мероприятиях и хакатонах</p>
					</div>
					<!-- <div class="content__wrap-item-footer">
						<div class="content__wrap-item-footer-info">
							<p class="content__wrap-item-footer-info-text">Подробная информация по карточке</p>
						</div>
						<p class="content__wrap-item-footer-size">Подробнее</p>
					</div> -->
				</div>
				<div class="content__wrap-item">
					<div>
						<img src="/images/document.png" alt="" class="content__wrap-item-icon">
						<p class="content__wrap-item-title">Помощь в получении It-ипотеки</p>
					</div>
					<!-- <div class="content__wrap-item-footer">
						<div class="content__wrap-item-footer-info">
							<p class="content__wrap-item-footer-info-text">Подробная информация по карточке</p>
						</div>
						<p class="content__wrap-item-footer-size">Подробнее</p>
					</div> -->
				</div>
				<div class="content__wrap-item">
					<div> 
						<img src="/images/document.png" alt="" class="content__wrap-item-icon">
						<p class="content__wrap-item-title">Доступ к базе знаний по актуальными вопросам</p>
					</div>
					<!-- <div class="content__wrap-item-footer">
						<div class="content__wrap-item-footer-info">
							<p class="content__wrap-item-footer-info-text">Подробная информация по карточке</p>
						</div>
						<p class="content__wrap-item-footer-size">Подробнее</p>
					</div> -->
				</div>
				<div class="content__wrap-item">
					<div> 
						<img src="/images/document.png" alt="" class="content__wrap-item-icon">
						<p class="content__wrap-item-title">Развитие региональных сообществ</p>
					</div>
					<!-- <div class="content__wrap-item-footer">
						<div class="content__wrap-item-footer-info">
							<p class="content__wrap-item-footer-info-text">Подробная информация по карточке</p>
						</div>
						<p class="content__wrap-item-footer-size">Подробнее</p>
					</div> -->
				</div>
				<div class="content__wrap-item">
					<div>
						<img src="/images/document.png" alt="" class="content__wrap-item-icon">
						<p class="content__wrap-item-title">Участие в законодательных инициативах</p>
					</div>
					<!-- <div class="content__wrap-item-footer">
						<div class="content__wrap-item-footer-info">
							<p class="content__wrap-item-footer-info-text">Подробная информация по карточке</p>
						</div>
						<p class="content__wrap-item-footer-size">Подробнее</p>
					</div> -->
				</div>
				<div class="content__wrap-item">
					<div>
						<img src="/images/document.png" alt="" class="content__wrap-item-icon">
						<p class="content__wrap-item-title">Нетворкинг // тематические чаты</p>
					</div>
					<!-- <div class="content__wrap-item-footer">
						<div class="content__wrap-item-footer-info">
							<p class="content__wrap-item-footer-info-text">Подробная информация по карточке</p>
						</div>
						<p class="content__wrap-item-footer-size">Подробнее</p>
					</div> -->
				</div>
				<div class="content__wrap-item">
					<div>
						<img src="/images/document.png" alt="" class="content__wrap-item-icon">
						<p class="content__wrap-item-title">Помощь в отсрочках на военную службу по призыву//мобилизации</p>
					</div>
					<!-- <div class="content__wrap-item-footer">
						<div class="content__wrap-item-footer-info">
							<p class="content__wrap-item-footer-info-text">Подробная информация по карточке</p>
						</div>
						<p class="content__wrap-item-footer-size">Подробнее</p>
					</div> -->
				</div>
				<div class="content__wrap-item">
					<div>
						<img src="/images/document.png" alt="" class="content__wrap-item-icon">
						<p class="content__wrap-item-title">Юридическая помощь и психологическая поддержка</p>
					</div>
					<!-- <div class="content__wrap-item-footer">
						<div class="content__wrap-item-footer-info">
							<p class="content__wrap-item-footer-info-text">Подробная информация по карточке</p>
						</div>
						<p class="content__wrap-item-footer-size">Подробнее</p>
					</div> -->
				</div>
				<div class="content__wrap-item">
					<div>
						<img src="/images/document.png" alt="" class="content__wrap-item-icon">
						<p class="content__wrap-item-title">Помощь в трудоустройстве, составлении резюме и поиска вакансий,стажировки для студентов</p>
					</div>
					<!-- <div class="content__wrap-item-footer">
						<div class="content__wrap-item-footer-info">
							<p class="content__wrap-item-footer-info-text">Подробная информация по карточке</p>
						</div>
						<p class="content__wrap-item-footer-size">Подробнее</p>
					</div> -->
				</div>
			</div>
			<div v-else class="content__wrap">
				<div class="content__wrap-item">
					<div>
						<img src="/images/document.png" alt="" class="content__wrap-item-icon">
						<p class="content__wrap-item-title">Помощь в обучении и найме сотрудников</p>
					</div>
					<!-- <div class="content__wrap-item-footer">
						<div class="content__wrap-item-footer-info">
							<p class="content__wrap-item-footer-info-text">Подробная информация по карточке</p>
						</div>
						<p class="content__wrap-item-footer-size">Подробнее</p>
					</div> -->
				</div>
				<div class="content__wrap-item">
					<div>
						<img src="/images/document.png" alt="" class="content__wrap-item-icon">
						<p class="content__wrap-item-title">GR поддержка, юридическое, PR и маркетинговое сопровождение</p>
					</div>
					<!-- <div class="content__wrap-item-footer">
						<div class="content__wrap-item-footer-info">
							<p class="content__wrap-item-footer-info-text">Подробная информация по карточке</p>
						</div>
						<p class="content__wrap-item-footer-size">Подробнее</p>
					</div> -->
				</div>
				<div class="content__wrap-item">
					<div>
						<img src="/images/document.png" alt="" class="content__wrap-item-icon">
						<p class="content__wrap-item-title">Помощь в привлечении инвестиций, грантов</p>
					</div>
					<!-- <div class="content__wrap-item-footer">
						<div class="content__wrap-item-footer-info">
							<p class="content__wrap-item-footer-info-text">Подробная информация по карточке</p>
						</div>
						<p class="content__wrap-item-footer-size">Подробнее</p>
					</div> -->
				</div>
				<div class="content__wrap-item">
					<div>
						<img src="/images/document.png" alt="" class="content__wrap-item-icon">
						<p class="content__wrap-item-title">Помощь в развитии стартапов</p>
					</div>
					<!-- <div class="content__wrap-item-footer">
						<div class="content__wrap-item-footer-info">
							<p class="content__wrap-item-footer-info-text">Подробная информация по карточке</p>
						</div>
						<p class="content__wrap-item-footer-size">Подробнее</p>
					</div> -->
				</div>
				<div class="content__wrap-item">
					<div>
						<img src="/images/document.png" alt="" class="content__wrap-item-icon">
						<p class="content__wrap-item-title">Помощь во включении в ИЦК и ЦКР, особо значимые проекты</p>
					</div>
					<!-- <div class="content__wrap-item-footer">
						<div class="content__wrap-item-footer-info">
							<p class="content__wrap-item-footer-info-text">Подробная информация по карточке</p>
						</div>
						<p class="content__wrap-item-footer-size">Подробнее</p>
					</div> -->
				</div>
				<div class="content__wrap-item">
					<div>
						<img src="/images/document.png" alt="" class="content__wrap-item-icon">
						<p class="content__wrap-item-title">Помощь в аккредитации</p>
					</div>
					<!-- <div class="content__wrap-item-footer">
						<div class="content__wrap-item-footer-info">
							<p class="content__wrap-item-footer-info-text">Подробная информация по карточке</p>
						</div>
						<p class="content__wrap-item-footer-size">Подробнее</p>
					</div> -->
				</div>
				<div class="content__wrap-item">
					<div>
						<img src="/images/document.png" alt="" class="content__wrap-item-icon">
						<p class="content__wrap-item-title">Помощь в получении заказов от крупных заказчиков</p>
					</div>
					<!-- <div class="content__wrap-item-footer">
						<div class="content__wrap-item-footer-info">
							<p class="content__wrap-item-footer-info-text">Подробная информация по карточке</p>
						</div>
						<p class="content__wrap-item-footer-size">Подробнее</p>
					</div> -->
				</div>
				<div class="content__wrap-item">
					<div>
						<img src="/images/document.png" alt="" class="content__wrap-item-icon">
						<p class="content__wrap-item-title">Включение в процессы цифровой трансформации крупных компаний</p>
					</div>
					<!-- <div class="content__wrap-item-footer">
						<div class="content__wrap-item-footer-info">
							<p class="content__wrap-item-footer-info-text">Подробная информация по карточке</p>
						</div>
						<p class="content__wrap-item-footer-size">Подробнее</p>
					</div> -->
				</div>
				<div class="content__wrap-item">
					<div>
						<img src="/images/document.png" alt="" class="content__wrap-item-icon">
						<p class="content__wrap-item-title">Скидки на обучение и сертификацию</p>
					</div>
					<!-- <div class="content__wrap-item-footer">
						<div class="content__wrap-item-footer-info">
							<p class="content__wrap-item-footer-info-text">Подробная информация по карточке</p>
						</div>
						<p class="content__wrap-item-footer-size">Подробнее</p>
					</div> -->
				</div>
				<div class="content__wrap-item">
					<div>
						<img src="/images/document.png" alt="" class="content__wrap-item-icon">
						<p class="content__wrap-item-title">Скидки на участие в профильных мероприятиях и хакатонах</p>
					</div>
					<!-- <div class="content__wrap-item-footer">
						<div class="content__wrap-item-footer-info">
							<p class="content__wrap-item-footer-info-text">Подробная информация по карточке</p>
						</div>
						<p class="content__wrap-item-footer-size">Подробнее</p>
					</div> -->
				</div>
				<div class="content__wrap-item">
					<div>
						<img src="/images/document.png" alt="" class="content__wrap-item-icon">
						<p class="content__wrap-item-title">Помощь в получении It-ипотеки</p>
					</div>
					<!-- <div class="content__wrap-item-footer">
						<div class="content__wrap-item-footer-info">
							<p class="content__wrap-item-footer-info-text">Подробная информация по карточке</p>
						</div>
						<p class="content__wrap-item-footer-size">Подробнее</p>
					</div> -->
				</div>
				<div class="content__wrap-item">
					<div> 
						<img src="/images/document.png" alt="" class="content__wrap-item-icon">
						<p class="content__wrap-item-title">Доступ к базе знаний по актуальными вопросам</p>
					</div>
					<!-- <div class="content__wrap-item-footer">
						<div class="content__wrap-item-footer-info">
							<p class="content__wrap-item-footer-info-text">Подробная информация по карточке</p>
						</div>
						<p class="content__wrap-item-footer-size">Подробнее</p>
					</div> -->
				</div>
				<div class="content__wrap-item">
					<div> 
						<img src="/images/document.png" alt="" class="content__wrap-item-icon">
						<p class="content__wrap-item-title">Развитие региональных сообществ</p>
					</div>
					<!-- <div class="content__wrap-item-footer">
						<div class="content__wrap-item-footer-info">
							<p class="content__wrap-item-footer-info-text">Подробная информация по карточке</p>
						</div>
						<p class="content__wrap-item-footer-size">Подробнее</p>
					</div> -->
				</div>
				<div class="content__wrap-item">
					<div>
						<img src="/images/document.png" alt="" class="content__wrap-item-icon">
						<p class="content__wrap-item-title">Участие в законодательных инициативах</p>
					</div>
					<!-- <div class="content__wrap-item-footer">
						<div class="content__wrap-item-footer-info">
							<p class="content__wrap-item-footer-info-text">Подробная информация по карточке</p>
						</div>
						<p class="content__wrap-item-footer-size">Подробнее</p>
					</div> -->
				</div>
				<div class="content__wrap-item">
					<div>
						<img src="/images/document.png" alt="" class="content__wrap-item-icon">
						<p class="content__wrap-item-title">Нетворкинг // тематические чаты</p>
					</div>
					<!-- <div class="content__wrap-item-footer">
						<div class="content__wrap-item-footer-info">
							<p class="content__wrap-item-footer-info-text">Подробная информация по карточке</p>
						</div>
						<p class="content__wrap-item-footer-size">Подробнее</p>
					</div> -->
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
const checked = useSwitchInMainPage();
const toggle = () => {
	if(checked.value){
		checked.value=false;
	}else{
		checked.value=true;
	}
}
const isShow = ref(true);
const toggleShow = () => {
	isShow.value = !isShow.value;
};
const isShow1 = ref(true);
const toggleShow1 = () => {
	isShow1.value = !isShow1.value;
};
</script>
<style lang="scss" scoped>
@import "./assets/scss/mainpage.scss";
@import "./assets/scss/mainpage.scss";

.content{
	padding: 48px;
	width: 100%;
	height: 100%;
	background: #FFFFFF;
	border-radius: 60px;
	@media (max-width: 768px) {
		padding: 24px;
		border-radius: 30px;
	}
	&__title {
		max-width: 2200px;
		font-family: "Inter";
		font-weight: 600;
		margin-bottom: 24px;
		@include adaptiv-size(128, 64, 32);
		@include adaptiv-height(160, 80, 40);
		background: linear-gradient(295.49deg, #8e1cba 60.3%, #3d0881 80.15%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	&__wrap-more {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		flex-wrap: wrap;
	}

	&__wrap {
		margin-top: 16px;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		flex-wrap: wrap;
		gap: 16px;
		&:first-child {
			margin-top: 0;
		}
	}

	&__wrap-item {
		width: calc(25% - 12px);
		padding: 24px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		background: #F2F2F2;
		border-radius: 40px;
		@media (max-width: 1000px) {
			width: calc(33% - 11px);
		}
		@media (max-width: 760px) {
			width: calc(50% - 8px);
		}
		@media (max-width: 470px) {
			width: 100%;
		}
	}

	&__wrap-item-card-more {
		margin-top: 16px;
		max-width: 284px;
		width: 100%;
		padding: 24px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		background: linear-gradient(45deg, #e45289 0%, #921cbc 100%);
		border-radius: 40px;
		margin-right: 16px;
		transition: 0.3s;
		cursor: pointer;
		&:hover {
			background: linear-gradient(45deg, #e45289 0%, #921cbc 100%);
			transform: scale(1.03);
			transition: 0.3s;
		}
		@media (max-width: 1570px) and (min-width: 1280px) {
			&:nth-child(4){
				margin-right: 0;
			}
			&:nth-child(8){
				margin-right: 0;
			}
		}
		@media (max-width: 675px) {
			max-width: 100%;
		}
		@media (max-width: 500px) {
			max-width: 100%;
		}
	}

	&__wrap-item-icon {
		width: 32px;
		height: 32px;
	}

	&__wrap-item-title {
		margin-top: 8px;
		font-family: 'Inter';
		font-weight: 400;
		font-size: 16px;
		line-height: 24px;
		color: #1B1B29;
	}

	&__wrap-item-footer{
		position: relative;
		margin-top: 52px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		cursor: pointer;
	}

	&__wrap-item-footer-info {
		display: none;
		position: absolute;
		top: -110px;
		left: 0;
		width: 100%;
		max-width: 240px;
		height: 100px;
		padding: 5px;
		background-color: #F2F2F2;
		border: 1px solid #1B1B29;
		border-radius: 12px;
		-webkit-box-shadow: 6px 5px 10px 2px rgba(0, 0, 0, 0.2);
		-moz-box-shadow: 6px 5px 10px 2px rgba(0, 0, 0, 0.2);
		box-shadow: 6px 5px 10px 2px rgba(0, 0, 0, 0.2);
			&:after {
				content: "";
				border: 7px solid transparent;
				position: absolute;
				border-top-color: #1B1B29;
				border-bottom: 0;
				bottom: -7px; 
				left: 13%;
				margin-left: -20px;
				@media (max-width: 360px) {
					left: 20%;
				}
			}
		}

	&__wrap-item-footer-size {
		font-family: 'Inter';
		font-weight: 400;
		font-size: 16px;
		line-height: 24px;
		display: flex;
		align-items: center;
		color: #828282;
	}

	&__wrap-item-footer-donload {
		padding: 10px;
		background: #025BFF;
		border-radius: 16px;
	}

	&__wrap-item-footer-donload-icon {
		width: 11px;
		height: 11px;
	}
}

.content__wrap-item-card-more:hover > .content__wrap-item-card > .content__wrap-item-title {
	color: #fff;
}
.content__wrap-item-card-more:hover > .content__wrap-item-footer > .content__wrap-item-footer-size {
	color: #fff;
}
.content__wrap-item-footer:hover > .content__wrap-item-footer-info {
	display: block;
	transition: 0.3s;
}

.toggle-switch{
	position: relative;
}

.checkbox-text{
	position: absolute;
	cursor: pointer;
	max-width: 390px;
	width: 100%;
	top: 20%;
	left: 0%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}

.checkbox-text__left{
	padding: 0 30px;
	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 48px;
	color: #1B1B29;
	@media (max-width: 470px) {
		font-size: 16px;
		line-height: 48px;
	}
	@media (max-width: 440px) {
		font-size: 14px;
		line-height: 48px;
	}
	@media (max-width: 400px) {
		padding: 0 15px;
		font-size: 12px;
		line-height: 48px;
	}
}
.checkbox-text__left.active{
	color: #fff;
	transition: 1s;
}
.checkbox-text__right.active{
	color: #fff;
	transition: 1s;
}
.checkbox-text__right{
	padding: 0 20px;
	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 48px;
	color: #1B1B29;
	@media (max-width: 470px) {
		font-size: 16px;
		line-height: 48px;
	}
	@media (max-width: 440px) {
		font-size: 14px;
		line-height: 48px;
	}
	@media (max-width: 400px) {
		padding: 0 8px 0 0px;
		font-size: 12px;
		line-height: 48px;
	}
}

input[type=checkbox]{
	height: 0;
	width: 0;
	visibility: hidden;
}

label {
	cursor: pointer;
	text-indent: -9999px;
	max-width: 390px;
	width: 100%;
	height: 48px;
	background: transperent;
	display: block;
	border-radius: 100px;
	border: 1.5px solid #34057B;
	position: relative;
	@media (max-width: 500px) {
		max-width: 100%;
	}
}

label:after {
	content: '';
	position: absolute;
	top: 5px;
	left: 5px;
	width: 190px;
	height: 36px;
	background: #34057B;
	border-radius: 90px;
	transition: 0.6s;
	@media (max-width: 500px) {
		width: 50%;
	}
	@media (max-width: 390px) {
		width: 48%;
	}
}

input:checked + .checkbox-text .checkbox-text__left {
	color: #fff;
}


input:checked + label:after {
	left: calc(100% - 5px);
	transform: translateX(-100%);
}

label:active:after {
	width: 130px;
}
.remove {
	display: none;
}
.show {
	display: block;
}

.white {
	color: #FFFFFF;
}
</style> 