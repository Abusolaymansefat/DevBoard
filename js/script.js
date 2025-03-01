document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', function() {
        this.innerText = "✔ Completed";
        this.classList.add('bg-green-500', 'text-white'); 
        this.disabled = true; 
        alert("Activity Log Cleared! ✅");
    });
});

document.getElementById("themeButton").addEventListener("click", function () {
    let body = document.getElementById("body");
    if (body.classList.contains("bg-white")) {
        body.classList.remove("bg-white");
        body.classList.add("bg-blue-500", "text-white");
    } else {
        body.classList.remove("bg-blue-500", "text-white");
        body.classList.add("bg-white"); 
    }
});

// document.addEventListener("DOMContentLoaded", function () {
//     const dateElement = document.querySelector('.calendar-date'); 
//     if (dateElement) {
//         const today = new Date();
//         const formattedDate = today.toDateString();
//         dateElement.innerText = formattedDate;
//     }
// });

// document
// .getElementById('add-money')
// .addEventListener('click', function(event){
//     event.preventDefault();
//     const amount = getInputValueById('amount');
//     const pin = getInputValueById('pin');
//     const acount = document.getElementById('account-number').value;
//     const mainBalance = getInnerTextById('main-balance')
//     if(acount.length === 11){
//         if(pin === 1234){
//             const sum = mainBalance + amount;
//             // document.getElementById('main-balance').innerText = sum;
//             setInnerTextByIdAndValue('main-balance', sum);

//             const container = document.getElementById('transection-cont')
//             const p = document.createElement('p');
//             p.innerText =`
//             added ${amount} from ${acount} account
//             `
//             container.appendChild(p)
//         }
//         else{
//             console.log('pin thik nai')
//         }
//     }
//     else{
//         console.log('account numbet thik nai')
//     }
// })

// const themeToggle = document.querySelector('.checkbox');  
// themeToggle.addEventListener('change', () => {  
//     document.documentElement.classList.toggle('dark');  
//     localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');  
// });  
// window.onload = () => {  
//     if (localStorage.getItem('theme') === 'dark') {  
//         document.documentElement.classList.add('dark');  
//         themeToggle.checked = true;  
//     }  
// };


// document.addEventListener("click", function (event) {
//     const dropdown = document.querySelector(".dropdown");
//     if (!dropdown.contains(event.target)) {
//         dropdown.classList.remove("open");
//     } else {
//         dropdown.classList.toggle("open");
//     }
// });

// document.addEventListener("DOMContentLoaded", function () {
//     let btn = document.getElementById("myButton"); 
//     if (btn) {
//         btn.addEventListener("click", function () {
//             alert("Button Clicked");
//         });
//     } else {
//         console.log("Element not found!");
//     }
// });



// document.getElementById("addTaskBtn").addEventListener("click", function() {
//     const taskBoard = document.querySelector(".grid");
//     const newTask = document.createElement("div");

//     newTask.className = "card card-border text-2xl text-black";
//     newTask.innerHTML = `
//         <div class="card-body">
//             <h2 class="card-title">New Project</h2>
//             <h1>New Task</h1>
//             <p>New task description goes here.</p>
//             <div class="card-actions">
//                 <h2>Deadline</h2>
//                 <p>30 March 2025</p>
//                 <button class="btn btn-primary">Completed</button>
//             </div>
//         </div>
//     `;

//     taskBoard.appendChild(newTask);
// });


// ** 
document.addEventListener("DOMContentLoaded", function () {
    const dateElement = document.querySelector(".calendar-date");
    if (dateElement) {
        const today = new Date();
        const formattedDate = today.toDateString();
        dateElement.innerText = formattedDate; 
    }
});

// document.querySelector("").addEventListener("click", function () {
    
// });

document.getElementById("addTaskBtn").addEventListener("click", function() {
    const taskBoard = document.querySelector(".flex");  
    const newTask = document.createElement("div");

    newTask.className = "p-3 bg-green-400 text-black";
    newTask.innerHTML = `
        <h2 class="text-xl font-semibold">Fix Mobile Button Issue</h2>
    `;

    taskBoard.appendChild(newTask);
});

