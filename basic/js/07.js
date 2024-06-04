// before, 
// $('.wrap p:eq(1)').before('<p>before</p>')
// $('<p>insertBefore</p>').insertBefore('.wrap p:eq(0)')
$('.wrap p:eq(4)').after('.<p>hi</p>')
$('<p>insertafter</p>').insertAfter('.wrap p:last')

//  appedn, appendTo, prepend, prependTo
$('.list').append('<li>리스트 2</li>')
$('<li>리스트 3</li>').appendTo('.list')
$('.list').prepend('<li>리스트 0</li>')

// clone, empty , remove
var cloneList = $('.list').children().clone()
console.log(cloneList);

$('.list2').append(cloneList)
$('.list2').empty()
$('.list').remove()

// replaceAll, replaceWith
$('h1').replaceWith('<h3>replace</h3>')
$('<p>replaceAll</p>').replaceAll('.box2 div')

$('span').unwrap() // 부모요소를 언랩
$('.p1').wrap('<div>1</div>')
$('.p3').wrapAll('<div>5</div>')
$('.box3 ul li').wrapInner('<h3 />')
