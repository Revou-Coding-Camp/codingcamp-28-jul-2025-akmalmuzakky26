
window.onload = function() {
    const guestNameElement = document.getElementById('guest-name');
    if (guestNameElement) {
        const userName = prompt("Halo! Siapa nama Anda?", "Guest");
        
        // Mengubah teks sapaan dengan nama yang diinput pengguna
        // Jika pengguna tidak mengisi atau membatalkan, akan ditampilkan "Guest"
        guestNameElement.innerText = userName || "Guest";
    }
};

// Fungsi untuk memvalidasi formulir kontak
function validateForm() {
    // Mengambil nilai dari setiap input field
    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const telepon = document.getElementById('telepon').value;
    const pesan = document.getElementById('pesan').value;

    // Validasi: Cek apakah ada field yang kosong
    if (nama === "" || email === "" || telepon === "" || pesan === "") {
        alert("Semua kolom harus diisi!");
        return false; // Mencegah form untuk submit
    }

    // Validasi sederhana untuk email
    if (!email.includes("@") || !email.includes(".")) {
        alert("Format email tidak valid!");
        return false; // Mencegah form untuk submit
    }

    // Validasi sederhana untuk nomor telepon (hanya angka)
    if (isNaN(telepon)) {
        alert("Nomor telepon harus berupa angka!");
        return false; // Mencegah form untuk submit
    }

    // Jika semua validasi berhasil, tampilkan data di kolom output
    document.getElementById('output-nama').innerText = nama;
    document.getElementById('output-email').innerText = email;
    document.getElementById('output-telepon').innerText = telepon;
    document.getElementById('output-pesan').innerText = pesan;
    
    // Menampilkan waktu saat ini
    const currentTime = new Date().toLocaleString('id-ID');
    document.getElementById('current-time').innerText = currentTime;

    // Mencegah form dari pengiriman default yang akan me-reload halaman
    return false; 
}
