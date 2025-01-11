import { useEffect, useState } from "react";
import logo from "/logo-name.svg";
import { HeaderContainer } from "./Header.styles.js";

export default function Header() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => {
      clearInterval(interval);
      console.log("cleaning has done");
    };
  }, []);
  
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <span>
        Right now is:
        {now.toLocaleTimeString()}
      </span>
    </HeaderContainer>
  );
}
