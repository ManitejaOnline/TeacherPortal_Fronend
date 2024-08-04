import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const StudentsList = ({ studentDetails }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedStudentId, setSelectedStudentId] = React.useState(null);

  const handleClick = (event, studentId) => {
    setAnchorEl(event.currentTarget);
    setSelectedStudentId(studentId);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedStudentId(null);
  };

  const handleEdit = () => {
    handleClose();
    // Redirect to edit page
    window.location.href = `/students/edit/${selectedStudentId}`;
  };

  const handleDelete = () => {
    handleClose();
    // Redirect to delete page
    window.location.href = `/students/delete/${selectedStudentId}`;
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-menu' : undefined;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 600 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: "bold" }}>Name</TableCell>
            <TableCell style={{ fontWeight: "bold" }} align="right">Subject</TableCell>
            <TableCell style={{ fontWeight: "bold" }} align="right">Marks</TableCell>
            <TableCell style={{ fontWeight: "bold" }} align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {studentDetails.map((student) => (
            <TableRow key={student._id}>
              <TableCell component="th" scope="row" style={{ display: "flex", alignItems: "center" }}>
                <Avatar sx={{ width: 50, height: 50, bgcolor: "#00BFFF", color: "white" }}>
                  {student.name.charAt(0)}
                </Avatar>
                <div style={{ marginLeft: "10px" }}>
                  {student.name}
                </div>
              </TableCell>
              <TableCell align="right">{student.subject}</TableCell>
              <TableCell align="right">{student.marks}</TableCell>
              <TableCell align="right">
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <IconButton onClick={(event) => handleClick(event, student._id)} size="small">
                    <ExpandMoreIcon />
                  </IconButton>
                  <Menu id={id} anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                    <MenuItem onClick={handleEdit}>Edit</MenuItem>
                    <MenuItem onClick={handleDelete}>Delete</MenuItem>
                  </Menu>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
