import React, {useState} from 'react';
import './App.css';
import TeamMemberForm from './components/TeamMemberForm';
import TeamMembers from './components/TeamMembers';

function App() {
  const [team, setTeam] = useState([{name: 'KJ', email: 'kjdschneider@gmail.com', role: 'Team Lead'}]);
  const [memberToEdit, setMemberToEdit] = useState({});

  const editMemberState = teamMember => {
    setMemberToEdit(teamMember);
  }

  const isEditing = () => {
    if (memberToEdit !== {}) {
      return false;
    } else {
      return true;
    }
  }

  const addTeamMember = teamMember => {
    const newTeamMember = {
      name: teamMember.name,
      email: teamMember.email,
      role: teamMember.role
    }

    const newTeamList = [...team, newTeamMember];

    setTeam(newTeamList);
  }

  return (
    <div className="App">
      <h1>Team List!</h1>
      <TeamMemberForm memberToEdit={memberToEdit} addTeamMember={addTeamMember} />
      <TeamMembers editMemberState={editMemberState} team={team} />
    </div>
  );
}

export default App;
