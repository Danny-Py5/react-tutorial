// react router ---> 6:41;
import "./globals.css";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Product</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

// context API ---> 5:43:36
// import "./globals.css";

// import { layerContext } from "./contextAPI/context/LayerContext.js";
// import FirstLayer from "./contextAPI/FirstLayer.jsx";
// import { useEffect, useState } from "react";
// import useFetchUser from "./contextAPI/hook/useFetchUser.js";

// export default function App() {
//   const [user, loading, error] = useFetchUser(9);
//   const [layerData, setLayerData] = useState({});
//   const [inputValue, setInputValue] = useState("");
//   const handleClick = () => {
//     setLayerData((prevLayerData) => ({
//       ...prevLayerData,
//       name: inputValue,
//     }));
//     setInputValue("");
//   };
//   useEffect(() => {
//     if (user && !loading) {
//       setLayerData(user);
//       // setInputValue(user.name);
//     }
//   }, [user, loading, error]); // this will run when the layerData changes
//   return (
//     <div>
//       <div>
//         <h1>React Context API</h1>
//         <hr />
//         <p>
//           Context API is a way to pass data through the component tree without
//           having to pass props down manually at every level.
//         </p>
//         <p>
//           It is used to share global data such as themes, user authentication,
//           and language settings.
//         </p>
//         <p>It is also used to avoid prop drilling.</p>
//       </div>
//       <hr />
//       <div>
//         <label htmlFor="input">Change LayerName:</label>
//         <input
//           type="text"
//           id="input"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//         />
//         <button onClick={handleClick}>Change</button>
//       </div>
//       <div>
//         <layerContext.Provider
//           value={{ layerData, setLayerData, loading }} // this is the state value and its setter that will be passed to the context provider
//         >
//           <FirstLayer />
//         </layerContext.Provider>
//       </div>
//     </div>
//   );
// }

// //debounce on my own but helped by ai at last
// import { useEffect, useState } from "react";
// import useDebounceSearch from "./temp.js";
// import "./globals.css";

// export default function App() {
//   const [inputValue, setInputValue] = useState("");
//   const [searchedResult, setSearchedResult] = useState("");

//   const searchedValue = useDebounceSearch(inputValue, 1000);

//   useEffect(() => {
//     const nameList = ["kemi", "daniel", "samuel ", "blessing", "wale"];

//     if (searchedValue) {
//       const matchedWord = nameList.find((name) => {
//         return name
//           .toLocaleLowerCase()
//           .includes(searchedValue.toLocaleLowerCase());
//       });
//       setSearchedResult(matchedWord || "No match found");
//     } else {
//       setSearchedResult(""); // Clear the result when input is empty
//     }
//   }, [searchedValue]);

//   return (
//     <div>
//       <span>Search for names: </span>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue((currentValue) => e.target.value)}
//       />
//       <p> You searched: {searchedResult}</p>
//     </div>
//   );
// }

// mini project

// import { Header } from "./chat-box-management/components/header/Header.jsx";
// import { Main } from "./chat-box-management/components/main/Main.jsx";
// import { Footer } from "./chat-box-management/components/footer/Footer.jsx";
// import "./chat-box-management/global.css";

// export default function App() {
//   return (
//     <>
//       <Header />
//       <Main />
//       <Footer />
//     </>
//   );
// }

//  -----------------------------------------------
// // context API ---> 5:43:36
// import "./globals.css";

// import { layerContext } from "./contextAPI/context/LayerContext.js";
// import FirstLayer from "./contextAPI/FirstLayer.jsx";
// import { useEffect, useState } from "react";

// export default function App() {
//   const [layerData, setLayerData] = useState({
//     id: 0,
//     name: "Daniel Olatunde",
//     age: 21,
//     likes: 34,
//     // setLayerData: () => {},
//   });
//   const [inputValue, setInputValue] = useState(layerData.name);
//   const handleClick = () => {
//     setLayerData((prevLayerData) => ({
//       ...prevLayerData,
//       name: inputValue,
//     }));
//     setInputValue("");
//   };

//   useEffect(() => {
//     console.log(layerData);
//   }, [layerData]); // this will run when the layerData changes
//   return (
//     <div>
//       <div>
//         <h1>React Context API</h1>
//         <hr />
//         <p>
//           Context API is a way to pass data through the component tree without
//           having to pass props down manually at every level.
//         </p>
//         <p>
//           It is used to share global data such as themes, user authentication,
//           and language settings.
//         </p>
//         <p>It is also used to avoid prop drilling.</p>
//       </div>
//       <hr />
//       <div>
//         <label htmlFor="input">Change LayerName:</label>
//         <input
//           type="text"
//           id="input"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//         />
//         <button onClick={handleClick}>Change</button>
//       </div>
//       <div>
//         <layerContext.Provider
//           value={{ layerData, setLayerData }} // this is the state value and its setter that will be passed to the context provider
//         >
//           <FirstLayer />
//         </layerContext.Provider>
//       </div>
//     </div>
//   );
// }
//  ----------------------------------------------------
// // custom hook --practice
// // i really struggle to understand the custom hook, but i will try to understand it better

// import "./globals.css";
// import { SearchFood } from "./custom-hook/SearchFood.jsx";

// export default function App() {
//   return (
//     <div>
//       <SearchFood />
//     </div>
//   );
// }

// // custom hook ---> 5:24:07
// import { useState } from "react";
// import "./globals.css";
// import { RegisterUser } from "./state/RegisterUser.jsx";

// export default function App() {
//   const [toggle, setToggle] = useState(false);

//   return (
//     <div>
//       <h1>Custom Hook</h1>
//       <hr />
//       <button onClick={() => setToggle((prevToggle) => !prevToggle)}>
//         Toggle
//       </button>
//       {toggle && <RegisterUser />}
//     </div>
//   );
// }

// // #simple website application
// import "./z-practice/global.css";
// import { Header } from "./z-practice/components/header/Header.jsx";
// import { Main } from "./z-practice/components/main/Main.jsx";
// import { Footer } from "./z-practice/components/footer/Footer.jsx";

// export default function App() {
//   return (
//     <>
//       <Header />
//       <Main />
//       <Footer />
//     </>
//   );
// }

// ------------------------------------------------

// // fetching data from API ---> 4:41:00
// import "./globals.css";

// import { GetUsers } from "./fetching-data/GetUsers.jsx";
// import { PostUser } from "./fetching-data/PostUser.jsx";

// export default function App() {
//   return (
//     <>
//       <GetUsers />
//       <PostUser />
//     </>
//   );
// }

// ------------------------------------------
// react useEffect Hook ---> 4:21:00
// import "./globals.css";
// import { useState, useEffect } from "react";

// export default function App() {
//   const [count, setCount] = useState(0);
//   const [sync, setSync] = useState(false);

//   useEffect(() => {
//     document.title = `UseEffect Hook - ${count} times`;
//   }, [sync]); // this will run when the count changes

//   return (
//     <div>
//       <h1>React useEffect Hook</h1>
//       <p>You clicked {count} times </p>
//       <button onClick={() => setCount((prevCount) => prevCount + 1)}>
//         Increment
//       </button>
//       <button onClick={() => setSync((preSync) => !preSync)}>Sync</button>
//     </div>
//   );
// }

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
