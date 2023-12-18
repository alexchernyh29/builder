export default defineEventHandler(async (event) => {
    return [getRequestIP(event, { xForwardedFor: true }), getRequestIP(event, { xForwardedFor: false }), getRequestIP(event)]
})