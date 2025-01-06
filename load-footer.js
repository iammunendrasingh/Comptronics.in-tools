/**
 * Function to load reusable HTML components (header/footer) dynamically.
 * @param {string} elementId - The ID of the element where the component should be inserted.
 * @param {string} filePath - The path to the HTML file containing the component.
 */
function loadComponent(elementId, filePath) {
    fetch(filePath)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error loading ${filePath}: ${response.statusText}`);
        }
        return response.text();
      })
      .then((data) => {
        document.getElementById(elementId).innerHTML = data;
      })
      .catch((error) => console.error(`Failed to load component: ${error.message}`));
  }
  
  // Load header and footer dynamically
  document.addEventListener("DOMContentLoaded", () => {
    loadComponent("footer", "/tools/footer.html");
  });
  
  document.getElementById("year").textContent = new Date().getFullYear();