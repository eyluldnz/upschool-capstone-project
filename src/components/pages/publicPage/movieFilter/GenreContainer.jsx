import React from 'react';

export default function GenreContainer({ setFilter, filterData, ...props }) {

  //{ ...filter, filter: [12, 14], sort: e.target.value }
  const selectGenre = (e) => {
    const checked = e.target.checked;
    let newFilter = {}
    if (checked) {
      newFilter = { ...filterData, filterGenre: [...filterData.filterGenre, Number(e.target.value)] };

    } else {
      newFilter = {...filterData,filterGenre:filterData.filterGenre.filter(item => item !== Number(e.target.value))}
    }
    setFilter({...newFilter});
  }

  return <div>
    <div className="btn-group d-inline" role="group" aria-label="Basic checkbox toggle button group">
      <input
        type="checkbox"
        className="checkbox disable-team team_values"
        value="12"
        onClick={(e) => {
          selectGenre(e);
        }}
      />

      <label className="btn btn-outline-primary" for="btncheck1">Action</label>

      <input
        type="checkbox"
        className="checkbox disable-team team_values"
        value="14"
        onClick={(e) => {
          selectGenre(e);
        }}
      />
      <label className="btn btn-outline-primary" for="btncheck2">Drama</label>
    </div>
  </div>;
}
