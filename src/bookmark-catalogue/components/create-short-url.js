import React, { useState } from "react";
import useInput from "../hooks/use-input";
import usePostRequest from "../hooks/use-request";

const GenerateUrl = (props) => {
  const initialValue = {
    longUrl: "",
    expiryDate: "",
  };
  const { value, reset, handleChange } = useInput(initialValue);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.generateUrl(value);
    reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="longUrl">Enter Url</label>
        <input
          id="longUrl"
          className="form-control"
          type="text"
          name="longUrl"
          value={value.longUrl}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="expiryDate">Expiry Date:</label>
        <input
          id="expiryDate"
          className="form-control"
          type="date"
          name="expiryDate"
          value={value.expiryDate}
          onChange={handleChange}
        ></input>
      </div>
      <button className="btn btn-primary" type="submit">
        Generate Short Url
      </button>
    </form>
  );
};

const CreateShortUrl = () => {
  const [shortUrl, setShortUrl] = useState("");
  const { sendRequest } = usePostRequest();

  const generateUrl = (body) => {
    sendRequest("http://localhost:8080/short-url", body)
      .then((response) => response.json())
      .then((json) => {
        setShortUrl(json.shortUrl);
      })
      .catch(() => alert("Error occurred generating short url"));
  };

  return (
    <div className="container">
      <h1>Create Short Url:</h1>
      <GenerateUrl generateUrl={generateUrl} />
      <div className="input-group mb-3 my-5">
        <input
          type="text"
          className="form-control"
          placeholder="Short Url"
          aria-label="Short Url"
          value={shortUrl}
          readOnly
        ></input>
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button">
            Copy
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateShortUrl;
