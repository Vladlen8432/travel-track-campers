import { useEffect, useState } from "react";
import css from "./styles/Catalog.module.css";
import { fetchCampers } from "../services/api";

import {
  windIcon,
  transmission,
  kitchen,
  tv,
  bathroom,
  camperType,
  integration,
  cove,
  heart,
  starYellow,
  map,
} from "../assets/index.js";
import { Link } from "react-router-dom";

const Catalog = () => {
  const [campers, setCampers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCampers().then((data) => {
      setCampers(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className={css.containerCatalog}>
      <div className={css.containerFilters}>
        <form className={css.filtersForm}>
          <div className={css.location}>
            <label className={css.labelLocation} htmlFor="location">
              Location
            </label>
            <br />
            <input
              className={css.inputLocation}
              type="text"
              placeholder="Kyiv, Ukraine"
            />
          </div>

          <div className={css.filters}>
            <label className={css.labelFilters} htmlFor="filters">
              Filters
            </label>
            <h3 className={css.titleType}>Vehicle equipment</h3>
            <hr className={css.line} />

            <div className={css.checkboxGroup}>
              <label className={css.checkbox}>
                <input type="checkbox" value="AC" />
                <div className={css.iconWrapper}>
                  <img className={css.icon} src={windIcon} alt="AC Icon" />
                  <span className={css.checkboxText}>AC</span>
                </div>
              </label>

              <label className={css.checkbox}>
                <input type="checkbox" value="Automatic" />
                <div className={css.iconWrapper}>
                  <img
                    className={css.icon}
                    src={transmission}
                    alt="Automatic Icon"
                  />
                  <span>Automatic</span>
                </div>
              </label>

              <label className={css.checkbox}>
                <input type="checkbox" value="Kitchen" />
                <div className={css.iconWrapper}>
                  <img className={css.icon} src={kitchen} alt="Kitchen Icon" />
                  <span>Kitchen</span>
                </div>
              </label>

              <label className={css.checkbox}>
                <input type="checkbox" value="TV" />
                <div className={css.iconWrapper}>
                  <img className={css.icon} src={tv} alt="TV Icon" />
                  <span>Kitchen</span>
                </div>
              </label>

              <label className={css.checkbox}>
                <input type="checkbox" value="Kitchen" />
                <div className={css.iconWrapper}>
                  <img
                    className={css.icon}
                    src={bathroom}
                    alt="bathroom Icon"
                  />
                  <span>Kitchen</span>
                </div>
              </label>
            </div>

            <h3 className={css.titleType}>Vehicle type</h3>
            <hr className={css.line} />

            <div className={css.checkboxGroup}>
              <label className={css.checkbox}>
                <input type="checkbox" value="Van" />
                <div className={css.iconWrapper}>
                  <img src={camperType} alt="camperType" />
                  <span>Van</span>
                </div>
              </label>

              <label className={css.checkbox}>
                <input type="checkbox" value="Truck" />
                <div className={css.iconWrapper}>
                  <img src={integration} alt="integration" />
                  <span>Truck</span>
                </div>
              </label>

              <label className={css.checkbox}>
                <input type="checkbox" value="SUV" />
                <div className={css.iconWrapper}>
                  <img src={cove} alt="cove" />
                  <span>SUV</span>
                </div>
              </label>
            </div>
          </div>

          <button className={css.searchButton} type="submit">
            Search
          </button>
        </form>
      </div>

      <div className={css.mainContentCatalog}>
        {campers.length > 0 ? (
          <ul className={css.listCatalog}>
            {campers.map((camper) => (
              <li className={css.listItemCatalog} key={camper.id}>
                <img
                  className={css.imgListCatalog}
                  src={camper.gallery[0].thumb}
                  alt="imgListCatalog"
                />
                <div className={css.contentListCatalog}>
                  <div className={css.containerTitlePrice}>
                    <h3 className={css.titleCamper}>{camper.name}</h3>
                    <div className={css.containerPriceFavorite}>
                      <p className={css.priceCamper}>{camper.price}</p>
                      <img className={css.heartImg} src={heart} />
                    </div>
                  </div>

                  <div className={css.containerReviewsLocation}>
                    <img
                      className={css.starImgYellow}
                      src={starYellow}
                      alt="star"
                    />
                    <p>
                      {camper.reviews.length > 0
                        ? `${(
                            camper.reviews.reduce(
                              (sum, review) => sum + review.reviewer_rating,
                              0
                            ) / camper.reviews.length
                          ).toFixed(1)} (${camper.reviews.length} Reviews)`
                        : "No Reviews"}
                    </p>
                    <div className={css.containerLocation}>
                      <img className={css.locationImg} src={map} alt="map" />
                      <p className={css.locationItem}>{camper.location}</p>
                    </div>
                  </div>

                  <p className={css.descriptionItem}>{camper.description}</p>

                  <ul className={css.listFeatures}>
                    {[
                      { label: camper.transmission },
                      { label: camper.engine },
                      { label: "Air Conditioning", condition: camper.AC },
                      { label: "Bathroom", condition: camper.bathroom },
                      { label: "Kitchen", condition: camper.kitchen },
                      { label: "TV", condition: camper.TV },
                      { label: "Radio", condition: camper.radio },
                      { label: "Refrigerator", condition: camper.refrigerator },
                      { label: "Microwave", condition: camper.microwave },
                      { label: "Gas", condition: camper.gas },
                      { label: "Water", condition: camper.water },
                    ]
                      .filter(
                        (item) => item.condition === undefined || item.condition
                      )
                      .map((item, index) => (
                        <li key={index} className={css.listFeaturesItem}>
                          <p className={css.featuresItem}>{item.label}</p>
                        </li>
                      ))}
                  </ul>

                  <Link className={css.showMore} to={`/campers/${camper.id}`}>
                    Show more
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export default Catalog;
