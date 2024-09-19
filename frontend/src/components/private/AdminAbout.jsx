import React, { useEffect, useState } from 'react';
import { getAllCollaboratorsService } from '../../services/api';
import EditCollaboratorForm from '../forms/EditCollaboratorForm';

const AdminAbout = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [collaborators, setCollaborators] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);
  const [toEdit, setToEdit] = useState({});  // Initialize toEdit as an empty object
  // const [formAction, setFormAction] = useState("")

  async function fetchCollaborators() {
    console.log("Cargando colaboradores...");
    const fetchedCollaborators = await getAllCollaboratorsService(false);
    const fetchedTeamMembers = await getAllCollaboratorsService(true);
    setCollaborators(fetchedCollaborators);    
    setTeamMembers(fetchedTeamMembers);
    console.log("Colaboradores cargados");
    
  }

  useEffect(() => {
    fetchCollaborators();
  }, []);

  // useEffect(() => {
  //   console.log(collaborators, teamMembers);
  // }, [collaborators, teamMembers]);

  // useEffect(() => {
  //   console.log(isEditMode);
  // }, [isEditMode]);

  useEffect(() => {
    console.log(toEdit.id);

  }, [toEdit]);

  function toggleEditMode(collaboratorData, isMember) {
    setIsEditMode((prevValue) => !prevValue);
    collaboratorData.hierarchy = isMember
    ? 'Miembro del equipo'
    : 'Colaboración externa';
    setToEdit(collaboratorData); 
    
  }

  return (
    <main className='settings-content'>
      <div className={isEditMode ? 'hidden' : ''}>
        <h1>Gestión de miembros</h1>

        <div id='team-collaborators'>
          <p>Elige qué persona quieres editar</p>
          <ol>
            {teamMembers.map((member) => (
              <li key={member.id}>
                <button
                  onClick={() => toggleEditMode(member, true)}  
                >
                  {`${member.name} ${member.surname}`}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => toggleEditMode({}, true)}
              >Nueva colaboradora</button>
            </li>
          </ol>
        </div>
        
        <div id='external-collaborators'>
          <p>Elige qué colaboradora quieres editar</p>
          <ol>
            {collaborators.map((collaborator) => (
              <li key={collaborator.id}>
                <button
                  onClick={() => toggleEditMode(collaborator, false)}  
                >
                  {`${collaborator.name} ${collaborator.surname}`}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => toggleEditMode({}, false)}
              >Nueva colaboradora</button>
            </li>
          </ol>
        </div>
      </div>

      <div id='edit-collaborator-div' className={!isEditMode ? 'hidden' : ''}>
        <button onClick={() => toggleEditMode({})}>Volver atrás</button>
        <p>Editando: {`${toEdit.name || 'Nueva'} ${toEdit.surname || 'colaboradora'}`}</p>
        <p>Rango: {toEdit.hierarchy}</p>
        <p></p>
        <EditCollaboratorForm collaboratorData={toEdit} />
      </div>
    </main>
  );
};

export default AdminAbout;
