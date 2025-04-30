// react useEffect Hook ---> 4:21:00
import "./globals.css";
import { useState, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [sync, setSync] = useState(false);

  useEffect(() => {
    document.title = `UseEffect Hook - ${count} times`;
  }, [sync]); // this will run when the count changes

  return (
    <div>
      <h1>React useEffect Hook</h1>
      <p>You clicked {count} times </p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setSync((preSync) => !preSync)}>Sync</button>
    </div>
  );
}

// ---------------------------------------------------

// state and Array --->  3:30:00
// import "./globals.css";
// import UserProfile from "./state/UserProfile.jsx";
// import { PracticeMutationAndImmutability } from "./state/practice-mutation-immutability/PracticeMutationAndImmutability.jsx";

// import { CreateUser } from "./state/CreateUser.jsx";

// import { useState } from "react";

// export default function App() {
//   const [users, setUsers] = useState([
//     {
//       id: 1,
//       username: "daniel",
//       email: "olatundedaniel@gmail.com",
//     },
//     {
//       id: 2,
//       username: "kemisola",
//       email: "kemisolasajo@gmail.com",
//     },
//     {
//       id: 3,
//       username: "Samuel",
//       email: "samuel@gmail.com",
//     },
//     {
//       id: 4,
//       username: "grace",
//       email: "grace@gmail.com",
//     },
//   ]);
//   // console.log(users);
//   return (
//     <div>
//       <h2>User Profile</h2>
//       <CreateUser setUsers={setUsers} />
//       <br /> <br />
//       {
//         <div className="User-details">
//           {users.map((user) => {
//             return (
//               <UserProfile key={user.id} user={user} setUsers={setUsers} />
//             );
//           })}
//         </div>
//       }
//       {/* <PracticeMutationAndImmutability /> */}
//     </div>
//   );
// }
// continue from here // 3:41:00

// ------------------------------------------------
// // React state: 2:54:40;
// import CounterApp from "./state/counter-app/CounterApp.jsx";
// import "./globals.css";
// import { RegisterUser } from "./state/RegisterUser.jsx";
// import { RegisterUserState2 } from "./state/RegisterUserState2.jsx";

// export default function App() {
//   return (
//     // <>
//     //   <RegisterUserState2 />
//     // </>
//     <CounterApp />
//   );
// }

// // event handeling 2:25:18 --->
// import "./globals.css";
// import LoginForm from "./event-handeling/LoginForm.jsx";

// export default function App() {
//   return (
//     <div>
//       <LoginForm />
//     </div>
//   );
// }

// ------------------------------------------------
// // #conditional rendering  <= 2:25
// import "./globals.css";
// import MorkAuthentication from "./conditional-rendering/MorkAuthentication.jsx";
// import AccountStatus from "./conditional-rendering/AccountStatus.jsx";

// export default function App() {
//   return (
//     <>
//       <MorkAuthentication />
//       <AccountStatus />
//     </>
//   );
// }

// ------------------------------------------------
// import "./globals.css";
// import { User } from "./renderiing-list/User.jsx";

// export default function App() {
//   return (
//     <div>
//       <User />
//     </div>
//   );
// }
// ------------------------------------------------
// import "./globals.css";
// import { RenderArticleComponenet } from "./react-css/RenderArticleComponenet.jsx";

// export default function App() {
//   return (
//     <div>
//       <RenderArticleComponenet />
//     </div>
//   );
// }
// ------------------------------------------------
// import { User } from "./fragment/User.jsx";
// import MyHobby from "./fragment/MyHobby.jsx";

// // using fragment to render all component to the root
// export default function App() {
//   return (
//     // grouping components to be direct child of the root
//     <>
//       <User name="daniel" age={20} />
//       <br />
//       <br />
//       <MyHobby />
//     </>
//   );
// }
// ------------------------------------------------
// export default function App() {
//   return (
//     <div>
//       <UserProfile
//         username="Daniel Olatunde"
//         age={20}
//         favFoods={[
//           {
//             name: "rice",
//             price: "400",
//           },
//           {
//             name: "beans",
//             price: 500,
//           },
//           {
//             name: "garri",
//             price: 200,
//           },
//         ]}
//       />
//     </div>
//   );
// }
// ------------------------------------------------
// import { UserProfileCard } from "./practice-component-and-props/UserProfileCard.jsx";
// export default function App() {
//   return (
//     <div>
//       <h1>component and props practice</h1>

//       <UserProfileCard
//         name="Daniel Olatunde"   // this is a prop
//         avatarUrl="http://dannypyAvataUrl.com" // this is a prop
//         email="danielolatunde@gmail.com"  // this is a prop
//         phone="0816552344" // this is a prop
//         location="Rubber Estate, Ondo State Nigeria" // this is a prop
//         bio="curious about coding" // this is a prop
//         isOnline={true} // this is a prop
//         height="50cm" // this is a prop
//         favouriteFoods={["Rice", "Beans", "Egg", "milk"]} // this is a prop
//       />
//     </div>
//   );
// }
// ------------------------------------------------
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
