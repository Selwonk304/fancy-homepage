window.addEventListener('load', () => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
    
    // Initial reveal sequence
    tl.to(".brand-reveal", { opacity: 1, y: 0, duration: 1.5 })
      .to(".capsule-wrapper", { opacity: 1, y: 0, duration: 1 }, "-=1")
      .to(".footer-nav", { opacity: 1, duration: 1 }, "-=0.5");

    const scanBtn = document.getElementById('scan-trigger');
    
    scanBtn.addEventListener('click', () => {
        const input = document.getElementById('asset-input').value;
        if(!input) return;

        scanBtn.innerText = "QUERYING F.A.V.E...";
        let score = { n: 0 };
        
        // Simulation of Art Intelligence Engine
        gsap.to(score, {
            n: 94.8, duration: 3.5,
            onUpdate: () => {
                document.getElementById('conviction-score').innerText = score.n.toFixed(1) + "%";
            },
            onComplete: () => {
                scanBtn.innerText = "SCAN COMPLETE";
                // Add your FAVE logic/feedback here
            }
        });
    });
});