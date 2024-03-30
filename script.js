let notifications = document.querySelectorAll(".event");
let unseenIcon = document.querySelectorAll("span");
let clear = document.querySelector("button");
let num = document.querySelector(".nt-cnt");
let unseen = document.querySelectorAll(".e-active");
let count = Number(unseen.length);
console.log(count);

num.innerHTML = count;

notifications.forEach((not, i) => {
    not.addEventListener('click', () => {
        if (not.classList.contains("e-active")) {
            not.classList.remove("e-active");
            unseenIcon[i].classList.remove("unseen-icon");
            count--;
            num.innerHTML = count;
        }
    })
})

clear.addEventListener('click', () => {
    notifications.forEach((not) => {
        not.classList.remove("e-active");
    })
    unseenIcon.forEach((ico) => {
        ico.classList.remove("unseen-icon");
    })
    count = 0;
    num.innerHTML = count;
})