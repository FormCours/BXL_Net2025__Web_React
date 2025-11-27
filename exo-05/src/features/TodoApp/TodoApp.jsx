import TaskForm from '../../components/TaskForm/TaskForm';
import TaskList from '../../components/TaskList/TaskList';

export default function TodoApp() {

    return (
        <>
            <h2>Ajouter une nouvelle tâche</h2>
            <TaskForm />

            <h2>Liste des tâches</h2>
            <TaskList />
        </>
    )

}