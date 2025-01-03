// Get references to the buttons and content divs
const vehiclesTab = document.getElementById('vehicles-tab');
const spoilersTab = document.getElementById('spoilers-tab');
const vehiclesContent = document.getElementById('vehicles');
const spoilersContent = document.getElementById('spoilers');

// Function to switch tabs
function switchTab(event, activeTab, activeContent, inactiveContent) {
  // Deactivate all tabs and contents
  vehiclesTab.classList.remove('active');
  spoilersTab.classList.remove('active');
  vehiclesContent.classList.remove('active');
  spoilersContent.classList.remove('active');

  // Activate the clicked tab and show the relevant content
  activeTab.classList.add('active');
  activeContent.classList.add('active');
  inactiveContent.classList.remove('active');
}

// Add event listeners to the tabs
vehiclesTab.addEventListener('click', (event) => {
  switchTab(event, vehiclesTab, vehiclesContent, spoilersContent);
});

spoilersTab.addEventListener('click', (event) => {
  switchTab(event, spoilersTab, spoilersContent, vehiclesContent);
});

// Implement the search functionality
const searchInput = document.getElementById('search');

// Function to filter cards based on the search input
function filterCards() {
  const searchTerm = searchInput.value.toLowerCase();

  // Select all cards inside the active tab
  const activeTabContent = document.querySelector('.cards.active');
  const cards = activeTabContent.getElementsByClassName('card');

  // Loop through the cards and hide those that don't match the search term
  Array.from(cards).forEach(card => {
    const cardTitle = card.querySelector('h3').textContent.toLowerCase();
    const cardDescription = card.querySelector('p').textContent.toLowerCase();

    if (cardTitle.includes(searchTerm) || cardDescription.includes(searchTerm)) {
      card.style.display = 'block'; // Show the card
    } else {
      card.style.display = 'none'; // Hide the card
    }
  });
}

// Add event listener for the search input
searchInput.addEventListener('input', filterCards);
