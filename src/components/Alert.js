import React from 'react';
import PropTypes from 'prop-types';

export default function Alert(props) {
  const capitalise=(word)=>{
    const lower=word.toLowerCase();
    return lower.charAt(0).toUpperCase() +lower.slice(1);
    }
  return (
    <div style={{height: '50px'}}>
        {props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
             {capitalise(props.alert.type)}:{props.alert.message}</div>}
    </div>
  )
}

Alert.propTypes = {
  alert: PropTypes.shape({
    type: PropTypes.string,
    message: PropTypes.string
  })
};

