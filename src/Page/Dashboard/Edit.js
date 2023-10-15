import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";
function Edit({ employees, selectedEmployee, setEmployees, setIsEditing }) {
  const id = selectedEmployee.id;
  const [addEmployee, setAddEmployee] = useState({
    firstName: selectedEmployee.firstName,
    lastName: selectedEmployee.lastName,
    email: selectedEmployee.email,
    salary: selectedEmployee.salary,
    date: selectedEmployee.date,
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setAddEmployee({ ...addEmployee, [name]: value });
  };

  //update logic
  const handleUpdate = (e) => {
    e.preventDefault();
    if (
      !addEmployee.firstName ||
      !addEmployee.lastName ||
      !addEmployee.email ||
      !addEmployee.salary ||
      !addEmployee.date
    ) {
      return Swal.fire({
        icon: "error",
        title: "Error",
        text: "All fields are required",
        showConfirmButton: true,
      });
    }

    const employee = {
      id,
      firstName: addEmployee.firstName,
      lastName: addEmployee.lastName,
      email: addEmployee.email,
      salary: addEmployee.salary,
      date: addEmployee.date,
    };

    //loop for editing

    for (let i = 0; i < employees.length; i++) {
      if (employees[i].id === id) {
        employees.splice(i, 1, employee);
        break;
      }
    }

    setEmployees(employees);
    setIsEditing(false);
    Swal.fire({
      icon: "success",
      title: "Updated",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <div className="small-container">
      <form onSubmit={handleUpdate}>
        <h1>Add Employee</h1>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          value={addEmployee.firstName}
          onChange={handleChange}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          value={addEmployee.lastName}
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={addEmployee.email}
          onChange={handleChange}
        />
        <label htmlFor="salary">Salary</label>
        <input
          id="salary"
          type="number"
          name="salary"
          value={addEmployee.salary}
          onChange={handleChange}
        />
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          value={addEmployee.date}
          onChange={handleChange}
        />
        <div style={{ marginTop: "30px" }}>
          <input type="submit" value="Update" />
          <input
            style={{ marginLeft: "12px" }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsEditing(false)}
          />
        </div>
      </form>
    </div>
  );
}

export default Edit;
