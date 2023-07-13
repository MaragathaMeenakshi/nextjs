import { Box, Button, Card, CardActions, CardContent, CardHeader, Grid, Paper, TextField, Typography } from "@mui/material"
import Link from "next/link"
import {  useAuth } from "../../components/firebase/authcontext"
import { useState } from "react";
import { useRouter } from "next/router";
import { getAuth } from "firebase/auth";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signIn } = useAuth();
    const router = useRouter()
    const handleSubmit = () => {
        signIn(email, password);
        router.push('/form');
    };
    return (
        <>
            <Card sx={{ maxWidth: '600px', justifyContent: 'center', alignItems: 'center' }}>
                <CardHeader subheader={(
                    <Typography
                        color="text.secondary"
                        variant="body2"
                    >
                        Don&apos;t have an account?
                        &nbsp;
                        <Link
                            // onClick={<Register/>}
                            href='/auth/register'
                            underline="hover"
                            variant="subtitle2"
                        >
                            Register
                        </Link>
                    </Typography>
                )} title='Login'></CardHeader>
                <CardContent>
                    <Grid container
                        direction="row"
                        justifyContent="space-evenly"
                        alignItems="center"
                        spacing={2}>
                        <Grid item xs={12} md={6}>
                            <TextField fullWidth size='small' label='Email Address' variant="outlined" onChange={e => setEmail(e.target.value)} ></TextField>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField fullWidth size='small' label='Password' variant='outlined' onChange={e => setPassword(e.target.value)}></TextField>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions>
                    <Button fullWidth variant="contained" onClick={handleSubmit}  >Login</Button>
                </CardActions>
            </Card>
        </>
    )
}
