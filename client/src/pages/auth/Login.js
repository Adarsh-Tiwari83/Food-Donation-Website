import React from 'react'
import Form from '../../components/shared/Form/Form'

const Login = () => {
    return (
        <>
            <div className="row g-0">
                <div className="col-md-8 form-banner">
                    <img src="./assests/images/banner2.jpg" alt="loginimage" />
                </div>

                <div className="col-md-4 form-container">
                    <Form
                        formTitle={'Login Page'}
                        submitBtn={'Login'}
                        formType={'login'} />
                </div>
            </div>
        </>
    )
}

export default Login