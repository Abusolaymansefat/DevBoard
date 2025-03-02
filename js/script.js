document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', function() {
        this.innerText = "✔ Completed";
        this.classList.add('bg-green-500', 'text-white'); 
        this.disabled = true; 
        alert("Board updated succesfully ✅");
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
        document.getElementById("new-today").addEventListener("click", function() {
            window.location.href = './main.html'
        });

// document.addEventListener("DOMContentLoaded", function () {
//     const dateElement = document.querySelector('.calendar-date'); 
//     if (dateElement) {
//         const today = new Date();
//         const formattedDate = today.toDateString();
//         dateElement.innerText = formattedDate;
//     }
// });


document.addEventListener("click", function (event) {
    if (event.target.id === "myButton") {
        alert("Button Clicked!");
    }
});
;

//** 
document.addEventListener("DOMContentLoaded", function () {
    const dateElement = document.querySelector(".calendar-date");
    if (dateElement) {
        const today = new Date();
        const formattedDate = today.toDateString();
        dateElement.innerText = formattedDate; 
    }
});


