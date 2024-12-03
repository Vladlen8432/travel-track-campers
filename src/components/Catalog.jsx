import css from "./styles/Catalog.module.css";

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
              value="Kyiv, Ukraine"
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
                  <img src="/path-to-ac-icon.svg" alt="AC Icon" />
                  <span>AC</span>
                </div>
              </label>

              <label className={css.checkbox}>
                <input type="checkbox" value="Automatic" />
                <div className={css.iconWrapper}>
                  <img src="/path-to-automatic-icon.svg" alt="Automatic Icon" />
                  <span>Automatic</span>
                </div>
              </label>

              <label className={css.checkbox}>
                <input type="checkbox" value="Kitchen" />
                <div className={css.iconWrapper}>
                  <img src="/path-to-kitchen-icon.svg" alt="Kitchen Icon" />
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
                  <img src="/path-to-kitchen-icon.svg" alt="Kitchen Icon" />
                  <span>Van</span>
                </div>
              </label>

              <label className={css.checkbox}>
                <input type="checkbox" value="Truck" />
                <div className={css.iconWrapper}>
                  <img src="/path-to-kitchen-icon.svg" alt="Kitchen Icon" />
                  <span>Truck</span>
                </div>
              </label>

              <label className={css.checkbox}>
                <input type="checkbox" value="SUV" />
                <div className={css.iconWrapper}>
                  <img src="/path-to-kitchen-icon.svg" alt="Kitchen Icon" />
                  <span>SUV</span>
                </div>
              </label>
            </div>
          </div>

          <button type="submit">Search</button>
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
