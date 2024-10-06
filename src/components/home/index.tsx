import { useHomePage } from "./home.hooks";
import styles from "./home.module.css";
import { RangeSlider } from "next-range-slider";
import SliderRange from "@/shared/sliderRange";
import Switch from "react-switch";
import MyTextInput from "@/shared/input";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "@nextui-org/react";
import { STATUS_COLOR } from "@/shared/status/status.types";
import Status from "@/shared/status";
import { getStatusDesc } from "@/utils/format";

const HomePageComponent: React.FC = () => {
  const {
    generatePassword,
    evaluatePasswordStrength,
    setStateInclude,
    setpasswordLength,
    password,
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSymbols,
  } = useHomePage();
  return (
    <div className={styles.container}>
      <ToastContainer />
      <h1>Password Generator</h1>
      <MyTextInput password={password} />
      <div className={styles.characters_container}>
        {password && (
          <Status
            className={styles["w-30"]}
            title={"Strength"}
            values={[
              {
                value: getStatusDesc(
                  evaluatePasswordStrength(password).typeStatus
                ),
                color: STATUS_COLOR[evaluatePasswordStrength(password).message],
              },
            ]}
          />
        )}

        <SliderRange
          barWidth={400}
          barHeight={20}
          barColor="#f0f0f0"
          handleSize={30}
          handleColor="#4caf50"
          handleText="Characters"
          onValuesChange={(e) => {
            setpasswordLength(e[0]);
          }} // Pass handleChange to SliderRange
        />
      </div>

      <div className={styles.switch_container}>
        <div className={styles.switch_include}>
          <Switch
            onChange={(e) => {
              setStateInclude("includeUppercase", e);
            }}
            checked={includeUppercase}
            uncheckedIcon={true}
            checkedIcon={false}
          />
          <label>Uppercase</label>
        </div>
        <div className={styles.switch_include}>
          <Switch
            onChange={(e) => setStateInclude("includeLowercase", e)}
            checked={includeLowercase}
            uncheckedIcon={true}
            checkedIcon={false}
          />
          <label>Lowercase</label>
        </div>
        <div className={styles.switch_include}>
          <Switch
            onChange={(e) => setStateInclude("includeNumbers", e)}
            checked={includeNumbers}
            uncheckedIcon={true}
            checkedIcon={false}
          />
          <label>Numbers</label>
        </div>
        <div className={styles.switch_include}>
          <Switch
            onChange={(e) => setStateInclude("includeSymbols", e)}
            checked={includeSymbols}
            uncheckedIcon={true}
            checkedIcon={false}
          />
          <label>Symbols</label>
        </div>
      </div>
    </div>
  );
};

export default HomePageComponent;
