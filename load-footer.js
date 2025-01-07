/**
 * Function to load reusable HTML components (header/footer) dynamically.
 * @param {string} elementId - The ID of the element where the component should be inserted.
 * @param {string} filePath - The path to the HTML file containing the component.
 * @param {function} callback - Optional callback to execute after the component is loaded.
 */
function loadComponent(elementId, filePath, callback) {
  fetch(filePath)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error loading ${filePath}: ${response.statusText}`);
      }
      return response.text();
    })
    .then((data) => {
      const element = document.getElementById(elementId);
      if (element) {
        element.innerHTML = data; // Insert the HTML
        if (callback) callback(); // Execute the callback
      } else {
        console.error(`Element with ID "${elementId}" not found.`);
      }
    })
    .catch((error) => console.error(`Failed to load component: ${error.message}`));
}

// Load footer dynamically
document.addEventListener("DOMContentLoaded", () => {
  loadComponent("footer", "https://cdn.jsdelivr.net/gh/iammunendrasingh/Comptronics.in-tools@main/footer.html", () => {
    // Update the year only after footer is loaded
    const yearElement = document.getElementById("year");
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    } else {
      console.error('Element with ID "year" not found in the loaded footer.');
    }
  });
});
