// Check if dark mode is enabled
var darkMode = localStorage.getItem('darkMode') === 'true';

// Apply dark mode classes to elements if enabled
if (darkMode) {
  var wrapper = document.querySelector('#wrapper');
  var footer = document.querySelector('#footer');
  var mainSection = document.querySelector('#main > section');
  var body = document.querySelector('body');
  var header = document.querySelector('#header');

  wrapper.classList.add('dark-mode');
  body.classList.add('dark-mode');
  header.classList.add('dark-mode');
  mainSection.classList.add('dark-mode');
  footer.classList.add('dark-mode');
}

// Function to toggle dark mode on button click
function toggleDarkMode() {
  var wrapper = document.querySelector('#wrapper');
  var footer = document.querySelector('#footer');
  var mainSection = document.querySelector('#main > section');
  var body = document.querySelector('body');
  var header = document.querySelector('#header');

  wrapper.classList.toggle('dark-mode');
  body.classList.toggle('dark-mode');
  header.classList.toggle('dark-mode');
  mainSection.classList.toggle('dark-mode');
  footer.classList.toggle('dark-mode');

  // Store dark mode preference in local storage
  localStorage.setItem('darkMode', wrapper.classList.contains('dark-mode'));
  localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
  localStorage.setItem('darkMode', header.classList.contains('dark-mode'));
  localStorage.setItem('darkMode', mainSection.classList.contains('dark-mode'));
  localStorage.setItem('darkMode', footer.classList.contains('dark-mode'));
}
