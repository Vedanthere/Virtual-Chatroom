
var container=document.querySelector('.container');
var store = document.querySelector('.input');
var cal = document.querySelector('.add');

class item{
    constructor(name) {
        this.create(name);
    }
    create(name)
    {
        var l1 = document.createElement('div');
        l1.classList.add('item');
        var item = document.createElement('input');
        item.type="text";
        item.disabled = true;
        item.value = name;
        item.classList.add('item_input');

        var remove = document.createElement('button');
        remove.classList.add('remove');
        // remove.innerHTML = '<i>remove</i>';
        remove.innerHTML = "<h3><button id=\"remove\">&#10004;</button></h3>";
        remove.addEventListener('click',()=>this.remove(l1));

        container.appendChild(l1)

        l1.appendChild(item);

        l1.appendChild(remove);
    }

    remove(l1)
    {
        container.removeChild(l1);
    }
}

cal.addEventListener('click',check);

function check()
{
   if(store.value != "")
   {
       new item(store.value);
       store.value = "";
   }
}