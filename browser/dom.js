// run the following commands in browser
// example shown using playcode.io

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
 */

let idTable = document.getElementById('example');
let classTable = document.getElementsByClassName('names');
let tagTable = document.getElementsByTagName('table');

console.log(idTable.getElementsByTagName('th').item(0).innerHTML);
// Firstname

console.log(classTable.item(0).getElementsByTagName('tr').item(1).innerHTML);
/*
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
 */

console.log(tagTable.item(0).getElementsByClassName('item').item(2).firstElementChild.innerHTML);
// John

let item1 = document.querySelector("#item1");
console.log(item1.innerHTML);
/*
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
 */

let item2 = document.querySelector("#example").querySelectorAll(".item");
console.log(item2.item(1).innerHTML);
/*
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
 */

let text1 = item1.children.item(0);
text1.textContent = 'David';
// Jill changed to David

for (let node of item1.children) {
    node.style.color = '#ff0000';
    node.style.fontSize = '20px';
}
// style changed

let item4 = document.createElement('tr');
item4.id = 'item4';
item4.className = 'item';

function createTd(content) {
    let td = document.createElement('td');
    td.textContent = content;
    return td;
}

item4.appendChild(createTd('Zach'));
item4.appendChild(createTd('Wong'));
item4.appendChild(createTd('27'));
idTable.appendChild(item4);
// inserted at bottom

item2 = item2.item(1);
let item2Parent = item2.parentElement;
item2Parent.removeChild(item2);
// deleted Eve Jackson

idTable.insertBefore(item2, item4);
// insert back before Zach Wong
