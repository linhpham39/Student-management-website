const API_URL = "http://localhost:3000";

export const getStudents = async () => {
    const response =  await fetch(`${API_URL}`);
    console.log(response);
    return await response.json();
}

export const createStudent = async (student) => {
    const response = await fetch(`${API_URL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(student)
    });
    return await response.json();
}

export const updateStudent = async (student) => {
    const response = await fetch(`${API_URL}/${student._id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(student)
    });
    return await response.json();
}

export const deleteStudent = async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
            }
    });
    return await response.json();
}
