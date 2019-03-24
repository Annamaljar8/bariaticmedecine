let counter = 23;
let period = null;
$(document).ready(function(){
  period = setInterval(function(){
    $('.p-counter').text(counter);
    counter--;
    if(counter == 0) {
      $('.p-counter').text(counter);
      clearInterval(period);
    }
  },2000);
});

(function() {
  'use strict';
  window.addEventListener('load', function() {
    let forms = document.getElementsByClassName('needs-validation');
    let validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

$(document).ready(function(){
  $('.popover-dismiss').popover({
  trigger: 'hover'
  });
});
