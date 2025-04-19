import FavFoods from "./FavFoods.jsx";

export function UserProfileCard(props) {
  return (
    <article>
      <img width="100" src="" alt="./public/vit.svg" />
      <p>
        <b>{props.name}</b>
      </p>
      <small>
        <b>Bio:-</b> {props.bio}
      </small>
      <br />
      <small>{props.isOnline ? "Online" : ""}</small>
      <div>
        <p>
          <b>User details</b>
        </p>
        <ul>
          <li>
            <b>Email:</b> <span>{props.email}</span>
          </li>
          <li>
            <b>Phone:</b> <span>{props.phone}</span>
          </li>
          <li>
            <b>Location:</b> <span>{props.location}</span>
          </li>
          <li>
            <b>Height:</b> <span>{props.height}</span>
          </li>
        </ul>
        <div>
          <FavFoods foods={props.favouriteFoods} />
        </div>
      </div>
    </article>
  );
}
