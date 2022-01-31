let my_calendar_day = document.getElementById("my_calendar_day");

/* get current year. */
let year = new Date().getFullYear();

/* get current month */
let month = new Date().getMonth();

/* total days of the month. */
let days_of_the_month;

if ( month <= 10 ){
    days_of_the_month = new Date(year, (month+1), 0).getDate();
} else {
    days_of_the_month = new Date(year+1, (0), 0).getDate();
}

/* total days of the previous month */
let days_of_the_previous_month = new Date(year, (month), 0).getDate();

/* name of the first day of the month */
let firstDay = new Date(year, month, 1).getDay();
let auxFirstDay = firstDay;

/* name of the last day of the month */
let lastDay = new Date(year, month+1, 0).getDay();

/* create list of month numbers */
let all_day = "";

/* loop that prints the days of the previous month. */
for (let index = 0; index < auxFirstDay; index++) {
    firstDay--;
    all_day = all_day + `<li class="not_day">${days_of_the_previous_month - firstDay}</li>`
    
}

/* loop that prints the days of the current month. */
for (let index = 1; index < (days_of_the_month+1); index++) {
    all_day = all_day + `<li class="day">${index}</li>`
}

/* loop that prints the days of the next month. */
for (let index = 0; index < (6 - lastDay); index++) {
    all_day = all_day + `<li class="not_day">${index + 1}</li>`
}

my_calendar_day.innerHTML = my_calendar_day.innerHTML + all_day;