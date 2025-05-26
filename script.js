// Contact Form
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('contactName').value;
  const email = document.getElementById('contactEmail').value;
  const message = document.getElementById('contactMessage').value;
  document.getElementById('contactResponse').innerText = `Thanks, ${name}! We'll reach out to you at ${email}.`;
  this.reset();
});

// To-Do List with delete functionality
function addTask() {
  const taskText = document.getElementById('todoInput').value;
  if (taskText.trim() !== '') {
    const li = document.createElement('li');
    li.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '✖';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = function () {
      li.remove();
    };

    li.appendChild(deleteBtn);
    document.getElementById('todoList').appendChild(li);
    document.getElementById('todoInput').value = '';
  }
}

// Image Upload Gallery with delete functionality
document.getElementById('imageUpload').addEventListener('change', function () {
  const files = this.files;
  const gallery = document.getElementById('gallery');

  Array.from(files).forEach(file => {
    const reader = new FileReader();
    reader.onload = function(e) {
      const wrapper = document.createElement('div');
      wrapper.className = 'img-wrapper';

      const img = document.createElement('img');
      img.src = e.target.result;

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = '✖';
      deleteBtn.className = 'delete-btn img-delete';
      deleteBtn.onclick = function () {
        wrapper.remove();
      };

      wrapper.appendChild(img);
      wrapper.appendChild(deleteBtn);
      gallery.appendChild(wrapper);
    };
    reader.readAsDataURL(file);
  });

  // Reset input so you can upload the same image again if needed
  this.value = '';
});
