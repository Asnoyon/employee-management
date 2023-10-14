import React, { useState } from "react";
import Swal from "sweetalert2";
import Header from "./Header";
import List from "./List";
import Add from "./Add";
import Edit from "./Edit";

import { employeesData } from "../../data";

function Dashboard() {
  //state start here
  const [employees, setEmployees] = useState(employeesData);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  //method of handleEdit
  const handleEdit = () => {};

  //method of handleDelete
  const handleDelete = () => {};
  return (
    <div className="container">
      {/* This is for List */}
      {!isAdding && !isEditing && (
        <>
          <Header setIsAdding={setIsAdding} />
          <List
            employees={employees}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </>
      )}
      {/* This is for Add */}
      {isAdding && (
        <Add
          employees={employees}
          setEmployees={setEmployees}
          setIsEditing={setIsEditing}
        />
      )}
      {/* This is for Editing */}
      {isEditing && (
        <Edit
          employees={employees}
          setEmployees={setEmployees}
          selectedEmployee={selectedEmployee}
          setIsAdding={setIsAdding}
        />
      )}
    </div>
  );
}

export default Dashboard;
