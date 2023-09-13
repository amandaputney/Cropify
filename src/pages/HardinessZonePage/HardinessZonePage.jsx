import { checkToken } from "../../utilities/users-service";
import './HardinessZonePage.css'

export default function PlanPage () {
    async function handleCheckToken() {
        const expDate = await checkToken(); 
        console.log(expDate)
        }

  
    return (
        //REMINDER: must wrap below in <> </> to return a single root component/node
    <>
        <h1>Find Your Hardiness Zone</h1>
        <br />
        <h2></h2>

        <iframe src="https://experience.arcgis.com/experience/58908bc6c8cd4e2f9f2ed73b80191d15/" 
        frameborder="1" width="1000" height="600"></iframe>
        <br />

    </>
    );
};