import styled from "styled-components";

export const ContainerCards = styled.div`
  width: 80vw;
  margin: 0 auto;
  ul {
    list-style: none;
    margin: 10px 0;
    padding: 0;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    justify-content: space-evenly;
  }
`;

export const CardBox = styled.li`
  word-break: break-all;
  display: flex;
  width: 22%;
  flex-direction: column;
  background-color: gray;
  margin: 10px 0;
`;
