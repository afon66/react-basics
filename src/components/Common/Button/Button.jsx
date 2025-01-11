import s from "./Button.module.css";

export default function Button({ children, isActive, ...props }) {  
  
  return (
    <button
      {...props}
      className={isActive ? `${s.active} ${s.button}` : s.button}
    >
      {children} 
    </button>
  );
}
