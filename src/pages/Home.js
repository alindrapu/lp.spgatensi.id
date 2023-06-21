import React from "react";
import { Popup } from "../components/index";
import "./style.scss";
import Logo from "../images/logo.svg";
import HeroImage from "../images/hero-image.png";
import SectionTwoBanner from "../images/section-2-bg.png";
import iconGedung from "../images/gedung-icon.png";
import iconMaterial from "../images/material-icon.svg";
import iconJalan from "../images/jalan-icon.svg";
import iconJembatan from "../images/jembatan-icon.svg";
import iconBendung from "../images/bendung-icon.svg";
import iconTerowongan from "../images/terowongan-icon.svg";
import iconIrigasi from "../images/irigasi-icon.svg";
import iconSungai from "../images/sungai-icon.svg";
import iconAirTanah from "../images/airtanah-icon.svg";
import iconAirMinum from "../images/bangunan-icon.svg";
import iconDrainase from "../images/drainase-icon.svg";
import iconGeoteknik from "../images/geoteknik-icon.svg";
import iconPelabuhan from "../images/pelabuhan-icon.svg";
import iconRel from "../images/rel-icon.svg";
import iconLimbah from "../images/limbah-icon.svg";
import iconSampah from "../images/sampah-icon.svg";
import iconGrouting from "../images/grouting-icon.svg";
import iconGeodesi from "../images/geodesi-icon.svg";
import iconBongkar from "../images/bongkar-icon.svg";

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
              <h2 className="h2-icon">GEDUNG</h2>
            </div>
          </div>
          <div className="button-detail">
            <div className="button-detail__icon-wrapper">
              <img src={iconMaterial} alt="" />
            </div>
            <div className="button-detail__button">
              <h2 className="h2-icon">MATERIAL</h2>
            </div>
          </div>
          <div className="button-detail">
            <div className="button-detail__icon-wrapper">
              <img src={iconGedung} alt="" />
            </div>
            <div className="button-detail__button">
              <h2 className="h2-icon">JALAN</h2>
            </div>
          </div>
          <div className="button-detail">
            <div className="button-detail__icon-wrapper">
              <img src={iconGedung} alt="" />
            </div>
            <div className="button-detail__button">
              <h2 className="h2-icon">JEMBATAN</h2>
            </div>
          </div>
          <div className="button-detail">
            <div className="button-detail__icon-wrapper">
              <img src={iconGedung} alt="" />
            </div>
            <div className="button-detail__button">
              <h2 className="h2-icon">BENDUNG & BENDUNGAN</h2>
            </div>
          </div>
          <div className="button-detail">
            <div className="button-detail__icon-wrapper">
              <img src={iconGedung} alt="" />
            </div>
            <div className="button-detail__button">
              <h2 className="h2-icon">TEROWONGAN</h2>
            </div>
          </div>
          <div className="button-detail">
            <div className="button-detail__icon-wrapper">
              <img src={iconGedung} alt="" />
            </div>
            <div className="button-detail__button">
              <h2 className="h2-icon">IRIGASI & RAWA</h2>
            </div>
          </div>
          <div className="button-detail">
            <div className="button-detail__icon-wrapper">
              <img src={iconGedung} alt="" />
            </div>
            <div className="button-detail__button">
              <h2 className="h2-icon">SUNGAI & PANTAI</h2>
            </div>
          </div>
          <div className="button-detail">
            <div className="button-detail__icon-wrapper">
              <img src={iconGedung} alt="" />
            </div>
            <div className="button-detail__button">
              <h2 className="h2-icon">AIR TANAH & AIR BAKU</h2>
            </div>
          </div>
          <div className="button-detail">
            <div className="button-detail__icon-wrapper">
              <img src={iconGedung} alt="" />
            </div>
            <div className="button-detail__button">
              <h2 className="h2-icon">BANGUNAN AIR MINUM</h2>
            </div>
          </div>
          <div className="button-detail">
            <div className="button-detail__icon-wrapper">
              <img src={iconGedung} alt="" />
            </div>
            <div className="button-detail__button">
              <h2 className="h2-icon">DRAINASE PERKOTAAN</h2>
            </div>
          </div>
          <div className="button-detail">
            <div className="button-detail__icon-wrapper">
              <img src={iconGedung} alt="" />
            </div>
            <div className="button-detail__button">
              <h2 className="h2-icon">GEOTEKNIK & PONDASI</h2>
            </div>
          </div>
          <div className="button-detail">
            <div className="button-detail__icon-wrapper">
              <img src={iconGedung} alt="" />
            </div>
            <div className="button-detail__button">
              <h2 className="h2-icon">BANGUNAN PELABUHAN</h2>
            </div>
          </div>
          <div className="button-detail">
            <div className="button-detail__icon-wrapper">
              <img src={iconGedung} alt="" />
            </div>
            <div className="button-detail__button">
              <h2 className="h2-icon">JALAN REL</h2>
            </div>
          </div>
          <div className="button-detail">
            <div className="button-detail__icon-wrapper">
              <img src={iconGedung} alt="" />
            </div>
            <div className="button-detail__button">
              <h2 className="h2-icon">BANGUNAN AIR LIMBAH</h2>
            </div>
          </div>
          <div className="button-detail">
            <div className="button-detail__icon-wrapper">
              <img src={iconGedung} alt="" />
            </div>
            <div className="button-detail__button">
              <h2 className="h2-icon">BANGUNAN PERSAMPAHAN</h2>
            </div>
          </div>
          <div className="button-detail">
            <div className="button-detail__icon-wrapper">
              <img src={iconGedung} alt="" />
            </div>
            <div className="button-detail__button">
              <h2 className="h2-icon">GROUTING</h2>
            </div>
          </div>
          <div className="button-detail">
            <div className="button-detail__icon-wrapper">
              <img src={iconGedung} alt="" />
            </div>
            <div className="button-detail__button">
              <h2 className="h2-icon">GEODESI</h2>
            </div>
          </div>
          <div className="button-detail">
            <div className="button-detail__icon-wrapper">
              <img src={iconGedung} alt="" />
            </div>
            <div className="button-detail__button">
              <h2 className="h2-icon">PEMBONGKARAN BANGUNAN</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
