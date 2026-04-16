/* Get the day number from a new date object 
and assign it to a variable */
let today = new Date().getDay();

/* Match day number with a node list index.
Sunday is the first js day but it's the last day
of our list so whe need to change 0 to 6 and
decrement all other day numbers so they match with
the node list indexes */
if( today == 0){
    today = 6;
} else {
    today--;
}

/* select all the description term elements 
and assign them to a variable */

const dts = document.querySelectorAll('dt');

/* use the day number (today variable) to add 
element so it and the adjacent dd can be
styled in CSS */
dts[today].className = 'today';
/* node list begin at 0, so day 1 in our list
(Monday) will be node 0 */

