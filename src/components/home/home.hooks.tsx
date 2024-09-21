import { useState } from "react";
import { PasswordStrengthProps, UseHomePageProps } from "./home.types";

export const useHomePage = () => {
  const [password, setPassword] = useState<string>("");
  const [passwordLength, setpasswordLength] = useState<number>(12);
  const [includeUppercase, setIncludeUppercase] = useState<boolean>(true);
  const [includeLowercase, setIncludeLowercase] = useState<boolean>(true);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(true);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(true);

  const generatePassword = () => {
    const charset = [];
    let password = "";
    if (includeUppercase) charset.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    if (includeLowercase) charset.push("abcdefghijklmnopqrstuvwxyz");
    if (includeNumbers) charset.push("0123456789");
    if (includeSymbols) charset.push("!@#$%^&*()_+");

    if (charset.length === 0) {
      return;
    }

    for (let i = 0; i < passwordLength; i++) {
      const randomChar = charset[
        Math.floor(Math.random() * charset.length)
      ].charAt(Math.floor(Math.random() * charset[0].length));
      password += randomChar;

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
    if (score < 20) {
      message =
        "Weak password. Consider using more character types and increasing length.";
    } else if (score < 30) {
      message =
        "Moderate password. Consider increasing length for better security.";
    } else {
      message = "Strong password!";
    }
    return { score, message };
  };

  const setStateInclude = (includeType: string, checkfact: boolean) => {
    switch (includeType) {
      case "includeUppercase":
        setIncludeUppercase(checkfact);
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

  return { generatePassword, evaluatePasswordStrength, setStateInclude, setpasswordLength,password,includeUppercase,includeLowercase,includeNumbers,includeSymbols };
};
