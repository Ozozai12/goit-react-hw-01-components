import styled from 'styled-components';

export const TransactionsTable = styled.table`
  margin: 0 auto;
  margin-top: 50px;
  table-layout: fixed;
  width: 50%;
  border-collapse: collapse;
  border: 3px solid ${p => p.theme.colors.black};
`;

export const TableHead = styled.th`
  border: 1px solid #dddddd;
  padding: 5px;
  background-color: ${p => p.theme.colors.grey};
`;

export const TableD = styled.td`
  border: 1px solid #dddddd;
  padding: 5px;
`;


export const TableBody = styled.tbody`
  text-align: center;
  letter-spacing: 1px;
`;
