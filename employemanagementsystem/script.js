const form=document.getElementById("form");
const recordcontainer=document.getElementById("records-container");
const createButton=document.querySelector("form button");
let empid=1000;
const onSubmitForm=(event)=>{
    event.preventDefault();
    const employe={
        employeeId:++empid,
        name:event.target.name.value,
        salary:event.target.salary.value,
        role:event.target.role.value,
        team:event.target.team.value,
        companyname:event.target.companyName.value
    }
 addNewemploy(employe);
 form.reset();
}
function addNewemploy(employe){
    const record=document.createElement("tr");
    for(let key in employe)
    {
        const cell=document.createElement("td");
        cell.innerText=employe[key];
        record.appendChild(cell);
    }
    const optioncell=document.createElement("td");
    const editicon=document.createElement("span");
    editicon.className="material-symbols-outlined icon";
    editicon.innerText="edit";
    editicon.addEventListener("click",editRecord);

    const delteicon=document.createElement("span");
    delteicon.className="material-symbols-outlined icon ";
    delteicon.innerText="delete";
 delteicon.addEventListener("click",deleteRecord);
   
    optioncell.append(editicon,delteicon);
    record.appendChild(optioncell);
    recordcontainer.appendChild(record); 

}
function deleteRecord(event)
{
    const deletebutton=event.target;
    const record=deletebutton.parentNode.parentNode;
    record.remove();
}
function editRecord(event){
    console.log(event.target.parentNode)
}
form.addEventListener("submit" ,onSubmitForm);