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


import { firebase_data } from '../firebase/firebase-posts'


const today = new Date()
const today_str = String(today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()) 


class MainCalendar extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            currentDate: today_str,
            data : []
        };
        
        this.commitChanges = this.commitChanges.bind(this);
    }

    commitChanges({ added, changed, deleted }) {
        this.setState((state) => {
            let { data } = state;
            data = this.removeNullVals(data)
            let ret_data = []

            if (added) {
                const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
                data = [...data, { id: startingAddedId, ...added }];
                this.setData(data)
            }
            if (changed) {
                data = data.map(appointment => (
                    changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
        
                this.updateData(data)
            }   
            if (deleted !== undefined) {
                this.data = data.filter(appointment => appointment.id !== deleted);
                this.deleteData(deleted,data)
                ret_data = this.data
            }
            
            if(ret_data!=[]){
                data = ret_data
            }

            return { data }; 
        });
    }

    setData(data_json){
        const submit = () => {
            fetch("/add", {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data_json),
            })
                .then((res) => {
                    return res.json()
                })
        };
        submit()
    }

    updateData(data_json){
        const submit = () => {
            fetch("/update", {
                method: "put",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data_json),
            })
                .then((res) => {
                    return res.json()
                })
        };
        submit()
    }

    deleteData(id,data_json){
        const submit = () => {
            fetch("/del", {
                method: "delete",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({name:id}),
            })
                .then((res) => {
                    return res.json()
                })
                .catch((e) => {
                    console.log("ERROR DELETING: " + e)
                })
        };
        submit()
    }

    componentDidMount(){
        firebase_data.then((result) => {
            this.setState({
                 data: result
            })
        })
    }

    removeNullVals(A){
        return A.filter(elem => elem!=null)
    }

    
    render() {
        const { currentDate, data } = this.state;
        

        let pure_data = this.removeNullVals(data)
        return (
            <Paper>
                <Scheduler
                data={pure_data}>
                <ViewState
                        defaultCurrentDate={currentDate}/>
                <EditingState
                        onCommitChanges={this.commitChanges}/>
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