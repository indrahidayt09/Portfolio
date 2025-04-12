document.addEventListener('DOMContentLoaded', function() {
    const articles = {
        1: {
            title: "Kenapa Tailwind Lebih Baik daripada Bootstrap",
            image: "assets/images/img1.jpg",
            date: "9 Februari 2025",
            author: "Frontendra",
            tags: ["Tailwind", "Bootstrap", "CSS Framework"],
            content: `
                <section class="article-section">
                    <h2>1. Pendahuluan</h2>
                    <p>Sebagai front end developer, saya pernah menggunakan berbagai framework CSS untuk mempercepat proses pengembangan antarmuka. Bootstrap adalah salah satu yang paling populer, namun setelah mencoba Tailwind CSS, saya merasa pengalaman pengembangannya jauh lebih fleksibel dan efisien. Artikel ini akan membahas alasan mengapa saya lebih memilih Tailwind dibandingkan Bootstrap.</p>
                </section>

                <section class="article-section">
                    <h2>2. Sekilas tentang Tailwind dan Bootstrap</h2>
                    <p><strong>Bootstrap</strong> merupakan framework CSS yang menyediakan berbagai komponen siap pakai, seperti tombol, kartu, form, dan lainnya. Dengan pendekatan ini, pengembang bisa dengan cepat membuat layout yang rapi tanpa perlu banyak menulis CSS dari nol.</p>
                    <p><strong>Tailwind CSS</strong> adalah framework utility-first yang memungkinkan kita membangun desain langsung di dalam HTML menggunakan class-class kecil yang sangat spesifik, seperti <code>p-4</code>, <code>text-center</code>, atau <code>bg-blue-500</code>. Pendekatan ini memberikan fleksibilitas yang tinggi dan sangat cocok untuk pengembangan desain yang custom.</p>
                </section>

                <section class="article-section">
                    <h2>3. Alasan Mengapa Tailwind Lebih Unggul</h2>
                    
                    <h3>a. Fleksibilitas dan Kendali Penuh</h3>
                    <p>Tailwind tidak mengunci kita pada gaya bawaan. Setiap komponen dibangun dari nol menggunakan utility class, sehingga kita memiliki kontrol penuh atas tampilan. Sementara di Bootstrap, sering kali kita harus menimpa style default untuk menyesuaikan desain.</p>
                    
                    <h3>b. Kinerja Lebih Optimal</h3>
                    <p>Tailwind secara otomatis menghapus class yang tidak digunakan saat proses build dengan bantuan fitur seperti PurgeCSS. Ini membuat ukuran file CSS menjadi jauh lebih kecil dan lebih cepat dimuat, terutama untuk proyek-proyek skala besar.</p>
                    
                    <h3>c. Konsistensi dalam Penulisan Kode</h3>
                    <p>Dengan utility class yang seragam, kode menjadi lebih konsisten dan mudah dipahami oleh tim. Kita tidak perlu membuat class CSS baru untuk setiap variasi desain, cukup menggunakan kombinasi class yang sudah tersedia.</p>
                    
                    <h3>d. Integrasi yang Kuat dengan Framework Modern</h3>
                    <p>Tailwind bekerja sangat baik dengan framework JavaScript modern seperti React, Vue, atau Next.js. Struktur class-nya mendukung gaya komponen dan sangat cocok untuk arsitektur berbasis komponen.</p>
                </section>

                <section class="article-section">
                    <h2>4. Kelemahan Tailwind (Agar Tetap Objektif)</h2>
                    <ul>
                        <li><strong>Learning Curve</strong>: Untuk pemula, Tailwind mungkin terasa rumit di awal karena jumlah class yang sangat banyak.</li>
                        <li><strong>HTML yang Terlihat Padat</strong>: Karena semua style ada di dalam elemen HTML, kode bisa terlihat ramai dan sulit dibaca jika tidak terbiasa.</li>
                    </ul>
                </section>

                <section class="article-section">
                    <h2>5. Kesimpulan</h2>
                    <p>Tailwind memberikan keleluasaan, efisiensi, dan konsistensi yang tidak saya temukan di Bootstrap. Meskipun setiap framework memiliki kelebihan masing-masing, bagi saya yang fokus pada desain yang dinamis dan custom, Tailwind menjadi pilihan yang lebih tepat.</p>
                    <blockquote>
                        "Utility-first CSS mengubah cara saya berpikir tentang styling komponen"
                    </blockquote>
                </section>
            `
        },
        2: {
            title: "Kenapa Clean Code Itu Penting",
            image: "assets/images/img2.jpg",
            date: "10 Februari 2025",
            author: "Frontendra",
            tags: ["Clean Code", "Web Design", "Front End"],
            content: `
                <section class="article-section">
                    <p>Dalam pengembangan front end, clean code bukan hanya soal estetika, tapi juga soal kolaborasi dan maintainability. Kode yang rapi dan mudah dibaca akan sangat membantu tim, apalagi dalam proyek jangka panjang. Artikel ini akan membahas prinsip dan praktik clean code khususnya di ranah front end development.</p>
                </section>

                <section class="article-section">
                    <h2>2. Kenapa Clean Code Itu Penting</h2>
                    <p><ul><li>Memudahkan developer lain atau tim untuk membaca dan memahami kode.</li><li>Mengurangi risiko bug karena struktur kode lebih jelas</li><li>Membuat proses debugging dan refactoring jadi lebih cepat dan efisien.</li></ul></p>
                </section>

                <section class="article-section">
                    <h2>3. Prinsip Prinsip Clean Code Di Front-End</h2>
                    
                    <ul>
                    <h3>a. Gunakan Naming yang Jelas dan Deskriptif</h3>
                    <p>Hindari nama class atau variabel seperti abc, temp, atau x. Gunakan nama yang menjelaskan fungsinya, seperti productCard, buttonPrimary, atau handleFormSubmit.</p>
                    
                    <h3>b. Pisahkan Antara Logika dan Tampilan</h3>
                    <p>Di React misalnya, pisahkan komponen menjadi presentational dan container (jika memungkinkan), agar lebih modular dan mudah diuji.</p>
                    
                    <h3>c. Gunakan Struktur Folder yang Terorganisir</h3>
                    <p>Buat folder berdasarkan fitur atau jenis komponen, misalnya components/, pages/, hooks/, dsb. Jangan campur semua dalam satu tempat.</p>
                    
                    <h3>d. Manfaatkan Komponen Reusable</h3>
                    <p>Jangan copy-paste kode yang sama berulang kali. Buat komponen reusable untuk button, modal, input, dsb.</p>

                    <h3>e.Hindari CSS Yang Berantakan</h3>
                    <p>Gunakan pendekatan seperti BEM (kalau pakai CSS biasa) atau utility-first seperti Tailwind untuk menghindari class yang tumpang tindih dan nggak konsisten.</p></ul>
                </section>

                <section class="article-section">
                    <h2>4. Alat Bantu yang Bikin Kode Lebih Rapi</h2>
                    <ul>
                        <li><strong>ESLin 7 Prettier </strong>: untuk format otomatis dan standar coding.</li>
                        <li><strong>Husky & lint-staged </strong>: supaya setiap commit udah rapi dari awal.</li>
                        <li><strong>VS Code Ekstension </strong>: seperti Auto Import, Tailwind IntelliSense, dll.</li>
                    </ul>
                </section>

                <section class="article-section">
                    <h2>Kesimpulan</h2>
                    <p>Clean code bukan berarti harus sempurna, tapi cukup rapi dan mudah dipahami. Dengan membiasakan diri menulis kode yang bersih, kita nggak cuma bantu diri sendiri, tapi juga seluruh tim. Dan itu salah satu ciri developer yang profesional.</p>
                </section>
            `
        }
    };

    // Ambil ID dari URL
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = urlParams.get('id');
    const article = articles[articleId];

    if (article) {
        const detailContainer = document.getElementById('article-detail');
        
        detailContainer.innerHTML = `
            <article>
                <header class="article-header">
                    <span class="article-category">${article.tags.join(', ')}</span>
                    <h1>${article.title}</h1>
                    <div class="article-meta">
                        <span class="article-date">${article.date}</span>
                        <span class="article-author">Oleh: ${article.author}</span>
                    </div>
                    <img src="${article.image}" alt="${article.title}" class="article-image">
                </header>
                
                <div class="article-body">
                    ${article.content}
                </div>
                
                <footer class="article-footer">
                    <a href="articles.html" class="back-button">
                        <i data-feather="arrow-left"></i> Kembali ke Daftar Artikel
                    </a>
                    <div class="article-tags">
                        ${article.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </footer>
            </article>
        `;
        
        feather.replace();
    } else {
        window.location.href = 'articles.html';
    }
});