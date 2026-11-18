// Fecha o menu mobile ao clicar em um link
document.querySelectorAll('#menuPrincipal .nav-link').forEach(function (link) {
  link.addEventListener('click', function () {
    var menu = document.getElementById('menuPrincipal');
    if (menu.classList.contains('show')) { bootstrap.Collapse.getOrCreateInstance(menu).hide(); }
  });
});
