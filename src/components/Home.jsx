import React from "react";
import "../Styles/home.css";
import img from "../assets/Download-3.png";

const Home = () => {
  return (
    <>
      <div className="main-body">
        <div className="main">
          <div className="left-item">
            <h1>
              Invest in <span className="spn">your future</span>
            </h1>
            <p>
              Grow your portfolio in a more fair and open financial system.
              <bold className="blt">Start with just $10.</bold>
            </p>
            <button type="button" className="btn btn-primary btn-item">
              Sign Up
            </button>
          </div>
          <div className="right-item">
            <video
              autoPlay
              muted
              loop
              playsInline
              src="https://assets-cms.kraken.com/files/51n36hrp/facade/d8ddc27c80bb12d6013c7ceafcdcaa6336e7febb.mp4"
            />
          </div>
        </div>
      </div>

      <div className="content">
        <h1>Kraken is a crypto exchange for everyone</h1>
        <div className="hole_content">
          <div className="clients main-para">
            <h1>10M+</h1>
            <p>Clients</p>
            <p>
              Our crypto app offers clients a seamless and secure platform to
              manage their digital assets. With a user-friendly interface, it
              provides real-time market data, enabling users to track their
              cryptocurrency portfolios, execute trades, and access advanced
              trading features with ease.
            </p>
          </div>
          <div className="cuntriesSpprt main-para">
            <h1>190+</h1>
            <p>Countries Supports</p>
            <p>
              A crypto app with wide-reaching global support, accessible to
              users in over 190 countries, offers a versatile and inclusive
              financial platform. This app empowers individuals worldwide to
              participate in cryptocurrency trading and investment, providing
              access to a diverse range of digital assets and investment
              opportunities.
            </p>
          </div>
          <div className="trading main-para">
            <h1>$200B+</h1>
            <p>Quartely trading Volume</p>
            <p>
              The crypto app for quarterly trading volume provides users with a
              robust platform to engage in cryptocurrency trading activities. It
              empowers traders to execute transactions with ease while offering
              comprehensive data and analysis tools. With a focus on security
              and user-friendliness, this app enables individuals to trade
              cryptocurrencies, manage portfolios, and monitor market trends
              conveniently.
            </p>
          </div>
        </div>
      </div>
      <div className="image-content">
        <img src={img} alt="image_crypto" />
      </div>
    </>
  );
};

export default Home;
