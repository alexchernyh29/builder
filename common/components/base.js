import docsComponent from "../../components/base/docs.vue"
export const docs = {
    key: "docs",
    name: "Документы",
    category: "base",
    image: "https://s3-promo-content.s3-eu-west-1.amazonaws.com/_promo-content/1675164255868______________2023-01-31___14.24.03.png",
    props: Object.entries(docsComponent.props).reduce((acc, cur, i) => {
        acc[cur[0]] = cur[1]?.default;
        return acc;
    }, {})
}
import headingComponent from "../../components/base/heading.vue"
export const heading = {
    key: "heading",
    name: "Заголовок",
    category: "base",
    image: "https://s3-promo-content.s3-eu-west-1.amazonaws.com/_promo-content/1675164255868______________2023-01-31___14.24.03.png",
    props: Object.entries(headingComponent.props).reduce((acc, cur, i) => {
        acc[cur[0]] = cur[1]?.default;
        return acc;
    }, {})
}
import spaceComponent from "../../components/base/space.vue"
export const space = {
    key: "space",
    name: "Отступы",
    category: "base",
    image: "https://s3-promo-content.s3-eu-west-1.amazonaws.com/_promo-content/1675164255868______________2023-01-31___14.24.03.png",
    props: Object.entries(spaceComponent.props).reduce((acc, cur, i) => {
        acc[cur[0]] = cur[1]?.default;
        return acc;
    }, {})
}
import peopleComponent from "../../components/base/people.vue"
export const people = {
    key: "people",
    name: "Попечительский совет",
    category: "base",
    image: "https://s3-promo-content.s3-eu-west-1.amazonaws.com/_promo-content/1675164255868______________2023-01-31___14.24.03.png",
    props: Object.entries(peopleComponent.props).reduce((acc, cur, i) => {
        acc[cur[0]] = cur[1]?.default;
        return acc;
    }, {})
}
import contactComponent from "../../components/base/contact.vue"
export const contact = {
    key: "contact",
    name: "Контакты",
    category: "base",
    image: "https://s3-promo-content.s3-eu-west-1.amazonaws.com/_promo-content/1675164255868______________2023-01-31___14.24.03.png",
    props: Object.entries(contactComponent.props).reduce((acc, cur, i) => {
        acc[cur[0]] = cur[1]?.default;
        return acc;
    }, {})
}
import eventComponent from "../../components/base/event.vue"
export const event = {
    key: "event",
    name: "Мероприятие",
    category: "base",
    image: "https://s3-promo-content.s3-eu-west-1.amazonaws.com/_promo-content/1675164255868______________2023-01-31___14.24.03.png",
    props: Object.entries(eventComponent.props).reduce((acc, cur, i) => {
        acc[cur[0]] = cur[1]?.default;
        return acc;
    }, {})
}
import contentComponent from "../../components/base/content.vue"
export const content = {
    key: "content",
    name: "Контентная карточка",
    category: "base",
    image: "https://s3-promo-content.s3-eu-west-1.amazonaws.com/_promo-content/1675164255868______________2023-01-31___14.24.03.png",
    props: Object.entries(contentComponent.props).reduce((acc, cur, i) => {
        acc[cur[0]] = cur[1]?.default;
        return acc;
    }, {})
}