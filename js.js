document.getElementById('mode-toggler').addEventListener('click', function () {
    const icon = document.getElementById('icon');
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
      icon.classList.replace('fa-toggle-on', 'fa-toggle-off');
      icon.style.transform = 'rotate(180deg)';
    } else {
      icon.classList.replace('fa-toggle-off', 'fa-toggle-on');
      icon.style.transform = 'rotate(0deg)';
    }
  });
  