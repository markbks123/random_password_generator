import { Slider } from "@nextui-org/slider";

import { useHomePage } from "./home.hooks";
import styles from "./home.module.css"
import { RangeSlider } from "next-range-slider";
const HomePageComponent:React.FC = () => {
 const {generatePassword, evaluatePasswordStrength, setStateInclude,password,includeUppercase,includeLowercase,includeNumbers,includeSymbols } = useHomePage();
 return (
    <div className={styles.container}>
      <h1>Password Generator</h1>
     
      <label>Include Characters:</label>
      <input type="checkbox" checked={includeUppercase} onChange={(e) => setStateInclude("includeUppercase",e.target.checked)} /> 
      <input type="checkbox" checked={includeLowercase} onChange={(e) => setStateInclude("includeLowercase",e.target.checked)} /> 
      <input type="checkbox" checked={includeNumbers} onChange={(e) => setStateInclude("includeNumbers",e.target.checked)} /> 
      <input type="checkbox" checked={includeSymbols} onChange={(e) => setStateInclude("includeSymbols",e.target.checked)} /> 
      <br />
      <button onClick={generatePassword}>Generate Password</button>
      <p>{password}</p>
      {password && <p>Strength: {evaluatePasswordStrength(password).message}</p>}
    
    </div>
 )
}



export default HomePageComponent