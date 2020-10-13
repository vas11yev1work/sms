window.addEventListener('DOMContentLoaded', () => {
    const userName = document.querySelector('#user-name')
    const phoneNumber = document.querySelector('#phone-number')
    const sendButton = document.querySelector('#send')

    // тут номер(а) телефона(ов), на которые нужно отправлять смс
    // если номеров несколько, то указать через запятую
    // ex. `79999998888,79665558899,79882885223`
    const TO_NUMBER = `79963978688`  

    // тут app_id приложения
    // регистрируешься на сайте sms.ru, и в личном кабинете находишь свой app_id
    const APP_ID = `8BF8B9CC-0ACB-2F15-BDC9-7B616FBF0BF4`
    const URL = `https://sms.ru/sms/send?api_id=${APP_ID}&to=${TO_NUMBER}&json=1`

    const sendMessage = async (name, phone) => {
        // тут просто строка с сообщением
        // прижата к левому краю, чтобы в самом сообщении не было лишних пробелов
        const response = await fetch(`${URL}&msg=${encodeURIComponent(`
Новая заявка!
Имя: ${name}
Номер телефона: ${phone}
        `)}`)
    }

    sendButton.addEventListener('click', () => {
        // отправка формы по клику
        sendMessage(userName.value, phoneNumber.value)
    })
})
