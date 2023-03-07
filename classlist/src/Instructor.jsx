import React, {useEffect} from "react";


const Instructor = (props) => {


    useEffect(() => {
        return () => {
            console.log("umounted")

        }
    })

    return (
        <div className = "">
            Name: {props.instructor.name} <br />
            Email:{props.instructor.email} <br />
            Phone:{props.instructor.phone} <br />

        </div>
    )
};

export default Instructor;