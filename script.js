// Ambil elemen input dan paragraf berdasarkan ID
const inputField = document.getElementById('myInput');
const lastKeyParagraph = document.getElementById('lastKey');

// Menambahkan event listener untuk keydown pada input field
inputField.addEventListener('keydown', function(event) {
    // Menampilkan karakter terakhir yang ditekan di paragraf
    lastKeyParagraph.textContent = 'Karakter terakhir yang ditekan: ' + event.key;
});
