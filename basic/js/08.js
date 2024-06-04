// 단독 이벤트 등록
$('.btn1').click(function(){
    $(this).next().
    text('hello')
})

// $('.btn2').on('click', function(){
//     $(this).next().text('jquery')
// })

$('.btn2').on(
    {
        'mouseover' : function(){
            $(this).next().text('hello')
        },
     
    
        'mouseleave' : function(){
            $(this).next().text('good bye')
        }
    })

// 강제 이벤트 발생
$('.btn1').click()
$('.btn2').trigger('mouseover')

// 이벤트 제거
$('.btn2').off('mousereave')