let dispaly = document.getElementById("display");

function insert(num) {
  dispaly.value = dispaly.value + num;
}

function equal() {
    let result = eval(dispaly.value);
    dispaly.value = result;
}

function clean() {
    dispaly.value = "";
}

function back() {
    dispaly.value = dispaly.value.slice(0, -1);
}