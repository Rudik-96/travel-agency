import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import DiamondIcon from "@mui/icons-material/Diamond";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

import "./Banner.css";

type BannerProps = {
  backgroundUrl: string;
};

export const Banner: React.FC<BannerProps> = ({backgroundUrl}) => {
  return (
    <div className="banner-wrapper">
      <div className="banner"
        style={{backgroundImage: `url(${backgroundUrl}`}}
      >
        <div className="place">
          <div className="place-info">
            <h3>
              Your personal Maldives <br />
              travel expert
            </h3>
            <ul className="feautures">
              <li className="charactersitic-text">
                <BeachAccessIcon sx={{ color: "green" }} />
                <span>
                  30-minute private consultation to design <br />
                  your perfect Maldives getaway
                </span>
              </li>
              <li className="charactersitic-text">
                <FlightTakeoffIcon sx={{ color: "green" }} />
                <span>Handpicked resorts based on your budget</span>
              </li>
              <li className="charactersitic-text">
                <DiamondIcon sx={{ color: "green" }} />{" "}
                <span>best travel dates & flight advice</span>
              </li>
              <li className="charactersitic-text">
                <EventAvailableIcon sx={{ color: "green" }} />
                <span>Custom itinerary in 24 hours</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
