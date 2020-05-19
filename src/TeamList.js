import React from 'react';

const TeamList = props =>{
    return(
        <div className='team-list'>
            {props.team.map(teamMem=>(
                <div className = 'team-member' key={teamMem.id}>
                    <h2>{teamMem.name}</h2>
                    <h3>{teamMem.email}</h3>
                    <h4>{teamMem.role}</h4>
                </div>
            ))}
        </div>
    );
};

export default TeamList;