import { useEffect, useState } from "react";

export default function ClientSideRendering() {
    const [state, setState] = useState([]);
    async function getData() {
        const res = await fetch("http://localhost:3000/api/user", {
            method: "GET"
        })
        const data = await res.json();
        setState(data.allPosts);
        console.log(data.allPosts)
    }
    useEffect(() => {
        getData();
    }, [])
    return (
        <ul>
            {Object.entries(state).map((data) => (
                <li>
                    Customer name : {data[1].data.name} <br></br>
                    Email : {data[1].data.email} <br></br>
                    Phone Number : {data[1].data.phonenumber}<br></br>
                    Office Address : {data[1].data.officeaddress}<br></br>
                    Pincode : {data[1].data.pincode}<br></br>
                    Website Url :{data[1].data.websiteurl}<br></br>
                    <br></br>
                </li>
            ))}
        </ul>
    )
}