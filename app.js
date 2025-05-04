
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
    USD: { INR: 82, EUR: 0.93, GBP: 0.76, AUD: 1.50, AED: 3.67, AFN: 71.5, AMD: 388 },
    INR: { USD: 0.012, EUR: 0.011, GBP: 0.0092, AUD: 0.018, AED: 0.045, AFN: 0.87, AMD: 4.73 },
    EUR: { USD: 1.08, INR: 88, GBP: 0.82, AUD: 1.61, AED: 3.96, AFN: 76.9, AMD: 420 },
    GBP: { USD: 1.32, INR: 108, EUR: 1.22, AUD: 1.95, AED: 4.84, AFN: 94.1, AMD: 512 },
    AUD: { USD: 0.67, INR: 55, EUR: 0.62, GBP: 0.51, AED: 2.48, AFN: 48.2, AMD: 262 },
    AED: { USD: 0.27, INR: 22, EUR: 0.25, GBP: 0.21, AUD: 0.40, AFN: 19.4, AMD: 106 },
    AFN: { USD: 0.014, INR: 1.15, EUR: 0.013, GBP: 0.011, AUD: 0.021, AED: 0.052, AMD: 5.46 },
    AMD: { USD: 0.0026, INR: 0.21, EUR: 0.0024, GBP: 0.0020, AUD: 0.0038, AED: 0.0094, AFN: 0.18 }
  };
  

  const convertedAmount = amount * rates[fromCurrency][toCurrency];
  document.getElementById("result").textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
});





const currencyToCountry = {
    USD: "US",
    INR: "IN",
    EUR:"FR",
    AUD:"AU",
    AED:"AE",
    AFN:"AF",
    AMD:"AM",
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
  


