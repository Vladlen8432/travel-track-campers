import css from "./styles/Catalog.module.css";

import windIcon from "../images/catalog/wind.png";
import transmission from "../images/catalog/diagram.png";
import kitchen from "../images/catalog/cup-hot.png";
import tv from "../images/catalog/tv.png";
import bathroom from "../images/catalog/ph_shower.png";
import camperType from "../images/catalog/bi_grid-1x2.png";
import integration from "../images/catalog/bi_grid.png";
import cove from "../images/catalog/bi_grid-3x3-gap.png";

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

      <div className={css.mainContentCatalog}>Campers list</div>
    </div>
  );
};

export default Catalog;

// import css from "./styles/Catalog.module.css";

// const Catalog = () => {
//   return (
//     <div className={css.containerCatalog}>
//       <div className={css.containerFilters}>
//         <form className={css.filtersForm}>
//           <div className={css.location}>
//             <label className={css.labelLocation} htmlFor="location">
//               Location
//             </label>
//             <br />
//             <input
//               className={css.inputLocation}
//               type="text"
//               value="Kyiv, Ukraine"
//             />
//           </div>

//           <div className={css.filters}>
//             <label className={css.labelFilters} htmlFor="filters">Filters</label>
//             <h3 className={css.titleType}>Vehicle equipment</h3>
//             <hr className={css.line} />

//             <div className={css.checkboxGroup}>

//             </div>

//             <input type="checkbox" value='AC' />
//             <input type="checkbox" />
//             <input type="checkbox" />

//             <h3 className={css.titleType}>Vehicle type</h3>

//             <input type="checkbox" />
//             <input type="checkbox" />
//             <input type="checkbox" />
//           </div>
//           <button type="submit">Search</button>
//         </form>
//       </div>

//       <div className={css.mainContentCatalog}>Campers list</div>
//     </div>
//   );
// };

// export default Catalog;
