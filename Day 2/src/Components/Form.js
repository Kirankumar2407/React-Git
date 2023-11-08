import '../Assets/css/styles.css'
import { User2 } from 'lucide-react';
const Form =()=>{
    const func =()=>{
        alert('Completed Successfully');
    }

    return(
        <>
        <div id="ss1">
        <div id="h1">
         <form onSubmit={func}>
                <h1><i>User Login <User2 /></i></h1>
                <input type="textfield" className="in" placeholder='Name'></input><br/>
                <input type="textfield" className="in" placeholder='Email'></input><br/>
                <input type="tel" className="in" placeholder='Phone No'></input><br/>
                <input type="textfield" className="in" placeholder='User Name'></input><br/>
                <input type="password" className="in" placeholder='Password'></input><br/>
                <input type="Submit" className="fun"  value="Submit"></input><br/>
            </form>
            </div>
            </div>
        </>
    )
}
export default Form;