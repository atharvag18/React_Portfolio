import React from "react";
import experience from "./data/experience.json";
const Experience = () => {
  return (
    <>
      <div className="container ex" id="experience">
        <h1>EXPERIENCE</h1>
        {experience.map((data) => {
          return (
            <>
              <div
                key={data.id}
                className="ex-items text-center my-5"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <div className="left">
                  <div className="img">
                    <img src={`../assets/${data.imageSrc}`} alt="" />
                  </div>
                </div>
                <div className="right">
                  <h2>{data.role}</h2>
                  <h4>
                    <span style={{ color: "yellowgreen" }}>
                      {data.startDate} {data.endDate} {data.location}
                    </span>
                  </h4>
                  <span style={{ color: "yellow" }}>
                    <h5>{data.experiences[0]}</h5>
                    <h5>{data.experiences[1]}</h5>
                  </span>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Experience;
