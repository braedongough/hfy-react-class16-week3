import { useState } from 'react'

function SubmitShiftForm({ addNewShift }) {
    const [employeeName, setEmployeeName] = useState('')
    const [startTime, setStartTime] = useState('')
    const [endTime, setEndTime] = useState('')

    const onSubmit = (event) => {
        event.preventDefault()

        addNewShift(employeeName, startTime, endTime)

        setEmployeeName('')
        setStartTime('')
        setEndTime('')
    }
    return (
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="employeeName">Employee Name</label>
                <input
                    type="text"
                    id="employeeName"
                    placeholder="Employee name"
                    value={employeeName}
                    onChange={(event) => {
                        const value = event.target.value
                        setEmployeeName(value)
                    }}
                />
            </div>
            <div>
                <label htmlFor="startTime">Start Time</label>
                <input
                    type="time"
                    id="startTime"
                    value={startTime}
                    onChange={(event) => {
                        const value = event.target.value
                        setStartTime(value)
                    }}
                />
            </div>
            <div>
                <label htmlFor="endTime">End Time</label>
                <input
                    type="time"
                    id="endTime"
                    value={endTime}
                    onChange={(event) => {
                        const value = event.target.value
                        setEndTime(value)
                    }}
                />
            </div>
            <button type="submit">Save Shift</button>
        </form>
    )
}

function ShiftOverview({ employeeShifts }) {
    return (
        <div>
            <h2>Shift overview</h2>
            {employeeShifts.length
                ? employeeShifts.map((shift) => (
                      <div>
                          <div>Name: {shift.employeeName}</div>
                          <div>Start time: {shift.startTime}</div>
                          <div>End time: {shift.endTime}</div>
                      </div>
                  ))
                : 'No one is working'}
        </div>
    )
}

function TimeRegistration() {
    const [employeeShifts, setEmployeeShifts] = useState([])

    const addNewShift = (employeeName, startTime, endTime) => {
        const newShift = { employeeName, startTime, endTime }
        setEmployeeShifts([...employeeShifts, newShift])
    }

    return (
        <div>
            <h1>Time Registration</h1>
            <SubmitShiftForm addNewShift={addNewShift} />
            <ShiftOverview employeeShifts={employeeShifts} />
        </div>
    )
}

export default TimeRegistration
