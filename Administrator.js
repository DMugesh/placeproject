import React, { useState } from "react";
import { useNavigate} from 'react-router-dom';

const Admin = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [dept, setdept] = useState('');
  const [isHovered, setIsHovered] = useState(false);
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
      currentSemesterGPA: 3.8,
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

  const navigate = useNavigate();

  const redirectToLoginPage = () => {
    navigate('/login');
  };

  const handleRoleChange = (e) => {
    setdept(e.target.value);
    
  };

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
    setFilters({ ...filters, [name]: value });
  };

  const filteredStudents = students.filter((student) => {
    for (const key in filters) {
      if (filters[key] !== "" && student[key] !== filters[key]) {
        return false;
      }
    }
    return true;
  });
  

  return (
    <div className="min-h-screen bg-white-50">
    {/* Navbar */}
    <nav container="fluid" className="bg-gradient-to-r from-gray-100 via-gray-300 to-gray-200 hover:from-gray-300 hover:via-green-300 hover:to-gray-300 "
style={{ width: '100vw', height: '40px', fontSize: '20px' }}
>
      <div className="flex justify-between items-center">
      <h1
  className="text-xl font-bold flex items-center justify-between transition duration-300 "
  style={{
    fontSize: isHovered ? '24px' : '20px', // Enlarge font size when hovered
    color: isHovered ? '#333' : 'inherit', // Darken text color when hovered
  }}
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
>
  Admin Portal
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 ml-2 transform origin-center transition-transform duration-300 cursor-pointer hover:rotate-90"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M19 9l-7 7-7-7"
    />
  </svg>
</h1>

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
            <span>Mr.Ajay</span>
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
                <button onClick={redirectToLoginPage} type="button" className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
        Logout
      </button>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  <br></br>
    <div className="mb-6 flex items-center justify-end">
  <label htmlFor="role" className="block text-lg font-semibold mb-2 text-gray-700 mr-2">
    Department
  </label>
  <select
    id="role"
    className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
    value={dept}
    onChange={handleRoleChange}
  >
    <option value="">Select a department</option>
    <option value="student">CSE</option>
    <option value="faculty">INT</option>
    <option value="admin">Mech</option>
    <option value="admin">Chemical</option>
    <option value="admin">AIDS</option>
  </select>
</div>


     
        {/* Student Table */}
        
          <h2 className="text-2xl font-bold mb-4">Student Records</h2>
          {/* Filter Section */}
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
              {students.map((student) => (
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
    
  );
};

export default Admin;
