import { useParams } from "react-router-dom";
import { fetchCamperById } from "../services/api";
import { useEffect, useState } from "react";
import css from "./styles/CamperDetails.module.css";

import { starYellow, location } from "../assets/index.js";

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
      <h3 className={css.camperTitle}>{camper.name}</h3>
      <div className={css.containerRatingLocation}>
        <div className={css.ratingContainer}>
          <p className={css.rating}>
            <span>
              <img className={css.star} src={starYellow} alt="star" />
            </span>
            {camper.reviews.length > 0
              ? `${(
                  camper.reviews.reduce(
                    (sum, review) => sum + review.reviewer_rating,
                    0
                  ) / camper.reviews.length
                ).toFixed(1)} (${camper.reviews.length} Reviews)`
              : "No Reviews"}
          </p>
        </div>
        <p className={css.location}>
          <span>
            <img src={location} alt="location" />
          </span>
          {camper.location}
        </p>
      </div>

      <h3 className={css.price}>${camper.price}</h3>

      {camper.gallery && (
        <ul className={css.imageGalleryList}>
          {camper.gallery.map((image, index) => (
            <li key={index}>
              <img
                className={css.imgGallery}
                src={image.thumb}
                alt="img-gallery"
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CamperDetails;
