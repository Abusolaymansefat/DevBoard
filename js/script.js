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

document
.getElementById('add-money')
.addEventListener('click', function(event){
    event.preventDefault();
    const amount = getInputValueById('add-money');
    const pin = getInputValueById('pin');
    const acount = document.getElementById('account-number').value;
    const mainBalance = getInnerTextById('main-balance')
    if(acount.length === 11){
        if(pin === 1234){
            const sum = mainBalance + amount;
            // document.getElementById('main-balance').innerText = sum;
            setInnerTextByIdAndValue('main-balance', sum);

            const container = document.getElementById('transection-cont')
            const p = document.createElement('p');
            p.innerText =`
            added ${amount} from ${acount} account
            `
            container.appendChild(p)
        }
        else{
            console.log('pin thik nai')
        }
    }
    else{
        console.log('account numbet thik nai')
    }
})




// document.addEventListener("click", function (event) {
//     if (event.target.id === "myButton") {
//         alert("Button Clicked!");
//     }
// });



//** 
document.addEventListener("DOMContentLoaded", function () {
    const dateElement = document.querySelector(".calendar-date");
    if (dateElement) {
        const today = new Date();
        const formattedDate = today.toDateString();
        dateElement.innerText = formattedDate; 
    }
});


