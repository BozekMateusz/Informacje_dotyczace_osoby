import React from "react";

const EdycjaDanych = (props) => {
  return (
    <div className="EdycjaDanych">
      <div className="EdycjaDanych-input">
        <label htmlFor="TextPesel">Podaj pesel</label>
        <input
          type="number"
          id="pesel"
          name="pesel"
          onChange={(e) =>
            props.onInputChange({ [e.target.name]: e.target.value })
          }
        />
      </div>

      <div className="EdycjaDanych-input">
        <label htmlFor="TextName">Podaj imie</label>
        <input
          type="text"
          id="imie"
          name="imie"
          onChange={(e) =>
            props.onInputChange({ [e.target.name]: e.target.value })
          }
        />
      </div>

      <div className="EdycjaDanych-input">
        <label htmlFor="TextLastname">Podaj nazwisko</label>
        <input
          type="text"
          id="nazwisko"
          name="nazwisko"
          onChange={(e) =>
            props.onInputChange({ [e.target.name]: e.target.value })
          }
        />
      </div>

      <div className="EdycjaDanych-input">
        <label htmlFor="TextAdres">Podaj adres</label>
        <input
          type="text"
          id="adres"
          name="adres"
          onChange={(e) =>
            props.onInputChange({ [e.target.name]: e.target.value })
          }
        />
      </div>

      <div className="EdycjaDanych-input">
        <label htmlFor="TextTNum">Podaj numer telefonu</label>
        <input
          type="number"
          id="num_tel"
          name="num_tel"
          onChange={(e) =>
            props.onInputChange({ [e.target.name]: e.target.value })
          }
        />
      </div>

      <div className="EdycjaDanych-input">
        <label htmlFor="TextEmail">Podaj email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={(e) =>
            props.onInputChange({ [e.target.name]: e.target.value })
          }
        />
      </div>

      <div className="EdycjaDanych-input">
        <label htmlFor="TextPlec">Podaj płeć</label>
        <input
          type="text"
          id="plec"
          name="plec"
          onChange={(e) =>
            props.onInputChange({ [e.target.name]: e.target.value })
          }
        />
      </div>
      <button onClick={() => props.onSave()}>Wyslij</button>
    </div>
  );
};

export default EdycjaDanych;
