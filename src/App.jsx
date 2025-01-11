import Header from "./components/Header/Header";
import { InfoSection } from "./components/InfoSection/InfoSection.jsx";
import { ButtonSection } from "./components/ButtonSection/ButtonSection.jsx";
import IntroSection from "./components/IntroSection/IntroSection.jsx";
import { TabsSection } from "./components/TabsSection/TabsSection.jsx";
import { FeedBackSection } from "./components/FeedBackSection/FeedBackSection.jsx";
import { useState } from "react";
import { EffectSection } from "./components/EffectSection/EffectSection.jsx";
// import { useInput } from "./components/hooks/useInput.js";

// export const Message = () => {
//   const [message, setMessage] = useState("message");
//   const [count, setCount] = useState(0);

//   const greeting = useCallback((text) => {
//     console.log(text);
//   }, []);

//   useEffect(() => {
//     greeting(message);
//   }, [greeting, message]);

//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>
//         I was clicked {count} times.
//       </button>
//     </div>
//   );
// };

// function createUser(name, surname) {
//   const user = { name, surname };
//   console.log(user);
//   return user;
// }

// function Memo() {
//   const [name, setName] = useState("");
//   const [surname, setSurname] = useState("");
//   const [counter, setCounter] = useState(0);
//   const user = useMemo(() => createUser(name, surname), [name, surname]);

//   return (
//     <div>
//       <button onClick={() => setCounter(counter + 1)}>
//         I was clicked {counter} times.
//       </button>
//       <br />
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <br />
//       <input
//         type="text"
//         value={surname}
//         onChange={(e) => setSurname(e.target.value)}
//       />
//       <pre>{JSON.stringify(user, null, 2)}</pre>
//     </div>
//   );
// }

function App() {
  const [tab, setTab] = useState("effect");
  // const inputHook = useInput();

  const currentFunction = (current) => {
    setTab(current);
  };
  return (
    <>
      {/* <input type="text" {...inputHook}/>
      {inputHook.value} */}
      {/* <Memo /> */}
      {/* <Message /> */}
      <Header />
      <main>
        <IntroSection />
        <TabsSection active={tab} onClick={currentFunction} />
        {tab === "feedback" && <FeedBackSection />}
        {tab === "main" && (
          <>
            <InfoSection />
            <ButtonSection />
          </>
        )}
        {tab === "effect" && <EffectSection />}
      </main>
    </>
  );
}

export default App;
