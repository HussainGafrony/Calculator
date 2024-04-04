import React, { useContext } from 'react'
import { CalcContext } from '../context/CalcContext'
import TextField from '@mui/material/TextField/TextField';
import { StyledInputValue } from './Style';

function InputValue() {
    const { calc } = useContext(CalcContext);
    return (
        <StyledInputValue>
            <TextField className='screen'
                value={calc.num ? calc.num : calc.res}
                size="small"
                variant="standard"
                InputProps={{ readOnly: true, disableUnderline: true, style: { fontSize: 25 } }}

            />
        </StyledInputValue>
    )
}

export default InputValue