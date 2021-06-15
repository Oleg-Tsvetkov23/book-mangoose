# book_library
Приложение библиотека. Данные сохраняются в БД mongo.

Каждый экземпляр книги имеет следующую структуру данных:

{
  id: "string",   -- код книги, внутреннее поле.
  title: "string",
  description: "string",
  authors: "string",
  favorite: "string",
  fileCover: "string",
  fileName: "string"
}

Реализованы методы:

1. GET {{URL}}/api/books- список всех книг. Входных параметров нет.
2. GET {{URL}}/api/books/:id - данные книги по ее id.
3. POST {{URL}}/api/books - добавление книги в библиотеку. Входные параметры описаны выше, кроме поля id.
4. PUT {{URL}}/api/books/:id - редактирование данных книги по ее id. Входные параметры описаны выше, кроме поля id.
5. DELETE {{URL}}/api/books/:id - удаление книги по id.

С использованием шаблонизатора ejs:

6. GET {{URL}}/ - главная страница.
7. GET {{URL}}/book - список книг.
8. GET {{URL}}/book/:id - данные книги по ее id.
9. GET {{URL}}/book/create - создание книги (вывод  формы ввода данных).
10. POST {{URL}}/book/create - создание книги (сохранение данных с формы ввода).
11. GET {{URL}}/book/update -  редактирование данных книги (вывод  формы редактирования).
12. POST {{URL}}/book/update -  редактирование данных книги (сохранение данных с формы ввода).
14. POST {{URL}}/book/delete -  удаление книги.

Запуск:
1. Локальная БД в docker-контейнере: 
  docker-compose up, далее в браузере в строке URL набрать http://127.0.0.1
2. БД в облаке Atlas:
  docker-compose -f docker-compose-atlas up, далее в браузере в строке URL набрать http://127.0.0.1
