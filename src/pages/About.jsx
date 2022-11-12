import React from 'react';
import asset1 from '../assets/asset-2.png';
function About() {
  return (
    <>
      <div className="w-full relative px-7 py-10">
        <p className="text-4xl text-teal-600 font-bold text-center mb-5">About</p>
        <p className="w-3/4 text-justify mx-auto text-gray-500 text-lg indent-28">
          Iyek Company adalah salah satu badan usaha di bidang Software Developer. Iyek Company pertama kali dibentuk oleh 3 mahasiswa PENS prodi D3 Teknik Informatika. Kata iyek dalam nama usaha tersebut diambil dari Bahasa Madura ( iyek )
          yang berarti "Orang Arab". Karena salah satu karyawan Iyek Company merupakan keturunan arab <strong>Talpos</strong>. Iyek Company sudah banyak dikenal oleh orang, khususnya orang Madura dan Jawa Timur, karena produk - produk
          software kami sudah memberikan banyak dampak positif bagi masyarakat, diantaranya aplikasi <b>ABON</b> atau Absen Online, aplikasi ini sudah banyak digunakan sekolah - sekolah, dari Sekolah dasar sampai SMA. Yang kedua ada
          aplikasi Pasar Anom, aplikasi ini adalah produk tersukses, aplikasi ini termasuk dalam jenis aplikasi e-Commerce seperti Shoopee, Tokopedia, Lazada dll., Aplikasi ini mengalahkan aplikasi Shopee dan Tokopedia. Menurut pendapat
          client aplikasi Pasar Anom ini fiturnya sangat lengkap, banyak event promo, server aplikasinya stabil dan ringan untuk smartphone yang RAMnya dibawah 4GB.
        </p>
        <img src={asset1} alt="" className="absolute right-14 top-24 w-[350px] hover:translate-x-36 hover:-rotate-12 translate-y-14 transition-all duration-500  ease-in-out" />
      </div>
    </>
  );
}

export default About;
