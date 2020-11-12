$(document).ready(function(){
    $('select').formSelect();
});

document.addEventListener('DOMContentLoaded', function() {
    var currentDate = new Date();
    var options = {
        minDate: new Date(1900),
        maxDate: currentDate,
        yearRange: [1900, currentDate.getFullYear()]
    };
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems, options);
  });