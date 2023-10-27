onReady();

function onReady() {
    console.log('Javascript is working!');
}

function submitButton(event) {
    console.log('trying to button');
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

    console.log(getFname, getLname, getId, getTitle, getSalary);
}