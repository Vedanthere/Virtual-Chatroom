var container=document.querySelector('.container');     //querySelector that contains container for to-do list
var store = document.querySelector('.input');   //store element with name input for items
var cal = document.querySelector('.add');  //cal element with add

class item{
    constructor(name) {      //constructor
        this.create(name);    //creates name
    }
    create(name)
    {
        var l1 = document.createElement('div');
        l1.classList.add('item');
        var item = document.createElement('input');
        item.type="text";
        item.disabled = true;  //sets disabled attribute of an input element to true
        item.value = name;
        item.classList.add('item_input');

        var remove = document.createElement('button');     //buttons to remove
        remove.classList.add('remove');

        remove.innerHTML = "<h3><button id=\"remove\">&#10004;</button></h3>";  //this creates buttons and
        remove.addEventListener('click',()=>this.remove(l1));

        container.appendChild(l1)    //container appends into l1

        l1.appendChild(item);   //appends in item

        l1.appendChild(remove);  //appends in remove
    }

    remove(l1)  //method removes the l1 element from the 'container' element using the 'removeChild'
    {
        container.removeChild(l1);  //removechild for l1 that connects the container with l1
    }
}

cal.addEventListener('click',check);  //checks for the store element for a value

function check()  //check function called when the cal is clicked
{
    if(store.value != "") //if so, it creates a new item object with the value of store
    {
        new item(store.value);
        store.value = "";  //sets the store value to an empty string
    }
}