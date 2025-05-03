
const convertButton = document.getElementById("convert-btn");

convertButton.addEventListener("click", () => {
  const amount = document.getElementById("amount").value;
  const fromCurrency = document.getElementById("from-currency").value;
  const toCurrency = document.getElementById("to-currency").value;

  if (amount === "" || isNaN(amount)) {
    alert("Please enter a valid amount");
    return;
  }

  const rates = {
    USD: { INR: 82, EUR: 0.93, GBP: 0.76 },
    INR: { USD: 0.012, EUR: 0.011, GBP: 0.0092 },
    EUR: { USD: 1.08, INR: 88, GBP: 0.82 },
    GBP: { USD: 1.32, INR: 108, EUR: 1.22 }
  };

  const convertedAmount = amount * rates[fromCurrency][toCurrency];
  document.getElementById("result").textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
});





const currencyToCountry = {
    USD: "US",
    INR: "IN",
    GBP: "GB"
  };
  
  function updateFlag(selectId, flagId) {
    const currency = document.getElementById(selectId).value;
    const countryCode = currencyToCountry[currency];
    const flagUrl = `https://flagsapi.com/${countryCode}/flat/64.png`;
    document.getElementById(flagId).src = flagUrl;
  }
  
  // On load
  updateFlag("from-currency", "from-flag");
  updateFlag("to-currency", "to-flag");
  
  // On change
  document.getElementById("from-currency").addEventListener("change", () => {
    updateFlag("from-currency", "from-flag");
  });
  
  document.getElementById("to-currency").addEventListener("change", () => {
    updateFlag("to-currency", "to-flag");
  });
  


