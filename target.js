const overlay = document.querySelector('.overlay');

document.querySelector("#add-new").addEventListener("click", () =>{
    overlay.style.display = "block";
})

document.querySelector(".close-modal").addEventListener("click", () =>{
    overlay.style.display = "none";
})

function addMore()
{
    let name=document.getElementById('heading').value;
    let content=document.getElementById('content').value;
    var box1=document.createElement('div');
    box1.className='box';
    box1.ondblclick=function()
    {
        var extra=prompt("Enter Element");
        if(extra!=null)
        {
        box1.innerHTML+=(`<div class = "box-content">
        <input type = "checkbox">
        <label for = "7">${extra}</label>
        </div>`) ;
        }
        
    }
    box1.innerHTML+=`<h3>${name}</h3> <div class = "box-content">
    <input type = "checkbox">
    <label for = "6">${content}</label>
    </div>`
    overlay.style.display="none";
    document.querySelector('.content-1').append(box1);
    document.getElementById('heading').value='';
    document.getElementById('content').value='';
}
