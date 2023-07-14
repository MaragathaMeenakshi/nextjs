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

        </Grid>
        <Grid container
            direction="row"
            spacing={1}>
            <Grid item ><Button variant="outlined" onClick={handleChange}>Log Out</Button>
            </Grid>
            <Grid item ><Button variant="outlined" href="/auth/login">Login</Button></Grid>
            <Grid item><Button variant="outlined" href="/csr">Client Side Rendering</Button></Grid>
            <Grid item ><Button variant="outlined" href="/ssr">Server Side Rendering </Button></Grid>
            <Grid item ><Button variant="outlined" href="/ssg">Static side Generation</Button></Grid>
            <Grid item ><Button variant="outlined" href="/isr">Increment Static Generation</Button></Grid>
            <Grid item ><Button variant="outlined" href="/api/user">User Data</Button></Grid>
        </Grid>
    </>)
}
