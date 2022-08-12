import React from "react";
import "./Search.scss";

function Search({ provinceList, province, setProvince }) {
  const handleSearchChange = (e) => {
    const selectedProvince = provinceList.find(
      (prov) => prov.id == e.target.value
    );
    setProvince(selectedProvince);
  };

  return (
    <section className="search">
      <div className="search__container">
        <div className="search__content">
          <div className="search__description">
            <p>Discover the nearest dealership in your area</p>
          </div>
          <div className="search__box">
            <select
              name="province"
              id="province"
              value={province.id}
              onChange={(e) => {
                handleSearchChange(e);
              }}
            >
              <option value="0" disabled>
                Pilih Lokasi Terdekat
              </option>
              {provinceList.map((prov, idx) => (
                <option key={idx} value={prov.id}>
                  {prov.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Search;
