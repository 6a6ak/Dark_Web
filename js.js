document.getElementById('mode-toggler').addEventListener('click', function () {
    const sunIcon = document.getElementById('moon-icon');
    const moonIcon = document.getElementById('sun-icon');
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
      sunIcon.style.display = 'none';
      moonIcon.style.display = 'inline-block';
    } else {
      moonIcon.style.display = 'none';
      sunIcon.style.display = 'inline-block';
    }
  });
  