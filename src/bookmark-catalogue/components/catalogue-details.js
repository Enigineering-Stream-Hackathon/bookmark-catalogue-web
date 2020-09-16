import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import OneCatalogueDetails from "./one-catalogue-details";

const CatalogueDetails = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [catalogue, setCatalogue] = useState({});
  const { catalogueId } = useParams();
  const [allCards, setAllCards] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/catalogue?catalogueId=${catalogueId}`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setCatalogue(result);
          setAllCards(result.cards);
        },

        (error) => {
          setIsLoaded(true);
          alert("Error occurre while retrieving cards");
        }
      );
  }, [catalogueId]);

  return (
    <div>
      <h1 className="header-design">Catalogue view</h1>
      {!isLoaded ? (
        <div>Still loading</div>
      ) : (
        <OneCatalogueDetails catalogue={catalogue} allCards = {allCards} />
      )}
    </div>
  );
};

export default CatalogueDetails;
