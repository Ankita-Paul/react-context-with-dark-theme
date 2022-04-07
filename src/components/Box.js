import { useTheme } from "../context/ThemeContext"

const Box = () =>{
  const {val} = useTheme();

  return(
    <div className={`box ${val? `dark`: `light`}`}>
      Time to show of the {val? "Dark": "Light"} Theme!
    </div>
  )
}
export default Box;
