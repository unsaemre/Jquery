// html(), text()
var result = $('#box1').html() // 하위요소를 문자열로 반환

$('#box2').text(result)

$('#box1 p').html('<a href="#">Hi</a>') // 하위요소를 제거하고 새 요소로 변경

$('#box3 h2').text($('#box1 h2').text())
$('#box3 h2').text($('#box1 p').text()) // 요소의 텍스트를 가져오거나 생성

// attr(), removeAttr()
var srcValue = $('#box4 img').attr('src')
var altValue = $('#box4 img').attr('alt')
var borderValue = $('#box4 img').attr('border')
console.log(srcValue);
console.log(altValue);
console.log(borderValue);

$('#box4 img')
    .attr({
        src : '../image/card_02.jpg',
        width : 150,
        alt : 'card2'
    })
    .removeAttr('border')

const f1 = '============================'
console.log(f1);

// var() form 요소의 속성값을 가져오거나 적용
console.log($('#user_name').val());

$('#user_name').val('ahn')
$('#user_id').val('park')

console.log(f1);

$('#chk_3').prop('checked', true)

console.log(f1);
