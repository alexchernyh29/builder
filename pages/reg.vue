<template>
    <div class="mit_wrapper">
        <div>
            <section class="content">
                <div class="content__wrap">
                    <authReg/>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>
	
</script>

<style lang="scss" scoped>
.header{
    width: 100%;
    padding: 24px 48px;
    background: #FFFFFF;
    border-radius: 60px;
    display: flex;
    flex-direction: column;
    @media only screen and (max-width: 900px) {
        border-radius: 30px;
        padding: 12px 24px;
    }

    &__wrap {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    &__info {
        margin: 24px auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    &__info-wrap {
        margin-top: 24px;
        display: flex;
        flex-direction: row;
        align-items: center;
        @media (max-width: 720px) {
            margin-top: 10px;
            flex-direction: column;
        }
    }

    &__info-wrap-text {
        margin-right: 12px;
        font-family: 'Inter';
        font-weight: 600;
        font-size: 12px;
        line-height: 18px;
        color: #828282;
        text-transform: uppercase;
        &:last-child {
            color: #921CBC;
            margin-right: 0;
        }
        @media only screen and (max-width: 900px) {
            margin-right: 0;
            margin-top: 5px;
            font-size: 10px;
            line-height: 16px;
            margin-right: 11px;
            text-align: center;
        }
    }

    &__info-title {
        font-family: 'Inter';
        font-weight: 700;
        font-size: 96px;
        line-height: 96px;
        color: #1B1B29;
        @media only screen and (max-width: 900px) {
            font-size: 39px;
            line-height: 49px;
        }
    }

    &__logo {
        max-width: 250px;
        width: 100%;
        height: 100%;
        @media only screen and (max-width: 900px) {
            max-width: 75px;
        }
    }

    &__button-help {
        padding: 16px 26px;
        background: #34057B;
        color: #FFFFFF;
        border-radius: 60px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 18px;
        text-transform: uppercase;
        @media (max-width: 900px) {
            padding: 8px 4px;
        }
    }

    &__button-menu {
        padding: 16px 26px;
        background: #921CBC;
        color: #FFFFFF;
        border-radius: 60px;
        font-family: 'Inter';
        font-weight: 600;
        font-size: 12px;
        line-height: 18px;
        text-transform: uppercase;
        @media (max-width: 900px) {
            padding: 8px 4px;
        }
    }
}
.content {
	width: 100%;
	height: 665px;
	background: #FFF;
	border-radius: 60px;
	@media (max-width: 720px) {
		border-radius: 60px;
	}
	@media (max-width: 400px) {
		border-radius: 40px;
	}

	&__wrap {
		display: flex;
		flex-direction: column;
		justify-content: center;
		flex-shrink: 0;
		width: 100%;
		max-width: 850px;
		height: 100%;
		margin: 0 auto;
		@media only screen and (max-width: 900px) {
			padding: 20px;
		}
	}

	&__wrap-close {
		margin-left: auto;
		margin-bottom: 28px;
		max-width: 50px;
		height: 50px;
		padding: 18px 18px;
		background-color: transparent;
		border-radius: 50%;
		border: 1px solid rgba(146, 28, 188, 1);
	}

	&__wrap-title {
		margin-bottom: 56px;
		font-size: 40px;
		font-family: 'Inter';
		font-weight: 700;
		line-height: 40px;
		text-align: center;
		@media (max-width: 400px) {
			font-size: 30px;
		}
	}
}
</style>