const form = document.getElementById('item-form')
const formInput = document.getElementById('item-input')
const itemList = document.getElementById('item-list')
form.addEventListener('submit', addItem)

function addItem(e){
    e.preventDefault();
    const item = formInput.value
    if(item === ''){
        alert('Lütfen bilgileri doldurunuz.')
        return
    }

    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item))

    const button = createButton('remove-item btn-link text-red')
    li.appendChild(button)
    itemList.appendChild(li)
}

function createButton(clasess){
const button = document.createElement('button')
button.className = clasess;
const icon = createIcon('fa-solid fa-xmark')
button.appendChild(icon)
return button;
}


function createIcon(clasess){
    const icon = document.createElement('i')
    icon.className = clasess;
    return icon;
}