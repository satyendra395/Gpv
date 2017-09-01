import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import { mapReducers } from 'redux-map-reducers';
import * as job from './../../actions/job';

class Home extends React.Component {

    constructor(props, context) {
        super(props, context);
        console.log('proop',props,context);
    }

  componentDidMount(){
    this.props.jobListing();
  }

    render() {
        return (
            <div>
                <h1>job list Page</h1>

                  
                <table className="table">
                  {this.props.items.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.jobName}</td>
                        <td>{item.name}</td>
                      </tr>
                    );
                  })}
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
      items: state.job
      
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      jobListing: items => dispatch(job.jobListing()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

