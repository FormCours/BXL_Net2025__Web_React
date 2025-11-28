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

    const handleDeleteTask = (id) => {

        // Modifier le state pour remplacer son contenu par une liste des taches qui ne contient pas l'élément ciblé
        //? Version avec filter
        setTasks(prevTasks => prevTasks.filter(task => task.id !== id));

        //? Version avec toSpliced
        /*
        setTasks(prevTasks => prevTasks.toSpliced(prevTasks.findIndex(task => task.id === id), 1));
        */
    }

    const handleFinishTask = (id) => {

        // Modifier le state pour remplacer son contenu par une liste où la tache ciblé à la valeur "isDone" à true

        //? Version "procedural" avec une boucle
        /*
        setTasks(prevTasks => {
            const copyTasks = structuredClone(prevTasks);

            for (let i = 0; i < copyTasks.length; i++) {
                if (copyTasks[i].id === id) {
                    copyTasks[i].isDone = true;
                }
            }

            return copyTasks;
        });
        */

        //? Version "procedural" avec une recherche d'index
        /*
        setTasks(prevTasks => {
            const copyTasks = structuredClone(prevTasks);

            const idx = copyTasks.findIndex(task => task.id === id);
            if (idx >= 0) {
                copyTasks[idx].isDone = true;
            }

            return copyTasks;
        });
        */

        //? Version "moderne" 
        setTasks(prevTasks => prevTasks.map(task => (task.id !== id) ? task : { ...task, isDone: true }));
    }

    return (
        <>
            <h2>Ajouter une nouvelle tâche</h2>
            <TaskForm
                textBtnSubmit='Ajouter'
                onTaskSubmit={handleAddTask}
            />

            <h2>Liste des tâches</h2>
            <TaskList tasks={tasks}
                onTaskDelete={handleDeleteTask}
                onTaskFinish={handleFinishTask}
            />
        </>
    )

}