onReady();

function onReady() {
    console.log('Javascript is working!');
}

function removeEmployee(event) {
event.target.parentElement.remove()
};

function submitButton(event) {
    console.log('trying to button');
    event.preventDefault();
    
    let getFname = document.getElementById(`getFname`).value;
    let getLname = document.getElementById(`getLname`).value;
    let getId = document.getElementById(`getId`).value;
    let getTitle = document.getElementById(`getTitle`).value;
    let getSalary = document.getElementById(`getSalary`).value;

    document.getElementById(`getFname`).value = "";
    document.getElementById(`getLname`).value = "";
    document.getElementById(`getId`).value = "";
    document.getElementById(`getTitle`).value = "";
    document.getElementById(`getSalary`).value = "";

    //locate place in html for the DOM to insert a copy of the form inputs
    let employeeList = document.getElementById(`employeeList`);
// console.log(employeeList);

//     //tell DOM how to format the inputs
    employeeList.innerHTML +=
        `
        <tr>
            <td>${getFname}</td>
            <td>${getLname}</td>
            <td>${getId}</td>
            <td>${getTitle}</td>
            <td>${getSalary}</td>
            <td>
                
                </td>
        </tr>
        `
    console.log(getFname, getLname, getId, getTitle, getSalary);
}