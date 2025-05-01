export default function User({ userData }) {
  console.log(userData);

  return (
    <div className="user">
      <div className="user-img-cont child">
        <img src="./src/z-practice/components/main/download.jpg" alt="" />
      </div>

      <div className="user-details child">
        <div>
          <h3>{userData.name}</h3>
          <small>@{userData.username}</small>
        </div>
        <br />

        <p>{userData.company.catchPhrase + userData.company.catchPhrase}</p>

        <div className="ratings">
          <div>
            <p>
              <b>74.4M</b>
            </p>
            <p>Views</p>
          </div>
          <div>
            <p>
              <b>34</b>
            </p>
            <p>like</p>
          </div>
          <div>
            <p>
              <b>45M</b>
            </p>
            <p>Downloads</p>
          </div>
        </div>

        <div className="actions">
          <button className="action-btn">Follow</button>
          <button className="action-btn">View Profile</button>
        </div>
      </div>
    </div>
  );
}
