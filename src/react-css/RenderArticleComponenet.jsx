import "./style.css"; // using the classes in the style.css like using class name
import styles from "./style.module.css"; // using css file like module

export function RenderArticleComponenet() {
  return (
    <>
      <h2 className={"heading-style"}>Article 1</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam temporibus
        quidem reprehenderit a quam. Laborum, ea, placeat error pariatur facilis
        voluptate dolores ipsum modi eligendi ducimus totam quidem facere
        veritatis?
      </p>
      <h2
        style={{
          fontFamily: "cursive",
          color: "#baaa00",
        }} // this is how inline style can be added
      >
        Article 2
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
        accusantium aperiam ea dolorem ratione dicta repellendus veritatis earum
        illo assumenda quos, autem enim. Temporibus, quibusdam maxime qui amet
        molestiae neque.
      </p>
      <h3 className={styles.headingStyles}>Article 3</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
        accusantium aperiam ea dolorem ratione dicta repellendus veritatis earum
        illo assumenda quos, autem enim. Temporibus, quibusdam maxime qui amet
        molestiae neque.
      </p>
    </>
  );
}
