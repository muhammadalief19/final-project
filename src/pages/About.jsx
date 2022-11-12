import React from 'react';
import asset1 from '../assets/asset-2.webp';
import asset2 from '../assets/asset-3.webp';
function About() {
  return (
    <>
      <div className="w-full relative px-5 lg:px-7 py-20 lg:py-10" id="about">
        <p className="text-4xl text-teal-600 font-bold text-center mb-5">About</p>
        <p className="w-full lg:w-3/4 text-justify mx-auto text-gray-600 text-lg indent-28 font-medium">
          Iyek Company adalah salah satu badan usaha di bidang Software Developer. Iyek Company pertama kali dibentuk oleh 3 mahasiswa PENS prodi D3 Teknik Informatika. Kata iyek dalam nama usaha tersebut diambil dari Bahasa Madura ( iyek )
          yang berarti "Orang Arab". Karena salah satu karyawan Iyek Company merupakan keturunan arab <strong>Talpos</strong>. Iyek Company sudah banyak dikenal oleh orang, khususnya orang Madura dan Jawa Timur, karena produk - produk
          software kami sudah memberikan banyak dampak positif bagi masyarakat, diantaranya aplikasi <b>ABON</b> atau Absen Online, aplikasi ini sudah banyak digunakan sekolah - sekolah, dari Sekolah dasar sampai SMA. Yang kedua ada
          aplikasi Pasar Anom, aplikasi ini adalah produk tersukses, aplikasi ini termasuk dalam jenis aplikasi e-Commerce seperti Shoopee, Tokopedia, Lazada dll., Aplikasi ini mengalahkan aplikasi Shopee dan Tokopedia. Menurut pendapat
          client aplikasi Pasar Anom ini fiturnya sangat lengkap, banyak event promo, server aplikasinya stabil dan ringan untuk smartphone yang RAMnya dibawah 4GB.
        </p>
        <img src={asset1} alt="" className="absolute right-1 lg:right-14 bottom-20 lg:top-24 w-72 lg:w-[350px] hover:translate-x-48 lg:hover:translate-x-40 hover:-rotate-12 translate-y-14 transition-all duration-500  ease-in-out" />
        <img src={asset2} alt="" className="absolute -z-10 bottom-48 lg:bottom-auto lg:top-0 opacity-30 lg:left-32 animate-pulse" id="mobile" />
      </div>
    </>
  );
}

export default About;
