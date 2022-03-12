//_____________________________________________________________________part3_________________________________________________

/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже помотрели?');
    
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        console.log('пожалуйста введите число');
        numberOfFilms = +prompt('Сколько фильмов вы уже помотрели?');
    }
}

start();



let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let answerMovies = prompt('Один из последних просмотренных фильмов?');
        let answerGrade = prompt('На сколько оцените его?');
    
        if (answerMovies == '' || answerMovies == null || answerMovies.length > 50 || answerGrade == '' || answerGrade == null || answerGrade.length > 50) { // if (!answerMovies || answerMovies > 50)
            i--;
            continue;
        }
    
        personalMovieDB.movies[answerMovies] = answerGrade;
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (numberOfFilms < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if (numberOfFilms >= 10 && numberOfFilms < 30) {
        alert('Вы классический зритель');
    } else if (numberOfFilms > 30) {
        alert('Вы киноман');
    } else {
        alert('произошла ошибка');
    }
}

detectPersonalLevel();

function showMyDB() {
    if (!personalMovieDB.privat) {
        console.dir(personalMovieDB);
    }
}

showMyDB();

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        let answer = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = answer; //genres.push(answer);
        /* personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`); */

    }
}


writeYourGenres();




//--------------------------------------------------------------------------------

/* while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    console.log('пожалуйста введите число');
    
    numberOfFilms = +prompt('Сколько фильмов вы уже помотрели?');
} */

/* while (true) {
    if (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        console.log('пожалуйста введите число');
    } else {
        break;
    }
}  */