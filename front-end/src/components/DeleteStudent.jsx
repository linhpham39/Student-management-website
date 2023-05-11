import { deleteStudent } from "../services/api";

function DeleteStudent({studentID, handleDeleteStudent}) {
    async function handleDelete(id){
        console.log(id);
        try {
            await deleteStudent(id);
            handleDeleteStudent(studentID);
        } catch (error) {
            console.log(error);
        }
    }
    
    return (
        <button 
            className="btn btn-danger"
            onClick={() => handleDelete(studentID)}
        >
            Delete
        </button>
    )
    ;
}


export default DeleteStudent;