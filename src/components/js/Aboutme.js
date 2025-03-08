import React from "react";
import "animate.css/animate.min.css";
import useWOW from "./useWOW";
import AboutmeCard from "./AboutmeCard";
import "../../index.css";
import { useTranslation } from "react-i18next";

function Aboutme() {
  const { t } = useTranslation();

  useWOW();
  return (
    <div id="aboutme" className="sectionClass">
      <div className="row">
        <div className=" ">
          <h2 className="title2"> {t("About myself.")} </h2>
          <h3 className="readmore"> {t("Limited edition.")} </h3>
          <div className="wow animate__fadeInRight animate__animated tobias">
            <h3> {t("About Tobias van Dorp")} </h3>
            <div className="date">
              <i className="fa fa-calendar"></i>

              {t("February 7th 2003")}
            </div>
            <h4>
              <i className="fa fa-flag fa-sm"></i>

              {t("Maarn, Utrecht, Netherlands")}
            </h4>
            <p> {t("aboutme_description")}</p>
          </div>
        </div>

        <div className="mycarreer">
          <h2 className="title2" id="carreer">
            {t("My carreer")}
          </h2>
          <h3 className="readmore">
            {" "}
            {t("Experience points accumulating...")}
          </h3>
          <ul className="cbp_tmtimeline">
            <AboutmeCard
              className="animate__fadeInRight animate__animated"
              title="HAVO-degree"
              date="Juli 2021"
              location="Amersfoort, Utrecht"
              description={
                <>
                  {t("havo_description")}
                  <a
                    href="https://www.socrateshonours.org/lid-worden/socrates-awards"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="socrates"
                  >
                    {t("Socrates Award")}
                  </a>{" "}
                  {t("havo_description_2")}
                </>
              }
            ></AboutmeCard>
            <AboutmeCard
              title={t("Bachelor's degree at OpenICT")}
              date={t("September 2022 - now")}
              location="Hogeschool Utrecht"
              description={t("openict_description")}
            ></AboutmeCard>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
