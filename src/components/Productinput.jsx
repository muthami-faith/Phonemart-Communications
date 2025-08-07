import Addacc from "./Addacc"
import Addphone from "./Addphone"

const Productinput=()=>{
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6">
                    <Addphone/>
                </div>
                <div className="col-md-6">
                    <Addacc/>
                </div>
            </div>
        </div>

    )
}
export default Productinput