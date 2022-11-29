config = {
    altInput: true,
    altFormat: "F j, Y",
    minDate: "today",
    // maxDate: new Date().fp_incr(15) // 15 days from now
}

flatpickr("input[type=date]", config);

// flatpickr({
//     "plugins": [new rangePlugin({ input: "#secondRangeInput"})]
// })