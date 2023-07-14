import { Button, Card, CardContent, CardHeader, Grid, Stack, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

const Form = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        phonenumber: '',
        officeaddress: '',
        pincode: '',
        websiteurl: '',
    })
    const handleChange = (event) => {
        setData((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }
    const router=useRouter();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(data){
            try {
            const response = await fetch(process.env.client+ '/api/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ data }),
            });

            if (response.ok) {
                console.log('Data submitted successfully!');
                router.push('/userData');
            } else {
                console.log('Failed to submit data!');
            }
        } catch (error) {
            console.log(error);
        }
        }
        else{
           toast.error('please fill the field') 
        }
        
    };

    return (
        <Stack spacing={4}>
            <Stack alignItems="center" direction="row" spacing={2}>
                <Card>
                    <CardHeader title='Customer Details'></CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit}>
                            <Grid container
                                direction="row"
                                justifyContent="space-evenly"
                                alignItems="center"
                                spacing={2}>
                                <Grid item xs={12} md={4}>
                                    <TextField
                                        fullWidth
                                        onChange={handleChange}
                                        label="Name"
                                        name="name"
                                        size='small'
                                        variant='outlined'
                                    />
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <TextField
                                        fullWidth
                                        onChange={handleChange}
                                        label="Phone Number"
                                        name="phonenumber"
                                        size='small'
                                        variant='outlined'
                                    />
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <TextField
                                        fullWidth
                                        type="email"
                                        onChange={handleChange}
                                        label="Email"
                                        name="email"
                                        size='small'
                                        variant='outlined'
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        onChange={handleChange}
                                        label="Office Address"
                                        name="officeaddress"
                                        size="small"
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={6} md={6}>
                                    <TextField
                                        fullWidth
                                        onChange={handleChange}
                                        label="Pincode"
                                        name="pincode"
                                        size="small"
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={6} md={6}>
                                    <TextField
                                        fullWidth
                                        onChange={handleChange}
                                        label="Website URL"
                                        name="websiteurl"
                                        size="small"
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <Button variant='contained' type="submit">Submit</Button>
                                </Grid>
                            </Grid></form>
                    </CardContent>
                </Card>
            </Stack>
        </Stack>

    );
};

export default Form;
