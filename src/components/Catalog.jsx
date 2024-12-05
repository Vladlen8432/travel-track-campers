import css from "./styles/Catalog.module.css";
import camper from "../images/temp/camper.jpg";

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
} from "../assets/index.js";
import { NavLink } from "react-router-dom";

const Catalog = () => {
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
        <ul className={css.listCatalog}>
          <li className={css.listItemCatalog}>
            <img
              className="css.imgListCatalog"
              src={camper}
              alt="imgListCatalog"
            />
            <div className={css.contentListCatalog}>
              <div className={css.containerTitlePrice}>
                <h3 className={css.titleCamper}>Mavericks</h3>
                <div className={css.containerPriceFavorite}>
                  <p className={css.priceCamper}>€8000.00</p>
                  <img className={css.heartImg} src={heart} alt="heart" />
                </div>
              </div>

              <div className={css.containerReviewsLocation}>
                <div className={css.containerReviews}>
                  <img src="" alt="star" />
                  <p className={css.reviewsItem}></p>
                </div>

                <div className={css.containerLocation}>
                  <img src="" alt="map" />
                  <p className={css.locationItem}>Kyiv, Ukraine</p>
                </div>
              </div>

              <p className={css.descriptionItem}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>

              <ul className={css.listFeatures}>
                <li className={css.listFeaturesItem}>
                  <img
                    className={css.iconFeatures}
                    src={transmission}
                    alt="transmission"
                  />
                  <p>Automatic</p>
                </li>
              </ul>
              <NavLink className={css.showMore} to={""}>
                Show more
              </NavLink>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Catalog;
