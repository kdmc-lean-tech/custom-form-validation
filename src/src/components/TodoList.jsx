import React, { useContext } from 'react';
import { Container, Card } from 'react-bootstrap';
import { TodoContext } from '../hooks/todoContext';

export const TodoList = () => {
  const { todos } = useContext(TodoContext);
  return (
    <Container className='mt-5'>
      {
        todos.map((todo, idx) =>
          <Card key={ idx } className='mb-4'>
            <Card.Header>{ todo.email }</Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
              <p>
                { todo.desc }
              </p>
              <footer className="blockquote-footer">
                <cite title="Source Title">{ todo.notes }</cite>
              </footer>
              </blockquote>
            </Card.Body>
          </Card>
        )
      }
    </Container>
  );
}
