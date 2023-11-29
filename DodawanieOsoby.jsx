import React from "react";
import Strukt from "./Struktura";
import EdycjaDanych from "./Dane";
import "index.css"

export default class Wypisanie extends React.Component {
  constructor() {
    super();
    this.state = {
      Dane: [
        {
          id: "1",
          pesel: "1234567890123",
          imie: "Mateusz",
          nazwisko: "Bozek",
          adres: "3 Maja 12/34",
          num_tel: "123 456 789",
          email: "mateusz@email.com",
          plec: "mezczyzna",
        },
        {
          id: "2",
          pesel: "3210987654321",
          imie: "Hubert",
          nazwisko: "Lech",
          adres: "3 Maja 34/12",
          num_tel: "987 654 321",
          email: "hubert@email.com",
          plec: "mezczyzna",
        },
      ],
      edytowaneDane: {
        id: "",
        pesel: "",
        imie: "",
        nazwisko: "",
        adres: "",
        num_tel: "",
        email: "",
        plec: "",
      },
    };
    this.dodanieDanych = this.dodanieDanych.bind(this);
    this.zapisDanych = this.zapisDanych.bind(this);
  }

  dodanieDanych(val) {
    this.setState((prevState) => {
      return { edytowaneDane: Object.assign(prevState.edytowaneDane, val) };
    });
  }

  zapisDanych() {
    this.setState((prevState) => ({
      Dane: [...prevState.Dane, prevState.edytowaneDane],
      edytowaneDane: {
        id: "",
        pesel: "",
        imie: "",
        nazwisko: "",
        adres: "",
        num_tel: "",
        email: "",
        plec: "",
      },
    }));
  }

  render() {
    let i = 1;
    const dane = this.state.Dane.map((element) => {
      return (
        <Strukt
          key={element.id}
          id={element.id = i++}
          pesel={element.pesel}
          imie={element.imie}
          nazwisko={element.nazwisko}
          adres={element.adres}
          num_tel={element.num_tel}
          email={element.email}
          plec={element.plec}
        ></Strukt>
      );
    });
    return (
      <>
      <h1 className="h1">Dane Osobowe Zadanie 1.40</h1>
        <EdycjaDanych
          onInputChange={(val) => this.dodanieDanych(val)}
          onSave={() => this.zapisDanych()}
        ></EdycjaDanych>
        {dane}
      </>
    );
  }
}
