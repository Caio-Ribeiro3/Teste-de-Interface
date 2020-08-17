import React, { useState, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import StatusCard from "./components/StatusCard";
import header from "./assets/header.png";
import { Header, Main } from "./styles";

const Body = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap");

  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    color: rgb(103, 103, 103);
    font-weight: 400;
  }
`;

export default () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .catch(console.error)
      .then((response) => setData(response));
  }, []);

  return (
    <>
      <Body />
      <Header headerURL={header} />
      <Main>
        <section>
          <h3>Confira o Status do seus convites</h3>
          <h3>38 convites enviados</h3>
          {data.map((item, index) => (
            <StatusCard
              {...item}
              key={index}
              marginTop={index == 0 ? 40 : null}
            />
          ))}
        </section>
      </Main>
    </>
  );
};
