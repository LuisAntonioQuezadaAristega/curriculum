let currentIndex = 0;

    document.querySelector('.prev-button').addEventListener('click', () => {
        navigate(-1);
    });

    document.querySelector('.next-button').addEventListener('click', () => {
        navigate(1);
    });

    function esDispositivoMovil() {
        const esUserAgentMovil = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        const esPantallaPequena = window.innerWidth <= 768;
        
        return esUserAgentMovil || esPantallaPequena;
    }

    function navigate(direction) {
        const galleryContainer = document.querySelector('.gallery-container');
        const totalImages = document.querySelectorAll('.gallery-item').length;

        currentIndex = (currentIndex + direction + totalImages) % totalImages;
        var offset = -currentIndex * 82;
        if (esDispositivoMovil()) {
            offset = -currentIndex * 92;
        }

        galleryContainer.style.transform = `translateX(${offset}%)`;
    }

    let autoplayInterval = null;

    function startAutoplay(interval) {
        stopAutoplay(); // Detiene cualquier autoplay anterior para evitar múltiples intervalos.
        autoplayInterval = setInterval(() => {
            navigate(1); // Navega a la siguiente imagen cada intervalo de tiempo.
        }, interval);
    }

    function stopAutoplay() {
        clearInterval(autoplayInterval);
    }

    // Iniciar autoplay con un intervalo de 3 segundos.
    startAutoplay(10000);

    // Opcional: Detener autoplay cuando el usuario interactúa con los botones de navegación.
    document.querySelectorAll('.nav-button').forEach(button => {
        button.addEventListener('click', stopAutoplay);
    });