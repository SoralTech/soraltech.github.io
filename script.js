const header = document.getElementById("header");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const year = document.getElementById("year");
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

year.textContent = new Date().getFullYear();

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 20);
}, { passive: true });

menuToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => {
  observer.observe(element);
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const company = document.getElementById("company").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !message) {
    formStatus.textContent = "Preencha seu nome e conte sobre o projeto.";
    return;
  }

  const text = [
    "Olá, Soral Tech! Gostaria de conversar sobre um projeto.",
    "",
    `Nome: ${name}`,
    ...(company ? [`Empresa: ${company}`] : []),
    "",
    "O que preciso desenvolver:",
    message
  ].join("\n");

  window.location.href = `https://wa.me/5516988585497?text=${encodeURIComponent(text)}`;

});

const whatsappButton = document.getElementById("whatsappButton");

const updateWhatsappVisibility = () => {
  const visible = window.scrollY > 20;
  whatsappButton.classList.toggle("is-visible", visible);
  whatsappButton.setAttribute("aria-hidden", String(!visible));
  whatsappButton.tabIndex = visible ? 0 : -1;
  whatsappButton.inert = !visible;
};

window.addEventListener("scroll", updateWhatsappVisibility, { passive: true });
window.addEventListener("resize", updateWhatsappVisibility);
window.addEventListener("pageshow", updateWhatsappVisibility);
updateWhatsappVisibility();
