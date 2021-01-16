import React, { useContext } from 'react';
import {
  Container,
  Jumbotron,
  Form,
  Row,
  Col,
  Button
} from 'react-bootstrap';
import { useForm } from '../hooks/customForm';
import { isRequired, emailValidator } from '../validators/formValidators';
import { useHistory } from 'react-router-dom';
import { TodoContext } from '../hooks/todoContext';

const initialState = {
  desc: null,
  notes: null,
  email: null
}

export const AddTodo = () => {
  const {
    values,
    handleOnChange,
    handleOnSubmit,
    errors,
    isSubmitting } = useForm(initialState, submit);
  const history = useHistory();
  const { setTodos } = useContext(TodoContext);

  function submit() {
    setTodos(todos => [...todos, values]);
    history.push('/');
  }

  return (
    <Container>
      <Jumbotron className='text-center'>
        <h1>Add Todo</h1>
      </Jumbotron>
      <Row className='d-flex justify-content-center'>
        <Col md='6'>
          <Form onSubmit={ handleOnSubmit }>
          <Form.Group>
            <Form.Control
              placeholder='Description'
              name='desc'
              onChange={ e => handleOnChange(e, [isRequired]) }
              onFocus={ e => handleOnChange(e, [isRequired]) }
            ></Form.Control>
            { errors && errors.desc && <p className='text-danger mt-3'>Description is required</p> }
          </Form.Group>
          <Form.Group>
            <Form.Control
              placeholder='Notes'
              name='notes'
              onChange={ e => handleOnChange(e, [isRequired]) }
              onFocus={ e => handleOnChange(e, [isRequired]) }
            ></Form.Control>
            { errors && errors.notes && <p className='text-danger mt-3'>Notes is required</p> }
          </Form.Group>
          <Form.Group>
            <Form.Control
              placeholder='Email'
              name='email'
              onChange={ e => handleOnChange(e, [isRequired, emailValidator]) }
              onFocus={ e => handleOnChange(e, [isRequired, emailValidator]) }
            ></Form.Control>
            { errors && errors.email && <p className='text-danger mt-3'>Email is required</p> }
          </Form.Group>
          <div className='d-flex justify-content-center'>
            <Button disabled={ !isSubmitting } type='submit'>Save</Button>
          </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
