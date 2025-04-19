import PropTypes from "prop-types";
import { UserFavFood } from "./UserFavFod.jsx";

export function UserProfile(props) {
  console.log(typeof props.favFoods[0].price);
  return (
    <div>
      <h2>User details</h2>
      <p>
        <strong>Name: </strong> <span>{props.username}</span>
      </p>
      <p>
        <strong>Age:</strong> <span>{props.age}</span>
      </p>
      <UserFavFood foods={props.favFoods} />
    </div>
  );
}

UserProfile.propTypes = {
  username: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  isLogin: PropTypes.bool,
  favFoods: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ),
};
