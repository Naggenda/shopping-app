import React from 'react';



export default function Test(){
    // const firstname = "Joshua";
    // const lastname = "Naggenda";
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;
    
    if (hours < 12){
     timeOfDay = "morning";
    }

    else if (hours >= 12 && hours <17){
        timeOfDay = "afternoon";
    }
    else {
        timeOfDay = "night";
    }


return(
    <h1>Good { timeOfDay }!</h1>
)
}