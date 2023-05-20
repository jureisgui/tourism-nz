// flatpickr code for date picker calendar

config = {
    altInput: true,
    altFormat: "j F, Y",
    minDate: "today",
};

flatpickr("input[type=date]", config);

let accommodation_options = document.getElementsByClassName('accommodation-options')[0];
let hotel_card = document.getElementById('hotel');
let hostel_card = document.getElementById('hostel');
let motel_card = document.getElementById('motel');
let house_card = document.getElementById('house');
let quantity = document.getElementById('quantity');
let no_result = document.getElementById('no-results');

// Date difference calculation
let difference; 

document.getElementById('search-btn').onclick = function(){
    let date_one_val = document.getElementById('check-in-date').value;
    let date_two_val = document.getElementById('check-out-date').value;
    difference = calculate_day_difference(date_one_val,date_two_val);

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

    // motel filtering
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
    if(difference <= 0 || difference > 15 || quantity.value > 4 || difference == 1 && quantity.value >= 3){
        accommodation_options.classList.remove('no-display');
        no_result.classList.remove('no-display');
    }
    else{
        no_result.classList.add('no-display');
    }

    // Scroll to the results section
    window.scrollTo({
        top: accommodation_options.offsetTop,
        behavior: 'smooth'
    });

    // calcutating total cost from user input
    // hotel cost
    let hotel_total_cost = document.getElementById('hotel-total-cost');    
    if(!hotel_card.classList.contains('no-display')){
        hotel_total_cost.innerHTML = (difference*157);
    }

    // hostel cost
    let hostel_total_cost = document.getElementById('hostel-total-cost');    
    if(!hostel_card.classList.contains('no-display')){
        hostel_total_cost.innerHTML = (difference*30);
    }

    // motel cost
    let motel_total_cost = document.getElementById('motel-total-cost');    
    if(!motel_card.classList.contains('no-display')){
        motel_total_cost.innerHTML = (difference*90);
    }

    // house cost
    let house_total_cost = document.getElementById('house-total-cost');    
    if(!house_card.classList.contains('no-display')){
        house_total_cost.innerHTML = (difference*240);
    }

    // transfer input to modal
    let guest_input = document.getElementById('guest-input');
    let date_input = document.getElementById('date-input');
    guest_input.innerHTML = quantity.value;
    date_input.innerHTML = difference;
}; 

// Modal with meal options
let modal_popping = document.getElementsByClassName('button');
let modal = document.getElementById('modal-reserve');

console.log(modal_popping);
for(let i = 0; i < modal_popping.length; i++)  
    modal_popping[i].onclick = turn_model_on;
    
let modal_total_cost;
let modal_total = document.getElementById('modal-total-cost');
    
function turn_model_on(){
    modal_display_toggle(); 
     // reaching the cost calculated from user input (done above)
    modal_total.innerHTML = this.parentNode.children[0].children[0].children[0].innerHTML;
    modal_total_cost = this.parentNode.children[0].children[0].children[0].innerHTML;       
} // turn_modal_on function end

// checkbox for extras (meal options)
let breakfast_checkbox = document.getElementById('breakfast');
let dinner_checkbox = document.getElementById('dinner');
breakfast_checkbox.onchange = meal_check;
dinner_checkbox.onchange = meal_check;

// Recalculate total with meals added
function meal_check(){
    console.log( breakfast_checkbox.checked );

    let breakfast_cost;
    let dinner_cost;

    if(breakfast_checkbox.checked)
        breakfast_cost = 20*difference*quantity.value;
    else
        breakfast_cost = 0;

    if(dinner_checkbox.checked)
        dinner_cost = 20*difference*quantity.value;
    else
        dinner_cost = 0;
        
    modal_total.innerHTML = ~~modal_total_cost + breakfast_cost + dinner_cost;
}

function modal_display_toggle(){
    modal.classList.toggle('no-display');
}

document.getElementById('modal-close-btn').onclick = modal_display_toggle;







    
