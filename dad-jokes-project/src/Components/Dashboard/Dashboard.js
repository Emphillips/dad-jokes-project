import React, { Component } from 'react';
import DashboardTitle from './DashboardTitle';
// import { Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';

// import { firestoreConnect } from 'react-redux';
// import { compose } from 'redux';







class Dashboard extends Component {
    render(){
        // const { auth } = this.props;
        // if (auth.uid) return <Redirect to='/signin' />

            return (
                <div className="dashboard-container">
                <DashboardTitle />
                </div>  
             )}
}       

// const mapStateToProps = (state) => {
//     console.log(state);
//     return {
//         auth: state.firebase.auth
//     }
// }

// export default connect (mapStateToProps)(Dashboard);

export default (Dashboard);