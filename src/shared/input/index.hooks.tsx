import { useEffect, useRef, useState } from "react";
import { inputProps } from "./input.types";
import { toast } from "react-toastify";

const  useInput =({
    password
}:inputProps)=>{
    const [value, setValue] = useState<string>(password);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleCopy = () => {
        
          navigator.clipboard.writeText(value)
          toast.success("Copied")
      };
    useEffect(() => {
     
      }, [value]);

      return { value, handleChange: setValue, inputRef,handleCopy };
} 

export default useInput;