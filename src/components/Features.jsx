import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCamperById } from "../services/api";
import css from "./styles/Features.module.css";

const Features = () => {
  const params = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchCamperById(params.id)
      .then((response) => setData(response))
      .catch((error) => console.error("Error fetching data:", error));
  }, [params.id]);

  if (!data) {
    return <div>Loading...</div>;
  }

  const details = [
    { key: "Form", value: data.form },
    { key: "Length", value: data.length },
    { key: "Width", value: data.width },
    { key: "Height", value: data.height },
    { key: "Tank", value: data.tank },
    { key: "Consumption", value: data.consumption },
    { key: "Transmission", value: data.transmission },
    { key: "Engine", value: data.engine },
  ];

  return (
    <div className={css.containerFeatures}>
      <ul className={css.listFeatures}>
        {[
          { label: data.transmission },
          { label: data.engine },
          { label: "Air Conditioning", condition: data.AC },
          { label: "Bathroom", condition: data.bathroom },
          { label: "Kitchen", condition: data.kitchen },
          { label: "TV", condition: data.TV },
          { label: "Radio", condition: data.radio },
          { label: "Refrigerator", condition: data.refrigerator },
          { label: "Microwave", condition: data.microwave },
          { label: "Gas", condition: data.gas },
          { label: "Water", condition: data.water },
        ]
          .filter((item) => item.condition === undefined || item.condition)
          .map((item, index) => (
            <li key={index} className={css.listFeaturesItem}>
              {item.label}
            </li>
          ))}
      </ul>

      <h3 className={css.vehicleDetails}>Vehicle details</h3>
      <hr className={css.line} />
      <ul>
        {details.map((detail, index) => (
          <li key={index} className={css.detailsItem}>
            <p className={css.detailKey}>{detail.key}</p>
            <p className={css.detailValue}>{detail.value}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Features;
