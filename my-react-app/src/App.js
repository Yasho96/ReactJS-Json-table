import React from "react";

const data = require("./data");

const Table = () => {
  console.log(data);
  
  return (
    <React.Fragment>
      <h1>Country Details</h1>
      <table>
        <thead>
          <tr>
            <th>Country Name</th>
            <th>Currency</th>
            <th>Population</th>
            <th>GDP</th>
            <th>FlagURL</th>
          </tr>
        </thead>
        <tbody>
        {data && data.length > 0 &&
          data.map((item) => (
            <tr key={item.id}>
              <td>
                {item.name}
              </td>
              <td>
              {item.currency}
              </td>
              <td>
              {item.population}
              </td>
              <td>
              {item.gdp}
              </td>
              <td>
              {item.flag_url}
              </td>              
            </tr>
          ))}
      </tbody>
      </table>
    </React.Fragment>
  );
};

export default Table;