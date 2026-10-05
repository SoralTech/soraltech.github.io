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
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    formStatus.textContent = "Preencha todos os campos.";
    return;
  }

  formStatus.textContent =
    "Mensagem preparada. Configure o destino do formulário no JavaScript para receber contatos.";

  // Exemplo de integração futura:
  // const subject = encodeURIComponent(`Novo contato — Soral Tech — ${name}`);
  // const body = encodeURIComponent(
  //   `Nome: ${name}\nE-mail: ${email}\n\nProjeto:\n${message}`
  // );
  // window.location.href =
  //   `mailto:contato@soraltech.com.br?subject=${subject}&body=${body}`;

  contactForm.reset();
});
