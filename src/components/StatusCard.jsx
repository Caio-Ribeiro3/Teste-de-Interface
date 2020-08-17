import React from "react";
import { StatusBlock, RowItem, RowItemText, FormatText } from "../styles";
import ecday from "../assets/ecday.png";
import eCPoints from "../assets/ecpoints.png";

export default ({ registred, complete, marginTop, email }) => {
  console.log(registred, complete, marginTop);
  return (
    <RowItem marginTop={marginTop}>
      <div>
        <RowItemText>
          {complete ? (
            <>
              <FormatText>Oba!</FormatText>
              <FormatText bold>&nbsp; {email} &nbsp;</FormatText>
              <FormatText>
                finalizou a pesquisa, e você ganhou 100 eCPoints!
              </FormatText>
            </>
          ) : registred ? (
            <>
              <FormatText>Oba!</FormatText>
              <FormatText bold>&nbsp; {email} &nbsp;</FormatText>
              <FormatText>se inscreveu, e você ganhou 1 ecday!</FormatText>
            </>
          ) : (
            <>
              <FormatText bold>{email} &nbsp;</FormatText>
              <FormatText>Recebeu o convite e estamos aguardando...</FormatText>
            </>
          )}
        </RowItemText>
        <div>
          <StatusBlock success>Convidado</StatusBlock>
          {registred ? (
            <StatusBlock success>Registrado</StatusBlock>
          ) : (
            <StatusBlock>Registrado</StatusBlock>
          )}
          {complete ? (
            <StatusBlock success>Complete</StatusBlock>
          ) : (
            <StatusBlock>Complete</StatusBlock>
          )}
        </div>
      </div>
      <div>
        {complete ? (
          <img src={eCPoints} alt="ecpoints" />
        ) : registred ? (
          <img src={ecday} alt="ecday" />
        ) : (
          false
        )}
      </div>
    </RowItem>
  );
};
