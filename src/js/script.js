const heading = document.querySelector('.moving-heading');
const letters = heading.textContent.split('');

heading.textContent = ''; // Clear the original text content

letters.forEach((letter, index) => {
  const span = document.createElement('span');
  span.textContent = letter;
  span.style.transition = `transform ${1 + index * 0.1}s ease`;

  heading.appendChild(span);
});

window.addEventListener('scroll', () => {
  const scrollValue = window.scrollY;

  letters.forEach((letter, index) => {
    const span = heading.children[index];
    span.style.transform = `translateX(${scrollValue * 0.2 * (index + 1)}px) translateY(${scrollValue * 0.1 * (index + 1)}px)`;
  });
});
