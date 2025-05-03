import "./hero.css";

export default function HeroCard() {
  return (
    <div className="hero-card center-flex">
      <div className="card ">
        {/* Chat Icon */}
        <i className="fas fa-comments"></i>
        <div>
          <h2>Answer Rate</h2>
          <p className="p">
            The answer rate is the percentage of questions answered by the bot.
          </p>
        </div>
        <div>
          <p>
            <b>12,456</b>
          </p>
          {/* Arrow Top-Right Icon */}
          <i className="fas fa-arrow-up-right-from-square"></i>
        </div>
      </div>

      <div className="card">
        {/* Chat Icon */}
        <i className="fas fa-headphones"></i>
        <div>
          <h2>Transformation to Operator</h2>
          <p className="p">
            The transformation to operator is the percentage of questions
            transferred to an operator.
          </p>
        </div>
        <div>
          <p>
            <b>156</b>
          </p>
          {/* Arrow Top-Right Icon */}
          <i className="fas fa-arrow-up-right-from-square"></i>
        </div>
      </div>

      <div className="card">
        {/* Chat Icon */}
        <i className="fas fa-clock"></i>
        <div>
          <h2>Time Save</h2>
          <p className="p">
            The time save is the amount of time saved by using the bot instead
            of an operator.
          </p>
        </div>
        <div>
          <p>
            <b>46min</b>
          </p>
          {/* Arrow Top-Right Icon */}
          <i className="fas fa-arrow-up-right-from-square"></i>
        </div>
      </div>
    </div>
  );
}
