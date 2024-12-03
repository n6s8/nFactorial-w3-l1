// 1. Таблицу с `id="age-table"`.
const targetTable = document.getElementById("age-table");
console.log(targetTable); 
/* <table id="age-table">
<tbody><tr>
  <td>Age:</td>
  <td id="age-list">
    <label>
      <input type="radio" name="age" value="young">less than 18</label>
    <label>
      <input type="radio" name="age" value="mature">18-50</label>
    <label>
      <input type="radio" name="age" value="senior">more than 50</label>
  </td>
</tr>

<tr>
  <td>Additionally:</td>
  <td>
    <input type="text" name="info[0]">
    <input type="text" name="info[1]">
    <input type="text" name="info[2]">
  </td>
</tr>

</tbody></table> */

// 2. Все элементы label внутри этой таблицы (их три).
const allLabel = targetTable.getElementsByTagName('label');
for(let i = 0; i < allLabel.length; i++){ 
    console.log(allLabel[i].textContent);
}


// 3. Первый td в этой таблице (со словом «Age»).
const firstTd = document.querySelectorAll('td');
console.log(firstTd[0]); // <td>Age:</td>
console.log(firstTd[0].textContent); // Age:
// Second solution
const FirstId = targetTable.querySelector('td');
console.log(FirstId.textContent);

// 4. Форму form с именем name="search".
const form = document.getElementsByName("search");
for(let i = 0; i < form.length; i++){ 
    console.log(form[i]); 

}  /*  <form name="search">
    <label>Search the site:
      <input type="text" name="search">
    </label>
    <input type="submit" value="Search!">
  </form>
  <input type="text" name="search"> */
console.log(form[0]); 
  /*
  <form name="search"> 
  <label>Search the site:
    <input type="text" name="search">
  </label>
  <input type="submit" value="Search!">
</form> */

// 5. Первый `input` в этой форме. 6. Последний `input` в этой форме.
const allInputs = document.querySelectorAll('input');
console.log(allInputs[0]); // <input type="text" name="search">
console.log(allInputs[allInputs.length - 1]); // <input type="submit" value="Search!">

// Second solution for 5
const firtInput = document.querySelector('input');
console.log(firtInput);

// THE SECOND TASK
/*
Что выведет этот код?

```jsx
<script>
  let body = document.body;

  body.innerHTML = "<!--" + body.tagName + "-->";

  alert( body.firstChild.data ); // что выведет?
</script>
```
*/
/* Answer
Переменная `body` принимает `document.body`, который является `body`. Потом `firstChild` у `body` является комментарием, и внутри `body.tagName`.  
`.data` как вывод показывает только `BODY` без комментариев. Если бы использовалось `outerHTML`, то вывод был бы с комментарием.  
Поэтому ответ: `BODY`.
*/