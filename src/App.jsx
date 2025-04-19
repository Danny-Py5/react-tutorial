import { UserProfileCard } from "./practice-component-and-props/UserProfileCard.jsx";

export default function App() {
  return (
    <div>
      <h1>component and props practice</h1>

      <UserProfileCard
        name="Daniel Olatunde"
        avatarUrl="http://dannypyAvataUrl.com"
        email="danielolatunde@gmail.com"
        phone="0816552344"
        location="Rubber Estate, Ondo State Nigeria"
        bio="curious about coding"
        isOnline={true}
        height="50cm"
        favouriteFoods={["Rice", "Beans", "Egg", "milk"]}
      />
    </div>
  );
}

// import { Product } from "./component/Product.jsx";

// export default function App() {
//   return (
//     <div>
//       <h1>This is the root component</h1>

//       <br />
//       <Product />
//     </div>
//   );
// }
