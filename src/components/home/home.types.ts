import { STATUS_TYPE } from "@/shared/status/status.types";

export interface PasswordStrengthProps {
    score: number;
    message: string;
    typeStatus:STATUS_TYPE;
}

export interface UseHomePageProps {
    passwordLengthchar:number
}