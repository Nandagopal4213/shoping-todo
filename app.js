const form = document.getElementById("shop-form");
const itemName = document.getElementById("item-name");
const itemQty = document.getElementById("item-qty");
const list = document.getElementById("list");
const alert = document.getElementById("alert");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (itemName.value != "" && itemQty.value != "") {
    const tr = document.createElement("tr");
    const rand = Math.floor(Math.random() * 1000 + 1);
    tr.setAttribute("id", `${rand}`);
    tr.innerHTML = `
        <td>${rand}</td>
        <td>${itemName.value}</td>
        <td>${itemQty.value}</td>
        <td><button class="btn btn-danger">Delete</button></td>
        `;
    list.appendChild(tr);
    itemName = " ";
    itemQty = " ";
    alert.classList.add("alert-sucess");
    alert.innerHTML = "Item Added Successfully !";
    setTimeout(function () {
      alert.classList.remove("alert-success");
      alert.innerHTML = " ";
    }, 3000);
  } else {
    alert.classList.add("alert-warning");
    alert.innerHTML = "Please Add the items!";
    setTimeout(function () {
      alert.classList.remove("alert-warning");
      alert.innerHTML = " ";
    }, 3000);
  }
});

// delete

list.addEventListener("click", function (event) {
  if (event.target.classList.contains("btn")) {
    event.target.parentElement.parentElement.remove();
  }
});
