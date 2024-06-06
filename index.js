const freelancers = [
  { name: "Alice", occupation: "Writer", price: 30 },
  { name: "Bob", occupation: "Teacher", price: 50 }
];

const names = ["Carol", "Dave", "Eve", "Frank", "John", "Benjamin"];
const occupations = ["Programmer", "Designer", "Artist", "Consultant", "Developer"];
const minPrice = 25;
const maxPrice = 90;

function render() {
  const tableBody = document.querySelector("#freelancers-table tbody");
  tableBody.innerHTML = "";

  freelancers.forEach((freelancer) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${freelancer.name}</td>
      <td>${freelancer.occupation}</td>
      <td>$${freelancer.price}</td>
    `;
    tableBody.appendChild(row);
  });

  const averagePrice = calculateAveragePrice();
  document.getElementById("average-price").textContent = averagePrice.toFixed(2);
}

function calculateAveragePrice() {
  const totalPrice = freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0);
  return totalPrice / freelancers.length;
}


function addRandomFreelancer() {
  const name = names[Math.floor(Math.random() * names.length)];
  const occupation = occupations[Math.floor(Math.random() * occupations.length)];
  const price = Math.floor(Math.random() * (maxPrice - minPrice + 1)) + minPrice;

  freelancers.push({ name, occupation, price });
  render();
}

render();

setInterval(addRandomFreelancer, 2000);

  