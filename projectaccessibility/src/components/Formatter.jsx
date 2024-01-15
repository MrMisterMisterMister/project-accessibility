// General formatter for numbers
// Need to add the euro sign and such
// Why did I create a new file for this? No idea..
const NumberFormatter = new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2
});

// Dates
const DateFormatter = new Intl.DateTimeFormat("nl-NL", {
    year: "numeric",
    month: "long",
    day: "numeric"
});

export { NumberFormatter, DateFormatter };
