import React from "react";
import PropTypes from "prop-types";
import "index.css"

const Strukt = (props) => {
  return (
    <div className="Wypisz">
      <table>
        <tr>
          <td>id: {props.id}</td>
          <td>pesel: {props.pesel}</td>
          <td>imie: {props.imie}</td>
          <td>nazwisko: {props.nazwisko}</td>
          <td>adres: {props.adres}</td>
          <td>num_tel: {props.num_tel}</td>
          <td>email: {props.email}</td>
          <td>plec: {props.plec}</td>
        </tr>
      </table>
    </div>
  );
};

Strukt.propTypes = {
  id: PropTypes.number,
  pesel: PropTypes.number,
  imie: PropTypes.string,
  nazwisko: PropTypes.string,
  adres: PropTypes.string,
  num_tel: PropTypes.number,
  email: PropTypes.string,
  plec: PropTypes.string,
};

export default Strukt;
