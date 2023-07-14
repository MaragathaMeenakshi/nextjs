import { AuthContext, useAuth } from "@/components/firebase/authcontext";
import { Button, Grid, Stack, Typography } from "@mui/material";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "next/router";
// useEffect(() => {
//    console.log(document.cookie)
// }, []);
// export const getServerSideProps=async(context)=>{
//     const cookie= context.req.headers.cookie;
//     return {
//         props:{}
//     }
// }

export default function Dashboard() {
    const auth = useAuth(AuthContext);
    const handleChange=()=>{
        const auth=getAuth();
        signOut(auth).then(()=>{
            console.log("succeessfull sign out")
        }).catch((error)=>{
            console.log(error)
        })
    }

    return (<>
        <Grid container
            direction="row"
            spacing={2}>
            <Grid item xs={6}><Typography>{(auth.currentUser) ? <>Hello {auth.currentUser.email}</> : <>Please login first!</>}</Typography></Grid>
            <Grid item xs={2}><Button variant="contained" href="/auth/login" >Login</Button></Grid>
            <Grid item xs={4}><Button variant="outlined" onClick={handleChange}>Log Out</Button>
            </Grid>
        </Grid>
    </>)
}
