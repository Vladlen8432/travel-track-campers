import { useParams } from "react-router-dom";
import { fetchCamperById } from "../services/api";
import { useEffect, useState } from "react";
import css from "./styles/CamperDetails.module.css";

const CamperDetails = () => {
  const params = useParams();
  const [camper, setCamper] = useState(null);

  useEffect(() => {
    fetchCamperById(params.id)
      .then((data) => setCamper(data))
      .catch((error) => console.error(error));
  }, [params.id]);

  if (!camper) return <p>Loading...</p>;

  return (
    <div className={css.camperDetails}>
      <h3>{camper.name}</h3>
      <div className={css.containerRatingLocation}>
        <p className={css.rating}>{camper.rating}</p>
        <p className={css.location}>{camper.location}</p>
      </div>
    </div>
  );
};

export default CamperDetails;
