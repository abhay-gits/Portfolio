let t1 = gsap.timeline();

t1.from('.logo, .nav-links li', {
    opacity: 0,
    y: -20,
    duration: 0.4,
    stagger: 0.2
})

t1.from('.hero-image, .hero-info h2,.hero-info h3,.hero-info button,.hero-info img', {
    opacity: 0,
    y: 20,
    duration: .4,
    scale: 0.9,
    stagger: 0.2,
    ease: 'back.out(4.7)'
})