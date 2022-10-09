import styled from "styled-components";

export const StatisticsContainer = styled.div`
  text-align: center;
  padding-top: 50px;
`;

export const StatList = styled.ul`
    display: flex;
    justify-content: center;
    margin-top: 12px;
`

export const StatItem = styled.li`
  width: 70px;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center; 
  color: ${(p) => p.theme.colors.white}
`;


