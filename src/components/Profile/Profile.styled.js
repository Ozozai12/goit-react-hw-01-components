import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding-top: 16px;
  padding-bottom: 16px;
  width: 220px;
  border: 1px solid ${(p) => p.theme.colors.grey};
`;

export const DescriptionContainer = styled.div`
    text-align: center;
`

export const Stats = styled.ul`
  display: flex;
  margin-top: 10px;
  gap: 24px;
`;

export const StatsItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;