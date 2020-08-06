// run the following commands in browser
// example shown using playcode.io
// jQuery version: 3.5.1

/*
<table id="example" class="names">
  <tr class="header">
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Age</th>
  </tr>
  <tr class="item" id="item1">
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
  </tr>
  <tr class="item" id="item2">
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
  <tr class="item" id="item3">
    <td>John</td>
    <td>Doe</td>
    <td>80</td>
  </tr>
</table>
<input id="test-radio" type="radio" name="test" checked value="1">
 */

let items = $('.item');
console.log(items.length); // 3
let items2 = $('#item1,#item2');
console.log(items2.length); // 2
let items3 = $('tr[id^=item]');
console.log(items3.length); // 3

let trs = $('tr');
console.log(trs.length) // 4

let tds = $('table#example tr.item td');
console.log(tds.length); // 9
let tbody = $('table>');
console.log(tbody.prop('tagName')); // TBODY

let td1 = $('tr.item td:first');
console.log(td1.text()); // Jill

let td2 = $('tr.item td:first-child');
console.log(td2.eq(1).text()); // Eve

let td3 = $('tr.item td:last-child');
console.log(td3.eq(2).text()); // 80

let td4 = $('tr.item td:nth-child(2)');
console.log(td4.eq(0).html());  // Smith

let table = $('table#example');
let header = table.find('.header');
console.log(header.text());
/*
    Firstname
    Lastname
    Age
 */

let item1 = header.next();
console.log(item1.html());
/*
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
 */

let item13 = items.filter(function () {
    return this.id.slice(-1) % 2 === 1;
});

console.log(item13.length); // 2

let arr = items.map(function () {
    return this.id;
}).get();

console.log(arr);
/*
[
"item1",
"item2",
"item3"
]
 */

td1.text('David');
// Jill changed to David

td2.css('color', '#ff0000').css('background-color', '#dcdcdc');
// style changed for the first column

td3.append('<span>!</span>');
// append '!' for the third column

td4.hide();
// hide 2nd column
td4.show();
// show 2nd column

console.log($(window).width()); // 310
console.log($(document).width()); // 310

let radio = $('#test-radio');
console.log(radio.attr('checked')); // checked
console.log(radio.prop('checked')); // true
console.log(radio.is(':checked')); // true

td3.prepend(function (index, html) {
    return index + ':';
});
// prepend index for the third column

header.after('<tr><td>Zach</td><td>Wong</td><td>27</td></tr>');
// insert after header

console.log(header.next().html());
// <td>Zach</td><td>Wong</td><td>27</td>

header.next().remove();
// remove the inserted element

table.append(item1);
// move the first element to the bottom
table.prepend(header, item1);
// move back
