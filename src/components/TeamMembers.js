import React from 'react';

const TeamMembers = props => {
    if (!props.team) {
        return (
            <div>
                <h1>No Team Members yet!</h1>
            </div>
        )
    }

    return (
        <div className='team-list'>
            {props.team.map(teamMember => {
                return (
                    <div key={teamMember.email} className='team-member-card'>
                        <h2 className='name'>{teamMember.name}</h2>
                        <p className='role'>Role: {teamMember.role}</p>
                        <p className='email'>Contact: {teamMember.email}</p>
                        <button onClick={props.editMemberState(teamMember)} type='button'>Edit</button>
                    </div>
                )
            })}
        </div>
    )
}

export default TeamMembers;