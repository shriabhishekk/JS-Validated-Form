const goButton = document.getElementById('go');
const clearButton = document.getElementById('clear');
const phraseInput = document.getElementById('phrase');
const filterInput = document.getElementById('filter');
const wordsDiv = document.getElementById('words');
const countDiv = document.getElementById('count');

goButton.addEventListener('click', function() {
  // Clear previous information
  wordsDiv.innerHTML = '';
  countDiv.innerHTML = '';

  // Get the phrase and filter text
  const phrase = phraseInput.value.trim();
  const filter = filterInput.value.trim().toLowerCase();

  // Split the phrase into words
  const words = phrase.split(' ');

  // Reverse the order of the words
  const reversedWords = words.reverse();

  // Create a new array of filtered words
  const filteredWords = reversedWords.filter(function(word) {
    return !word.toLowerCase().includes(filter);
  });

  // Display the filtered words
  filteredWords.forEach(function(word, index) {
    const wordSpan = document.createElement('span');
    wordSpan.textContent = word;
    wordSpan.classList.add('word');

    if (index % 2 === 0) {
      wordSpan.classList.add('underline');
    }

    wordsDiv.appendChild(wordSpan);
    wordsDiv.appendChild(document.createTextNode(' '));
  });

  // Display the count of filtered words
  const filteredCount = reversedWords.length - filteredWords.length;
  if (filteredCount > 0) {
    countDiv.textContent = `${filteredCount} word(s) filtered out`;
  }
});

clearButton.addEventListener('click', function() {
  // Clear all input fields and output
  phraseInput.value = '';
  filterInput.value = '';
  wordsDiv.innerHTML = '';
  countDiv.innerHTML = '';
});
