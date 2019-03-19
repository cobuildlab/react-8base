import React, { Component } from 'react';
import { Button, Card, Heading, TextAreaField } from '@8base/boost';
import gql from 'graphql-tag';
import { withApollo } from 'react-apollo';

const TASKS_QUERY = gql`
query{
  tasksList{
    count
    items{
      id
      name
      createdBy{
        id
        firstName
        lastName
      }
    }
  }
}
`;

const TASK_CREATE = gql`
  mutation($data: TaskCreateInput!){
    taskCreate(data: $data){
      id
    }
  }
`;


class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      text: '',
    };
  }

  componentDidMount(): void {
    console.log(this.props);
    this.props.client.query({ query: TASKS_QUERY, fetchPolicy: 'network-only' }).then((data) => {
      console.log(data.data);
      console.log(data.data.tasksList);
      this.setState({
        tasks: data.data.tasksList.items,
      });
    });
  }

  createTask = () => {
    const data = { name: this.state.text } ;
    this.props.client.mutate({ mutation: TASK_CREATE, variables: {data} }).then((data) => {
      this.props.client.query({ query: TASKS_QUERY, fetchPolicy: 'network-only' }).then((data) => {
        console.log(data.data);
        console.log(data.data.tasksList);
        this.setState({
          tasks: data.data.tasksList.items,
        });
      });
    });
  };

  render() {

    return (
      <Card.Plate style={{ marginLeft: '2rem' }}>
        {this.state.tasks.map((task, i) => <Card.Header key={i}><Heading key={task.id} type="h4"
                                                                         text={task.name}/></Card.Header>)}

        <TextAreaField value={this.state.text} input={{
          name: '',
          onChange: (event) => this.setState({ text: event.target.value }),
        }}>

        </TextAreaField>
        <Button text={'NEW '} onClick={this.createTask}/>
      </Card.Plate>
    );
  }
}

export default withApollo(Dashboard);
