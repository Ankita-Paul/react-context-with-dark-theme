import { useTheme } from "../context/ThemeContext";

const Button = () => {
  const {val, setVal} = useTheme();
  return (
    <button className={`button ${val? `Bdark`: `Blight`}`} type="submit" onClick={(e)=>{
      e.preventDefault();
      setVal((pre)=> !pre);
    }}>Switch Theme</button>
  )
}

export default Button