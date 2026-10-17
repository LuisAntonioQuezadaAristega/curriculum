document.addEventListener("DOMContentLoaded", () => {
    // 1. Seleccionamos todos los elementos que tienen la clase de animación
    const fadeElements = document.querySelectorAll(".fade-in-element");

    // 2. Configuramos el "observador"
    const observerOptions = {
        root: null,         // Usa la pantalla del navegador como referencia
        rootMargin: "0px",  // No añade márgenes adicionales
        threshold: 0.15     // El elemento se activa cuando el 15% de su cuerpo ya es visible
    };

    // 3. Definimos qué pasa cuando un elemento entra en el campo de visión
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Añade la clase CSS que inicia la transición suave
                entry.target.classList.add("is-visible");
                // Una vez que aparece, dejamos de observarlo para ahorrar recursos
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 4. Activamos el observador en cada uno de los elementos seleccionados
    fadeElements.forEach(element => {
        observer.observe(element);
    });
});