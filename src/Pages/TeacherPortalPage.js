import React, { useState, useEffect } from "react";
import { StudentsList } from "../Components/StudentsList";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, ArcElement, Tooltip, Legend);

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const TeacherPortalPage = () => {
  const [studentDetails, setStudentDetails] = useState([]);
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [marks, setMarks] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    fetch("https://teacherportal-backend-r7my.onrender.com/students", {
      credentials: "include",
    }).then((response) => {
      response.json().then((response) => {
        setStudentDetails(response.data);
      });
    });
  }, []);

  const addStudent = () => {
    console.log(name, subject, marks);
    setOpen(false);
    setName("");
    setSubject("");
    setMarks("");
    const data = { name, subject, marks };
    try {
      fetch("https://teacherportal-backend-r7my.onrender.com/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        credentials: "include",
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    } catch (err) {
      console.log(err);
    }

    setStudentDetails([...studentDetails, data]);
  };

  const barData = {
    labels: studentDetails.map(student => student.name),
    datasets: [
      {
        label: 'Marks',
        data: studentDetails.map(student => student.marks),
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  const doughnutData = {
    labels: studentDetails.map(student => student.subject),
    datasets: [
      {
        label: 'Subjects',
        data: studentDetails.map(student => student.marks),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40'
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40'
        ]
      }
    ]
  };

  return (
    <>
      <StudentsList studentDetails={studentDetails} />
      <Button
        style={{
          width: "100px",
          backgroundColor: "#555",
          color: "white",
          marginTop: "20px",
        }}
        onClick={handleOpen}
      >
        ADD
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            style={{ fontWeight: "bold" }}
          >
            Add a new student
          </Typography>
          <form action="" onSubmit={addStudent}>
            <input
              type="text"
              name="name"
              id="name"
              maxLength="20"
              minLength="3"
              required
              autoFocus
              title="Name may only contain letters with a length between 3 and 20"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              name="subject"
              id="subject"
              maxLength="20"
              minLength="3"
              required
              autoFocus
              title="Subject may only contain letters with a length between 3 and 20"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <input
              type="number"
              name="marks"
              id="marks"
              required
              placeholder="Marks"
              title="Marks may only contain numbers between 0 and 100"
              min="0"
              max="100"
              maxLength="3"
              minLength="0"
              step="1"
              value={marks}
              onChange={(e) => setMarks(e.target.value)}
            />
            <Button
              type="submit"
              style={{ backgroundColor: "#555", marginTop: "20px" }}
              variant="contained"
            >
              ADD
            </Button>
          </form>
        </Box>
      </Modal>
      
      <div style={{ marginTop: "30px" }}>
        <Typography variant="h5" component="h3">
          Student Performance
        </Typography>
        <Bar data={barData} />
      </div>
      
      <div style={{ marginTop: "30px" }}>
        <Typography variant="h5" component="h3">
          Subject Distribution
        </Typography>
        <Doughnut data={doughnutData} />
      </div>
    </>
  );
};
