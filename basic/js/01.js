
$(function(){
    // 직접 선택자
    $('*').css('color', 'gray') // all
    $('#title').css('color', 'green') // id
    $('.sub_title').css(
        {
            color : '#17D281',
            border : '4px solid darkorange',
        }
    ) // class

    $('h3').css('fontSize', 40) // 요소
    $('h1, #title').css('backgroundColor', '#ccc') // 그룹 선택자
    $('h1.logo').css(
        {
            color : '#fff',
            fontSize : 60
        }
    )

    // 인접 관계 선택자

    $('h2').parent().css('border', '4px solid #333') // 부모 요소
    $('section h2').css('color', '#EB5F36') // 하위 요소
    $('#list > li').css('border', '2px solid #333') // 자식 요소
    $('section h2').prev().css(
        {
            color : '#fff',
            backgroundColor : '#688AEA',
            padding : '20px'
        }
    ) // 이전 요소
    $('section h2').next().css(
        {
            color : '#fff',
            backgroundColor : '#678254',
            padding : '20px'
        }
    ) // 다음 요소
    $('section h3').prevAll().css('fontSize', 40)
    $('section h3').prevAll().css(
        {
            fontSize : 30,
            color : '#7A36EB'
        }
    )
    $('.text_1').prevUntil('.title_1').css('border', '2px solid deeppink') // 기준점 이전것들
    $('.text_1').nextUntil('.text_5').css('backgroundColor', '#ccc') // 기준점 이후것들

    $('.section h3').siblings().css('color', 'red') // h3 빼고 형제들만 적용
    $('.sub_item_1').parents().css('border', '3px dotted #329DE2')
    $('.sub_item_1').parents('#list').css('border', '5px dotted #875DE2') // 상위 중에서
    $('.sub_item_1').closest('ul').css('border', '10px solid red') // 가장 가까이 있는 상위 요소
})
