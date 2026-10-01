class Particle {
    constructor(canvas) {
        this.canvas = canvas;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.opacityChange = (Math.random() - 0.5) * 0.02;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.opacity += this.opacityChange;

        if (this.opacity >= 1) {
            this.opacity = 1;
            this.opacityChange = -Math.abs(this.opacityChange);
        }
        if (this.opacity <= 0.1) {
            this.opacity = 0.1;
            this.opacityChange = Math.abs(this.opacityChange);
        }

        if (this.x > this.canvas.width) this.x = 0;
        if (this.x < 0) this.x = this.canvas.width;
        if (this.y > this.canvas.height) this.y = 0;
        if (this.y < 0) this.y = this.canvas.height;
    }

    draw(ctx) {
        ctx.fillStyle = `rgba(100, 200, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function initParticles() {
    const container = document.getElementById('particles-container');
    if (!container) return;

    const canvas = document.createElement('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    container.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    const particles = [];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(canvas));
    }

    function animate() {
        ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        particles.forEach(particle => {
            particle.update();
            particle.draw(ctx);
        });

        requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

initParticles();