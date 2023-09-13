import { checkToken } from "../../utilities/users-service";


export default function HomePage () {
    async function handleCheckToken() {
        const expDate = await checkToken(); 
        console.log(expDate)
        }

    return (
    <>
      <br />
            <h4> <b>Cropify</b> is a full-stack single-page application that allows users to plan and visualize crop rotation for small scale farms and gardens. </h4>
      <br />   
            <h4>  This user friendly application will serve as a valuable tool for farmers & gardeners to improve the sustainability and productivity of their harvests.</h4>
     <br />   
            <h4>It promotes responsible land management practices, reduces the need for chemical inputs, and contributes to long-term soil health. </h4>
      <br />
            <h5>  Data is sourced from USDA, ESRI, and the Perenual API.</h5>
      <br />
        <div className='contact'>
            <a href="https://github.com/amandaputney" target="_blank">
            <i class="icon fab fa-github fa-2x"></i>
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://www.linkedin.com/in/amanda-s-putney/" target="_blank" >
            <i class="icon fab fa-linkedin-in fa-2x"></i>
            </a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="mailto:amandasueputney@gmail.com" >
            <i class="icon fas fa-envelope fa-2x"></i>
            </a>
      </div>
    </>
    );
};