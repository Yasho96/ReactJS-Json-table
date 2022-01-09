import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import data from "./data.json";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";

const App = () => {
  const [countries, setCountries] = useState(data);
  const [addFormData, setAddFormData] = useState({
    name: "",
    currency: "",
    population: "",
    flag_url: "",
    gdp: "",
  });

  const [editFormData, setEditFormData] = useState({
    name: "",
    currency: "",
    population: "",
    flag_url: "",
    gdp: "",
  });

  const [editCountrytId, setEditCountryId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newCountry = {
      id: nanoid(),
      name: addFormData.name,
      currency: addFormData.currency,
      population: addFormData.population,
      flag_url: addFormData.flag_url,
      gdp: addFormData.gdp,
    };

    const newCountries = [...countries, newCountry];
    setCountries(newCountries);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedCountries = {
      id: editCountrytId,
      name: editFormData.name,
      currency: editFormData.currency,
      population: editFormData.population,
      flag_url: editFormData.flag_url,
      gdp: editFormData.gdp,
    };

    const newCountries = [...countries];

    const index = countries.findIndex((country) => country.id === editCountrytId);

    newCountries[index] = editedCountries;

    setCountries(newCountries);
    setEditCountryId(null);
  };

  const handleEditClick = (event, country) => {
    event.preventDefault();
    setEditCountryId(country.id);

    const formValues = {
      name: country.name,
      currency: country.currency,
      population: country.population,
      flag_url: country.flag_url,
      gdp: country.gdp,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditCountryId(null);
  };

  const handleDeleteClick = (countryId) => {
    const newCountries = [...countries];

    const index = countries.findIndex((country) => country.id === countryId);

    newCountries.splice(index, 1);

    setCountries(newCountries);
  };

  return (
    <div className="app-container" class= "bg_img">
      <h2>Country Details</h2>
      <form class = "countries" onSubmit={handleEditFormSubmit}>
        <table class="center">
          <thead>
            <tr>
              <th>Country Name</th>
              <th>Currency</th>
              <th>Population</th>              
              <th>FlagURL</th>
              <th>GDP</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {countries.map((country) => (
              <Fragment>
                {editCountrytId === country.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    country={country}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h2>Add a Country</h2>
      <form class = "addC" onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="name"
          required="required"
          placeholder="Enter a Country name..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="currency"
          required="required"
          placeholder="Enter the currency..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="population"
          required="required"
          placeholder="Enter the population..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="flag_url"
          required="required"
          placeholder="Enter the flag_url..."
          onChange={handleAddFormChange}
        />
          <input
          type="text"
          name="gdp"
          required="required"
          placeholder="Enter the GDP..."
          onChange={handleAddFormChange}
        />
        <button class = "add" type="submit">Add</button>
      </form>
    </div>
  );
};

export default App;