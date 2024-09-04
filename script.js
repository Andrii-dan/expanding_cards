const panels = document.querySelectorAll('.panel');

const removeActiveClasses = () =>
  panels.forEach((panel) => panel.classList.remove('active'));

const handleClick = (panel) => {
  removeActiveClasses();
  panel.classList.add('active');
};

panels.forEach((panel) =>
  panel.addEventListener('click', () => handleClick(panel)),
);
