


$(window).scroll(function () {
    if($(document).scrollTop()>50){
        $('.navigation').addClass('fix-nav')
    }
    else{
        $('.navigation').removeClass('fix-nav')
    }
});

var inputval=document.getElementById('input-val');
var calc=document.getElementById('calc-btn');
function calculator() {
    
    calc.style.backgroundColor='#03a500';
    calc.value=inputval.value*556;
}

function prevSitting() {
    calc.value='احسب';
    calc.style=' ';
    inputval.value= '';
}
