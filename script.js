window.addEventListener('load', () => {
    const video = document.querySelector('.video-bg');
    const hudElements = [".brand-reveal", ".capsule-wrapper", ".protocol"];

    // 1. Initial Dark State
    gsap.set(hudElements, { opacity: 0, y: 30 });
    gsap.set(video, { filter: "brightness(0)" });

    const masterTl = gsap.timeline({ delay: 1.5 }); // Starts after 1.5s of darkness

    // 2. The Flicker Reveal
    masterTl.to(video, { filter: "brightness(0.8)", duration: 0.05 })
            .to(video, { filter: "brightness(0.1)", duration: 0.1 })
            .to(video, { filter: "brightness(1)", duration: 0.05 })
            .to(video, { filter: "brightness(0.4)", duration: 0.8, ease: "power2.in" });

    // 3. The HUD Boot-up
    masterTl.to(".brand-reveal", { opacity: 1, y: 0, duration: 1.2, ease: "expo.out" }, "-=0.2")
            .to(".capsule-wrapper", { opacity: 1, y: 0, duration: 1 }, "-=0.8")
            .to(".protocol", { opacity: 0.6, duration: 1 }, "-=0.5");

    // F.A.V.E. Scan Trigger
    document.getElementById('trigger').addEventListener('click', function() {
        if(!document.getElementById('art-input').value) return;
        this.innerText = "INITIALIZING ARCHIVAL SCAN...";
        let score = { val: 0 };
        gsap.to(score, {
            val: 94.8, duration: 3,
            onUpdate: () => document.getElementById('score').innerText = score.val.toFixed(1) + "%",
            onComplete: () => this.innerText = "SCAN COMPLETE"
        });
    });
});    
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