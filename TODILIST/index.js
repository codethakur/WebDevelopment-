
function addtolist(){
    var taskname= document.getElementById('taskname').value
    var tododiv = document.getElementById('mytodo')

    var newtodoitem = document.createElement('div')
    var todoname = document.createElement('li')
    todoname.innerHTML = taskname
    var delebtn = document.createElement('i')
    delebtn.classList.add('far')
    delebtn.classList.add('fa-trash-alt')

    newtodoitem.appendChild(todoname)
    newtodoitem.appendChild(delebtn)
    tododiv.appendChild(newtodoitem)
    document.getElementById('taskname').value=""
}

var tododiv = document.getElementById('mytodo')
tododiv.addEventListener('click', deleteitem)

function deleteitem(e)
{
    const element =e.target
    if(element.classList[0]=='far'){
        element.parentElement.remove()
    }
}