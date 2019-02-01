/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-shadow */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLeads, deleteLead } from '../../actions/leads';

export class Leads extends Component {
  static propTypes = {
    leads: PropTypes.array.isRequired,
    getLeads: PropTypes.func.isRequired,
    deleteLead: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { getLeads } = this.props;
    getLeads();
  }

  render() {
    const { leads, deleteLead } = this.props;
    return (
      <>
        <h2>Leads</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Namee</th>
              <th>Email</th>
              <th>Message</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {leads.map(lead => (
              <tr key={lead.id}>
                <td>{lead.id}</td>
                <td>{lead.name}</td>
                <td>{lead.email}</td>
                <td>{lead.message}</td>
                <td>
                  <button
                    onClick={this.props.deleteLead.bind(this, lead.id)}
                    type="button"
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

const mapStateToProps = state => ({
  leads: state.leads.leads
});

export default connect(
  mapStateToProps,
  { getLeads, deleteLead }
)(Leads);
