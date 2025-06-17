  const toggle = document.getElementById("theme-toggle");

  const setThemeClass = (isDark) => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  // Al iniciar
  const savedTheme = localStorage.getItem("theme");
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialIsDark = savedTheme === "dark" || (!savedTheme && systemPrefersDark);
  setThemeClass(initialIsDark);

  // Al hacer clic en el botón
  toggle?.addEventListener("click", () => {
    const isDark = document.documentElement.classList.contains("dark");
    setThemeClass(!isDark);
    console.log("Tema cambiado a:", !isDark ? "oscuro" : "claro");
  });
