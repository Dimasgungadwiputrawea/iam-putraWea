//============================================================================================================

//MENAMPILKAN CURRENT DATE DI BAWAH ==========

const today = new Date();

// Menentukan format tanggal: Day Month Date, Year (e.g. October 14, 2024)
const date = today.toLocaleDateString("en-US", {
  weekday: "long", // Nama hari (e.g. Monday)
  year: "numeric", // Tahun
  month: "long", // Nama bulan (e.g. October)
  day: "numeric", // Tanggal
});

// Menampilkan tanggal pada elemen dengan id 'currentDate'
document.getElementById("currentDate").textContent = date;
//============================================================================================================

//MENGHILANGKAN RECTANGLE DI BAWAH KETIKA SCROLL ==========

const scrollContainer = document.getElementById("scrollContainer");

// Fungsi untuk menampilkan/menghilangkan container berdasarkan posisi scroll
window.addEventListener("scroll", function () {
  // Memeriksa apakah scroll berada di posisi paling atas
  if (window.scrollY === 0) {
    // Halaman di posisi paling atas, tampilkan container
    scrollContainer.classList.remove("hidden");
  } else {
    // Halaman tidak di posisi paling atas, sembunyikan container
    scrollContainer.classList.add("hidden");
  }
});
//============================================================================================================

//BUTTON DI INDEX BUAT KE ABOUT ME ==========
function goToPage() {
  window.location.href = "aboutMe.html";
}
//============================================================================================================

//MENGUBAH WIDTH NAVBAR KETIKA DI SCROLL ==========

const navbar = document.getElementById("navbar");

// Tambahkan event listener untuk mendeteksi scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    // Jika pengguna menggulir, tambahkan kelas 'scrolled'
    navbar.classList.add("scrolled");
  } else {
    // Jika di atas halaman, hapus kelas 'scrolled'
    navbar.classList.remove("scrolled");
  }
});
//============================================================================================================

//UNTUK SCROLL HORIZONTAL DI PROJECT ==========

const container = document.querySelector(".flex-container4");

// Tambahkan event listener untuk scroll
container.addEventListener("wheel", (event) => {
  // Cegah scroll default
  event.preventDefault();

  // Ubah scroll vertikal menjadi horizontal
  container.scrollLeft += event.deltaY;
});
//============================================================================================================
