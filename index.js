// // let a = +prompt("Введите число a");
// // let b = +prompt("Введите число b");
// // let summ = prompt("Какую операцию произвести? 1)Сложение, 2)Вычитание , 3)Умножение , 4)Деление ");

let calc = {
    
}


$('#btn-m').click(function(e){
    e.preventDefault()
    let numberA = Number($('#inputA').val());
    let numberB = Number($('#inputB').val());
    let summ = $('#method').val();
    let history = $('textarea').val();
    switch(summ){
        case "S":
        $('textarea').val(history + '\n' + ("Ваше сложение: " + numberA + " + " + numberB + " = " + (numberA + numberB)))
        break;
        
        case "V":
        $('textarea').val(history + '\n' + ("Ваше сложение: " + numberA + " - " + numberB + " = " + (numberA - numberB)));
        break;
    
        case "Y":
        $('textarea').val(history + '\n' + ("Ваше сложение: " + numberA + " * " + numberB + " = " + (numberA * numberB)));
        break;
    
        case "D":
        $('textarea').val(history + '\n' + ("Ваше сложение: " + numberA + " : " + numberB + " = " + (numberA / numberB)));
        break;
        
    }
})


let top_p = $('#position-t');
let left_p = $('#position-l');
position(top_p, left_p);

function position(top_p, left_p){
    left_p.on('change', function(e){
        e.preventDefault();
        let base = `${left_p.val()}px`
        $('form').css({
            'padding-left' : base,
        })
    })
    top_p.on('change', function(e){
        e.preventDefault(e);
        let base2 = `${top_p.val()}px`
        $('form').css({
            'padding-top' : base2,
        })
    })
}

$('#color').on('change', function(e){
    e.preventDefault();
    let main_color = $('#color').val()
    let swap = $('body')
    let black = '#000000'
    let white = '#fff'
    
    switch(main_color){
        case 'black':
            swap.css({
                'background-color' : black,
            })
            break;
        case 'white':
            swap.css({
                'background-color' : white,
            })
            break;
    }

})


$("#btn-history").click(function(e){
    e.preventDefault()
    $("textarea").val("");
})

$('#btn-reset').click(function(e){
    e.preventDefault()
    $('#inputA').val("");
    $('#inputB').val("");
})






