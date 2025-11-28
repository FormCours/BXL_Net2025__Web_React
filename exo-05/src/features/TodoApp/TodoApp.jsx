import { useState } from 'react';
import TaskForm from '../../components/TaskForm/TaskForm';
import TaskList from '../../components/TaskList/TaskList';
import { nanoid } from 'nanoid'; // Package pour générer des identifiants

export default function TodoApp() {

    // State pour stocker la liste des taches
    const [tasks, setTasks] = useState([]);

    const handleAddTask = (data) => {

        // Création de la nouvelle tache à ajouté
        const taskToAdd = {
            id: nanoid(),   // Identifiant généré
            ...data,        // Les données du formulaire
            isDone: false   // La complétion de la tache
        };

        // Modifier le state pour ajouter la tache (en debut de list)
        setTasks(prevTasks => [taskToAdd, ...prevTasks]);

    }

    return (
        <>
            <h2>Ajouter une nouvelle tâche</h2>
            <TaskForm 
                textBtnSubmit='Ajouter'
                onTaskSubmit={handleAddTask}
                />

            <h2>Liste des tâches</h2>
            <TaskList tasks={tasks} />
        </>
    )

}