// Load the JSON Data
const loadData = () => {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      const detailedSummary = document.getElementById("detail-summery-items");
      detailedSummary.innerHTML = "";
      const ulElement = document.createElement("ul");

      ulElement.className = "detailed-summary";
      data.forEach((item) => {
        const itemElement = createListItem(item);
        ulElement.appendChild(itemElement);
      });
      detailedSummary.appendChild(ulElement);
    })
    .catch((error) => {
      const errorMessage = document.getElementById("error-message");
      errorMessage.innerHTML = `Error loading data: ${error.message}`;
    });
};

const createListItem = (item) => {
  const itemElement = document.createElement("li");
  itemElement.className = `summary-${item.category}`;
  itemElement.innerHTML = `
    <img src="${item.icon}" alt="${item.Category} icon ">
    <span class="category"> ${item.category}</span>
    <span id="score" class="score"> ${item.score} 
    <span class="score-unit">
      / 100
    </span>
    </span>
  `;
  return itemElement;
};

loadData();
