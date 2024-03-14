import React, { useState } from "react";

import { useNavigate } from 'react-router-dom';

const Faculty = () => {
  const [showOptions, setShowOptions] = useState(false);
  
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      registrationNumber: "ABC123",
      department: "Computer Science",
      placementOption: "A",
      placementStatus: "PLACED",
      drivesAttended: 5,
      currentSemesterGPA: 8.7,
      CGPA: 8.5,
      resume: "link-to-resume",
    },
    {
      id: 2,
      name: "mani Doe",
      email: "mani.doe@example.com",
      registrationNumber: "DEF456",
      department: "IT",
      placementOption: "B",
      placementStatus: "NOT PLACED",
      drivesAttended: 8,
      currentSemesterGPA: 7.8,
      CGPA: 8.1,
      resume: "link-to-resume",
    },
    // Add more student records here
  ]);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const [filters, setFilters] = useState({
    name: "",
    email: "",
    registrationNumber: "",
    department: "",
    placementOption: "",
    placementStatus: "",
    drivesAttended: "",
    semesterGPA: "",
    CGPA: "",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    const updatedFilters = { ...filters, [name]: value };
  
    if (name === "CGPA") {
      updatedFilters[name] = parseFloat(value);
    }
  
    setFilters(updatedFilters);
  };
  
  const filteredStudents = students.filter((student) => {
    for (const key in filters) {
      const filterValue = String(filters[key]).toLowerCase();
      const studentValue = String(student[key]).toLowerCase();
  
      if (filters[key] !== "") {
        if (key === "CGPA" && parseFloat(student[key]) < parseFloat(filters[key])) {
          return false;
        } else if (key === "placementStatus" && student[key] !== filters[key]) {
          return false;
        } else if (key === "placementOption" && studentValue !== filterValue) {
          return false;
        } else if (key !== "CGPA" && studentValue.indexOf(filterValue) === -1) {
          return false;
        }
      }
    }
    return true;
  });
  
  
  
  
  
 

  
  const navigate = useNavigate();

  const redirectToLoginPage = () => {
    navigate('/login');
  };
  

  return (
    <div className="min-h-screen bg-white-50">
    {/* Navbar */}
    <nav container="fluid" className="bg-gradient-to-r from-blue-100 via-blue-300 to-blue-200 hover:from-green-200 hover:via-green-300 hover:to-green-200"
style={{ width: '100vw', height: '40px', fontSize: '20px' }}
>
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold " style={{fontSize:'20px'}}>Faculty Dashboard</h1>
        <div className="relative">
          <button
            className="flex items-center space-x-2 focus:outline-none"
            onClick={toggleOptions}
          >
              <svg
               xmlns="http://www.w3.org/2000/svg"
               className="h-5 w-5 text-gray-500" // Adjust the color as needed
               viewBox="0 0 20 20"
               fill="currentColor"
             >
               <path
                 fillRule="evenodd"
                 d="M10 2a5 5 0 100 10 5 5 0 000-10zM3 10a7 7 0 1114 0 7 7 0 01-14 0z"
                 clipRule="evenodd"
  />
  </svg>
            <span>Dr. Jane Smith</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 12a2 2 0 100-4 2 2 0 000 4zM3 10a2 2 0 114 0 2 2 0 01-4 0zm14 0a2 2 0 11-4 0 2 2 0 014 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {showOptions && (
            <div className="absolute top-full right-0 bg-white rounded-lg shadow-md mt-2">
              <ul>
                <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
                  Help
                </li>
                <button onClick={redirectToLoginPage}type="submit" className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
        Logout
      </button>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  
    

      {/* Faculty Details */}
      <div className="container mx-auto py-8">
        <div className="bg-white-100 rounded-lg shadow-lg p-8 max-w-4xl mx-auto mb-8">
          <h2 className="text-2xl font-bold mb-4">Faculty Information</h2>
          <p className="text-lg font-semibold">Name: Dr. Jane Smith</p>
          <p className="text-lg font-semibold">Department: Computer Science</p>
        </div>

        {/* Student Table */}
        
          <h2 className="text-2xl font-bold mb-4">Student Records</h2>
          {/* Filter Section */}
          

          <div className="flex space-x-4 mb-4">
          <input
            type="number"
            placeholder="Filter by CGPA"
            name="CGPA"
            value={filters.CGPA}
            onChange={handleFilterChange}
            className="border border-gray-300 px-2 py-1"
          />
          <input
            type="text"
            placeholder="Filter by Placement Status"
            name="placementStatus"
            value={filters.placementStatus}
            onChange={handleFilterChange}
            className="border border-gray-300 px-2 py-1"
          />
          <input
            type="text"
            placeholder="Filter by Placement Option"
            name="placementOption"
            value={filters.placementOption}
            onChange={handleFilterChange}
            className="border border-gray-300 px-2 py-1"
          />
        </div>



          {/* Table */}
          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 px-4 py-2">Name</th>
                <th className="border border-gray-200 px-4 py-2">Email</th>
                <th className="border border-gray-200 px-4 py-2">Registration Number</th>
                <th className="border border-gray-200 px-4 py-2">Department</th>
                <th className="border border-gray-200 px-4 py-2">Placement Option</th>
                <th className="border border-gray-200 px-4 py-2">Placement Status</th>
                <th className="border border-gray-200 px-4 py-2">Drives Attended</th>
                <th className="border border-gray-200 px-4 py-2">Current Semester GPA</th>
                <th className="border border-gray-200 px-4 py-2">CGPA</th>
                <th className="border border-gray-200 px-4 py-2">Resume</th>
                <th className="border border-gray-200 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student) => (
                <tr key={student.id}>
                  <td className="border border-gray-200 px-4 py-2">{student.name}</td>
                  <td className="border border-gray-200 px-4 py-2">{student.email}</td>
                  <td className="border border-gray-200 px-4 py-2">{student.registrationNumber}</td>
                  <td className="border border-gray-200 px-4 py-2">{student.department}</td>
                  <td className="border border-gray-200 px-4 py-2">{student.placementOption}</td>
                  <td className="border border-gray-200 px-4 py-2">{student.placementStatus}</td>
                  <td className="border border-gray-200 px-4 py-2">{student.drivesAttended}</td>
                  <td className="border border-gray-200 px-4 py-2">{student.currentSemesterGPA}</td>
                  <td className="border border-gray-200 px-4 py-2">{student.CGPA}</td>
                  <td className="border border-gray-200 px-4 py-2">{student.resume}</td>
                  <td className="border border-gray-200 px-4 py-2">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300" >Update</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
    
      </div>
    </div>
  );
};

export default Faculty;
