import React, {useState, useEffect} from 'react';

const TeamMemberForm = (props) => {
    const [teamMemberInfo, setTeamMemberInfo] = useState({name: '', email: '', role: ''});

    const handleChange = event => {
        setTeamMemberInfo( { ...teamMemberInfo, [event.target.name]: event.target.value } )
    };

    const submitForm = event => {
        event.preventDefault();
        props.addTeamMember(teamMemberInfo);
        setTeamMemberInfo({name: '', email: '', role: ''});
    };

    useEffect(() => {
        setTeamMemberInfo(props.memberToEdit);
    }, [props.memberToEdit])

    return (
        <div>
            <form onSubmit={submitForm}>
                <label htmlFor='name'>
                    Name:
                    <input
                        id='name' 
                        type='text' 
                        name='name'
                        value={teamMemberInfo.name}
                        onChange={handleChange}
                        placeholder='Enter a name.' />
                </label>
                <label htmlFor='email'>
                    Email:
                    <input
                        id='email' 
                        type='email' 
                        name='email'
                        value={teamMemberInfo.email}
                        onChange={handleChange}
                        placeholder='Enter an email.' />
                </label>
                <label htmlFor='role'>
                    Role:
                    <input
                        id='role'
                        type='text'
                        name='role'
                        value={teamMemberInfo.role}
                        onChange={handleChange}
                        placeholder={`Team member's role.`} />
                </label>
                <button type='submit'>Add New Member!</button>
            </form>
        </div>
    )
}

export default TeamMemberForm;