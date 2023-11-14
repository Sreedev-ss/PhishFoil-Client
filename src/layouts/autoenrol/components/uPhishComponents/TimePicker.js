// import * as React from 'react';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { TimePicker } from '@mui/x-date-pickers/TimePicker';

// export default function BasicTimePicker() {
//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DemoContainer components={['TimePicker']}>
//         <TimePicker label="Basic time picker" />
//       </DemoContainer>
//     </LocalizationProvider>
//   );
// }

import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';

export default function TimePickerViewRenderers() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['TimePicker']}>
        <TimePicker
          label="From"
          viewRenderers={{
            hours: renderTimeViewClock,
            minutes: renderTimeViewClock,
            seconds: renderTimeViewClock,
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}

