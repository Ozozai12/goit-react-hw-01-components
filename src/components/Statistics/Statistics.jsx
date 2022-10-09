import { StatisticsContainer, StatList, StatItem } from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({ data }) => {
  return (
    <StatisticsContainer>
      <h2 className="title">Upload stats</h2>
      <StatList>
        {data.map(item => {
          return (
            <StatItem
              key={item.id}
              style={{ backgroundColor: getRandomHexColor() }}
            >
              <span className="label">{item.label}</span>
              <span className="percentage">{item.percentage}%</span>
            </StatItem>
          );
        })}
      </StatList>
    </StatisticsContainer>
  );
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

Statistics.propTypes = {
  statistics: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};





