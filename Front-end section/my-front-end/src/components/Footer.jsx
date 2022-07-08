import React from "react";
import "../style/footer.css";
export default function Footer() {
  return (
    <div className="footer-section">
      <div>
        <a href="tel:97191971">
          <img src="./image/phone.svg" alt="phone" />
        </a>
        <a href="https://www.facebook.com/">
          <img src="./image/facebook.svg" alt="facebook" />
        </a>
        <a href="https://www.instagram.com/?hl=en">
          <img
            src="./image/instagram.png"
            style={{ width: "48px" }}
            alt="instagram"
          />
        </a>
      </div>
      <div>&copy;2022 Bayanjargal</div>
    </div>
  );
}
