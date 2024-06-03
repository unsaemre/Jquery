let = books = [
    {title : 'html'},
    {title : 'css'},
    {title : 'javascript'},
]

$(books).each(function(index, item){
    // console.log((index+1) + ':' + item.title);
})

$.each(books, function(idx, item){
    // console.log((idx+1) + ':' + item.title);
})

$('#menu1 li').each(function(idx, item){
    // console.log(item);
    // console.log(idx + ':' + item.text());
})

var menu = $('#menu1 li')

$.each(menu, function(idx, item){
    // console.log(idx + ':' + item.text());
})

// map
let user = [
    { name : 'kim', city : 'seoul'},
    { name : 'park', city : 'busan'},
    { name : 'song', city : 'seoul'},
    { name : 'ahn', city : 'gimhae'},
]

let count = [1,2,3,4,5]
let count2 = { name : 'alice'}

let newUser = $.map(user, function(item){
    if(item.city === 'seoul') {return item}
})

console.log(newUser);

let c = $.inArray(3, count)
console.log(c);
console.log($.isArray(count));
console.log($.isArray(count2));

let d = $.merge(user, count)
console.log(d);

const f1 = '=================================='
console.log(f1);

// index
let i = $('menu1 li').first().index()
console.log(i);
