

import { useHomePage } from "./home.hooks";
import styles from "./home.module.css"
import { RangeSlider } from "next-range-slider";
import SliderRange from "@/shared/sliderRange";
import Switch from "react-switch";




const HomePageComponent:React.FC = () => {
 const {generatePassword, evaluatePasswordStrength, setStateInclude, setpasswordLength,password,includeUppercase,includeLowercase,includeNumbers,includeSymbols } = useHomePage();
 return (
    <div className={styles.container}>
      <h1>Password Generator</h1>
     
      <label>Include Characters:</label>
      <SliderRange
      barWidth={400}
      barHeight={20}
      barColor="#f0f0f0"
      handleSize={30}
      handleColor="#4caf50"
      handleText="Characters"
      onValuesChange={(e)=>{
        console.log(e,"e")
        setpasswordLength(e[0])
      }} // Pass handleChange to SliderRange
    />
     <div className={styles.switch_include}> 
     <Switch onChange={(e) => setStateInclude("includeUppercase",e)}  checked={includeUppercase}  uncheckedIcon = {true} checkedIcon ={false}/>
     <label>Uppercase</label>
     </div>
     <div className={styles.switch_include}> 
     <Switch onChange={(e) => setStateInclude("includeLowercase",e)}  checked={includeLowercase}  uncheckedIcon = {true} checkedIcon ={false}/>
     <label>Lowercase</label>
     </div>
     <div className={styles.switch_include}> 
     <Switch onChange={(e) => setStateInclude("includeNumbers",e)}  checked={includeNumbers}  uncheckedIcon = {true} checkedIcon ={false}/>
     <label>Numbers</label>
     </div>
     <div className={styles.switch_include}> 
     <Switch onChange={(e) => setStateInclude("includeSymbols",e)}  checked={includeSymbols}  uncheckedIcon = {true} checkedIcon ={false}/>
     <label>Symbols</label>
     </div>
      <br />
      <button onClick={generatePassword}>Generate Password</button>
      <p>{password}</p>
      {password && <p>Strength: {evaluatePasswordStrength(password).message}</p>}
      
    </div>
 )
}



export default HomePageComponent