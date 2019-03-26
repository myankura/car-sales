// Randall has come back with a new job for you. Each week, he wants to see a report of how many cars each salesperson sells for that week. Here's his requirements to display for each sale.

// 1. Display the first and last name of the sales agent.
// 2. Display all keys and values for the car sold.
// 3. Display the gross profit made on the sale.
console.log("main.js");

const firstSale = salesByWeek[0]
const carContainer = document.querySelector("#car-container");
carContainer.innerHTML += "<h1>Weekly Car Sales</h1>"

salesByWeek.forEach(sale => {
    //declare variables for each object value required for exercise
    let firstName = sale.sales_agent.first_name
    let lastName = sale.sales_agent.last_name
    let profit = sale.gross_profit

    carContainer.innerHTML += "<hr/>"
    carContainer.innerHTML += `<h2>${firstName} ${lastName}</h2>`
    for (const entry of Object.entries(sale.vehicle)) {
        carContainer.innerHTML += `<div>${entry[0]}: ${entry[1]}</div>`
    }
    carContainer.innerHTML += `<h3>Gross Profit: $${profit}</h3>`
})