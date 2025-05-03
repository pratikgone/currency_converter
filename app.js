
  


// const countryList = {
//     AED: "AE", AFN: "AF", XCD: "AG", ALL: "AL", AMD: "AM", ANG: "AN", AOA: "AO", AQD: "AQ", ARS: "AR", AUD: "AU",
//     AZN: "AZ", BAM: "BA", BBD: "BB", BDT: "BD", XOF: "BE", BGN: "BG", BHD: "BH", BIF: "BI", BMD: "BM", BND: "BN",
//     BOB: "BO", BRL: "BR", BSD: "BS", NOK: "BV", BWP: "BW", BYR: "BY", BZD: "BZ", CAD: "CA", CDF: "CD", XAF: "CF",
//     CHF: "CH", CLP: "CL", CNY: "CN", COP: "CO", CRC: "CR", CUP: "CU", CVE: "CV", CYP: "CY", CZK: "CZ", DJF: "DJ",
//     DKK: "DK", DOP: "DO", DZD: "DZ", ECS: "EC", EEK: "EE", EGP: "EG", ETB: "ET", EUR: "FR", FJD: "FJ", FKP: "FK",
//     GBP: "GB", GEL: "GE", GGP: "GG", GHS: "GH", GIP: "GI", GMD: "GM", GNF: "GN", GTQ: "GT", GYD: "GY", HKD: "HK",
//     HNL: "HN", HRK: "HR", HTG: "HT", HUF: "HU", IDR: "ID", ILS: "IL", INR: "IN", IQD: "IQ", IRR: "IR", ISK: "IS",
//     JMD: "JM", JOD: "JO", JPY: "JP", KES: "KE", KGS: "KG", KHR: "KH", KMF: "KM", KPW: "KP", KRW: "KR", KWD: "KW",
//     KYD: "KY", KZT: "KZ", LAK: "LA", LBP: "LB", LKR: "LK", LRD: "LR", LSL: "LS", LTL: "LT", LVL: "LV", LYD: "LY",
//     MAD: "MA", MDL: "MD", MGA: "MG", MKD: "MK", MMK: "MM", MNT: "MN", MOP: "MO", MRO: "MR", MTL: "MT", MUR: "MU",
//     MVR: "MV", MWK: "MW", MXN: "MX", MYR: "MY", MZN: "MZ", NAD: "NA", XPF: "NC", NGN: "NG", NIO: "NI", NPR: "NP",
//     NZD: "NZ", OMR: "OM", PAB: "PA", PEN: "PE", PGK: "PG", PHP: "PH", PKR: "PK", PLN: "PL", PYG: "PY", QAR: "QA",
//     RON: "RO", RSD: "RS", RUB: "RU", RWF: "RW", SAR: "SA", SBD: "SB", SCR: "SC", SDG: "SD", SEK: "SE", SGD: "SG",
//     SKK: "SK", SLL: "SL", SOS: "SO", SRD: "SR", STD: "ST", SVC: "SV", SYP: "SY", SZL: "SZ", THB: "TH", TJS: "TJ",
//     TMT: "TM", TND: "TN", TOP: "TO", TRY: "TR", TTD: "TT", TWD: "TW", TZS: "TZ", UAH: "UA", UGX: "UG", USD: "US",
//     UYU: "UY", UZS: "UZ", VEF: "VE", VND: "VN", VUV: "VU", YER: "YE", ZAR: "ZA", ZMK: "ZM", ZWD: "ZW"
//   };
  
//   // DOM Elements
//   const fromSelect = document.getElementById("fromSelect");
//   const toSelect = document.getElementById("toSelect");
//   const fromFlag = document.getElementById("fromFlag");
//   const toFlag = document.getElementById("toFlag");
//   const convertBtn = document.getElementById("convertBtn");
//   const outputMsg = document.getElementById("outputMsg");
//   const amountInput = document.getElementById("amountInput");
  
//   // Populate select options
//   for (let currCode in countryList) {
//     const option1 = document.createElement("option");
//     option1.value = currCode;
//     option1.textContent = currCode;
//     option1.setAttribute("data-flag", countryList[currCode]);
//     fromSelect.appendChild(option1);
  
//     const option2 = document.createElement("option");
//     option2.value = currCode;
//     option2.textContent = currCode;
//     option2.setAttribute("data-flag", countryList[currCode]);
//     toSelect.appendChild(option2);
//   }
  
//   // Default set
//   fromSelect.value = "USD";
//   toSelect.value = "INR";
  
//   // Update flag based on selection
//   function updateFlag(selectEl, imgEl) {
//     const selected = selectEl.options[selectEl.selectedIndex];
//     const flag = selected.getAttribute("data-flag");
//     imgEl.src = `https://flagsapi.com/${flag}/flat/64.png`;
//   }
  
//   fromSelect.addEventListener("change", () => {
//     updateFlag(fromSelect, fromFlag);
//     performConversion(); // Call conversion on selection change
//   });
//   toSelect.addEventListener("change", () => {
//     updateFlag(toSelect, toFlag);
//     performConversion(); // Call conversion on selection change
//   });
  
//   // Initial flag update
//   updateFlag(fromSelect, fromFlag);
//   updateFlag(toSelect, toFlag);
  
//   // Function to perform currency conversion
//   async function performConversion() {
//     const amount = parseFloat(amountInput.value);
//     if (!amount || amount <= 0) {
//       outputMsg.textContent = "Please enter a valid amount!";
//       return;
//     }
  
//     const fromCurrency = fromSelect.value;
//     const toCurrency = toSelect.value;
//     const apiURL = `https://api.exchangerate.host/latest?base=${fromCurrency}&symbols=${toCurrency}`;
  
//     try {
//       const res = await fetch(apiURL);
//       const data = await res.json();
  
//       if (data && data.rates) {
//         const exchangeRate = data.rates[toCurrency];
//         const convertedAmount = (amount * exchangeRate).toFixed(2);
//         outputMsg.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
//       } else {
//         outputMsg.textContent = "Conversion rate not available!";
//       }
//     } catch (err) {
//       outputMsg.textContent = "Error fetching exchange rate.";
//       console.error("Error:", err);
//     }
//   }
  
//   // Event listener for the Convert button
//   convertBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     performConversion();
//   });
  


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
  


