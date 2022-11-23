
// создадим объект Map для хранения сессии
let session = new Map();

// Сохраним UserAgent
session.set("userAgent", window.navigator.userAgent)

// Запросим возраст пользователя и сохраним в переменную
let age = prompt("Пожалуйста, введите ваш возраст");

if (age >= 18) {
    // Те, кто старше 18, увидят приветствие и будут направлены на сайт
    if (session.get("age") >= 18) {
        let startDate = new Date().toLocaleString();

        alert("Приветствуем на LifeSpot! " + '\n' + "Текущее время: " + startDate);
        session.set("startDate", startDate)
    }
    else {
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
        window.location.href = "http://www.google.com"
        a = true + 20 + "name"
    }
}

// Вывод в консоль
for (let result of session) {
    //console.log(result)
    alert(result);
}