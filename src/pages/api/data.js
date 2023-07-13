import { useAuth } from "@/components/firebase/authcontext";

export const data=()=>{
    const {isAuthenticate} = useAuth();
    
}