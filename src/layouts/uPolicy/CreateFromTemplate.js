import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import addImage from 'assets/images/images.png'
import { Link } from 'react-router-dom';

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    height: "90%",
    bgcolor: "background.paper",
    border: "1px solid #000",
    boxShadow: 24,
    p: 4,
};


function createData(name, val) {
    return {
        name,
        val
    };
}

function Row(props) {
    const [open, setOpen] = React.useState(false);
    const { row } = props;

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <Typography variant="h6" component="div">
                    {row.name}
                </Typography>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                    </TableRow>
                                </TableHead>
                                <TableBody sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <div style={{ width: '250px', height: '250px', border: '0.2px solid #E8EBED' }}>
                                        <div style={{ width: '100%', height: '80%', backgroundColor: "#1d7be4" }}></div>
                                        <div style={{ padding: '10px' }}>
                                            <Typography variant="h6" component="div">
                                                Sample
                                            </Typography>
                                        </div>
                                    </div>
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

const rows = [
    createData('Compliance policies',),
    createData('Essential Policies'),
    createData('Encryption Policies'),
    createData('Mobile Devices Policies'),
    createData('Server Policies'),
    createData('Other Policies'),
];

export default function CreateFromTemplate() {
    return (
        <Box sx={style}>
            <Typography variant="h4" gutterBottom component="div">
                Choose a policy template
            </Typography>
            <p style={{ fontSize: '14px', color: 'gray', marginTop: '10px', marginBottom: '10px', fontFamily: "sans-serif" }}>You can use one of our pre-made policies as a template to create your own.</p>
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <Row key={row.name} row={row} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <div style={{ border: "0.5px solid #d2d6da", width: '30%', borderRadius: '4px', height: '15rem', marginTop: '1.2rem' }}>
                <Link to="/uPolicy/createPolicy"><div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={addImage} alt="name" />
                </div></Link>
                <Typography sx={{ fontSize: "medium", color: "black", fontWeight: '500', paddingLeft: '15px' }} >
                    Create template from Scratch
                </Typography>
            </div>
        </Box>
    );
}

Row.propTypes = {
    row: PropTypes.shape({

        name: PropTypes.string.isRequired,
        val: PropTypes.node,

    }).isRequired,
};
