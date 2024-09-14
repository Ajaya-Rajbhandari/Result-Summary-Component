// Load the JSON Data
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    // const category = document.getElementById("category");
    // const score = document.getElementById("score");
    // const icon = document.getElementById("icon");

    const detailedSummary = document.getElementById("detail-summery-items");
    detailedSummary.innerHTML = "";
    data.forEach((item) => {
      const itemElement = document.createElement("div");
      itemElement.innerHTML = `
      <div class="summary-${item.category}">
      <img src="${item.icon}" alt="${item.Category} icon "</img>
      <span> ${item.category}</span>
      <span> ${item.score}/100</span>
      </div>
      `;
      detailedSummary.appendChild(itemElement);
    });
  })
  .catch((error) => console.error("Error loading data:", error));
