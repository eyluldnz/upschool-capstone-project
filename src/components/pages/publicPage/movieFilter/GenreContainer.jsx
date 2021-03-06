import React from 'react';

export default function GenreContainer({ setFilter, filterData, ...props }) {

  const filterList = [
    { value: 28, name: "Action" },
    { value: 12, name: "Adventure" },
    { value: 35, name: "Comedy" },
    { value: 10749, name: "Romance" },
    { value: 18, name: "Drama" },
    { value: 80, name: "Crime" },
  ]

  //{ ...filter, filter: [12, 14], sort: e.target.value }
  const selectGenre = (e) => {
    const checked = e.target.checked;
    let newFilter = {}
    if (checked) {
      newFilter = { ...filterData, filterGenre: [...filterData.filterGenre, Number(e.target.value)] };

    } else {
      newFilter = { ...filterData, filterGenre: filterData.filterGenre.filter(item => item !== Number(e.target.value)) }
    }
    setFilter({ ...newFilter });
  }

  return <div className='col-sm-12'>
    <div className="btn-group d-inline" role="group" aria-label="Basic checkbox toggle button group">
      <div className="container text-center">
        <div className="row">
          {
            filterList.map((filter, indis) => (
              <div className="col-6 my-2">
                <input
                  id={`btnCheck${indis+1}`}
                  autocomplete="off"
                  type="checkbox"
                  className="btn-check"
                  value={filter.value}
                  onClick={(e) => {
                    selectGenre(e);
                  }}
                />

                <label className="btn btn-outline-dark" for={`btnCheck${indis+1}`}>{filter.name}</label>
              </div>

            ))
          }


        </div>
      </div>

    </div>
  </div>;
}


