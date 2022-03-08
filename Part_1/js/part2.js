//____________________________________________________________Part2______________________________________________________________________
'use strict';

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

let numberOfFilms = prompt('Сколько фильмов вы уже помотрели?');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};


for (let i = 0; i < 2; i++) {
    let answerMovies = prompt('Один из последних просмотренных фильмов?');
    let answerGrade = prompt('На сколько оцените его?');

    if (answerMovies == '' || answerMovies == null || answerMovies.length > 50 || answerGrade == '' || answerGrade == null || answerGrade.length > 50) { // if (!answerMovies || answerMovies > 50)
        i--;
        continue;
    }

    personalMovieDB.movies[answerMovies] = answerGrade;
}



if (numberOfFilms < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (numberOfFilms >= 10 && numberOfFilms < 30) {
    alert('Вы классический зритель');
} else if (numberOfFilms > 30) {
    alert('Вы киноман');
} else {
    alert('произошла ошибка');
}