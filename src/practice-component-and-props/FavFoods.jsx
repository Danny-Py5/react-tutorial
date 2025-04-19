export default function FavFoods(props) {
  return (
    <ul>
      <p>
        <b>Favourite Foods</b>
      </p>
      <li>{props.foods[0]}</li>
      <li>{props.foods[1]}</li>
      <li>{props.foods[2]}</li>
      <li>{props.foods[3]}</li>
    </ul>
  );
}
