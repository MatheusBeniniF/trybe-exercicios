function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
//1
let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function daysOfTheMonth() {
  let getDaysList = document.createElement('#days');
  for (let i = 0; i < dezDaysList.length; i += 1) {
    let day = dezDaysList[i];
    let dayItem = document.createElement('li');

    if (day === 24 || day === 31) {
      dayItem.className = 'day holiday';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    }

    else if (day === 4 || day === 11 || day === 18) {
      dayItem.className = 'day friday';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    }

    else if (day === 25) {
      dayItem.className = 'day holiday friday';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    }

    else {
      dayItem.innerHTML = day;
      dayItem.className = 'day';
      getDaysList.appendChild(dayItem);
    }
  }
}
daysOfTheMonth();

//2
function holidaysButton(name) {
  let button = document.querySelector('.buttons-container');
  let buttonFeriado = document.createElement('button');
  let buttonFeriadoID = 'btn-holiday';
  
  buttonFeriado.innerHTML = name;
  buttonFeriado.id = buttonFeriadoID;
  button.appendChild(buttonFeriado);
}
holidaysButton();

//3
function backgroundColorClick() {
  let getHolidaybutton = document.querySelector('btn-holiday');
  let getHolidays = document.querySelectorAll('.holiday');
  let backgroundColor = 'rgb(238,238,238)';
  let setNewColor = 'white';

  getHolidaybutton.addEventListener('click',function() {
    for (let i = 0 ; i < getHolidays.length; i += 1) {
      if (getHolidays[i].style.backgroundColor === setNewColor) {
        getHolidays[i].style.backgroundColor = backgroundColor;
      }
      else {
        getHolidays[i].style.backgroundColor = setNewColor;
      }
    }
  })
}
backgroundColorClick();

//4
function fridaysButton(name) {
  let button = document.querySelector('.buttons-container');
  let buttonFriday = document.createElement('button');
  let buttonFridayID = 'btn-holiday';
  
  buttonFriday.innerHTML = name;
  buttonFriday.id = buttonFridayID;
  button.appendChild(buttonFriday);
}
fridaysButton();