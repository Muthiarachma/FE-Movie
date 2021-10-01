import React from "react";
import {MdEmail } from "react-icons/md";
import {GrInstagram, GrYoutube } from "react-icons/gr";
import {ImFacebook2 } from "react-icons/im";


export default function Foot() {
  return (
    <div>
      <hr className="mt-5" style={{ borderTop: "1px solid #ffffff" }}></hr>

      <div className="row mt-3 mb-2">
        <div className="col-md-8 col-sm-6" style={{ color: "#ffffff" }}>
          <h3>ABOUT ME</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
            error earum perspiciatis praesentium sint ipsum provident blanditiis
            pariatur necessitatibus voluptas, cum, atque iste eligendi autem,
            culpa cupiditate placeat facilis repellat.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
            perspiciatis? Numquam, enim illo voluptatum neque facere aut sed ut
            dolore nihil? Nulla sit, recusandae ea tenetur rerum deserunt sequi
            earum?
          </p>
          <ul className="list-inline">
            <li className="list-inline-item">
              <a href="/" style={{ color: "#f4c10f" }}>
                <i>
                    <ImFacebook2/>
                </i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="/" style={{ color: "#f4c10f" }}>
                <i>
                    <GrYoutube/>
                </i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="/" style={{ color: "#f4c10f" }}>
                <i>
                    <MdEmail/>
                </i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="/" style={{ color: "#f4c10f" }}>
                <i>
                    <GrInstagram/>
                </i>
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-4 col-sm-6" style={{ color: "#ffffff" }}>
          <h3>KEEP IN TOUCH</h3>
          <ul className="list-unstyled">
            <li>
              <p>
                <strong>
                  <i className="fas fa-map-marker-alt"></i> Address:
                </strong>{" "}
                Medan, Sumatera Utara, Indonesia
              </p>
            </li>
            <li>
              <p>
                <strong>
                  <i className="fas fa-map-marker-alt"></i> Phone:
                </strong>{" "}
                +62 00 000 000
              </p>
            </li>
            <li>
              <p>
                <strong>
                  <i className="fas fa-envelope"></i> Email:
                </strong>{" "}
                info@infomail.com
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
