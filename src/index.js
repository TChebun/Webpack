function addItems() {
  const item = document.createElement("h1");
  item.textContent = "Абракадабра!";

  return item;
}

document.body.prepend(addItems());
