document.addEventListener('DOMContentLoaded', () => {
    // Menu Mobile
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const header = document.getElementById('header');

    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenu.classList.toggle('toggle');
    });

    // Fechar menu ao clicar em um link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenu.classList.remove('toggle');
        });
    });

    // Efeito de scroll no header
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
            header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.2)';
        } else {
            header.style.padding = '15px 0';
            header.style.boxShadow = 'none';
        }
    });

    // Animação simples de entrada para os cards de serviço
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // As animações agora são controladas pelo AOS, mas mantemos o observer para efeitos extras se necessário
    // document.querySelectorAll('.service-card, .blog-card').forEach(card => {
    //     observer.observe(card);
    // });

    // Simulação de envio de formulário
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerText;
            
            btn.innerText = 'Enviando...';
            btn.disabled = true;

            // Simula um delay de rede
            setTimeout(() => {
                alert('Obrigado pelo contato! Sua mensagem foi enviada com sucesso (simulação).');
                contactForm.reset();
                btn.innerText = originalText;
                btn.disabled = false;
            }, 1500);
        });
    }
});
