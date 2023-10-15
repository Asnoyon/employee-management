import React, { useRef, useState, useEffect } from "react";
import Swal from "sweetalert2";
function Add({ employees, setEmployees, setIsAdding }) {
  const [addEmployee, setAddEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
    salary: "",
    date: "",
  });

  //useRef start here

  const textInput = useRef(null);

  //useEffect use for focus one time when render

  useEffect(() => {
    textInput.current.focus();
  }, []);

  // input value handle
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setAddEmployee({ ...addEmployee, [name]: value });
  };

  // onsubmit value handle
  const handleAdd = (e) => {
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
    //new object create

    const id = employees.length + 1;
    const newEmployee = {
      id: id,
      firstName: addEmployee.firstName,
      lastName: addEmployee.lastName,
      email: addEmployee.email,
      date: addEmployee.date,
    };
    employees.push(newEmployee);
    setEmployees(employees);
    setIsAdding(false);

    Swal.fire({
      icon: "success",
      title: "Added",
      text: `${addEmployee.firstName} ${addEmployee.lastName}'s data has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <div className="small-container">
      <form onSubmit={handleAdd}>
        <h1>Add Employee</h1>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          ref={textInput}
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
        <div style={{ marginTop: "30px" }} className="last-button">
          <input type="submit" value="Add" />
          <input
            style={{ marginLeft: "12px" }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)}
          />
        </div>
      </form>
    </div>
  );
}

export default Add;
