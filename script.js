window.addEventListener('load', () => {
    // 1. Reveal Timeline
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
    tl.to(".brand-reveal", { opacity: 1, y: 0, duration: 1.5 })
      .to(".capsule-wrapper", { opacity: 1, y: 0, duration: 1 }, "-=1")
      .to(".footer-protocol", { opacity: 1, y: 0, duration: 1 }, "-=0.8");

    // 2. Cursor logic - only if not on touch device
    if (window.matchMedia("(pointer: fine)").matches) {
        const cInner = document.querySelector('.cursor-inner');
        const cOuter = document.querySelector('.cursor-outer');
        document.addEventListener('mousemove', (e) => {
            gsap.to(cOuter, { x: e.clientX, y: e.clientY, duration: 0.3 });
            gsap.to(cInner, { x: e.clientX, y: e.clientY, duration: 0.05 });
        });
    }

    // 3. Scan Button Logic
    const scanBtn = document.getElementById('scan-trigger');
    const score = document.getElementById('conviction-score');
    const input = document.getElementById('asset-input');

    scanBtn.addEventListener('click', () => {
        if(!input.value) {
            gsap.to(".fave-capsule", { x: 10, repeat: 5, yoyo: true, duration: 0.05 });
            return;
        }
        
        scanBtn.innerText = "ANALYZING...";
        let obj = { val: 20 };
        
        gsap.to(obj, { 
            val: 94, 
            duration: 3, 
            ease: "power1.inOut",
            onUpdate: () => score.innerText = Math.floor(obj.val) + "%",
            onComplete: () => {
                scanBtn.innerText = "#SCAN_COMPLETE";
                setTimeout(() => {
                    alert("Analysis Complete. Confidence at 94%. Click Collections to materialize.");
                    scanBtn.innerText = "#SECURE_SCAN";
                }, 500);
            }
        });
    });
});