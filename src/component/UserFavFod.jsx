import PropTypes from "prop-types";
export function UserFavFood(props) {
  return (
    <ul>
      <p>
        <strong>User Favourite Foods</strong>
      </p>
      <li>{props.foods[0].name}</li>
    </ul>
  );
}
