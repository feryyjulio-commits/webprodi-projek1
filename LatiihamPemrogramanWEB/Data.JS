document.addEventListener("DOMContentLoaded", function () {
  const tanggalElement = document.getElementById("tanggal");
  const form = document.getElementById("formPendaftaran");

  if (tanggalElement) {
    const now = new Date();
    tanggalElement.textContent = now.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
  }

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const nama = document.getElementById("nama").value.trim();
      if (nama) {
        alert("Terima kasih, " + nama + "! Pendaftaran Anda berhasil dikirim.");
      } else {
        alert("Silakan isi nama lengkap terlebih dahulu.");
      }

      form.reset();
    });
  }
});
