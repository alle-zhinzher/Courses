import React from 'react'

function FormComponent(props){
        return (
            <div>
                <form>
                    <input type="text" name="firstName" placeholder="First name" onChange={props.handleChange} /><hr />
                    <input type="text" name="lastName" placeholder="Last name" onChange={props.handleChange} /><hr />
                    <input type="text" name="age" placeholder="Age" onChange={props.handleChange} /><hr />

                    <label>
                        <input type="radio"
                            name="gender"
                            value="male"
                            checked={props.state.gender === "male"}
                            onChange={props.handleChange} />male
                    </label>
                    <label>
                        <input type="radio"
                            name="gender"
                            value="female"
                            checked={props.state.gender === "female"}
                            onChange={props.handleChange} />Female
                    </label>
                    <select value={props.state.fawColor} onChange={props.handleChange} name="fawColor">
                        <option value="blue">1</option>
                        <option value="red">2</option>
                        <option value="green">3</option>
                    </select>
                    <input type="checkbox" name="isVarior" checked={props.state.directoryRegistretion.isVarior} onChange={props.handleChange} /> You Varior? <hr />
                    <input type="checkbox" name="isVegan" checked={props.state.directoryRegistretion.isVegan} onChange={props.handleChange} /> You Vegan? <hr />
                    <input type="checkbox" name="isLuky" checked={props.state.directoryRegistretion.isLuky} onChange={props.handleChange} /> You Lucky? <hr />
                </form>
                <p>Your name:      {props.state.firstName}</p>
                <p>Your Last Name:     {props.state.lastName}</p>
                <p>Your Age:     {props.state.age}</p>
                <p>Your Gender:     {props.state.gender}</p>
                <p>Varior:     {props.state.directoryRegistretion.isVarior ? "True" : "False"}</p>
                <p>Vegan:     {props.state.directoryRegistretion.isVegan ? "True" : "False"}</p>
                <p>Luky:     {props.state.directoryRegistretion.isLuky ? "True" : "False"}</p>



            </div>
        )
}
export default FormComponent
