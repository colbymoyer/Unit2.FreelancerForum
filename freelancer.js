const freelancers = [
  { name: "Alice", price: 30, occupation: "Writer" },
  { name: "Bob", price: 50, occupation: "Teacher" },
  { name: "Carol", price: 70, occupation: "Programmer"},
  { name: "Colby", price: 20, occupation: "Coder"},
  { name: "Aaron", price: 100, occupation: "Fullstack Professor"},
  { name: "Sam", price: 30, occupation: "1st Grade Teacher"},
];
console.log (freelancers)

document.addEventListener("DOMContentLoaded", function() {
    const freelancers = [
        { name: "Alice", occupation: "Writer", price: 30 },
        { name: "Bob", occupation: "Teacher", price: 50 }
    ];

    function updateAveragePrice() {
        const total = freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0);
        const average = total / freelancers.length;
        document.getElementById("averagePrice").textContent = `Average Starting Price: $${average.toFixed(2)}`;
    }

    function add(name, occupation, price) {
        freelancers.push({ name, occupation, price });

        const freelancerDiv = document.createElement("div");
        freelancerDiv.classList.add("freelancer");

        freelancerDiv.innerHTML = `
            <p>Name: ${name}</p>
            <p>Occupation: ${occupation}</p>
            <p>Starting Price: $${price}</p>
        `;

        document.getElementById("freelancers").appendChild(freelancerDiv);
        updateAveragePrice();
    }

    updateAveragePrice();

    setTimeout(() => add("Carol", "Programmer", 70), 3000);
    setTimeout(() => add("Colby", "Coder", 20), 6000);
    setTimeout(() => add("Aaron", "Fullstack Professor", 100), 9000);
    setTimeout(() => add("Sam", "1st Grade Teacher", 30), 12000);
});
