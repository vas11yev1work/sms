window.addEventListener('DOMContentLoaded', () => {
    const userName = document.querySelector('#user-name')
    const phoneNumber = document.querySelector('#phone-number')
    const sendButton = document.querySelector('#send')

    const TO_NUMBER = `79963978688`
    const APP_ID = `8BF8B9CC-0ACB-2F15-BDC9-7B616FBF0BF4`
    const URL = `https://sms.ru/sms/send?api_id=${APP_ID}&to=${TO_NUMBER}&msg=hello+world&json=1`

    const sendMessage = async (name, phone) => {
        const response = await fetch(`${URL}&msg=${encodeURIComponent(`
Новая заявка!
Имя: ${name}
Номер телефона: ${phone}
        `)}`)
    }

    sendButton.addEventListener('click', () => {
        sendMessage(userName.value, phoneNumber.value)
    })
})