import { useEffect, useState } from "react";
import { PasswordStrengthProps, UseHomePageProps } from "./home.types";
import { STATUS_TYPE } from "@/shared/status/status.types";

export const useHomePage = () => {
  const [password, setPassword] = useState<string>("");
  const [passwordLength, setpasswordLength] = useState<number>(0);
  const [includeUppercase, setIncludeUppercase] = useState<boolean>(true);
  const [includeLowercase, setIncludeLowercase] = useState<boolean>(true);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(true);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(true);

  const generatePassword = () => {
    console.log("Sdsdsds")
    const charset = [];
    let password = "";
    if (includeUppercase) charset.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    if (includeLowercase) charset.push("abcdefghijklmnopqrstuvwxyz");
    if (includeNumbers) charset.push("0123456789");
    if (includeSymbols) charset.push("!@#$%^&*()_+");

    if (charset.length === 0 ) {
      return;
    }
    console.log(passwordLength,"passwordLength")
    if(passwordLength !== 0){
      for (let i = 0; i < passwordLength; i++) {
        const randomChar = charset[
          Math.floor(Math.random() * charset.length)
        ].charAt(Math.floor(Math.random() * charset[0].length));
        password += randomChar;
  
      }
      setPassword(password);
    }
  };

  const evaluatePasswordStrength = (
    password: string
  ): PasswordStrengthProps => {
    const score =
      password.length *
      ((includeUppercase ? 1 : 0) +
        (includeLowercase ? 1 : 0) +
        (includeNumbers ? 1 : 0) +
        (includeSymbols ? 1 : 0));
    let message: string;
    let typeStatus:STATUS_TYPE;
    if (score < 20) {
      message =
      STATUS_TYPE.weak;
      typeStatus = STATUS_TYPE.weak
    } else if (score < 30) {
      message =
      STATUS_TYPE.moderate;
      typeStatus = STATUS_TYPE.moderate
    } else {
      typeStatus = STATUS_TYPE.strong
      message =
      STATUS_TYPE.strong;
    }
    return { score, message,typeStatus  };
  };

  const setStateInclude = (includeType: string, checkfact: boolean) => {
    switch (includeType) {
      case "includeUppercase":
        setIncludeUppercase(checkfact)
        break;
      case "includeLowercase":
        setIncludeLowercase(checkfact);
        break;
      case "includeNumbers":
        setIncludeNumbers(checkfact);
        break;
        case "includeSymbols":
        setIncludeSymbols(checkfact);

        break;
      default:
        break;
    }
  };
  useEffect(()=> {
    if (passwordLength !== 0) {
      generatePassword();
    }
  },[includeUppercase,includeLowercase,includeNumbers,includeSymbols,passwordLength])
  
  return { generatePassword, evaluatePasswordStrength, setStateInclude, setpasswordLength,password,includeUppercase,includeLowercase,includeNumbers,includeSymbols };
};
