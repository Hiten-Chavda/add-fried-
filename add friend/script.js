 var isStatus = document.querySelector("h5")

var add = document.querySelector("#add")

var check = 0;


add.addEventListener("click", function () {
    if (check === 0) {
        isStatus.innerHTML = "Friends"
        isStatus.style.color = "green"
        add.innerHTML = "Remove Friend"
        add.style.background = "gray"

        check = 1;
    }

    else {
        isStatus.innerHTML = "Stranger"
        isStatus.style.color = "red"
        add.innerHTML = "Add Friend"
        add.style.background = "cadetblue"
        check = 0;
    }
})

