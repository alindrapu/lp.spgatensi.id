import React from "react";
import { Popup } from "../components/index";
import "./style.scss";
import Logo from "../images/logo.svg";
import HeroImage from "../images/hero-image.png";
import SectionTwoBanner from "../images/section-2-bg.png";
import iconGedung from "../images/gedung-icon.png";
function Home() {
  return (
    <div className="home">
      <img className="logo" src={Logo} alt="" />
      <div className="section-banner">
        <div className="container">
          <h2 className="h2-hero">LEMBAGA SERTIFIKASI PROFESI</h2>
          <h1 className="h1-text">GATENSI KARYA KONSTRUKSI SIPIL</h1>
          <p className="p-text">
            Sebagai Pelaksanaan Amanat Pemerintah Republik Indonesia
            Undang-Undang No. 11 tahun 2020, dibawah pengawasan Kementerian
            PUPR, BNSP, serta BPP Gatensi{" "}
            <b>
              sudah menerbitkan lebih dari 10.000 sertifikat subklasifikasi
              sipil.
            </b>
          </p>
        </div>
        <div className="hero-image-container">
          <img src={HeroImage} alt="" />
        </div>
      </div>
      <div className="section-2">
        <img className="bg-section" src={SectionTwoBanner} alt="" />
        {/* <button className="wa-button" type="button">
          Konsultasi Gratis
        </button> */}
        <h2 className="section-title">LAYANAN KAMI</h2>
        <p className="section-text">
          Pengajuan Permohonan Sertifikasi Kompetensi Kerja (SKK) dengan
          klasifikasi kompetensi SIPIL,{" "}
          <b>
            228 SKEMA dan 16 SUBKLASIFIKASI, yang berguna bagi Tenaga Kerja
            Konstruksi (TKK) sebagai bukti kompeten & profesionalitas di jabatan
            kerja.
          </b>
        </p>

        <div className="button-section">
          <div className="button-detail">
            <div className="button-detail__icon-wrapper">
              <img src={iconGedung} alt="" />
            </div>
            <div className="button-detail__button">
              <h2 className="h2-text">GEDUNG</h2>
            </div>
          </div>
          <div className="button-detail">
            <div className="button-detail__icon-wrapper">
              <img src={iconGedung} alt="" />
            </div>
            <div className="button-detail__button">
              <h2 className="h2-text">Gedung</h2>
            </div>
          </div>
          <div className="button-detail">
            <div className="button-detail__icon-wrapper">
              <img src={iconGedung} alt="" />
            </div>
            <div className="button-detail__button">
              <h2 className="h2-text">Gedung</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
