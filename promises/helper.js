//Write a JavaScript function to check whether an `input` is a date object or not?                  
//by using instance of


typeof date.getMonth === 'function'


date instanceof Date


Object.prototype.toString.call(date) === '[object Date]'


let myDate = new Date();
console.log(myDate instanceof Date);

// next approach
let isDate = function (input) {
    if (Object.prototype.toString.call(input) === "[object Date]")
      return true;
    return false;
  };
  console.log(isDate("April 14, 2020 11:15:00"));
  console.log(isDate(new Date(96400000)));
  console.log(isDate(new Date(89, 5, 11, 10, 23, 20, 0)));
  console.log(isDate([1, 3, 5, 0]));


//Write a JavaScript function to get the number of days in a month?                     
// Month in JavaScript is 0-indexed (January is 0, February is 1, etc), 
// but by using 0 as the day it will give us the last day of the prior
// month. So passing in 1 as the month number will return the last day
// of January, not February
function daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
}

// July
daysInMonth(7,2009); // 31
// February
daysInMonth(2,2009); // 28
daysInMonth(2,2008); // 29


//Write a JavaScript function to add specified minutes to a Date object?                        
var newDateObj = moment(oldDateObj).add(30, 'm').toDate();


var newDateObj = new Date(oldDateObj.getTime() + diff*60000);


function addMinutes(date, minutes) {
    return new Date(date.getTime() + minutes*60000);
}


addMinutes(myDate, 60*24); //DO NOT DO THIS


const NOV = 10; //because JS months are off by one...
addMinutes(new Date(2014, NOV, 2), 60*24); //In USA, prints 11pm on Nov 2, not 12am Nov 3!


/**
 * Adds time to a date. Modelled after MySQL DATE_ADD function.
 * Example: dateAdd(new Date(), 'minute', 30)  //returns 30 minutes from now.
 * https://stackoverflow.com/a/1214753/18511
 * 
 * @param date  Date to start with
 * @param interval  One of: year, quarter, month, week, day, hour, minute, second
 * @param units  Number of units of the given interval to add.
 */
function dateAdd(date, interval, units) {
  if(!(date instanceof Date))
    return undefined;
  var ret = new Date(date); //don't change original date
  var checkRollover = function() { if(ret.getDate() != date.getDate()) ret.setDate(0);};
  switch(String(interval).toLowerCase()) {
    case 'year'   :  ret.setFullYear(ret.getFullYear() + units); checkRollover();  break;
    case 'quarter':  ret.setMonth(ret.getMonth() + 3*units); checkRollover();  break;
    case 'month'  :  ret.setMonth(ret.getMonth() + units); checkRollover();  break;
    case 'week'   :  ret.setDate(ret.getDate() + 7*units);  break;
    case 'day'    :  ret.setDate(ret.getDate() + units);  break;
    case 'hour'   :  ret.setTime(ret.getTime() + units*3600000);  break;
    case 'minute' :  ret.setTime(ret.getTime() + units*60000);  break;
    case 'second' :  ret.setTime(ret.getTime() + units*1000);  break;
    default       :  ret = undefined;  break;
  }
  return ret;
}



//Write a JavaScript function to get the difference between two dates in days?                  
const date1 = new Date('7/13/2010');
const date2 = new Date('12/15/2010');
const diffTime = Math.abs(date2 - date1);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
console.log(diffTime + " milliseconds");
console.log(diffDays + " days");



//Write a JavaScript function to get the last day of a month? 
var today = new Date();
var lastDayOfMonth = new Date(today.getFullYear(), today.getMonth()+1, 0);

//different approach
function daysInMonth(iMonth, iYear)
{
    return 32 - new Date(iYear, iMonth, 32).getDate();
}


//Write a JavaScript function to get the quarter (1 to 4) of the year?                              
// For the US Government fiscal year
// Oct-Dec = 1
// Jan-Mar = 2
// Apr-Jun = 3
// Jul-Sep = 4
function getQuarter(d) {
  d = d || new Date();
  var m = Math.floor(d.getMonth()/3) + 2;
  return m &gt; 4? m - 4 : m;
}


function getQuarter(d) {
  d = d || new Date(); // If no date supplied, use today
  var q = [4,1,2,3];
  return q[Math.floor(d.getMonth() / 3)];
}


function daysLeftInQuarter(d) {
  d = d || new Date();
  var qEnd = new Date(d);
  qEnd.setMonth(qEnd.getMonth() + 3 - qEnd.getMonth() % 3, 0);
  return Math.floor((qEnd - d) / 8.64e7);
}


// different approach
function quarter_of_the_year(date) 
  {
    var month = date.getMonth() + 1;
    return (Math.ceil(month / 3));
  }


console.log(quarter_of_the_year(new Date()));
console.log(quarter_of_the_year(new Date(2015, 1, 21))); 
console.log(quarter_of_the_year(new Date(2015, 10, 18)));


//Write a JavaScript program to find the leap years in a given range of years?                      
function leap_year_range(st_year, end_year) {
    var year_range = [];
    for (var i = st_year; i <= end_year; i++)
    {
         year_range.push(i);
    }
    var new_array = [];

year_range.forEach(
function(year)
{ 
   if (test_LeapYear(year)) 
   new_array.push(year);
});

return new_array;
 }

function test_LeapYear(year) {
if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
            return year;
    } else {
            return false;
    }
}

console.log(leap_year_range(2000,2012));

//ES6 version 
function leap_year_range(st_year, end_year) {
    const year_range = [];
    for (let i = st_year; i <= end_year; i++)
    {
         year_range.push(i);
    }
    const new_array = [];

year_range.forEach(
year => { 
  if (test_LeapYear(year)) 
  new_array.push(year);
});

return new_array;
 }

function test_LeapYear(year) {
if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
            return year;
    } else {
            return false;
    }
}

console.log(leap_year_range(2000,2012));


// using newDate();

// program to check leap year
function checkLeapYear(year) {

    const leap = new Date(year, 1, 29).getDate() === 29;
    if (leap) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}

// take input
const year = prompt('Enter a year:');

checkLeapYear(year);

//Write a JavaScript program to sort the characters in a string alphabetically?
var sortAlphabets = function(text) {
    return text.split('').sort().join('');
};


