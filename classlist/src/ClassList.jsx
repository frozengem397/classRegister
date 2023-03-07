import React, {useState,useEffect,useRef} from "react";
import Instructor from "./Instructor";
import { getRandom } from "./Utility/api";





const ClassList = () => {
    const [state, setState] = useState({
            instructor: undefined,
            studentList:[],
            studentCount:0,
            hideInstructor:false,        
    });



const [inputName, setInputName] = useState(() => {
    return "";
});
const prevStudentCount = useRef(0);
const [inputID, setInputID]= useState("");

useEffect(() => {
    const getUser = async() => {
        setState((prev) => {
            return{
                ...prev,
                studentList:[
                    ...prev.studentList,{
                        name: inputName,
                        ID : inputID,
                    },
                ],
            };
        });
    };
    if(prevStudentCount.current < state.studentCount){
        getUser();
    }
    else if(state.studentCount ===0){
        setState((prev) => {return {...prev,studentList:[]};
    });
    

    }
    console.log(state.studentList)
},[state.studentCount,inputName,inputID,state.studentList]);
useEffect(() => {
    prevStudentCount.current = state.studentCount;
},[state.studentCount]);

useEffect(() => {
    const getUser = async() => {
        const res = await getRandom();
        setState((prev) => {
            return{
                ...prev,
                instructor:{
                    name: res.data.first_name + " " + res.data.last_name,
                    email: res.data.email,
                    phone:res.data.phone_number,
                },
            };
        });
    };
    if(!state.hideInstructor){
        getUser();
    }
    
},[state.hideInstructor]);

const handleAddStudent =() => {
    if (state.studentList.filter(e => e.ID === inputID).length > 0) {
        return alert("Duplicated student!");
     }
    setState((prev)=>{
        return {
            ...prev,
            studentCount: prev.studentCount+1,
        };
    });
};

const handleRemoveAllStudent = () => {
    setState((prev)=>{
        return {
            ...prev,
            studentCount:0,
        };
    });
};

const handletoggleInstructor =() =>{
    setState((prev) => {
        return {
            ...prev,
            hideInstructor: !prev.hideInstructor
        };
    });
};

const handledeleteStudent =(e) => {

    const id = e.target.getAttribute("id")
    console.log(id)
    setState((prev) =>{
        return {
            studentCount: prev.studentCount-1,
            studentList: state.studentList.filter((item)=> item.ID !== id),           
        }
    })
    
}

return (
    <div>
        <div className ="p-3">
            <span className ="h4 text-success">Instructor &nbsp;</span>
            <i
                className ={`bi ${state.hideInstructor ? "bi-toggle-off" : "bi-toggle-on"} btn btn-success btn-sm`} onClick ={handletoggleInstructor}></i>

            {!state.hideInstructor && state.instructor ?(
                <Instructor instructor = {state.instructor} />
            ):null}

        </div>

        <div className ="p-3">
            <span className = "h4 text-success">New Student</span>
            <br />
            <input
                type ="text" value ={inputName} placeholder="Name.." onChange={(e) => {
                    setInputName(e.target.value);
                }}></input>{" "}
                    Value :{inputName}
            <br />
            <textarea
                value ={inputID}
                onChange ={(e) => {
                    setInputID(e.target.value);
                }}
                placeholder ="ID..."
            ></textarea>
            Value : {inputID}
        </div>
        <div className ="p-3">
            <span className ="h4 text-success">Students</span> <br />
            <div>Student Count: {state.studentCount}</div>
            <button 
                className ="btn btn-success btn-sm"
                onClick = {handleAddStudent}
            >
                Add Student
            </button>
            &nbsp;
            <button 
                className = "btn btn-danger btn-sm"
                onClick={handleRemoveAllStudent}
            >Remove Student</button>
                {state.studentList.map((student,index) => {
                    return (
                        <div className = "text-white" key ={index}>
                            
                            Name: {student.name} &nbsp;&nbsp;

                            ID: {student.ID} &nbsp;
                             <button 
                                className ="btn btn-danger btn-sm"
                                id = {student.ID}
                                onClick = {handledeleteStudent}
                                >
                            Delete
                                </button>
                            <br />
                        </div>

                    );
                })}
        </div>
    </div>
);
};
export default ClassList