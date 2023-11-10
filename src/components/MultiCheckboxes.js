import React, { useState } from 'react'

function MultiCheckboxes() {
    const [hobbiesArray,setHobbiesArray]= useState([]) 
    
    const handleChange = (event) =>{
        const value = event.target.value;           // THIS WILL CONTAIN HOBBIES  value = Sports
        const checked = event.target.checked;       // THIS WILL CONTAIN CHECKED BOOLEAN value checked= true
        console.log(value,checked)

        if(checked){                                  
            setHobbiesArray([
                ...hobbiesArray, value             // ALL THE CHECKED VALUES WILL ADD ON hobbiesArray, setHobbiesArray will set in useState hobbieArray
            ])

        }else{                                     // INCASE OF CHECKED AND UNCHECKED VALUE (TRUE AND FALSE BOTH)
            
            setHobbiesArray(hobbiesArray.filter((event)=>(event!==value)))            //FILTER THE VALUE ON BASES OF CHECKED(TRUE AND FALSE), PASS ONLY THOSE ARE CHECKED
            //setHobbiesArray(hobbiesArray.filter((event)=>console.log('event ='+ event,'value ='+value)));    // unchecked value(event) will compared with all the value
        }
    }

    return (
    <div>
    <h1>My Hobbies Includes:</h1><br></br>
    <h1> {hobbiesArray} </h1>
    <input type ="checkbox" name="hobbies" value="Sports" onChange={handleChange}/>
    <label>Sports</label>
    &nbsp;
    &nbsp;

    <input type ="checkbox" name="hobbies" value="Travel" onChange={handleChange}/>
    <label>Travel</label>
    &nbsp;
    &nbsp;

    <input type ="checkbox" name="hobbies" value="Music" onChange={handleChange}/>
    <label>Music</label>
    &nbsp;
    &nbsp;

    <input type ="checkbox" name="hobbies" value="Reading" onChange={handleChange}/>
    <label>Reading</label>
    &nbsp;
    &nbsp;



    </div>
    )
}

export default MultiCheckboxes
