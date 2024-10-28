// Login Modal
document.querySelector('a[href="#login"]').addEventListener('click', function(e) {
    e.preventDefault();
    new bootstrap.Modal(document.getElementById('loginModal')).show();
});

// Login Form Handler
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Add your login logic here
    alert('Fitur login akan segera tersedia!');
});

// Book Borrowing Handler
document.querySelectorAll('.btn-primary.btn-sm').forEach(button => {
    button.addEventListener('click', function() {
        if (!isLoggedIn()) {
            new bootstrap.Modal(document.getElementById('loginModal')).show();
        } else {
            // Add borrowing logic here
            alert('Buku berhasil dipinjam!');
        }
    });
});

// Dummy login check
function isLoggedIn() {
    return false; // Change this based on your authentication logic
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Menambahkan event listener pada tombol
document.getElementById('openPdfButton').addEventListener('click', function () {
    // Mengatur sumber PDF saat tombol ditekan
    document.getElementById('pdfViewer').src = 'laut%20bercerita.pdf';
    
    // Membuka modal
    var pdfModal = new bootstrap.Modal(document.getElementById('pdfModal'));
    pdfModal.show();
});

// Event listener untuk tombol "Pinjam"
document.querySelector('.open-pdf').addEventListener('click', function () {
    // Set sumber PDF ke "laut bercerita.pdf"
    document.getElementById('pdfViewer').src = 'laut%20bercerita.pdf';

    // Buka modal
    var pdfModal = new bootstrap.Modal(document.getElementById('pdfModal'));
    pdfModal.show();
});

