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

let accommodation_options = document.getElementsByClassName('accommodation-options')[0];
let hotel_card = document.getElementById('hotel');
let hostel_card = document.getElementById('hostel');
let motel_card = document.getElementById('motel');
let house_card = document.getElementById('house');
let quantity = document.getElementById('quantity');
let no_result = document.getElementById('no-results')

// Date difference calculation

document.getElementById('search-btn').onclick = function(){
    let date_one_val = document.getElementById('check-in-date').value;
    let date_two_val = document.getElementById('check-out-date').value;
    let difference = calculate_day_difference(date_one_val,date_two_val);

    // Filter accommodation options
    // hotel filtering
    if (difference >= 1 && difference <= 5 && quantity.value <= 2){
        accommodation_options.classList.remove('no-display');
        hotel_card.classList.remove('no-display');
    }
    else{
        hotel_card.classList.add('no-display');
    }

    // hostel filtering
    if (difference >= 1 && difference <= 10 && quantity.value == 1){
        accommodation_options.classList.remove('no-display');
        hostel_card.classList.remove('no-display');
    }
    else{
        hostel_card.classList.add('no-display');
    }

    // hostel filtering
    if (difference >= 3 && difference <= 10 && quantity.value >= 2 && quantity.value <= 4){
        accommodation_options.classList.remove('no-display');
        motel_card.classList.remove('no-display');
    }
    else{
        motel_card.classList.add('no-display');
    }

    // house filtering
    if (difference >= 2 && difference <= 15 && quantity.value <= 4){
        accommodation_options.classList.remove('no-display');
        house_card.classList.remove('no-display');
    }
    else{
        house_card.classList.add('no-display');
    }

    // no results filtering
    if(difference > 15 || quantity.value > 4){
        accommodation_options.classList.remove('no-display');
        no_result.classList.remove('no-display');
    }
    else{
        no_result.classList.add('no-display');
    }
} 

// Modal with meal options

document.getElementsByClassName('reserve-button').onclick = function(){
    

}


// Total accommodation value before meal options
// let total_from_input = document.getElementsByClassName('total-from-input');

// get difference of days 
// get quantity of guests
// calculate the total cost from these values


// Total with the meal options









    
