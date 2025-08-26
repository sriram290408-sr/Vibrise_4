function selectProduct(type) {
  let price = 0;
  let name = "";

  // Hide all ticks
  document.getElementById("tick-small").style.display = "none";
  document.getElementById("tick-big").style.display = "none";
  document.getElementById("tick-combo").style.display = "none";
  document.getElementById("tick-module").style.display = "none";

  if (type === "module") {
    price = 299;
    name = "Special Module";
    document.getElementById("tick-module").style.display = "flex";
  } else if (type === "small") {
    price = 399;
    name = "Small Pillow";
    document.getElementById("tick-small").style.display = "flex";
  } else if (type === "big") {
    price = 449;
    name = "Big Pillow";
    document.getElementById("tick-big").style.display = "flex";
  } else if (type === "combo") {
    price = 799;
    name = "Combo (Small + Big)";
    document.getElementById("tick-combo").style.display = "flex";
  }

  // Update order summary
  document.getElementById("selected-item").innerText = "✅ Selected: " + name;
  document.getElementById("total-price").innerText = "💰 Total: ₹" + price;
}
