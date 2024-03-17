const selectBtn = document.querySelector(".select-btn");
const items = document.querySelectorAll(".item");
const btnText = document.querySelector(".btn-text");
let selectedValues = [];

selectBtn.addEventListener("click", () => {
  selectBtn.classList.toggle("open");
});

items.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("checked");
    const value = item.getAttribute("data-value");

    if (item.classList.contains("checked")) {
      selectedValues.push(value);
    } else {
      const index = selectedValues.indexOf(value);
      if (index !== -1) {
        selectedValues.splice(index, 1);
      }
    }

    if (selectedValues.length > 0) {
      btnText.innerText = `${selectedValues[0]} `;
    } else {
      btnText.innerText = "Select Language";
    }

    console.log(selectedValues);
  });
});
