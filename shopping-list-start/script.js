const form = document.getElementById('item-form')
const formInput = document.getElementById('item-input')
const itemList = document.getElementById('item-list')
const clearBtn = document.getElementById('clear')
const itemFilter = document.getElementById('filter')


function addItem(e){
e.preventDefault()
let item = formInput.value;
if(item === ''){
alert('Listeye birşey eklemek için kutucugu doldurunuz.')
return
}
const li = document.createElement('li');
li.appendChild(document.createTextNode(item))
const button = createButton('remove-item btn-link text-red')
li.appendChild(button)
itemList.appendChild(li)
checkUI()
}

function createButton(clasess){
    const button = document.createElement('button');
    button.className = clasess;
    const icon = createIcon('fa-solid fa-xmark')
    button.appendChild(icon)
    return button
}

function createIcon(clasess){
    const icon = document.createElement('i');
    icon.className = clasess;
    return icon
}

function removeItem(e){
if(e.target.parentElement.classList.contains('remove-item')){
    if(confirm('Are you sure? '))
    e.target.parentElement.parentElement.remove()
    checkUI()

}
}

function removeItems(){
    while(itemList.firstChild){
        itemList.removeChild(itemList.firstChild)
        checkUI()
    }
}
function filterItems(e){
 const text = e.target.value.toLowerCase();
 const items = itemList.querySelectorAll('li')
 items.forEach(item =>{
    const itemName = item.firstChild.textContent.toLowerCase();
    if(itemName.indexOf(text) != -1 ){
        item.style.display = 'flex'
    }
    else{
        item.style.display = 'none'
    }
 })

}


 function checkUI(){
    const items = itemList.querySelectorAll('li')
    if(items.length === 0){
        clearBtn.style.display = 'none'
        itemFilter.style.display = 'none'
    }else{
        clearBtn.style.display = 'block'
        itemFilter.style.display = 'block'
    }
 }


itemList.addEventListener('click', removeItem)
form.addEventListener('submit', addItem)
clearBtn.addEventListener('click', removeItems)
itemFilter.addEventListener('input', filterItems)

checkUI()



