var FAQs = [
  {question: "Question 1", answer: "Answer 1"},
  {question: "Question 2", answer: "Answer 2"},
  {question: "Question 3", answer: "Answer 2"},
  {question: "Question 4", answer: "Answer 2"},
  {question: "Question 5", answer: "Answer 2"},
  {question: "Question 6", answer: "Answer 2"},
  {question: "Question 7", answer: "Answer 2"},
  {question: "Question 8", answer: "Answer 2"},
  {question: "Question 9", answer: "Answer 2"},
  {question: "Question 10", answer: "Answer 2"},
  {question: "Question 11", answer: "Answer 2"},
  {question: "Question 12", answer: "Answer 2"},
  {question: "Question 13", answer: "Answer 2"},
  {question: "Question 14", answer: "Answer 2"},
  // Add more FAQ objects here...
];

var itemsToShow = 10;

function createAccordionItem(question, answer) {
  var accordion = document.createElement('div');
  accordion.className = 'accordion';

  var accordionButton = document.createElement('div');
  accordionButton.className = 'accordion-button';
  
  var accordionIcon = document.createElement('img');
  accordionIcon.className = 'accordion-icon';
  accordionIcon.src = '/assets/plus.svg';

  var questionText = document.createElement('span');
  questionText.textContent = question;

  var panel = document.createElement('div');
  panel.className = 'panel';

  var answerText = document.createElement('p');
  answerText.textContent = answer;

  accordionButton.appendChild(accordionIcon);
  accordionButton.appendChild(questionText);
  accordion.appendChild(accordionButton);
  panel.appendChild(answerText);
  accordion.appendChild(panel);
  
  var faqContainer = document.getElementById('faq-container');
  faqContainer.appendChild(accordion);

  addAccordionFunctionality(accordion);
}

function addAccordionFunctionality(accordion) {
  accordion.firstElementChild.addEventListener("click", function() {
    var acc = document.getElementsByClassName("accordion");
    for (var j = 0; j < acc.length; j++) {
      if (acc[j] !== accordion) {
        acc[j].firstElementChild.classList.remove("active");
        acc[j].lastElementChild.style.maxHeight = null;
        acc[j].firstElementChild.firstElementChild.src = "/assets/plus.svg";
      }
    }

    var panel = accordion.lastElementChild;
    var button = accordion.firstElementChild;
    var icon = button.firstElementChild;
    if (button.classList.contains("active")) {
      button.classList.remove("active");
      panel.style.maxHeight = null;
      icon.src = "/assets/plus.svg";
    } else {
      button.classList.add("active");
      panel.style.maxHeight = panel.scrollHeight + "px";
      icon.src = "/assets/minus.svg";
    }
  });
}

for (var i = 0; i < Math.min(FAQs.length, itemsToShow); i++) {
  createAccordionItem(FAQs[i].question, FAQs[i].answer);
}

// The rest of your JavaScript code...

if (FAQs.length > itemsToShow) {
  // Create the div that the button will sit in
  // Create the div that the button will sit in
  var viewMoreContainer = document.createElement('div');
  viewMoreContainer.id = 'view-more-container';


  // Create the "View More" button
  var viewMoreButton = document.createElement('button');
  viewMoreButton.textContent = 'View More';
  viewMoreButton.id = 'view-more-button';

  // Create the icon for the button
  var viewMoreIcon = document.createElement('img');
  viewMoreIcon.src = 'assets/arrow-down.svg';
  viewMoreIcon.style.marginRight = '8px';

  // Add the icon and text to the button
  viewMoreButton.insertBefore(viewMoreIcon, viewMoreButton.firstChild);

  // Add the button to the div
  viewMoreContainer.appendChild(viewMoreButton);

  // Add the div to the container
  var faqContainer = document.getElementById('faq-container');
  faqContainer.appendChild(viewMoreContainer);

  // Add an event listener to the "View More" button
  viewMoreButton.addEventListener('click', function() {
    for (var i = itemsToShow; i < Math.min(FAQs.length, itemsToShow + 10); i++) {
      createAccordionItem(FAQs[i].question, FAQs[i].answer);
    }
    itemsToShow += 10;
    if (itemsToShow >= FAQs.length) {
      viewMoreContainer.style.display = 'none';
    }
  });
}
