// Author : Amanuel

import React from "react";
import Paper from '@material-ui/core/Paper';
import { ViewState, EditingState, IntegratedEditing } from '@devexpress/dx-react-scheduler';
import {
    Scheduler,
    MonthView,
    Toolbar,
    DateNavigator,
    Appointments,
    AppointmentForm,
    AppointmentTooltip,
    ConfirmationDialog,
    TodayButton,
} from '@devexpress/dx-react-scheduler-material-ui';


// Firebase Current Live Data
import { firebase_data } from '../firebase/firebase-posts'


// Store today's date
const today = new Date()
const today_str = String(today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()) 


// Calendar component
class MainCalendar extends React.PureComponent {
    
    // Constructor sets todays date
    // and all appointments
    constructor(props) {
        super(props);
        this.state = {
            currentDate: today_str,
            data : []
        };
        
        this.commitChanges = this.commitChanges.bind(this);
    }

    // Runs when appointments modified
    commitChanges({ added, changed, deleted }) {
        this.setState((state) => {
            let { data } = state;
            data = this.removeNullVals(data)
            let ret_data = []
            
            // When added just add to data arr and FIREBASE.set()
            if (added) {
                const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
                data = [...data, { id: startingAddedId, ...added }];
                this.setData(data)
            }
            // When updated update data arr and FIREBASE.set()
            if (changed) {
                data = data.map(appointment => (
                    changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
        
                this.updateData(data)
            }   
            // When deleted delete record and FIREBASE.remove()
            if (deleted !== undefined) {
                this.data = data.filter(appointment => appointment.id !== deleted);
                this.deleteData(deleted,data)
                ret_data = this.data
            }
            

            // Deals with "remove" bug
            if(ret_data.length!==0){
                data = ret_data
            }

            return { data }; 
        });
    }

    // Makes Call to /add 
    // For express to listen and 
    // add to database
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

    // Makes call to /update 
    // For express to listen and
    // update database
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

    // Makes call to /delete
    // For express to listen and
    // delete record from database
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

    // Component Lifecycle to 
    // Keep on updating appointments  
    componentDidMount(){
        firebase_data.then((result) => {
            this.setState({
                 data: result
            })
        })
    }

    // Custom function to remove null values
    removeNullVals(A){
        return A.filter(elem => elem!=null)
    }


    // Whats rendered through the screen!
    render() {

        // Recieve data and remove all null values
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