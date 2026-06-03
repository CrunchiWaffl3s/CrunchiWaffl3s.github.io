  function switchCatppuccinTheme(themeName) {
    document.documentElement.setAttribute('data-theme', themeName);
    localStorage.setItem('catppuccin-theme', themeName);
  }

  const savedTheme = localStorage.getItem('catppuccin-theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  }