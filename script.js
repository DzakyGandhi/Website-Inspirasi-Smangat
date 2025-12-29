function orderWA(nama, harga) {
  const nomor = "6281231649328";
  const pesan = `
Halo, saya ingin pesan:
Produk: ${nama}
Harga: Rp${harga.toLocaleString("id-ID")}
  `;
  window.open(
    `https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`,
    "_blank"
  );
}

function toggleMenu() {
  const menu = document.getElementById("menuDropdown");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

