import { Col, Form, Row, Stack } from "react-bootstrap";
import Select from 'react-select';

export function NoteForm() {
    return(
        <Form>
          <Stack gap={4}>
            <Row>
              <Col>
                <Form.Group controlId="title">
                  <Form.Label>Title</Form.Label>
                  <Form.Control required />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="tags">
                  <Form.Label>Tags</Form.Label>
                  <Select isMulti />
                </Form.Group>
              </Col>
            </Row>
          </Stack>
        </Form>
    )
}