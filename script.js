window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('qflix_user')) {
        document.getElementById('auth-screen').style.display = 'none';
        document.getElementById('profiles-screen').style.display = 'flex';
    }
    initProfessionalDatabase();
});

function handleAuth() {
    const user = document.getElementById('username-input').value.trim();
    const pass = document.getElementById('password-input').value.trim();
    if(!user || !pass) { alert('الرجاء إدخال البيانات كاملة'); return; }
    localStorage.setItem('qflix_user', user);
    document.getElementById('auth-screen').style.display = 'none';
    document.getElementById('profiles-screen').style.display = 'flex';
}

function selectProfile() {
    document.getElementById('profiles-screen').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
}

function switchProfile() {
    document.getElementById('main-content').style.display = 'none';
    document.getElementById('profiles-screen').style.display = 'flex';
}

function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

// مكتبة صور احترافية ومقسمة حسب التصنيف لضمان دقة وتنوع البوسترات
const categoryImages = {
    kids: [
        "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500",
        "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500",
        "https://images.unsplash.com/photo-1563089145-599997674d42?w=500"
    ],
    arabic: [
        "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500",
        "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=500",
        "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500"
    ],
    action: [
        "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=500",
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=500",
        "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=500"
    ],
    comedy: [
        "https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=500",
        "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=500",
        "https://images.unsplash.com/photo-1543536448-d209d2d13a1c?w=500"
    ]
};

function initProfessionalDatabase() {
    let kids = [], arabic = [], action = [], comedy = [];
    
    for(let i = 1; i <= 20; i++) {
        kids.push({
            title: `مغامرات أطفال ${i}`, 
            desc: 'قصة كرتونية ممتعة ومسلية للصغار تعزز الخيال والمرح.', 
            img: categoryImages.kids[i % categoryImages.kids.length]
        });
        
        arabic.push({
            title: `دراما عربية ${i}`, 
            desc: 'أجمل الأعمال والمسلسلات العربية الحصرية بجودة عالية.', 
            img: categoryImages.arabic[i % categoryImages.arabic.length]
        });
        
        action.push({
            title: `أكشن ومغامرة ${i}`, 
            desc: 'أقوى أفلام القتال والمطاردات والحماس اللامتناهي.', 
            img: categoryImages.action[i % categoryImages.action.length]
        });
        
        comedy.push({
            title: `كوميديا ومقالب ${i}`, 
            desc: 'أضحك من قلبك مع أقوى الأعمال الكوميدية والترفيهية.', 
            img: categoryImages.comedy[i % categoryImages.comedy.length]
        });
    }

    renderRow('row-kids', kids);
    renderRow('row-arabic', arabic);
    renderRow('row-action', action);
    renderRow('row-comedy', comedy);
}

function renderRow(elemId, data) {
    const container = document.getElementById(elemId);
    if(!container) return;
    container.innerHTML = data.map(m => `
        <div class="movie-card-row" onclick="openDetailView('${m.title}', '${m.desc}', '${m.img}')">
            <img src="${m.img}" class="movie-poster-row" loading="lazy">
            <div class="movie-title-row">${m.title}</div>
        </div>
    `).join('');
}

function openDetailView(title, desc, img) {
    document.getElementById('det-title').innerText = title;
    document.getElementById('det-desc').innerText = desc;
    document.getElementById('det-banner').style.backgroundImage = `url('${img}')`;
    document.getElementById('detail-view').style.display = 'block';
}

function closeDetailView() {
    document.getElementById('detail-view').style.display = 'none';
}

function playMovieDirectly() {
    document.getElementById('video-player-screen').style.display = 'flex';
    const player = document.getElementById('actual-video-player');
    player.play().catch(e => console.log(e));
}

function closeVideoPlayer() {
    const player = document.getElementById('actual-video-player');
    player.pause();
    document.getElementById('video-player-screen').style.display = 'none';
}
