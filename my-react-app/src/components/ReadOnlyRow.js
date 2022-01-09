import React from "react";

const ReadOnlyRow = ({ country, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{country.name}</td>
      <td>{country.currency}</td>
      <td>{country.population}</td>
      <td>{<a href={country.flag_url}>Click here for the flag</a>}</td>
      <td>{country.gdp}</td>
      <td>
        <button class= "edit"
          type="button"
          onClick={(event) => handleEditClick(event, country)}
        >
          Edit
        </button>
        <button class= "delete" 
        type="button" 
        onClick={() => handleDeleteClick(country.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;