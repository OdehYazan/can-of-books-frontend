import React, { Component } from 'react'

export class UpdateForm extends Component {
    render() {
        return (
            <div> 

                <form onSubmit={this.props.updateBookFun}>

                    <input type="text" name='name' defaultValue={this.props.name}/>
                    <input type="text" name='description' defaultValue={this.props.description} />
                    <input type="text" name='status' defaultValue={this.props.status} />
                    <input type="submit" value="Update" />
                </form>
            </div>
        )
    }
}

export default UpdateForm