// console.log($);

$('.btn').click(function(e){
    e.preventDefault()
    $('.container-save').slideDown(1000);

    $('input').each(function(){
        if($(this).val()){
            $(this).css({
                'border' : '1px solid grey'
            })
            
        }else{
            $(this).css({
                'border' : '1px solid red'
            })
        }
    })
})
