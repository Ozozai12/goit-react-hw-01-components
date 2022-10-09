import {
  TransactionsTable,
  TableBody,
  TableHead,
  TableD,
} from './TransactionHistory.styled';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ transactions }) => {
  return (
    <TransactionsTable>
      <thead>
        <tr>
          <TableHead>Type</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Currency</TableHead>
        </tr>
      </thead>
      <TableBody>
        {transactions.map(item => {
          return (
            <tr key={item.id}>
              <TableD>{item.type}</TableD>
              <TableD>{item.amount}</TableD>
              <TableD>{item.currency}</TableD>
            </tr>
          );
        })}
      </TableBody>
    </TransactionsTable>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
