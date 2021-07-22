import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactImage from "../../../static/assets/images/auth/trooper.jpg";

export default function () {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + ContactImage + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="right-column">
        <div className="contact-items-wrapper">
          <div className="contact-item">
            <div className="icon">
              <FontAwesomeIcon icon="user" />
            </div>
            <div className="contact-text">Natalie Kaelin</div>
          </div>

          <div className="contact-item">
            <div className="icon">
              <FontAwesomeIcon icon="envelope-square" />
            </div>
            <div className="contact-text">nataliekaelin@gmail.com</div>
          </div>

          <div className="contact-item">
            <div className="icon">
              <FontAwesomeIcon icon="phone-square-alt" />
            </div>
            <div className="contact-text">808.344.7080</div>
          </div>

          <div className="contact-item">
            <div className="icon">
              <FontAwesomeIcon icon="thumbtack" />
            </div>
            <div className="contact-text">Jacksonville, FL</div>
          </div>
        </div>
      </div>
    </div>
  );
}
