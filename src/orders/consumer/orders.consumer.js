export default function (container) {
    return async ({message}) => {
        const {event, payload} = parseMessage(message)

        switch (event) {
        case '?eventName?':
            return await container.ValidateOrder(payload)
        default:
            return
        }
    }
}

const parseMessage = (message) => {
    const event = message.key.toString()
    const payload = JSON.parse(message.value.toString())
    console.log('message consumed')
    console.log({key: event, payload: payload})
    return {event, payload}
}
