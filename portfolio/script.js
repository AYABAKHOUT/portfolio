const typedTextElement = document.getElementById('typed-text');

const texts = [
  "Hi, I'm Aya!",
  "I'm a Digital Developement Student.",
  "I love coding and design.",
  "Welcome to my portfolio!"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 90;
const deletingSpeed = 40;
const pauseBetweenTexts = 1500;

function type() {
  const currentText = texts[textIndex];
  let displayedText;

  if (isDeleting) {
    charIndex--;
    displayedText = currentText.substring(0, charIndex);
  } else {
    charIndex++;
    displayedText = currentText.substring(0, charIndex);
  }

  // Update with dotted Minecraft style and blinking caret span
  typedTextElement.innerHTML = displayedText + '<span class="caret"></span>';

  if (!isDeleting && charIndex === currentText.length) {
    setTimeout(() => (isDeleting = true) && type(), pauseBetweenTexts);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
    type();
  } else {
    setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  type();
});



