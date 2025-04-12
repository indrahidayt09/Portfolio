// ARTICLES SCRIPT
document.addEventListener('DOMContentLoaded', function() {
    const articles = [
        {
            id: 1,
            title: "Lebih Baik Bootstrap Atau Tailwind !?",
            excerpt: "Sebagai front end developer, saya pernah menggunakan berbagai framework CSS untuk mempercepat proses ...",
            image: "assets/images/img1.jpg",
            date: "15 Juni 2023"
        },
        {
            id: 2,
            title: "Kenapa Clean Code Itu Penting",
            excerpt: "Dalam pengembangan front end, clean code bukan hanya soal estetika, tapi juga soal kolaborasi ...",
            image: "assets/images/img2.jpg",
            date: "10 Februari 2025"
        }
    ];

    const grid = document.getElementById('articles-grid');
    
    articles.forEach(article => {
        const articleEl = document.createElement('article');
        articleEl.className = 'article-card';
        articleEl.innerHTML = `
            <div class="article-image">
                <img src="${article.image}" alt="${article.title}">
            </div>
            <div class="article-content">
                <h2>${article.title}</h2>
                <p>${article.excerpt}</p>
                <a href="article-detail.html?id=${article.id}" class="article-link">
                    Baca selengkapnya <i data-feather="arrow-right"></i>
                </a>
            </div>
        `;
        grid.appendChild(articleEl);
    });

    feather.replace();
});

