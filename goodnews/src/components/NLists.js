import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, withStyles } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
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
const NLists = ({ classes, ...props }) => {

    // const[x,setX]=useState(0)
    useEffect(() => {
        props.fetchAllNLists()
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
                                    <TableCell>Description</TableCell>
                                    <TableCell>Date</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    props.nListList.map((record, index) => {
                                        return (<TableRow key={index} hover>
                                            <TableCell>
                                                {record.title}
                                            </TableCell>
                                            <TableCell>
                                                {record.description}
                                            </TableCell>
                                            <TableCell>
                                                {record.date}
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
    fetchAllNLists: actions.fetchAll
}
export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(NLists));