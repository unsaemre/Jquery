// console.log($('li'));
$('li:first').css('border', '5px solid #333') // 첫번째 요소
$('li').first().css('border', '6px solid blue')

$('li:last').css('border', '5px solid #333') // 마지막 요소
$('li').last().css('border', '6px solid blue')

$('li:odd').css('borderBottom', '5px solid green') // 홀수
$('li:even').css('borderBottom', '5px solid deeppink') // 짝수

$('li:first-of-type').css('border', '7px solid blue') // 요소 무리중 첫번째
$('li:last-of-type').css('border', '7px solid darkorange') // 요소 무리중 마지막
$('li:nth-child(1)').css('fontSize', 30) // 요소 무리 중 지정
$('li:nth-child(3n)').css('backgroundColor', '#ccc') // 배수

$('li:eq(1)').css('color', ' deeppink') // 요소 중 인덱스 (1)인 요소
$('li').eq(8).css('color', ' deeppink') // 요소 중 인덱스 (1)인 요소
$('li:gt(5)').css('color', 'darkorange') // 인덱스 (5)보다 큰 요소
$('li:lt(4)').css('color', '#8D35A1') // 인덱스 (4)보다 작은 요소

$('li').slice(7).css('fontSize', 30) // 요소 중 인덱스 (7)부터 전부