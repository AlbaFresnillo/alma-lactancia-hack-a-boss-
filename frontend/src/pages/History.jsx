import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./History.css";
import InstagramPost from "../components/InstagramPost";

const History = ({ instagramPost, instagramPostList }) => {
  const navigate = useNavigate();

  return (
    <div className="history-page">
      <Header />
      <main className="history-main">
        <div className="history-header">
          <p className="history-text">Alma Lactancia</p>
          <h1 className="history-title">Histórico</h1>
          <p className="history-description">
            En esta sección encontrarás un registro detallado de todas las
            actividades realizadas en Alma Lactancia. Desde reuniones hasta
            charlas informativas, este histórico recopila los eventos que han
            marcado nuestra trayectoria y compromiso con las familias.
          </p>
          <button
            className="upcoming-activities"
            onClick={() => navigate("/actividades")}
          >
            Próximas actividades
          </button>
          <h2 className="history-subtitle">Explora los momentos más destacados que nos han ayudado a promover y fortalecer la lactancia materna en nuestra comunidad.</h2>
        </div>

        <ol className="instagram-container">
          {instagramPostList.map((post, index) => {
            if (Object.keys(instagramPost[index]).length > 0) {
                return (
                    <li className="instagram-cards" key={index}>
                      <InstagramPost
                        instagramPost={instagramPost}
                        postNumber={index + 1}
                      />
                    </li>
                  ); 
            }  
          })}
        </ol>
      </main>
      <Footer />
    </div>
  );
};

export default History;
