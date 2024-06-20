document.addEventListener('DOMContentLoaded', () => {
    gsap.from(".top-logo-text h1", { 
        duration: 1.5, 
        opacity: 0, 
        y: -50, 
        ease: "power2.out" 
    });

    gsap.from(".top-main-image img", { 
        duration: 1.5, 
        opacity: 0, 
        x: 100, 
        ease: "power2.out", 
        delay: 0.5 
    });

    gsap.from(".bottom-main-image img", { 
        duration: 1.5, 
        opacity: 0, 
        x: -100, 
        ease: "power2.out", 
        delay: 0.5 
    });

    gsap.from(".center-image img", { 
        duration: 1.5, 
        opacity: 0, 
        scale: 0.5, 
        ease: "power2.out", 
        delay: 1 
    });

    gsap.from(".center-text", { 
        duration: 1.5, 
        opacity: 0, 
        y: 50, 
        ease: "power2.out", 
        delay: 1.5 
    });

    gsap.from(".now-playing h1", { 
        duration: 1.5, 
        opacity: 0, 
        y: -50, 
        ease: "power2.out", 
        scrollTrigger: {
            trigger: ".now-playing",
            start: "top 80%",
        } 
    });

    gsap.from(".now-playing h2", { 
        duration: 1.5, 
        opacity: 0, 
        y: -30, 
        ease: "power2.out", 
        delay: 0.5,
        scrollTrigger: {
            trigger: ".now-playing",
            start: "top 80%",
        }
    });

    gsap.from(".streaming-logos .imgg", {
        duration: 1.5,
        opacity: 0,
        y: 50,
        stagger: 0.2,
        ease: "power2.out",
        delay: 1,
        scrollTrigger: {
            trigger: ".now-playing",
            start: "top 80%",
        }
    });
});

