export interface StatusProps  extends React.HTMLAttributes<HTMLDivElement>{
    className: string;
    title?: string;
    values: Values[];
  }
  
  interface Values {
    value: string;
    color: string;
  }
  
  
  export const STATUS_COLOR: { [key: string]: string } = {
    strong: "green",
    moderate: "yellow",
    weak:"red"
  };


  export enum STATUS_TYPE {
    strong = "strong", 
    moderate = "moderate", 
    weak = "weak", 
  }