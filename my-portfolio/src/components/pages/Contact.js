import React from 'react';
import Button from '@mui/material/Button';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

class Contact extends React.Component {

    state = {
        name: '',
        email: '',
        message: '',
    }

    handleChange = (event) => {
        const email = event.target.value;
        this.setState({ email });
    }

    handleSubmit = () => {
        // your submit logic
    }

    render() {
        const { email } = this.state;
        return (
            <ValidatorForm
                ref="form"
                onSubmit={this.handleSubmit}
                onError={errors => console.log(errors)}
            >
                <TextValidator
                    label="Name"
                    onChange={this.handleChange}
                    name="email"
                    value={email}
                    validators={['required', 'isEmail']}
                    errorMessages={['this field is required']}
                />
                <br/>
                <TextValidator
                    label="Email"
                    onChange={this.handleChange}
                    name="email"
                    value={email}
                    validators={['required', 'isEmail']}
                    errorMessages={['this field is required']}
                />
                <br/>
                <TextValidator
                    label="Message"
                    onChange={this.handleChange}
                    name="email"
                    value={email}
                    validators={['required', 'isEmail']}
                    errorMessages={['this field is required']}
                />

                <Button type="submit">Submit</Button>
            </ValidatorForm>
        );
    }
}

export default Contact;