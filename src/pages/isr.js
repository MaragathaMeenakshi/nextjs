// export async function getStaticProps() {
//     const response = await fetch('http://localhost:3000/api/user', {
//         method: "GET"
//     })
//     const data = await response.json();
//     return {
//         props: {
//             user: data,
//         },
//         revalidate :100,
//     };
// }

const IncrementStaticGeneration = () => {
    return (
        <> 
          <div>Customers</div>
        </>
    )
}
