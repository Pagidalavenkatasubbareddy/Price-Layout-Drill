let check = document.getElementById("check");
let monthly1 = document.getElementsByClassName("card-price");
check.addEventListener("change", () => {
  console.log("change");
  if (!check.checked) {
    monthly1[0].innerHTML = "&dollar;" + 199.99;
    monthly1[1].innerHTML = "&dollar;" + 249.99;
    monthly1[2].innerHTML = "&dollar;" + 399.99;
  } else {
    monthly1[0].innerHTML = "&dollar;" + 19.99;
    monthly1[1].innerHTML = "&dollar;" + 24.99;
    monthly1[2].innerHTML = "&dollar;" + 39.99;
  }
});