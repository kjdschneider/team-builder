import React, {useState} from 'react';
import './App.css';
import TeamMemberForm from './components/TeamMemberForm';
import TeamMembers from './components/TeamMembers';

function App() {
  const [team, setTeam] = useState([{name: 'KJ', email: 'kjdschneider@gmail.com', role: 'Team Lead'}]);

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
      <h1>In Progress</h1>
      <TeamMemberForm addTeamMember={addTeamMember} />
      <TeamMembers team={team} />
    </div>
  );
}

export default App;
