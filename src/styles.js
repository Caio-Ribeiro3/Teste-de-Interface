import styled, { css } from "styled-components";

export const StatusBlock = styled.div`
  border: solid 1px rgb(53, 93, 154);
  border-radius: 3px;
  margin-right: 22px;
  height: fit-content;
  color: rgb(53, 93, 154);
  padding: 5px 25px;
  font-size: 13px;
  ${(props) =>
    props.success &&
    css`
      border: solid 1px rgb(101, 175, 62);
      background: rgb(101, 175, 62);
      color: white;
    `}
`;

export const Container = styled.div`
  display: flex;
`;
export const Header = styled.header`
  background: ${(props) => `url(${props.headerURL})`};
  height: 244px;
  backgroundsize: contain;
`;

export const Main = styled.main`
  background: rgb(222, 222, 222);
  display: flex;
  justify-content: center;
  align-items: center;
  && section {
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: white;
    padding: 33px 70px 125px 70px;
    margin-top: 40px;
    margin-bottom: 68px;
  }
  && h3:first-child {
    color: rgb(50, 50, 50);
  }
`;

export const RowItem = styled.div`
  width: 100%;
  display: flex;
  border-bottom: solid 1px rgb(219, 219, 219);
  justify-content: space-between;
  margin-top: ${(props) => `${props.marginTop}px`};
  min-height: 90px;
  && > div:first-child {
    display: flex;
    justify-content: center;
    flex-direction: column;
    > div:last-child {
      display: flex;
      margin-top: 10px;
    }
  }
  && > div:last-child {
    margin-top: 15px;
    width: 100px;
    text-align: center;
  }
`;

export const RowItemText = styled.div`
  display: flex;
`;

export const FormatText = styled.h5`
  ${(props) =>
    props.bold &&
    css`
      color: rgb(50, 50, 50);
      font-weight: 700;
      font-size: 13px;
    `}
`;
