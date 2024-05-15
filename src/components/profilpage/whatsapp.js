import React, { useState, useEffect } from "react";

const WhatsAppButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const isVisible = scrollTop > 100; // Ubah nilai ini sesuai dengan kebutuhan Anda
      setShowButton(isVisible);
    };

    window.addEventListener("scroll", handleScroll);

    // Membersihkan event listener setelah komponen di-unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.location.href =
      "https://api.whatsapp.com/send/?phone=905382236354&text&type=phone_number&app_absent=0";
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: showButton ? "20px" : "-100px", // Ganti nilai -100px dengan nilai sesuai kebutuhan Anda
        right: "20px",
        zIndex: 9999,
        transition: "bottom 0.3s ease",
      }}
    >
      <button
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          backgroundColor: "#25D366", // Warna latar belakang ikon WhatsApp
          border: "none",
          outline: "none",
          cursor: "pointer",
          position: "relative", // Tambahkan style untuk membuat posisi relatif
        }}
        onClick={handleClick}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" // Ganti URL gambar sesuai ikon WhatsApp yang Anda inginkan
          alt="WhatsApp Icon"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "28px", // Sesuaikan posisi bubble chat
            right: "60px", // Sesuaikan posisi bubble chat ke kanan
            transform: "translateY(-50%)", // Pusatkan vertikal
            backgroundColor: "rgba(37, 211, 102, 1)", // Warna latar belakang bubble chat dengan tingkat transparansi 1
            color: "white",
            padding: "4px 8px", // Ubah nilai padding menjadi lebih kecil
            borderRadius: "6px", // Ubah nilai border radius menjadi lebih kecil
            fontSize: "10px", // Ubah nilai font size menjadi lebih kecil
            fontWeight: "bold",
            whiteSpace: "nowrap", // Teks horizontal
            transition: "all 0.3s ease", // Transisi semua perubahan saat hover
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "rgba(37, 211, 102, 1)"; // Mengubah transparansi menjadi 1 saat hover
            e.target.style.padding = "8px 12px"; // Mengubah ukuran padding saat hover
            e.target.style.borderRadius = "10px"; // Mengubah ukuran border radius saat hover
            e.target.style.fontSize = "14px"; // Mengubah ukuran font saat hover
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "rgba(37, 211, 102, 0.5)"; // Mengembalikan ke transparansi awal saat hover keluar
            e.target.style.padding = "4px 8px"; // Mengembalikan ukuran padding saat hover keluar
            e.target.style.borderRadius = "6px"; // Mengembalikan ukuran border radius saat hover keluar
            e.target.style.fontSize = "10px"; // Mengembalikan ukuran font saat hover keluar
          }}
        >
          Want to export easily? Contact us below
        </div>
      </button>
    </div>
  );
};

export default WhatsAppButton;
