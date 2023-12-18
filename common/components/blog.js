import textComponent from "../../components/blog/text.vue"
export const blogText = {
    key: "text",
    name: "Text component",
    category: "blog",
    image: "https://s3-promo-content.s3-eu-west-1.amazonaws.com/_promo-content/1675157087415______________2023-01-31___12.24.23.png",
    props: Object.entries(textComponent.props).reduce((acc, cur, i) => {
        acc[cur[0]] = cur[1]?.default;
        return acc;
    }, {})
}
import headingComponent from "../../components/blog/heading.vue"
export const blogHeading = {
    key: "heading",
    name: "Heading component",
    category: "blog",
    image: "https://s3-promo-content.s3-eu-west-1.amazonaws.com/_promo-content/1675157087415______________2023-01-31___12.24.23.png",
    props: Object.entries(headingComponent.props).reduce((acc, cur, i) => {
        acc[cur[0]] = cur[1]?.default;
        return acc;
    }, {})
}
import spaceComponent from "../../components/blog/space.vue"
export const blogSpace = {
    key: "space",
    name: "Space component",
    category: "blog",
    image: "https://s3-promo-content.s3-eu-west-1.amazonaws.com/_promo-content/1675157087415______________2023-01-31___12.24.23.png",
    props: Object.entries(spaceComponent.props).reduce((acc, cur, i) => {
        acc[cur[0]] = cur[1]?.default;
        return acc;
    }, {})
}
import imageComponent from "../../components/blog/image.vue"
export const blogImage = {
    key: "image",
    name: "Image component",
    category: "blog",
    image: "https://s3-promo-content.s3-eu-west-1.amazonaws.com/_promo-content/1675157087415______________2023-01-31___12.24.23.png",
    props: Object.entries(imageComponent.props).reduce((acc, cur, i) => {
        acc[cur[0]] = cur[1]?.default;
        return acc;
    }, {})
}
import iframeComponent from "../../components/blog/iframe.vue"
export const blogIframe = {
    key: "iframe",
    name: "Iframe component",
    category: "blog",
    image: "https://s3-promo-content.s3-eu-west-1.amazonaws.com/_promo-content/1675157087415______________2023-01-31___12.24.23.png",
    props: Object.entries(iframeComponent.props).reduce((acc, cur, i) => {
        acc[cur[0]] = cur[1]?.default;
        return acc;
    }, {})
}
import ctaComponent from "../../components/blog/cta.vue"
export const blogCta = {
    key: "cta",
    name: "CTA component",
    category: "blog",
    image: "https://s3-promo-content.s3-eu-west-1.amazonaws.com/_promo-content/1675157087415______________2023-01-31___12.24.23.png",
    props: Object.entries(ctaComponent.props).reduce((acc, cur, i) => {
        acc[cur[0]] = cur[1]?.default;
        return acc;
    }, {})
}
import faqComponent from "../../components/blog/faq.vue"
export const blogFaq = {
    key: "faq",
    name: "SEO block FAQ",
    category: "blog",
    image: "https://s3-promo-content.s3-eu-west-1.amazonaws.com/_promo-content/1676023566776______________2023-02-10___13.05.48.png",
    props: Object.entries(faqComponent.props).reduce((acc, cur, i) => {
        acc[cur[0]] = cur[1]?.default;
        return acc;
    }, {})
}
import linkComponent from "../../components/blog/link.vue"
export const blogLink = {
    key: "link",
    name: "Big link",
    category: "blog",
    image: "https://s3-promo-content.s3-eu-west-1.amazonaws.com/_promo-content/1676023566776______________2023-02-10___13.05.48.png",
    props: Object.entries(linkComponent.props).reduce((acc, cur, i) => {
        acc[cur[0]] = cur[1]?.default;
        return acc;
    }, {})
}