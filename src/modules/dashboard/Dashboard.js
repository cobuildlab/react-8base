import React, { Component } from 'react';
import { Card, Heading } from '@8base/boost';
import gql from 'graphql-tag';
import { withApollo } from 'react-apollo';

const TASKS_QUERY = gql`
  query {
    tasksList {
      count
      items {
        id
        name
        done
        user{
          firstName
        }
      }
    }
  }
`;


class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
  }

  componentDidMount(): void {
    console.log(this.props);
    this.props.client.query({ query: TASKS_QUERY, fetchPolicy: 'network-only' }).then((data) => {
      console.log(data);
    });
  }

  render() {

    return (
      <Card.Plate style={{ marginLeft: '2rem' }}>
        {this.state.tasks.map((task) => <Card.Header><Heading key={task.id} type="h4" text={task.name}/></Card.Header>)}
      </Card.Plate>
    );
  }
}

export default withApollo(Dashboard);
