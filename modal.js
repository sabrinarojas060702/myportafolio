/**
 * SISTEMA DE MODALES - Portafolio Sabrina Rojas
 * 
 * Este archivo maneja la funcionalidad de múltiples modales:
 * 1. Modal de "Modelación de Procesos" (modal-modelacion)
 * 2. Modal de "Analista de Sistemas" (modal-analista-sistemas)
 * 3. Modal de "Diseño de Sistemas" (modal-diseno-sistemas)
 * 4. Modal de "Ingeniería de Requerimientos" (modal-ingenieria-requerimientos)
 * 5. Modal de "Desarrollador Front-end" (modal-frontend-developer)
 * 
 * Características implementadas:
 * - Animaciones suaves y llamativas
 * - Cierre con botón X, clic fuera del modal o tecla Escape
 * - Prevención de scroll del body cuando está abierto
 * - Efectos visuales modernos
 */

// ===== VARIABLES GLOBALES =====
let isModalOpen = false;

// Elementos del modal de Modelación de Procesos
const modalModelacion = document.getElementById('modal-modelacion');
const btnModelacion = document.getElementById('btn-modelacion');

// Elementos del modal de Analista de Sistemas
const modalAnalista = document.getElementById('modal-analista-sistemas');
const btnAnalista = document.getElementById('btn-analista-sistemas');

// Elementos del modal de Diseño de Sistemas
const modalDiseno = document.getElementById('modal-diseno-sistemas');
const btnDiseno = document.getElementById('btn-diseno-sistemas');

// Elementos del modal de Ingeniería de Requerimientos
const modalIngenieria = document.getElementById('modal-ingenieria-requerimientos');
const btnIngenieria = document.getElementById('btn-ingenieria-requerimientos');

// Elementos del modal de Desarrollador Front-end
const modalFrontend = document.getElementById('modal-frontend-developer');
const btnFrontend = document.getElementById('btn-frontend-developer');

// ===== FUNCIONES PARA MODAL DE MODELACIÓN DE PROCESOS =====

/**
 * Abre el modal de Modelación de Procesos con animación suave
 */
function openModalModelacion() {
    if (isModalOpen) return;

    modalModelacion.style.display = 'flex';
    modalModelacion.offsetHeight; // Forzar reflow
    modalModelacion.classList.add('modal-show');
    document.body.style.overflow = 'hidden';
    
    isModalOpen = true;
    console.log('🚀 Modal de Modelación de Procesos abierto');
}

/**
 * Cierra el modal de Modelación de Procesos con animación suave
 */
function closeModalModelacion() {
    if (!isModalOpen) return;

    modalModelacion.classList.remove('modal-show');
    
    setTimeout(() => {
        modalModelacion.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 300);

    isModalOpen = false;
    console.log('❌ Modal de Modelación cerrado');
}

// ===== FUNCIONES PARA MODAL DE ANALISTA DE SISTEMAS =====

/**
 * Abre el modal de Analista de Sistemas con animación llamativa
 */
function openModalAnalista() {
    if (isModalOpen) return;

    modalAnalista.style.display = 'flex';
    modalAnalista.offsetHeight; // Forzar reflow
    modalAnalista.classList.add('modal-show-analista');
    document.body.style.overflow = 'hidden';
    
    // Efecto de entrada escalonada para las secciones
    const sections = modalAnalista.querySelectorAll('.modal-content-section');
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.classList.add('section-animate');
        }, 200 + (index * 150));
    });
    
    isModalOpen = true;
    console.log('🚀 Modal de Analista de Sistemas abierto con animaciones');
}

/**
 * Cierra el modal de Analista de Sistemas con animación suave
 */
function closeModalAnalista() {
    if (!isModalOpen) return;

    modalAnalista.classList.remove('modal-show-analista');
    
    // Remover animaciones de las secciones
    const sections = modalAnalista.querySelectorAll('.modal-content-section');
    sections.forEach(section => {
        section.classList.remove('section-animate');
    });
    
    setTimeout(() => {
        modalAnalista.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 400);

    isModalOpen = false;
    console.log('❌ Modal de Analista cerrado');
}

// ===== FUNCIONES PARA MODAL DE DISEÑO DE SISTEMAS =====

/**
 * Abre el modal de Diseño de Sistemas con animación llamativa
 */
function openModalDiseno() {
    if (isModalOpen) return;

    modalDiseno.style.display = 'flex';
    modalDiseno.offsetHeight; // Forzar reflow
    modalDiseno.classList.add('modal-show-analista');
    document.body.style.overflow = 'hidden';
    
    // Efecto de entrada escalonada para las secciones
    const sections = modalDiseno.querySelectorAll('.modal-content-section');
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.classList.add('section-animate');
        }, 200 + (index * 150));
    });
    
    isModalOpen = true;
    console.log('🎨 Modal de Diseño de Sistemas abierto con animaciones');
}

/**
 * Cierra el modal de Diseño de Sistemas con animación suave
 */
function closeModalDiseno() {
    if (!isModalOpen) return;

    modalDiseno.classList.remove('modal-show-analista');
    
    // Remover animaciones de las secciones
    const sections = modalDiseno.querySelectorAll('.modal-content-section');
    sections.forEach(section => {
        section.classList.remove('section-animate');
    });
    
    setTimeout(() => {
        modalDiseno.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 400);

    isModalOpen = false;
    console.log('❌ Modal de Diseño cerrado');
}

// ===== FUNCIONES PARA MODAL DE INGENIERÍA DE REQUERIMIENTOS =====

/**
 * Abre el modal de Ingeniería de Requerimientos con animación llamativa
 */
function openModalIngenieria() {
    if (isModalOpen) return;

    modalIngenieria.style.display = 'flex';
    modalIngenieria.offsetHeight; // Forzar reflow
    modalIngenieria.classList.add('modal-show-analista');
    document.body.style.overflow = 'hidden';
    
    // Efecto de entrada escalonada para las secciones
    const sections = modalIngenieria.querySelectorAll('.modal-content-section');
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.classList.add('section-animate');
        }, 200 + (index * 150));
    });
    
    isModalOpen = true;
    console.log('📋 Modal de Ingeniería de Requerimientos abierto con animaciones');
}

/**
 * Cierra el modal de Ingeniería de Requerimientos con animación suave
 */
function closeModalIngenieria() {
    if (!isModalOpen) return;

    modalIngenieria.classList.remove('modal-show-analista');
    
    // Remover animaciones de las secciones
    const sections = modalIngenieria.querySelectorAll('.modal-content-section');
    sections.forEach(section => {
        section.classList.remove('section-animate');
    });
    
    setTimeout(() => {
        modalIngenieria.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 400);

    isModalOpen = false;
    console.log('❌ Modal de Ingeniería cerrado');
}

// ===== FUNCIONES PARA MODAL DE DESARROLLADOR FRONT-END =====

/**
 * Abre el modal de Desarrollador Front-end con animación llamativa
 */
function openModalFrontend() {
    if (isModalOpen) return;

    modalFrontend.style.display = 'flex';
    modalFrontend.offsetHeight; // Forzar reflow
    modalFrontend.classList.add('modal-show-analista');
    document.body.style.overflow = 'hidden';
    
    // Efecto de entrada escalonada para las secciones
    const sections = modalFrontend.querySelectorAll('.modal-content-section');
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.classList.add('section-animate');
        }, 200 + (index * 150));
    });
    
    isModalOpen = true;
    console.log('💻 Modal de Desarrollador Front-end abierto con animaciones');
}

/**
 * Cierra el modal de Desarrollador Front-end con animación suave
 */
function closeModalFrontend() {
    if (!isModalOpen) return;

    modalFrontend.classList.remove('modal-show-analista');
    
    // Remover animaciones de las secciones
    const sections = modalFrontend.querySelectorAll('.modal-content-section');
    sections.forEach(section => {
        section.classList.remove('section-animate');
    });
    
    setTimeout(() => {
        modalFrontend.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 400);

    isModalOpen = false;
    console.log('❌ Modal de Front-end cerrado');
}

// ===== FUNCIÓN UNIVERSAL PARA CERRAR CUALQUIER MODAL =====

/**
 * Cierra cualquier modal que esté abierto actualmente
 */
function closeAnyModal() {
    if (modalModelacion && modalModelacion.classList.contains('modal-show')) {
        closeModalModelacion();
    }
    if (modalAnalista && modalAnalista.classList.contains('modal-show-analista')) {
        closeModalAnalista();
    }
    if (modalDiseno && modalDiseno.classList.contains('modal-show-analista')) {
        closeModalDiseno();
    }
    if (modalIngenieria && modalIngenieria.classList.contains('modal-show-analista')) {
        closeModalIngenieria();
    }
    if (modalFrontend && modalFrontend.classList.contains('modal-show-analista')) {
        closeModalFrontend();
    }
}

// ===== INICIALIZACIÓN DE EVENT LISTENERS =====

/**
 * Configura todos los event listeners cuando el DOM esté listo
 */
document.addEventListener('DOMContentLoaded', function() {
    
    // ===== EVENT LISTENERS PARA ABRIR MODALES =====
    
    // Modal de Modelación de Procesos
    if (btnModelacion) {
        btnModelacion.addEventListener('click', function(e) {
            e.preventDefault();
            openModalModelacion();
        });
    }
    
    // Modal de Analista de Sistemas
    if (btnAnalista) {
        btnAnalista.addEventListener('click', function(e) {
            e.preventDefault();
            openModalAnalista();
        });
    }
    
    // Modal de Diseño de Sistemas
    if (btnDiseno) {
        btnDiseno.addEventListener('click', function(e) {
            e.preventDefault();
            openModalDiseno();
        });
    }
    
    // Modal de Ingeniería de Requerimientos
    if (btnIngenieria) {
        btnIngenieria.addEventListener('click', function(e) {
            e.preventDefault();
            openModalIngenieria();
        });
    }
    
    // Modal de Desarrollador Front-end
    if (btnFrontend) {
        btnFrontend.addEventListener('click', function(e) {
            e.preventDefault();
            openModalFrontend();
        });
    }
    
    // ===== EVENT LISTENERS PARA CERRAR MODALES =====
    
    // Cerrar con botones X
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal-close')) {
            closeModalModelacion();
        }
        if (e.target.classList.contains('modal-close-analista')) {
            closeModalAnalista();
        }
        if (e.target.classList.contains('modal-close-diseno')) {
            closeModalDiseno();
        }
        if (e.target.classList.contains('modal-close-ingenieria')) {
            closeModalIngenieria();
        }
        if (e.target.classList.contains('modal-close-frontend')) {
            closeModalFrontend();
        }
    });
    
    // Cerrar haciendo clic fuera del modal
    document.addEventListener('click', function(e) {
        if (e.target.id === 'modal-modelacion') {
            closeModalModelacion();
        }
        if (e.target.id === 'modal-analista-sistemas') {
            closeModalAnalista();
        }
        if (e.target.id === 'modal-diseno-sistemas') {
            closeModalDiseno();
        }
        if (e.target.id === 'modal-ingenieria-requerimientos') {
            closeModalIngenieria();
        }
        if (e.target.id === 'modal-frontend-developer') {
            closeModalFrontend();
        }
    });
    
    // Cerrar con tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && isModalOpen) {
            closeAnyModal();
        }
    });
    
    // ===== EVENT LISTENERS PARA BOTONES DE CONTACTO =====
    
    // Botón "Contactar para Proyecto" en modal de Analista
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn-contact')) {
            e.preventDefault();
            alert('¡Gracias por tu interés en Análisis de Sistemas! Te contactaré pronto para discutir tu proyecto.');
            console.log('📧 Solicitud de contacto para Análisis enviada');
        }
    });
    
    // Botón "Solicitar Diseño" en modal de Diseño de Sistemas
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn-contact-diseno')) {
            e.preventDefault();
            alert('¡Excelente! Me encantaría ayudarte con el diseño de tu sistema. Te contactaré pronto para conocer más detalles.');
            console.log('🎨 Solicitud de diseño enviada');
        }
    });
    
    // Botón "Consultar Proyecto" en modal de Ingeniería de Requerimientos
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn-contact-ingenieria')) {
            e.preventDefault();
            alert('¡Perfecto! La ingeniería de requerimientos es clave para el éxito. Te contactaré para analizar tu proyecto en detalle.');
            console.log('📋 Consulta de ingeniería de requerimientos enviada');
        }
    });
    
    // Botón "Solicitar Desarrollo" en modal de Desarrollador Front-end
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn-contact-frontend')) {
            e.preventDefault();
            alert('¡Genial! Me emociona trabajar en tu proyecto front-end. Te contactaré para discutir los detalles técnicos y comenzar el desarrollo.');
            console.log('💻 Solicitud de desarrollo front-end enviada');
        }
    });
    
    console.log('🎉 Sistema de Modales inicializado correctamente');
    console.log('📋 Modales disponibles: Modelación de Procesos, Analista de Sistemas, Diseño de Sistemas, Ingeniería de Requerimientos, Desarrollador Front-end');
});

// ===== EFECTO SCROLL SIMPLE - SOLO 2 COLORES =====

/**
 * Sistema simplificado de cambio de color con desvanecimiento
 * Solo 2 estados: Color original (azul) y color activo (rojo) al hacer scroll
 * Transición suave con efecto fade entre ambos colores
 */

// Variables para el efecto scroll
const scrollSection = document.getElementById('scroll-color-section');
let isScrollActive = false;
let isTransitioning = false;

/**
 * Función que maneja el cambio de color simple (2 estados)
 */
function handleSimpleColorChange() {
    if (!scrollSection || isTransitioning) return;

    // Obtener la posición de la sección
    const sectionTop = scrollSection.offsetTop;
    const sectionHeight = scrollSection.offsetHeight;
    
    // Obtener la posición actual del scroll
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    
    // Calcular si estamos cerca o dentro de la sección
    const triggerStart = sectionTop - windowHeight * 0.3; // Activar antes de llegar
    const triggerEnd = sectionTop + sectionHeight + windowHeight * 0.1; // Desactivar después de salir
    
    // Determinar si debemos activar el color
    const shouldActivate = scrollTop >= triggerStart && scrollTop <= triggerEnd;
    
    // Solo cambiar si el estado es diferente
    if (shouldActivate && !isScrollActive) {
        activateScrollColor();
    } else if (!shouldActivate && isScrollActive) {
        deactivateScrollColor();
    }
}

/**
 * Activa el color de scroll con desvanecimiento suave
 */
function activateScrollColor() {
    if (isTransitioning) return;
    
    isTransitioning = true;
    scrollSection.classList.add('fade-transition');
    
    // Activar el color con un pequeño delay para suavidad
    setTimeout(() => {
        scrollSection.classList.add('scroll-active');
        isScrollActive = true;
        
        console.log('🎨 Sección activada - Desvanecimiento a color rojo');
        
        // Limpiar transición
        setTimeout(() => {
            scrollSection.classList.remove('fade-transition');
            isTransitioning = false;
        }, 1200);
        
    }, 50);
}

/**
 * Desactiva el color de scroll volviendo al original
 */
function deactivateScrollColor() {
    if (isTransitioning) return;
    
    isTransitioning = true;
    scrollSection.classList.add('fade-transition');
    
    // Desactivar el color con un pequeño delay para suavidad
    setTimeout(() => {
        scrollSection.classList.remove('scroll-active');
        isScrollActive = false;
        
        console.log('🔄 Sección desactivada - Desvanecimiento a color original (azul)');
        
        // Limpiar transición
        setTimeout(() => {
            scrollSection.classList.remove('fade-transition');
            isTransitioning = false;
        }, 1200);
        
    }, 50);
}

/**
 * Función optimizada con throttle para mejor rendimiento
 */
function throttledSimpleColorHandler() {
    let ticking = false;
    
    return function() {
        if (!ticking) {
            requestAnimationFrame(function() {
                handleSimpleColorChange();
                ticking = false;
            });
            ticking = true;
        }
    };
}

/**
 * Inicialización del efecto simple de 2 colores
 */
function initSimpleColorEffect() {
    if (!scrollSection) {
        console.warn('⚠️ Sección scroll-color-section no encontrada');
        return;
    }
    
    // Limpiar cualquier estado anterior
    scrollSection.classList.remove('scroll-active', 'fade-transition');
    isScrollActive = false;
    isTransitioning = false;
    
    // Agregar event listener optimizado
    const throttledHandler = throttledSimpleColorHandler();
    window.addEventListener('scroll', throttledHandler, { passive: true });
    
    // También escuchar resize para recalcular posiciones
    window.addEventListener('resize', throttledHandler, { passive: true });
    
    // Verificar estado inicial
    setTimeout(() => {
        handleSimpleColorChange();
    }, 200);
    
    console.log('🚀 Sistema simple de 2 colores inicializado');
    console.log('🎭 Estados: Azul original ↔ Rojo con desvanecimiento suave');
    console.log('⚡ Activación: 30% antes de llegar a la sección');
}

// Inicializar el efecto cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Delay para asegurar que todos los estilos estén cargados
    setTimeout(initSimpleColorEffect, 300);
});