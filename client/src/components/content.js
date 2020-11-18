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

class MainCalendar extends React.PureComponent {
    constructor(props){
        super(props)
        let today = new Date();
        this.state = {
            appos : appointments,
            currentDate: String(today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate())
        }

        this.commit = this.commitChanges.bind(this)
    }

    commitChanges({ added, changed, deleted }) {
        this.setState((state) => {
            let { data } = state;
            if (added) {
                const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
                data = [...data, { id: startingAddedId, ...added }];
            }
            if (changed) {
                data = data.map(appointment => (
                    changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
            }
            if (deleted !== undefined) {
                data = data.filter(appointment => appointment.id !== deleted);
            }
            return { data };
        });
    }

      render() {
        const { currentDate, data } = this.state;

        return (

            <Paper>
                <Scheduler
                data={data}
                >
                <ViewState
                        currentDate={currentDate}
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
                <AppointmentForm />
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