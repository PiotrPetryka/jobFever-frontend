import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function CalendarForm() {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                TextFieldProps={{
                    label: 'Date',
                    variant: 'outlined',
                    format: 'MM/DD/YYYY',
                }}
            />
        </LocalizationProvider>
    );
}