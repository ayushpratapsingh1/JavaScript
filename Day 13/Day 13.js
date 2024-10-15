const BaseURL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
const dropdown = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("button");
const from = document.querySelector(".from select");
const to = document.querySelector(".to select");
const result = document.querySelector(".final");
//we have to include codes.js first to access this file



for (let select of dropdown) {
    for (currCode in countryList) {
      let newOption = document.createElement("option");
      newOption.innerText = currCode;
      newOption.value = currCode;
      if (select.name === "from" && currCode === "USD") {
        newOption.selected = "selected";
      } else if (select.name === "to" && currCode === "INR") {
        newOption.selected = "selected";
      }
      select.append(newOption);
    }
    select.addEventListener("change", (e) => {
        result.classList.add("hide");
        updateFlag(e.target);
    });
}

const updateFlag = (e) => {
    let code = e.value;
    let countrycode=countryList[code];
    console.log(countrycode);
    let newsrc = `https://flagsapi.com/${countrycode}/flat/64.png`;
    e.parentElement.querySelector("img").src = newsrc;
};
btn.addEventListener("click", async (e) => {
    e.preventDefault();
    let amount = document.querySelector(".amount input");
    let amt = amount.value;
    if(amt === "" || amt < 1){
        amt = 1;
        amount.value = "1";
        alert("Please enter a valid amount");
        return;
    }
    const URL =  `${BaseURL}/${from.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data[from.value.toLowerCase()][to.value.toLowerCase()];
    let newAmount = (amt * rate).toFixed(4);
    result.innerText = `${amt} ${from.value} = ${newAmount} ${to.value}`;
    result.classList.remove("hide");
    console.log(rate)
})
























