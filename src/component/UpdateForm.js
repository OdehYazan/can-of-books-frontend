import React, { Component } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
export class UpdateForm extends Component {
    render() {
        return (
            <div>
                <Modal show={this.props.showUpdate} onHide={this.props.hideUpdate}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update form</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Form onSubmit={this.props.updateBookFun}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="text" name='name' defaultValue={this.props.name} />
                                <Form.Control type="text" name='description' defaultValue={this.props.description} />
                                <Form.Control type="text" name='status' defaultValue={this.props.status} />
                                {/* <input type="submit" value="Update" /> */}
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Update
                            </Button>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.hide} >
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default UpdateForm