import styled from "styled-components";

export const ButtonT = styled.button`
    background-color: ${props => props.color ? "#403CAA" : "#DE6524"};
    color:  #fff;
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 0px;
    margin: 20px 0px 0px 0px;
    cursor: pointer;
`;