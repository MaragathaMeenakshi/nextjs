import { auth } from "@/components/firebase";
import { useAuth } from "@/components/firebase/authcontext";
import { onAuthStateChanged } from "firebase/auth";

// Function to check if the user is authenticated
// const checkAuth = async () => {
//     return new Promise((resolve) => {
//       onAuthStateChanged(auth, (user) => {
//         resolve(user);
//       });
//     });
//   };
  
  // Server-side route handler
  export async function getServerSideProps(context) {
    // const user = await checkAuth();
    const {isAuthenticate} = useAuth();
    if (isAuthenticate) {
      // User is authenticated, redirect to the dashboard page
      return {
        redirect: {
          destination: '/form',
          permanent: false,
        },
      };
    } else {
      // User is not authenticated, redirect to the login page
      return {
        redirect: {
          destination: '/auth/login',
          permanent: false,
        },
      };
    }
  }
  export const  Main=()=>{
    return (
        <><p>hello</p></>
    )
  }