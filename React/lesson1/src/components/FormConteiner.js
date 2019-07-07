import React from 'react';
import FormComponent from './FormComponent';

class FormConteiner extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destinaion: "",
            fawColor: "",
            directoryRegistretion: {
                isVegan: false,
                isVarior: false,
                isLuky: false,

            },
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        const { name, value, type, checked } = event.target
        type === "checkbox" ?
            this.setState(prevState => {
                return {
                    directoryRegistretion: {
                        ...prevState.directoryRegistretion,
                        [name]: checked
                    }
                }
            })
            : this.setState({ [name]: value })

    }

    render() {
        return (
        <FormComponent 
                handleChange={this.handleChange}
                state={this.state}
        />
        )
    }
}


export default FormConteiner