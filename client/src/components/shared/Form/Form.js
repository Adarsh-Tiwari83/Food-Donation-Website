import React, { useState } from 'react'
import TypesInput from './TypesInput'
import { Link } from "react-router-dom";
import { handleLogin, handleRegister } from '../../../services/authService';

const Form = ({ formType, submitBtn, formTitle }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [name, setName] = useState('');
    const [organisationName, setOrganisationName] = useState('');
    const [website, setWebsite] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');


    return (
        <div>
            <form onSubmit={(e) => {
                if (formType === "login") return handleLogin(e, email, password, role);
                else if (formType === "register") return handleRegister(
                    e,
                    name,
                    role,
                    email,
                    password,
                    organisationName,
                    website,
                    address,
                    phone);
            }}>
                <h1 className="text-center">{formTitle}</h1>
                <hr />
                <div className="d-flex mb-3">
                    <div className="form-check">
                        <input
                            type="radio"
                            className="form-check-input"
                            name="role"
                            id="donorRadio"
                            value={'donor'}
                            onChange={(e) => setRole(e.target.value)}
                            defaultChecked
                        />
                        <label htmlFor="donarRadio" className="form-check-label" >
                            Donor
                        </label>
                    </div>

                    <div className="form-check ms-2">
                        <input
                            type="radio"
                            className="form-check-input"
                            name="role"
                            id="adminRadio"
                            value={'admin'}
                            onChange={(e) => setRole(e.target.value)}

                        />
                        <label htmlFor="adminRadio" className="form-check-label" >
                            Admin
                        </label>
                    </div>

                    <div className="form-check ms-2">
                        <input
                            type="radio"
                            className="form-check-input"
                            name="role"
                            id="organisationRadio"
                            value={'organisation'}
                            onChange={(e) => setRole(e.target.value)}

                        />
                        <label htmlFor="organisationRadio" className="form-check-label" >
                            Organisation
                        </label>
                    </div>

                    <div className="form-check ms-2">
                        <input
                            type="radio"
                            className="form-check-input"
                            name="role"
                            id="volunteerRadio"
                            value={'volunteer'}
                            onChange={(e) => setRole(e.target.value)}

                        />
                        <label htmlFor="volunteerRadio" className="form-check-label" >
                            Volunteer
                        </label>
                    </div>


                </div>

                {/* switch statements */}

                {(() => {
                    switch (true) {
                        case formType === 'login': {
                            return (
                                <>
                                    <TypesInput
                                        labelText={"email"}
                                        labelFor={"forEmail"}
                                        inputType={'email'}
                                        name={'email'}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />

                                    <TypesInput
                                        labelText={"password"}
                                        labelFor={"forPassword"}
                                        inputType={'password'}
                                        name={'password'}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </>
                            );

                        }

                        case formType === 'register': {
                            return (
                                <>
                                    {(role === "admin" ||
                                        role === "donor" || role === "volunteer") && (
                                            <TypesInput
                                                labelText={"Name"}
                                                labelFor={"forName"}
                                                inputType={'text'}
                                                name={'name'}
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                        )
                                    }

                                    <TypesInput
                                        labelText={"email"}
                                        labelFor={"forEmail"}
                                        inputType={'email'}
                                        name={'email'}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />

                                    <TypesInput
                                        labelText={"password"}
                                        labelFor={"forPassword"}
                                        inputType={'password'}
                                        name={'password'}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />

                                    {(role === "organisation") && (
                                        <TypesInput
                                            labelText={"OrganisationName"}
                                            labelFor={"forOrganisationName"}
                                            inputType={'text'}
                                            name={'organisationName'}
                                            value={organisationName}
                                            onChange={(e) => setOrganisationName(e.target.value)}
                                        />
                                    )}



                                    <TypesInput
                                        labelText={"Website"}
                                        labelFor={"forWebsite"}
                                        inputType={'text'}
                                        name={'website'}
                                        value={website}
                                        onChange={(e) => setWebsite(e.target.value)}
                                    />

                                    <TypesInput
                                        labelText={"Address"}
                                        labelFor={"forAddress"}
                                        inputType={'text'}
                                        name={'address'}
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                    />


                                    <TypesInput
                                        labelText={"Phone"}
                                        labelFor={"forphone"}
                                        inputType={'text'}
                                        name={'phone'}
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </>
                            );
                        }
                    }
                })()}



                <div className="d-flex flex-row justify-content-between">
                    {formType === "login" ? (
                        <p>
                            Not registerd yet ? Register
                            <Link to="/register"> click here! !</Link>
                        </p>
                    ) : (
                        <p>
                            ALready User Please
                            <Link to="/login"> Login !</Link>
                        </p>
                    )}

                    <button className="btn btn-primary" type="submit">
                        {submitBtn}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Form