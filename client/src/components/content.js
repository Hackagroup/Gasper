import React from "react";
import Paper from '@material-ui/core/Paper';
import { ViewState, EditingState, IntegratedEditing } from '@devexpress/dx-react-scheduler';
import {
    Scheduler,
    DayView,
    MonthView,
    Toolbar,
    DateNavigator,
    Appointments,
    AppointmentForm,
    AppointmentTooltip,
    ConfirmationDialog,
    TodayButton,
} from '@devexpress/dx-react-scheduler-material-ui';

import { appointments } from '../static/calendar-data';

import { Main } from './main'

const today = new Date()
const today_str = String(today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate())

class MainCalendar extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: appointments,
            currentDate: today_str,
        };
        
        this.commitChanges = this.commitChanges.bind(this);
    }

    commitChanges({ added, changed, deleted }) {
        this.setState((state) => {
            let { data } = state;
            console.log(added,changed,deleted)
            if (added) {
                const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
                data = [...data, { id: startingAddedId, ...added }];
                this.setData(data)
            }
            if (changed) {
                data = data.map(appointment => (
                    changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
            }   
            if (deleted !== undefined) {
                data = data.filter(appointment => appointment.id !== deleted);
            }
            console.log(data)
            console.log("PRINTED")
            return { data };
        });
    }

    setData(data_json){
        alert("Form Submitted!")

        const submit = () => {
            let data = { theme: "My theme" };
            fetch("/add", {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data_json),
            })
                .then((res) => res.json())
                .then((result) => {
                    console.log(result);
                });
        };

        submit()

    }

      render() {
        const { currentDate, data } = this.state;
        return (

            <Paper>
                <Scheduler
                data={data}
                >
                <ViewState
                        defaultCurrentDate={currentDate}
                    />
                <EditingState
                        onCommitChanges={this.commitChanges}
                    />
                <IntegratedEditing />
                <MonthView />
                <ConfirmationDialog />
                <Toolbar />
                <DateNavigator />
                <TodayButton />
                <Appointments />
                <AppointmentTooltip
                        showOpenButton
                        showDeleteButton
                    />
                <AppointmentForm
                    type="numberEditor">
                        <AppointmentForm.TextEditor placeholder="This is my placeholder!" />
                    </AppointmentForm>
                   


                    
                
                </Scheduler>
            </Paper>

        );
    }
}


export default MainCalendar
// export const MainCalendar = () => {
//     const data = appointments
//     return (
//       <Paper>
//         <Scheduler
//           data={data}
//         >
//           <ViewState
//             defaultCurrentDate="2018-07-27"/>
//           <MonthView />
//           <Toolbar />
//           <DateNavigator />
//           <TodayButton />
//           <Appointments />
//         </Scheduler>
//       </Paper>
//     );
// }