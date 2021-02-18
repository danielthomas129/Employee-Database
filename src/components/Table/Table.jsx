import React from "react";
import Search from "../Search/Search";
import API from "../utils/API";
import axios from 'axios';
import "./Table.css";

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      filteredEmployees: []
    };

    this.handleInput = this.handleInput.bind(this);
  }

  async handleInput(e) {
        const query = e.currentTarget.value;

        console.log(query)

        const filteredList = await this.state.employees.filter(employee => {
          const fullName = `${employee.name.first} ${employee.name.last}`.toLowerCase();
          return fullName.includes(query.toLowerCase());
        })
        
        this.setState({
          filteredEmployees: filteredList
        })

        console.log(this.state.filteredEmployees)

  }

  async componentDidMount() {

    const initialEmployees =  await API.getTenRandomUser();

    console.log(initialEmployees)

    this.setState({
      employees: initialEmployees.data.results,
      filteredEmployees: initialEmployees.data.results
    });
  }

  render() {
    return (
      <>
      <Search handleInput={this.handleInput} />

      <table className="w-100">
        <thead>
          <tr>
            <th>SnapShot</th>
            <th
              data-dir={1}
              data-symbol="▼"
    
            >
              Name
            </th>
            <th>Phone</th>
            <th>Email</th>
            <th
              data-dir={1}
              data-symbol="▼"
       
            >Date of Birth</th>
          </tr>
        </thead>
      <br />
        <tbody>
          {this.state.filteredEmployees.map((employee, i) => { 
            console.log('hello girl')
            return (
            <tr key={i}>
              <td>
                <img src={employee.picture.thumbnail} alt="Employee glamour shot." />
              </td>
              <td>
                {employee.name.first} {employee.name.last}
              </td>
              <td>{employee.phone}</td>
              <td>
                <a href={`mailto:${employee.email}`}>{employee.email}</a>
              </td>
              <td>{new Date(employee.dob.date).toLocaleDateString()}</td>
            </tr>
          )})}
        </tbody>
      </table>
    </>
    );
  }
}


export default Table;