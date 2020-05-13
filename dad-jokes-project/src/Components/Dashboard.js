import React, { Component } from 'react';
import DashboardTitle from './DashboardTitle';
import { connect } from 'react-redux';


class Dashboard extends Component {
    render(){
            return (
                <div className="dashboard-container">
                <DashboardTitle />
                </div>  
             )}
}       

// const mapStateToProps = (state) => {
//     return {
        
//     }
// }
export default connect() (Dashboard);