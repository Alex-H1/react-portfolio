import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

export default function Contact({classes}) {
  const [errorText, setErrorText] = React.useState();
  const [email, setEmail] = React.useState();

  const onChange = (event) => {
    if (event.target.value.match(emailRegex)) {
      setErrorText("");
      setEmail(event.target.value);
    } else {
      setErrorText("invalid format");
    }
  };
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          label="Name"
          name="Name"
          defaultValue="Name"
        />

      </div>
      <div>
      <TextField
        defaultValue="Email"
        label="Email"
        name="Email"
        error={errorText}
        onChange={onChange}
        value={email}
      />
      </div>
      <div>

        <TextField
          label="Message"
          name='Message'
          defaultValue="Message"
        />
      </div>
      <Button variant="outlined">Submit</Button>

    </Box>
  );
}
