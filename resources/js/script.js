// flatpickr code for date picker calendar

config = {
    altInput: true,
    altFormat: "j F, Y",
    minDate: "today",
    // maxDate: new Date().fp_incr(15) // 15 days from now
}

flatpickr("input[type=date]", config);

// flatpickr({
//     "plugins": [new rangePlugin({ input: "#secondRangeInput"})]
// })

// Date difference calculation

document.getElementById('search-btn').onclick = function(){
    let date_one_val = document.getElementById('check-in-date').value;
    let date_two_val = document.getElementById('check-out-date').value;
    let difference = calculate_day_difference(date_one_val,date_two_val);
    console.log(difference);
} 

// Filter accommodation options

let accommodation_options = document.getElementsByClassName('accommodation-options');
let hotel_card = document.getElementById('hotel');
let hostel_card = document.getElementById('hostel');
let motel_card = document.getElementById('motel');
let house_card = document.getElementById('house');
let quantity = document.getElementById('quantity');

document.getElementById('search-btn').onclick = function(){
    if (difference >= 1 && difference <= 5 && quantity <= 2)
        accommodation_options.classList.remove('no-display');
        hotel_card.classList.remove('no-display');
    }
    
