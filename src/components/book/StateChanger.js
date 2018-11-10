import React, { Component } from 'react'

class StateChanger extends Component {

    onChangeValue(event){
        console.log(event.target.value);
    }

    render() {
        const options = [
            {value: 'move', label: 'Move to...', disabled: 'disabled'},
            {value: 'currentlyReading', label: 'Currently Reading', disabled: null},
            {value: 'wantToRead', label: 'Want to Read', disabled: null},
            {value: 'read', label: 'Read', disabled: null},
            {value: 'none', label: 'None', disabled: null},
        ];
        const selectedValue = 'read';
        
        return (
            
            <select value={selectedValue} onChange={this.onChangeValue}>
                {
                    options.map(e => (
                        <option key={e.value} value={e.value} disabled={e.disabled} >{e.label}</option>
                    ))
                }
            </select>
        )
    }
}

export default StateChanger