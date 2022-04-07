import { useContext, createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({children}) =>{
  const [val, setVal] = useState(true);
  return (
    <ThemeContext.Provider value={{val, setVal}}>
      {children}
    </ThemeContext.Provider>
  )
}
//The custom hook
export const useTheme = () =>{
  const val = useContext(ThemeContext);
  if(val === undefined) throw new Error("Context is undefined")
  return val;
}

export default ThemeProvider;