import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";

const MyAlert = styled.div`
  .alert {
    padding: 0.8rem;
    margin: 1rem 0;
    opacity: 0.9;
    color: #333;
  }
  .alert-primary {
    background: #7d72c1;
    color: #fff;
  }
  .alert-danger {
    background: #ff5f40;
    color: #fff;
  }
`;
const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <MyAlert>
      <div key={alert.id} className={`alert alert-${alert.alertType}`}>
        {alert.msg}
      </div>
    </MyAlert>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
