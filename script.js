const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');

const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/;

checkBtn.addEventListener('click', () => {
  if (userInput.value === '') {
    alert('Please provide a phone number');
    return;
  }

  const number = userInput.value;
  if (phoneRegex.test(number)) {
    resultsDiv.textContent = `Valid US number: ${number}`;
  } else {
    resultsDiv.textContent = `Invalid US number: ${number}`;
  }
});

clearBtn.addEventListener('click', () => {
  resultsDiv.textContent = '';
  userInput.value = '';
});