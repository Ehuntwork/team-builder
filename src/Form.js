import React, {useState} from 'react';

const Form = props =>{
    const [teamMem, setTeamMem] = useState({title:""})

    const changesHandler = event =>{
        setTeamMem({title: event.target.value})
    };

    return(
        <form>
            <label htmlFor="title">Title</label>
            <input type="text" placeholder="Team member name" onChange={changesHandler}/>

        </form>
    );
};

export default Form;

