// Add New Elements
const addElementBtn = document.getElementById('add-element-btn');
const dynamicContent = document.getElementById('dynamic-content');

addElementBtn.addEventListener('click', () => {
  const newElement = document.createElement('div');
  newElement.className = 'dynamic-item';
  newElement.textContent = 'I am a new element!';
  newElement.addEventListener('click', () => {
    newElement.style.backgroundColor = '#8bc34a';
    newElement.textContent = 'Clicked!';
  });
  dynamicContent.appendChild(newElement);
});

// Scroll to Reveal Content
const scrollContent = document.querySelectorAll('#scroll-content p');
window.addEventListener('scroll', () => {
  scrollContent.forEach(p => {
    const rect = p.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      p.style.opacity = 1;
    }
  });
});

// Drag and Drop
const draggables = document.querySelectorAll('.draggable');
const dragContainer = document.getElementById('drag-container');

draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', draggable.textContent);
    draggable.classList.add('dragging');
  });

  draggable.addEventListener('dragend', () => {
    draggable.classList.remove('dragging');
  });
});

dragContainer.addEventListener('dragover', (e) => {
  e.preventDefault();
  const dragging = document.querySelector('.dragging');
  if (dragging) {
    dragContainer.appendChild(dragging);
  }
});
