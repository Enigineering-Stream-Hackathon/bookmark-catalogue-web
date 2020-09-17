import React, { useState, useEffect } from "react";
import OneCatalogue from "./one-catalogue";
import { BOOKMARK_CATALOGUE } from "./constants";

const AllCatalogues = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [catalogues, setCatalogues] = useState([]);

  useEffect(() => {
    fetch(`${BOOKMARK_CATALOGUE}/catalogues`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          console.log(JSON.stringify(result))
          setCatalogues(result);
        },

        (error) => {
          setIsLoaded(true);
          alert("Error occurre while retrieving catalogues");
        }
      );
  }, []);

  return (
    <div>
      <h2 className= "header-design">All Catalogues:</h2>
      {!isLoaded && catalogues ? (
        <div>Still loading</div>
      ) : (
        <div>
          <ul className="list-group">
            {catalogues.map((it) => (
              <li className="list-group-item" key={it.catalogueId}>
                <OneCatalogue cat={it} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AllCatalogues;
