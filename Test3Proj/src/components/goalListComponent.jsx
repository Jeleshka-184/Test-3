import PropTypes from "prop-types";

const GoalListComponent = ({ goalList }) => {
  return (
    <div>
      <ul className="custom-list">
        {goalList.map((goal, index) => (
          <li key={index} className="custom-list-item">
            <h2>{goal.title}</h2>
            <p>{goal.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

GoalListComponent.propTypes = {
  goalList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default GoalListComponent;
