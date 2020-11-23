import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, withStyles } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../actions/nList";
import NListForm from "./NListForm";

const styles = theme => ({
    root: {
        "& .MuiTableCell-head": {
            fontSize: "1.25rem"
        }
    },
    paper: {
        margin: theme.spacing(2),
        padding: theme.spacing(2)
    }
})
//props.classes
//const{classes,props}=props
const TLists = ({ classes, ...props }) => {

    // const[x,setX]=useState(0)
    useEffect(() => {
        props.fetchAllTLists()
    }, [])//componentDidMount
    return (
        <Paper className="classes.paper" elevation={3}>
            <Grid container>
                {/* <Grid item xs={6}>
                    <NListForm />
                </Grid> */}
                <Grid item xs={12}>
                    <TableContainer>
                        <Table>
                            <TableHead className={classes.root}>
                                <TableRow>
                                    <TableCell>Title</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    props.nListList.map((record, index) => {
                                        return (<TableRow key={index} hover>
                                            <TableCell>
                                                {record.title}
                                                <br></br>
                                                <Link to={"/details"}>
                                                    <button>Details</button> </Link>
                                                {/* <a href="/details">Details</a> */}
                                            </TableCell>
                                        </TableRow>)
                                    })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Paper>
    );
}
const mapStateToProps = state => ({
    nListList: state.nList.list
})
const mapActionToProps = {
    fetchAllTLists: actions.fetchAll
}
export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(TLists));