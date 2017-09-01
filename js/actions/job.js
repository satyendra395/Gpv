import * as actionTypes from './actionType';
import Axios from 'axios';

//const apiUrl = 'http://192.168.1.47:7080/Cybersn/';

export const jobList = (jobs) => {
console.log('items....',jobs);
  return {
    type: actionTypes.JOB_LIST_SUCCESS,
    jobs
  }
};

export const jobListing = () => {
  return (dispatch) => {
    return Axios.get('http://192.168.1.47:7080/Cybersn/jobs')
      .then(response => {
        dispatch(jobList(response.data))
        console.log('response-----------------',response.data)
      })
      .catch(error => {
        throw(error);
      });
  };
};
