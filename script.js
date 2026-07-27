const samplePosters = [
    "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500",
    "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500",
    "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500",
    "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=500",
    "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500",
    "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=500"
];

const videoLinks = [
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
];

window.addEventListener('DOMContentLoaded', () => {
    generateMovies();
});

function generateMovies() {
    let trendingHTML = '';
    let latestHTML = '';

    for (let i = 1; i <= 12; i++) {
        let poster = samplePosters[i % samplePosters.length];
        let video = videoLinks[i % videoLinks.length];
        
        let card = `
            <div class="movie-card" onclick="openPlayer('${video}')">
                <img src="${poster}" class="movie-poster" loading="lazy">
                <div class="movie-info">
                    <div class="movie-name">فلم سينمائي مميز ${i}</div>
                    <div class="movie-year">2026 • HD</div>
                </div>
            </div>
        `;

        if (i <= 6) {
            trendingHTML += card;
        } else {
            latestHTML += card;
        }
    }

    document.getElementById('grid-trending').innerHTML = trendingHTML;
    document.getElementById('grid-latest').innerHTML = latestHTML;
}

function openPlayer(videoUrl) {
    const modal = document.getElementById('video-modal');
    const player = document.getElementById('main-video-player');
    player.src = videoUrl;
    modal.style.display = 'flex';
    player.play().catch(e => console.log(e));
}

function closePlayer() {
    const modal = document.getElementById('video-modal');
    const player = document.getElementById('main-video-player');
    player.pause();
    player.src = '';
    modal.style.display = 'none';
}

function filterCategory(cat, element) {
    document.querySelectorAll('.cat-chip').forEach(el => el.classList.remove('active'));
    element.classList.add('active');
}
