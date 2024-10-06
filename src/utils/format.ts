import { STATUS_TYPE } from "@/shared/status/status.types";

export function getStatusDesc(values: STATUS_TYPE) {
    switch (values) {
      case STATUS_TYPE.strong:
        return "strong";
      case STATUS_TYPE.moderate:
        return "moderate";
      case  STATUS_TYPE.weak:
        return "weak";
    
      default:
        return "-";
    }
}