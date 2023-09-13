import { checkToken } from "../../utilities/users-service";

export default function PlanPage () {
    async function handleCheckToken() {
        const expDate = await checkToken(); 
        console.log(expDate)
        }

  
    return (
    <>
        <h1>Crop Rotation Plans</h1>
        <br />
        <h2>Coming Soon!</h2>
        <br />
    </>
    );
};