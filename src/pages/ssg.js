import { ListItem, ListItemText } from "@mui/material"
export async function getStaticProps() {
    const response = await fetch('https://vv-htvavx3vd-maragathameenakshi.vercel.app/api/user', {
        method: "GET"
    })
    const data = await response.json();
    console.log(data);
    return {
        props: {
            user: data,
        }
    }
}

const userData = ({ user }) => {
    console.log(user);
    return (
        <>
            <div>Customers</div>
            <ul>
                {Object.entries(user.allPosts).map((datas) => (
                    <li>
                        Customer name : {datas[1].data.name} <br></br>
                        Email : {datas[1].data.email} <br></br>
                        Phone Number : {datas[1].data.phonenumber}<br></br>
                        Office Address : {datas[1].data.officeaddress}<br></br>
                        Pincode : {datas[1].data.pincode}<br></br>
                        Website Url :{datas[1].data.websiteurl}<br></br>
                        <br></br>
                    </li>
                ))}
            </ul>
        </>
    )
}
export default userData;
