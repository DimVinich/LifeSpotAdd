// Функция объявлена через declaration
//  Задаине из блока 29.5.4
const inputParseFunction = function () {
    return document.getElementsByTagName('input')[0].value.toLowerCase();
}


/*
* Функция для фильтрации контента
* Будет вызываться благодаря атрибуту oninput на index.html
*
* */
//function filterContent( userInput) {
function filterContent() {

    // Сохраняем текст пользовательского запроса.
//    let inputString = document.getElementsByTagName('input')[0].value.toLowerCase();
    // Находим контейнеры с видео, которые необходимо фильтровать
    let elements = document.getElementsByClassName('video-container');

    // Пробегаемся по контейнерам
    for (let i = 0; i <= elements.length; i++) {

        // Вытаскиваем текст описания видео, которое необходимо отфильтровать
        //let videoText = elements[i].querySelector(".video-title").innerText; 
        // походу ютуб запрещает считвать инфу ((

        let childElements = elements[i];
        let videoDescriptor = childElements.getElementsByTagName('h3')[0];
        let videoText = videoDescriptor.innerText;

        // Выполняем фильтрацию, сравнивая значения в нижнем регистре
//        if (!videoText.toLowerCase().includes(userInput.toLowerCase())) {
        if (!videoText.toLowerCase().includes(inputParseFunction().toLowerCase())) {
            // Скрываем неподходящие
            elements[i].style.display = 'none';
        } else {
            // Показываем подходящие
            elements[i].style.display = 'inline-block';
        }
    }
}

// создадим объект Map для хранения сессии
//  вынесено на глобальный уровень задаине 25.5.5
let session = new Map();


// Логирование сессии (объявлено через function declaration)
let sessionLog = function logSession(session) {
    // Вывод в консоль
    for (let result of session) {
        console.log(result)
    }
}


/*
* Функция для проверки и сохранения  данных пользователя
* Также блокирует доступ к сайту лицам, не подтвердившим свой возраст
*
* */
function handleSession() {
    // Сохраним UserAgent  и вермя посещения
    session.set("userAgent", window.navigator.userAgent)
    session.set("startDate", startDate)
}

function checkAge() {
    // Запросим возраст пользователя и тоже сохраним
    session.set("age", prompt("Пожалуйста, введите ваш возраст?"))

    // Проверка на возраст и сохранение сессии
    if (session.get("age") >= 18) {
        let startDate = new Date().toLocaleString();

        alert("Приветствуем на LifeSpot! " + '\n' + "Текущее время: " + startDate);

    }
    else {
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
        window.location.href = "http://www.google.com"
    }
}