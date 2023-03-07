import logo from "./images/uvic_logo.jpg"

function Header(){
    return(
        <div className = "py-2 pl-2" style ={{ borderBottom : "1px solid #777"}}>

            <img src = {logo} alt ="" style ={{ height: "100px" ,verticalAlign: "Top"}} />
            <span className = "h2 pt-4 m-2 text-white-50" style ={{ fontSize: 40}}>Class List</span>
        </div>
            
    )
}

export default Header;