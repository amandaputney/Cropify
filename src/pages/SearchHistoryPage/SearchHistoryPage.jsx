import { checkToken } from "../../utilities/users-service";

export default function OrderHistoryPage () {
    async function handleCheckToken() {
        const expDate = await checkToken(); 
        console.log(expDate)
        }

  
    return (
//must wrap below in <> </> to return a single root component/node
    <>
        <h1>Search History Page</h1>
        {/* <button onClick={ handleCheckToken }>Check When My Login Expires</button> */}
    </>
    );
};