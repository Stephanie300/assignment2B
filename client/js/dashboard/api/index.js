// productionUrl = 'https://employee-manager-dashboard.herokuapp.com'
// developmentUrl = 'http://localhost:5000/

const api = {
    getAllDepartments: 'https://assignment-2b.herokuapp.com/api/departments/',
    // Snippet #5
    updateEmployee: `https://assignment-2b.herokuapp.com/api/departments/employee/update`,
    getDepartment: (name)=>{
        return `https://assignment-2b.herokuapp.com/api/departments/name/${name}`
    },
    deleteEmployee: (id)=>{
        return `https://assignment-2b.herokuapp.com/api/departments/employee/id/${id}` 
    }
}

export default api