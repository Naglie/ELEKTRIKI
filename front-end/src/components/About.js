import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapLocationDot, faStarOfDavid, faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { faFlag, faUser  } from "@fortawesome/free-regular-svg-icons";

export default function About() {
  return (
    <div id="description">
      <div id="descBg">
        <div className="descContainer">
            <div className="descHeading">
                <h2>Электрик внутренних работ</h2>
            </div>
            <div className="descBoxes">
                <div className="descBox">
                    <FontAwesomeIcon icon={faFlag} />
                    <h3>Языки обучения</h3>
                    <p>Русский, Казахский</p>
                </div>
                <div className="descBox">
                    <FontAwesomeIcon icon={faUser} />
                    <h3>Языки обучения</h3>
                    <p>Русский, Казахский</p>
                </div>
                <div className="descBox">
                    <FontAwesomeIcon icon={faMapLocationDot} />
                    <h3>Языки обучения</h3>
                    <p>Русский, Казахский</p>
                </div>
                <div className="descBox">
                    <FontAwesomeIcon icon={faStarOfDavid} />
                    <h3>Языки обучения</h3>
                    <p>Русский, Казахский</p>
                </div>
                <div className="descBox">
                    <FontAwesomeIcon icon={faClockRotateLeft} />
                    <h3>Языки обучения</h3>
                    <p>Русский, Казахский</p>
                </div>
            </div>
        </div>
      </div>
      <div className="descDetail">
        <p>
          Электрик выполняет электротехнические работы, в частности, монтаж и
          обслуживание электрических сетей и оборудования.
        </p>
        <p>
          Сфера его профессиональной деятельности включает все, что связано с
          электричеством – от электростанций до бытового электромонтажа.
        </p>
      </div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/AWOyEIuVzzQ"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
}
