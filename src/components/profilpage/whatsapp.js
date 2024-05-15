import React, { useState, useEffect } from 'react';

const WhatsAppButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const isVisible = scrollTop > 100; // Ubah nilai ini sesuai dengan kebutuhan Anda
      setShowButton(isVisible);
    };

    window.addEventListener('scroll', handleScroll);

    // Membersihkan event listener setelah komponen di-unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.location.href = 'https://api.whatsapp.com/send/?phone=6282187934171&text&type=phone_number&app_absent=0';
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: showButton ? '20px' : '-100px', // Ganti nilai -100px dengan nilai sesuai kebutuhan Anda
        right: '20px',
        zIndex: 9999,
        transition: 'bottom 0.3s ease',
      }}
    >
      <button
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          backgroundColor: '#25D366', // Warna latar belakang ikon WhatsApp
          border: 'none',
          outline: 'none',
          cursor: 'pointer',
        }}
        onClick={handleClick}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" // Ganti URL gambar sesuai ikon WhatsApp yang Anda inginkan
          alt="WhatsApp Icon"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
          }}
        />
      </button>
    </div>
  );
};

export default WhatsAppButton;
