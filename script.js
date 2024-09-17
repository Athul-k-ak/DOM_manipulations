// changed the text contect of paragraph with id "qoute"
document.getElementById('quote').textContent = "Success is not final, failure is not fatal: It is the courage to continue that counts.";

// Changed background color of all 'info-box' class divs
let infoBoxes = document.getElementsByClassName('info-box');
for (let i = 0; i < infoBoxes.length; i++) {
    infoBoxes[i].style.backgroundColor = '#add8e6';  
}

//Updated the third list item in the task 
document.querySelectorAll('ul li')[2].textContent = "Task 3: Updated task";

//Appended the message -"Have a great day" to the footer span using querySelector
document.querySelector('footer span').textContent += " - Have a great day!";
