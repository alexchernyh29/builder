<template>
	<div class="mit_wrapper">
        <div class="content">
            <div class="content__wrap" style="width: 100%;">

            </div>
        </div>
    </div>
</template>
<script setup>
</script>
<style lang="scss" scoped>
.content {
    padding: 48px;
    width: 100%;
    height: 100%;
    background: #F5F3FF;
    border-radius: 60px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    @media (max-width: 1260px) {
        flex-direction: column;
    }
    @media (max-width: 720px) {
        padding: 12px;
        border-radius: 30px;
    }

    &__wrap {
        margin-left: 24px;
        &:first-child {
            margin-left: 0;
        }
        @media (max-width: 1260px) {
            margin-left: 0;
            margin-bottom: 30px;
        }
    }

    &__wrap-input {
        max-width: 325px;
        width: 100%;
        padding: 14px 16px;
        background: #FFFFFF;
        border: 1px solid #ECE8FF;
        border-radius: 32px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        @media (max-width: 1260px) {
            max-width: 100%;
        }
    }

    &__wrap-input-text {
        max-width: 325px;
        width: 100%;
        margin-left: 12px;
        font-family: 'Inter';
        font-weight: 400;
        font-size: 18px;
        line-height: 28px;
        color: #828282;
        background: transparent;
    }

    &__wrap-list {
        margin-top: 16px;
        margin-bottom: 32px;
        max-width: 325px;
        width: 100%;
        padding: 24px;
        background: #FFFFFF;
        border: 1px solid #ECE8FF;
        border-radius: 24px;
        @media (max-width: 1260px) {
            max-width: 100%;
        }
    }

    &__wrap-list-item {
        margin-bottom: 16px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        &:last-child {
            margin-bottom: 0;
        }
    }

    &__wrap-list-item-text {
        font-family: 'Inter';
        font-weight: 400;
        font-size: 18px;
        line-height: 28px;
        color: #1B1B29;
        .first {
            color: #E45289;
        }
    }

    &__wrap-list-item-number {
        margin-left: 8px;
        font-family: 'Inter';
        font-weight: 400;
        font-size: 18px;
        line-height: 28px;
        color: #828282;
    }

    &__wrap-link {
        width: 325px;
        padding: 16px 40px;
        font-family: 'Inter';
        font-weight: 600;
        font-size: 12px;
        line-height: 18px;
        text-transform: uppercase;
        color: #FFFFFF;
        background: #921CBC;
        border-radius: 60px;
        display: inline-block;
        text-align: center;
        @media (max-width: 720px) {
            padding: 16px 40px;
        }
        @media (max-width: 390px) {
            width: 266px;
        }
    }

    &__wrap-card {
        padding: 32px 32px 24px 40px;
        background: #FFFFFF;
        border: 1px solid #ECE8FF;
        border-radius: 32px;
        @media (max-width: 720px) {
            padding: 12px;
        }
    }

    &__wrap-card-title {
        font-family: 'Inter';
        font-weight: 600;
        font-size: 28px;
        line-height: 32px;
        color: #000000;
    }

    &__wrap-title {
        font-family: 'Inter';
        font-weight: 700;
        font-size: 40px;
        line-height: 48px;
        color: #000000;
        @media (max-width: 720px) {
            font-size: 22px;
            line-height: 32px;
        }
    }

    &__wrap-card-link {
        margin-top: 16px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        @media (max-width: 720px) {
            flex-direction: column;
            align-items: flex-start;
        }
    }

    &__wrap-card-link-like {
        margin-top: 16px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }

    &__wrap-card-link-wrap {
        display: flex;
        flex-direction: row;
    }

    &__wrap-card-link-document {
        margin-right: 21px;
        font-family: 'Inter';
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #921CBC;
    }

    &__wrap-card-link-date{
        margin-right: 21px;
        font-family: 'Inter';
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #828282;
    }

    &__wrap-card-link-text {
        margin-left: 4px;
        font-family: 'Inter';
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #828282;
        @media (max-width: 720px) {
            font-size: 10px;
            line-height: 20px;
        }
    }

    &__wrap-card-item-comment{
        margin-left: 7px;
        font-family: 'Inter';
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #828282;
    }

    &__wrap-topic {
        margin-top: 32px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        @media (max-width: 720px) {
            flex-direction: column;
        }
    }

    &__wrap-topic-column {
        margin-right: 145px;
        &:last-child {
            margin-right: 0;
        }
        @media (max-width: 720px) {
            margin-right: 0;
        }
    }

    &__wrap-topic-column-text {
        margin-top: 16px;
        font-family: 'Inter';
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #025BFF;
        &:first-child {
            margin-top: 0;
        }
    }

    &__wrap-subtitle {
        margin-top: 32px;
        margin-bottom: 16px;
        font-family: 'Inter';
        font-weight: 600;
        font-size: 28px;
        line-height: 32px;
        color: #1B1B29;
    }

    &__wrap-text {
        font-family: 'Inter';
        font-weight: 400;
        font-size: 18px;
        line-height: 28px;
        color: #1B1B29;
        margin-bottom: 16px;
        li {
            font-size: 18px;
        }
    }
    ul {
        padding-left: 24px;
    }

    &__wrap-img {
        border-radius: 32px;
        width: 100%;
        max-width: 800px;
    }

    &__wrap-dots {
        margin-top: 16px;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    &__wrap-dot {
        width: 8px;
        height: 8px;
        background-color: #828282;
        margin-left: 12px;
        border-radius: 50%;
        &:first-child {
            margin-left: 0;
            background-color: #921CBC;
        }
    }

    &__wrap-block-info {
        width: 100%;
        padding: 24px;
        background: #F5F3FF;
        border-radius: 32px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        @media (max-width: 720px) {
            padding: 12px;
        }
    }

    &__wrap-block-info-text {
        margin-left: 16px;
        font-family: 'Inter';
        font-weight: 400;
        font-size: 18px;
        line-height: 28px;
        color: #333333;
        @media (max-width: 720px) {
            margin-left: 0;
            font-size: 10px;
            line-height: 16px;
        }
        @media (max-width: 390px) {
            max-width: 100px;
            &:last-child {
                max-width: 100%;
            }
        }
    }

    &__wrap-table {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
    }

    &__wrap-table-step {
        margin-left: 24px;
    }

    &__wrap-table-step-item {
        margin-top: 36px;
        &:first-child {
            margin-top: 0;
        }
    }

    &__wrap-table-step-item-title {
        font-family: 'Inter';
        font-weight: 600;
        font-size: 18px;
        line-height: 28px;
        color: #1B1B29;
        margin-bottom: 4px;
    }

    &__wrap-table-step-item-text {
        font-family: 'Inter';
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #1B1B29;
    }

    &__wrap-document {
        margin-top: 24px;
        padding: 24px;
        background: #F2F2F2;
        border-radius: 24px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        @media (max-width: 720px) {
            padding: 12px;
        }
    }

    &__wrap-document-info {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }

    &__wrap-document-donwload {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 32px;
        height: 32px;
        background: #025BFF;
        border-radius: 16px;
        @media (max-width: 720px) {
            width: 25px;
            height: 25px;
        }
    }

    &__wrap-card-author {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
    }

    &__wrap-card-author-name {
        font-family: 'Inter';
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #1B1B29;
    }

    &__wrap-card-author-description {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #828282;
    }

    &__wrap-card-button {
        padding: 16px 26px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 18px;
        text-align: center;
        text-transform: uppercase;
        color: #FFFFFF;
        background: #921CBC;
        border-radius: 60px;
    }

    &__wrap-card-flexwrap {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        @media (max-width: 520px) {
            flex-direction: column;
        }
    }

    &__wrap-card-subtitle-comment {
        margin-bottom: 16px;
        font-family: 'Inter';
        font-weight: 600;
        font-size: 28px;
        line-height: 32px;
        color: #1B1B29;
    }

    &__wrap-card-comment {
        padding: 24px;
        background: #F5F3FF;
        border-radius: 12px;
        position: relative;
    }

    &__wrap-card-comment-input {
        width: 100%;
        background-color: transparent;
        padding-bottom: 75px;
    }

    &__wrap-card-comment-link {
        position: absolute;
        top: 75px;
        right: 16px;
        padding: 16px 26px;
        font-family: 'Inter';
        font-weight: 600;
        font-size: 12px;
        line-height: 18px;
        display: flex;
        align-items: center;
        text-align: center;
        text-transform: uppercase;
        color: #FFFFFF;
        background: #34057B;
        border-radius: 60px;
    }

    &__wrap-card-comment-user {
        margin-top: 32px;
    }

    &__wrap-card-comment-user-header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    &__wrap-card-comment-user-text {
        max-width: 580px;
        margin-top: 12px;
        margin-bottom: 8px;
        font-family: 'Inter';
        font-weight: 400;
        font-size: 18px;
        line-height: 28px;
        color: #1B1B29;
    }

    &__wrap-card-comment-user-answer {
        font-family: 'Inter';
        font-weight: 400;
        font-size: 18px;
        line-height: 28px;
        color: #828282;
    }

    &__wrap-card-comment-user-name {
        margin-left: 16px;
    }

    &__wrap-card-comment-user-name-title {
        font-family: 'Inter';
        font-weight: 400;
        font-size: 18px;
        line-height: 28px;
        color: #1B1B29;
        @media (max-width: 720px) {
            font-size: 12px;
            line-height: 18px;
        }
    }

    &__wrap-card-comment-user-name-text {
        margin-top: 4px;
        font-family: 'Inter';
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        color: #828282;
        @media (max-width: 720px) {
            font-size: 12px;
            line-height: 14px;
        }
    }

    &__wrap-card-faq {
        font-family: 'Inter';
        font-weight: 600;
        font-size: 28px;
        line-height: 32px;
        color: #1B1B29;
        margin-bottom: 24px;
    }

    &__wrap-table-1 {
        display: block;
        @media (max-width: 550px) {
            display: none;
        }
    }

    &__wrap-table-img {
        height: 297px;
        @media (max-width: 540px) {
            height: 367px;
        }
        @media (max-width: 338px) {
            height: 440px;
        }
    }

    &__wrap-faq-table {
        display: none;
        @media (max-width: 550px) {
            display: block;
        }
    }

    &__wrap-card-comment-user-header-img {
        width: 48px;
        height: 48px;
        @media (max-width: 720px) {
            width: 24px;
            height: 24px;
        }
    }
}
.first {
    color: #E45289;
}

table {
    border-collapse: collapse;
    border: 1px solid #E9E9E9;
    border-radius: 16px;
}

td, th {
    padding: 16px;
    border: 1px solid #E9E9E9;
    text-align: left;
}
</style> 