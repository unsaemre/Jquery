$('#list a[target]').css('color', '#35AB22') // target 속성이 있는 a 요소
$('#list a[href^=https]').css('fontSize', 30) // href에서 https가 있는 요소
$('#list a[href$=net]').css('color', '#111') // href에서 net으로 끝나는 요소
$('#list a[href*=google]').css('color', '#fff') // href에서 net으로 끝나는 요소
$('li:hidden').css('display', 'block')
$('input:text').css('background', '#ccc')
$('input:password').css('background', 'gold')

var v1 = $('#f3 select').val()
console.log(v1);

var v2 = $('#f4 :checked').val()
console.log(v2);

var v3 = $('#f5 :checked').val()
console.log(v3);

$('li:contains("구글")').css('background', 'darkorange') // 어떤 텍스트를 포함한 요소
$('#f2').contents().filter('input').css('background', 'blue') // 인풋만 선택
$('li a').has('span').css('border', '6px solid #87DA12') // a 중에서 span을 가진 요소
$('li').not(':first').css('border', '4px solid deeppink')
$('form section').filter('#f5').css('background', '#ccc') // 세션만 잡는다
$('form').find('#f4').css('background', 'gold')

// is() 메서드
console.log($('#list li').eq(3).is('visible'));
console.log($('#list li').eq(3).is('hidden'));
console.log($('#sel').is('selected'));
console.log($('#chk2').is('checked'));