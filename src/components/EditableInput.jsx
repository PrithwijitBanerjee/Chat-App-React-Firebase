import React, { useCallback, useState } from 'react'
import { InputGroup, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faEdit, faCheck } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';


const EditableInput = ({ initialValue,
    onSave,
    placeholder = "Write your value",
    label = null,
    emptyMsg = "Input is empty",
    ...inputProps
}) => {
    const [input, setInput] = useState(initialValue);
    const [isEditable, setIsEditable] = useState(false)
    const onSaveChanges = async () => {
            let trimmed = input.trim();
            if(trimmed === "")
            {
                toast.error(emptyMsg,{
                    theme:'colored',
                    position:'top-center'
                });
                await onSave(initialValue);
                setIsEditable(false);
                return;
            }
            if(trimmed !== initialValue)
            {
                await onSave(trimmed);
            }
            setIsEditable(false);
    }
    const onEditChange = useCallback(() => {
        setIsEditable(status => !status);
    }, []);
    const onInputChange = useCallback((e) => {
        setInput(e.target.value);
    }, []);
    return (
        <>
            {label}
            <InputGroup className="mb-3">
                <Form.Control
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    {...inputProps}
                    placeholder={placeholder}
                    value={input}
                    onChange={onInputChange}
                    disabled={!isEditable}
                />
                <Button variant="outline-secondary" id="button-addon2" onClick={onEditChange}>
                    {isEditable ? <FontAwesomeIcon icon={faTimes} size='sm'/> : <FontAwesomeIcon icon={faEdit} size='sm'/>}
                </Button>
                {
                    isEditable && <Button variant="outline-secondary" id="button-addon2" onClick={onSaveChanges}>
                        <FontAwesomeIcon icon={faCheck} size="sm"/>
                    </Button>
                }
            </InputGroup>
        </>
    )
}

export default EditableInput