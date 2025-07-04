// Menunggu hingga seluruh konten halaman HTML dimuat sebelum menjalankan script
document.addEventListener('DOMContentLoaded', function() {

    // --- Fungsionalitas untuk Tombol "Beli" di Halaman Detail Produk ---
    
    // 1. Mencari tombol dengan class 'btn-buy'
    const buyButton = document.querySelector('.btn-buy');

    // 2. Jika tombol 'Beli' ada di halaman ini, tambahkan event listener
    if (buyButton) {
        buyButton.addEventListener('click', function() {
            // Tampilkan pesan sederhana saat tombol diklik
            alert('Produk berhasil ditambahkan ke keranjang! 🛒');
        });
    }


    // --- Fungsionalitas untuk Formulir Kontak di Halaman Kontak ---

    // 1. Mencari form di halaman kontak
    const contactForm = document.querySelector('.contact-form form');

    // 2. Jika form kontak ada di halaman ini, tambahkan event listener
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // Mencegah form dari perilaku default-nya (yaitu me-reload halaman)
            event.preventDefault(); 

            // Mengambil nilai dari input nama
            const nama = document.getElementById('nama').value;

            // Tampilkan pesan terima kasih yang dipersonalisasi
            alert('Terima kasih, ' + nama + '! Pesan Anda telah kami terima. 🙏');

            // Mengosongkan form setelah "dikirim"
            contactForm.reset();
        });
    }

});