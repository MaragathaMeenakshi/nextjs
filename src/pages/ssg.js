// import { ListItem, ListItemText } from "@mui/material"
// export async function getStaticProps() {
//     const response = await fetch('http://localhost:3000/api/user', {
//         method: "GET"
//     })
//     const data = await response.json();
//     console.log(data);
//     return {
//         props: {
//             user: data,
//         }
//     }
// }

const userData = ({ user }) => {
    console.log(user);
    return (
        <>
            <div>Customers</div>
            
        </>
    )
}
export default userData;
