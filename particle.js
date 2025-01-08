const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const mouse = {
    x: null,
    y: null,
    radius: 100, 
};

window.addEventListener('mousemove', (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
});

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 1.5; 
        this.baseX = x;
        this.baseY = y;
        this.density = Math.random() * 30 + 1; 
    }

    update() {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
            const angle = Math.atan2(dy, dx);
            const force = (mouse.radius - distance) / mouse.radius;
            const directionX = Math.cos(angle) * force * this.density;
            const directionY = Math.sin(angle) * force * this.density;

            this.x -= directionX;
            this.y -= directionY;
        } else {
            this.x += (this.baseX - this.x) * 0.1;
            this.y += (this.baseY - this.y) * 0.1;
        }
    }

    draw() {
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
}

function createParticles() {
    const lines = [
        'Hi, My Name is Anup Gautam.',
        'I Am a Full Stack Developer.',
        'I Love Building Interactive systems!',
        'Welcome to My Website!'
    ];
    const fontSize = 40;
    ctx.font = `bold ${fontSize}px Arial`;
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';

    const lineHeight = 50; 
    const startX = canvas.width / 2;
    const startY = canvas.height / 2 - (lines.length / 2) * lineHeight;

    lines.forEach((line, index) => {
        ctx.fillText(line, startX, startY + index * lineHeight);
    });

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    for (let y = 0; y < canvas.height; y += 2) { 
        for (let x = 0; x < canvas.width; x += 2) {
            const index = (y * canvas.width + x) * 4;
            if (imageData[index + 3] > 128) { 
                particles.push(new Particle(x, y));
            }
        }
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle) => {
        particle.update();
        particle.draw();
    });

    requestAnimationFrame(animate);
}

createParticles();
animate();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    particles.length = 0; 
    createParticles(); 
});