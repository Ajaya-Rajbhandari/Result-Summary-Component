// Load the JSON Data
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    // const category = document.getElementById("category");
    // const score = document.getElementById("score");
    // const icon = document.getElementById("icon");

    const detailedSummary = document.getElementById("detail-summery-items");
    detailedSummary.innerHTML = "";
    const ulElement = document.createElement("ul");
    ulElement.className = "detailed-summary";
    data.forEach((item) => {
      const itemElement = document.createElement("li");
      itemElement.className = `summary-${item.category}`;
      itemElement.innerHTML = `
      <img src="${item.icon}" alt="${item.Category} icon "</img>
      <span class="category"> ${item.category}</span>
      <span id="score" class="score"> ${item.score} 
      <span class="score-unit">
      / 100
      </span>
      </span>
      `;
      ulElement.appendChild(itemElement);
    });
    detailedSummary.appendChild(ulElement);
  })
  .catch((error) => console.error("Error loading data:", error));
