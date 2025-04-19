export function Product() {
  return (
    <div id="product">
      <p>
        Product name: <span>Gucci clothe</span>
      </p>
      <div>
        <p>Properties:</p>
        <ul>
          <li>
            <span>Size:</span> <span>XXL</span>
          </li>
          <li>
            <span>Color</span> <span>Red</span>
          </li>
          <li>
            <span>Rating</span>
            <span>
              <b> 5stars</b>
            </span>
          </li>
        </ul>
      </div>
    </div>
    // the above html code are called JSX instead of calling it HTML
    // Also, the entire function is called component
  );
}
