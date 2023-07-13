import { Box, Button, Card, CardActions, CardContent, CardHeader, Grid, Paper, TextField, Typography } from "@mui/material"
import Link from "next/link"
import { useAuth } from "../../components/firebase/authcontext"
import { useState } from "react";

export default function Register({ user }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [conformPassword, setConformPassword] = useState('');
    const { signUp } = useAuth();

    const handleSubmit = () => {
        signUp(email, password);
    };
    return (
        <>
            <Card sx={{ maxWidth: '600px', justifyContent: 'center', alignItems: 'center' }}>
                <CardHeader subheader={(
                    <Typography
                        color="text.secondary"
                        variant="body2"
                    >
                        have an account?
                        &nbsp;
                        <Link
                            href='/auth/login'
                            underline="hover"
                            variant="subtitle2"
                        >
                            Login
                        </Link>
                    </Typography>
                )} title='Register'></CardHeader>
                <CardContent>
                    <Grid container
                        direction="row"
                        justifyContent="space-evenly"
                        alignItems="center"
                        spacing={2}>
                        <Grid item xs={12} md={6}>
                            <TextField fullWidth label='Email Address' variant="outlined" onChange={e => setEmail(e.target.value)} ></TextField>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField fullWidth label='Password' variant='outlined' onChange={e => setPassword(e.target.value)}></TextField>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField fullWidth label='Re-enter Password' variant='outlined' onChange={e => setConformPassword(e.target.value)}></TextField>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions>
                    <Button fullWidth variant="contained" onClick={handleSubmit} >Sign Up</Button>
                </CardActions>
            </Card>
        </>
    )
}
