import { deleteUser, addUser, editUser } from "./api.js"

//JS 
let table = document.querySelector(".tbody")

//add 
let btnAdd = document.querySelector(".add")
let dialogAdd = document.querySelector(".addDialog")
let addBtn = document.querySelector(".addbtn")
let form1 = document.querySelector(".formADD")

//edit 
let edit = document.querySelector(".edit")
let editDialog = document.querySelector(".editDialog")
let form2 = document.querySelector(".form2")


//add code 
btnAdd.onclick = () => {
    dialogAdd.showModal()
}

form1.onsubmit = (event) => {
    event.preventDefault();

    let newObj = {
        img: form1["img"].value,
        h1: form1["name"].value,
        h2: form1["nickname"].value,
        Role: form1["jk"].value,
        age: form1["age"].value,
        birthplace: form1["birthplace"].value,
        education: form1["education"].value,
        delete: "",
        edit: "",
        info: "",
        iscomplete: false,
    };
    addUser(newObj);
}
addBtn.onclick = () =>{
    dialogAdd.close()
}


//edit 
let idx = null;

form2.onsubmit = (event) => {
    event.preventDefault()

    let user = {
        img: form2["img"].value,
        h1: form2["name"].value,
        h2: form2["nickname"].value,
        Role: form2["jk"].value,
        age: form2["age"].value,
        birthplace: form2["birthplace"].value,
        education: form2["education"].value,
        delete: "",
        edit: "",
        iscomplete: false,
    };
    editUser(idx, user)
}

edit.onclick = () => {
    editDialog.close();
}


function getData (data) {
    table.innerHTML = "",

    data.forEach((elem) => {

        let tr = document.createElement("tr")

        let td1 = document.createElement("td")
        td1.classList.add("td1")
        td1.innerHTML = "<img src='" + elem.img + "'>" + elem.h1 + "<br>" + elem.h2;

        let td2 = document.createElement("td")
        td2.innerHTML = elem.Role

        let td3 = document.createElement("td")
        td3.innerHTML = elem.age

        let td4 = document.createElement("td")
        td4.innerHTML = elem.birthplace

        let td5 = document.createElement("td")
        td5.innerHTML = elem.education

        let h1 = document.createElement("h1")
        
        let td7 = document.createElement("td")
        td7.classList.add("td7")
        td7.innerHTML = elem.delete + "" + elem.edit 

        let deleteImg = document.createElement("img")
        deleteImg.src = "log/icons8-мусор-40.png"

        let editImg = document.createElement("img")
        editImg.src = "log/icons8-создать-новый-50.png"

        deleteImg.onclick = () => {
            deleteUser(elem.id)
        }

        editImg.onclick = () => {

            editDialog.showModal() 

            idx = elem.id

            form2["img"].value = elem.img
            form2["name"].value = elem.h1
            form2["nickname"].value = elem.h2
            form2["jk"].value = elem.Role
            form2["age"].value = elem.age
            form2["birthplace"].value = elem.birthplace
            form2["education"].value = elem.education
        }

        td7.append(deleteImg, editImg)
        tr.append(td1, td2, td3, td4, td5, td7)
        table.appendChild(tr)
    })
}



export { getData }