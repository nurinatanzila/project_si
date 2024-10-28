// Contoh pengguna untuk validasi login
const users = [
    { email: "nurina100505@gmail.com", password: "zila100505" }
];

document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Mencegah refresh halaman

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const loginError = document.getElementById('loginError');

    // Validasi email dan password
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert('Login berhasil!');
        window.location.href = 'index.html'; // Arahkan ke halaman utama
    } else {
        loginError.style.display = 'block';
    }
});
