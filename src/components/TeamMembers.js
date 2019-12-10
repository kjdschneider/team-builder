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
        <div classname='team-list'>
            {props.team.map(teamMember => {
                return (
                    <div classname='team-member-card'>
                        <h1 classname='name'>{teamMember.name}</h1>
                        <p className='role'>Role: {teamMember.role}</p>
                        <p className='email'>Contact: {teamMember.email}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default TeamMembers;