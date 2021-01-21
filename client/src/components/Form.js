import React, { useReducer, useEffect, useState } from 'react';

function Form(props) {
    const [priority, setPriority] = useState([]);
    const [userInput, setUserInput] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            id: null,
            name: '',
            priority: 'Urgent'
        }
    );

    useEffect(() => {
        const fetchOptions = async () => {
            await fetch('/api/priority')
                .then(response => response.json())
                .then(data => {
                    setPriority(data);
                });
        }
        fetchOptions()
    }, []);

    const handleChange = evt => {
        const { name, value } = evt.target;
        setUserInput({ [name]: value });
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (userInput.name !== '' && userInput.priority.length > 0) {
            e.preventDefault();
            props.onSubmit({
                id: Math.floor(Math.random() * 10000),
                name: userInput.name,
                priority: userInput.priority
            });
            setUserInput('');
        } else {
            alert('please fill field!');
        }

    };

    const onKeyPress = (event) => {
        return (event.charCode >= 65 && event.charCode <= 90) || (event.charCode >= 97 && event.charCode <= 122);
    }

    return (
        <form onSubmit={handleSubmit} noValidate>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Job</label>
                            <input type="text" name="name" value={userInput.name} onChange={handleChange} className="form-control" maxLength="70" onKeyPress={event => onKeyPress(event)} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="priority" className="form-label">Priority</label>
                            <select className="form-control" value={'Urgent'} name="priority" onChange={handleChange} required>
                                <option value=""></option>
                                {priority.map((item, index) => (
                                    <option value={item.value} key={index}>{item.label}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <button onClick={handleSubmit} className="btn btn-primary">Create</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default Form;