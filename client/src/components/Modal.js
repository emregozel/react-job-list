import React, { useReducer } from 'react';

function Modal(props) {
    const [userInput, setUserInput] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            id: props.edit.id,
            name: props.edit.name,
            priority: props.edit.priority
        }
    );

    const handleChange = evt => {
        const { name, value } = evt.target;

        setUserInput({ [name]: value });
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: props.edit.id,
            name: userInput.name,
            priority: userInput.priority
        });
        setUserInput('');
    };

    return (
        <div className="modal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Edit Job</h5>
                        <button type="button" className="close" onClick={() => props.closeModal()}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="mb-3">
                                            <label htmlFor="name" className="form-label">Job</label>
                                            <input type="text" name="name" value={userInput.name} onChange={handleChange} className="form-control" maxLength="70" disabled />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="priority" className="form-label">Priority</label>
                                            <select className="form-control" name="priority" defaultValue={userInput.priority} onChange={handleChange}>
                                                <option value="Urgent">Urgent</option>
                                                <option value="Regular">Regular</option>
                                                <option value="Trivial">Trivial</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" onClick={() => props.closeModal()} className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" onClick={handleSubmit} className="btn btn-primary">Update</button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Modal;