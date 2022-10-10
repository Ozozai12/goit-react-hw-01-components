import styled from 'styled-components';

export const OnlineStatus = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${p => {
    return p.active ? p.theme.colors.green : p.theme.colors.red;
  }};
`;
export const FriendsImage = styled.img`
  margin-top: 10px;
`;

export const FriendsName = styled.p`
  margin-top: 6px;
  text-align: center;
`;
