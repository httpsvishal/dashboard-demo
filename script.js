import { users } from "./dummy_users.js";

const table  = document.querySelector("table");
const searchBar =document.getElementById("searchBar");
const searchForm = document.getElementById("searchForm");
const filters = document.getElementById("filters");

let showUsers = (users) =>{
    table.innerHTML="";
    users.forEach(user =>{
        let row = document.createElement("tr");
        let fname = document.createElement("td");
        fname.innerText = user.first_name;
        let lname = document.createElement("td");
        lname.innerText = user.last_name;
        let email = document.createElement("td");;
        email.innerText = user.email;
        let age = document.createElement("td");
        age.innerText = user.age;
        let city = document.createElement("td");
        city.innerText = user.city;
        let bankBalance = document.createElement("td");
        bankBalance = user.bank_balance;
    
        row.append(fname,lname,email,age,city,bankBalance);
        table.append(row);
    })
}

showUsers(users);

let handleSearch = (e) =>{
    e.preventDefault();
    let searchText = searchBar.value.toLowerCase() ;
    let filteredUsers = users.filter((user)=>{
        user.first_name  = user.first_name.toLowerCase();
        return user.first_name.includes(searchText,0);
    })
    showUsers(filteredUsers);
}

searchForm.addEventListener("submit",handleSearch);

let sortByAgeAsc =()=>{
    let filteredUsers = users.sort((a,b)=>{
        return a.age - b.age;
    })
    showUsers(filteredUsers);
}

let sortByAgeDesc =()=>{
    let filteredUsers = users.sort((a,b)=>{
        return b.age - a.age;
    })
    showUsers(filteredUsers);
}

let sortByBBasc =()=>{
    let filteredUsers = users.sort((a,b)=>{
        return a.bank_balance - b.bank_balance;
    })
    showUsers(filteredUsers);
}

let sortbyBbDesc =()=>{
    let filteredUsers = users.sort((a,b)=>{
        return b.bank_balance - a.bank_balance;
    })
    showUsers(filteredUsers)
}

let filterData = () =>{
    console.log("hey");
    let filter = filters.value;
    if(filter=="ageAsc")
        sortByAgeAsc();
    if(filter == "ageDesc")
        sortByAgeDesc();
    if(filter == "bbAsc")
        sortByBBasc();
    if(filter =="bbDesc")
        sortbyBbDesc();
}

filters.addEventListener("change",filterData)