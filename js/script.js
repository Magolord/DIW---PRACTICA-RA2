// === 1. MODO CLARO / OSCURO (Bootstrap 5 nativo) ===
const htmlElement = document.documentElement;

// Aplicar el tema guardado cuanto antes (evita el parpadeo en claro)
const savedTheme = localStorage.getItem("theme") || "light";
htmlElement.setAttribute("data-bs-theme", savedTheme);

document.addEventListener("DOMContentLoaded", () => {

  const themeToggle = document.getElementById("theme-toggle");

  if (themeToggle) {
    const icono = themeToggle.querySelector("i");

    const actualizarBoton = (tema) => {
      icono.className = tema === "dark" ? "bi bi-sun-fill" : "bi bi-moon-fill";
      themeToggle.setAttribute("aria-pressed", tema === "dark");
      themeToggle.setAttribute("aria-label", tema === "dark" ? "Activar modo claro" : "Activar modo oscuro");
    };

    actualizarBoton(savedTheme);

    themeToggle.addEventListener("click", () => {
      const currentTheme = htmlElement.getAttribute("data-bs-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";

      htmlElement.setAttribute("data-bs-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      actualizarBoton(newTheme);
    });
  }
});



// === 3.Formulario Login ===

  // VER / OCULTAR CONTRASEÑA
  const contrasena = document.getElementById("contrasena");
  const botonOjo = document.getElementById("verContrasena");
  const icono = botonOjo ? botonOjo.querySelector("i") : null;

  // Ojo: alterna entre puntos (password) y texto visible
  if (botonOjo && contrasena) {
    botonOjo.addEventListener("click", () => {
      const oculta = contrasena.type === "password";
      contrasena.type = oculta ? "text" : "password";
      icono.className = oculta ? "bi bi-eye-slash" : "bi bi-eye";
    });
  }

  
