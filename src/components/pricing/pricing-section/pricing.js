import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './_pricing.css';
import logo_mini from '../../../assets/images/logo-mini.svg';
import $ from "jquery";
import ThankYouModal from '../../common/modals/ThankYouModal';
import FormControl from '@material-ui/core/FormControl';
import {TextField, Select} from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

let error_messages = [];
let success_message = [];

class PricingForm extends Component {
    initialState = {
        firstName: '',
        lastName: '',
        workEmail: '',
        phoneNumber: '',
        companyName: '',
        agencySystem: 'Select',
        message: '',
        hasError: false,
        successSent: false,
        errorsField: []
    };

    constructor(props) {
        super(props);
        this.state = this.initialState;
    }

    validateEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email.trim());
    };

    validatePhone = (phone) => {
        return phone.length > 5;
        /*const re = /^\d+$/;
        return re.test(phone);*/
    };


    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        if (this.state.successSent) {
            success_message = [];
            this.setState({successSent: false})
        }
        this.setState({
            [name]: value
        });
    };

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    checkValidation = (ev) => {
        ev.preventDefault();
        error_messages = [];
        success_message = [];
        let errors = [];
        let hasError = false;

        const {firstName, workEmail, phoneNumber, companyName, agencySystem} = this.state;
        this.setState({hasError: hasError});
        this.setState({errorsField: errors});
        if (!firstName || firstName === '') {
            errors['firstName'] = 1
            error_messages.push(<p key='firstName'>
                <span className="font-bold">Full name: </span>
                Required field
            </p>);
            hasError = true;
        }

        if (workEmail) {
            if (!this.validateEmail(workEmail)) {
                errors['email'] = 1
                error_messages.push(<p key='email1'>
                    <span className="font-bold">Email: </span>
                    Must be a valid email:example@company.com
                </p>);
                hasError = true;
            }
        } else {
            errors['email'] = 1
            error_messages.push(<p key='email2'>
                <span className="font-bold">Email: </span>
                Required field
            </p>);
            hasError = true;
        }

        if (phoneNumber) {
            if (!this.validatePhone(phoneNumber)) {
                errors['phone'] = 1
                error_messages.push(<p key='phone1'>
                    <span className="font-bold">Phone number: </span>
                    Must be more than 5 characters:123456

                </p>);
                hasError = true;
            }
        } else {
            errors['phone'] = 1
            error_messages.push(<p key='phone2'>
                <span className="font-bold">Phone number: </span>
                Required field
            </p>);
            hasError = true;
        }

        if (!companyName) {
            errors['company'] = 1
            error_messages.push(<p key='company'>
                <span className="font-bold">Agency name: </span>
                Required field
            </p>);
            hasError = true;
        }

        if (agencySystem === 'Select') {
            errors['agency'] = 1

            error_messages.push(<p key='agency'>
                <span className="font-bold">Agency Management System: </span>
                Required field
            </p>);
            hasError = true;
        }
        this.setState({errorsField: errors});
        this.setState({hasError: hasError});

        return hasError;

    };

    sendData = async (e) => {
        let {firstName, lastName, workEmail, phoneNumber, companyName, message, agencySystem} = this.state;
        lastName=firstName;
        e.preventDefault();
        let hasError = await this.checkValidation(e);
        if (hasError) {
            return false
        }

            const request = new Request('https://us-central1-agentero-website.cloudfunctions.net/app/request-pricing', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({firstName, lastName, workEmail, phoneNumber, companyName, message, agencySystem}),
        });

        fetch(request)
            .then(data => {
                if (data.status < 400) {

                    this.setState(this.initialState);
                    this.setState({errorsField: []})
                    $('#thankYouModal').modal('show');

                } else {
                    console.log('Error send-contact', data);
                    alert("Error while sending message");
                }
            })
            .catch(reason => {
                console.log('Error contact reason:', reason);
                alert("Error while accessing Agentero server");
            });
    };

    setAgencySyste = (agState) => {
        this.setState({agencySystem: agState})
    };

    render() {
        let textFiledClasses = 'form-control fs16 c-gray w-100';

        return (
            <section className="price-section roboto-font">
                <Link id="btnPriceBack" to='/' className="btn close-button">
                    <ArrowBackIosIcon/>
                    <span> Back to Agentero</span>
                </Link>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="price-content position-relative">
                                <div className="price-header">
                                    <Link id='btnPriceLogo' to="/">
                                        <img src={logo_mini} alt="agentero" className="price-header__logo"/>
                                    </Link>
                                    <h5 className="price-title c-gray fs28 font-light">Request Pricing</h5>
                                </div>

                                <div className="price-body">

                                    <p className="price-info c-gray fs15 text-center">Pricing depends on a few factors
                                        that are unique to every agency. Tell us what you need and we’ll build a plan
                                        specifically
                                        for you and your team.</p>
                                    <form onSubmit={this.sendData} className="new-form-price">
                                        <div
                                            className={(this.state.hasError ? "error-message" : '') + " fs16 c-white"}>
                                            {error_messages[0]}</div>

                                        <div className="form-group">
                                            <FormControl className='w-100 form-control-style'>
                                                <TextField
                                                    style={{border: 'none'}}
                                                    label="Full name"
                                                    placeholder="Full Name"
                                                    className={(this.state.errorsField['firstName'] ? "error-filed " + textFiledClasses : textFiledClasses)}
                                                    margin="normal"
                                                    variant="outlined"
                                                    name="firstName"
                                                    onChange={this.handleInputChange}
                                                    value={this.state.firstName}
                                                />
                                            </FormControl>
                                        </div>
                                        <div className="form-group">

                                            <FormControl className='w-100 form-control-style'>
                                                <TextField
                                                    style={{border: 'none'}}
                                                    label="Email"
                                                    placeholder="Email"
                                                    type="email"
                                                    className={(this.state.errorsField['email'] ? "error-filed " + textFiledClasses : textFiledClasses)}
                                                    margin="normal"
                                                    variant="outlined"
                                                    name="workEmail"
                                                    onChange={this.handleInputChange}
                                                    value={this.state.workEmail}
                                                />
                                            </FormControl>
                                        </div>
                                        <div className="form-group">
                                            <FormControl className='w-100 form-control-style'>
                                                <TextField
                                                    style={{border: 'none'}}
                                                    label="Phone number"
                                                    placeholder="Phone number"
                                                    className={(this.state.errorsField['phone'] ? "error-filed " + textFiledClasses : textFiledClasses)}
                                                    margin="normal"
                                                    variant="outlined"
                                                    name="phoneNumber"
                                                    onChange={this.handleInputChange}
                                                    value={this.state.phoneNumber}
                                                />
                                            </FormControl>
                                        </div>
                                        <div className="form-group">
                                            <FormControl className='w-100 form-control-style'>
                                                <TextField
                                                    style={{border: 'none'}}
                                                    label="Agency name"
                                                    placeholder="Agency name"
                                                    className={(this.state.errorsField['company'] ? "error-filed " + textFiledClasses : textFiledClasses)}
                                                    margin="normal"
                                                    variant="outlined"
                                                    name="companyName"
                                                    onChange={this.handleInputChange}
                                                    value={this.state.companyName}
                                                />
                                            </FormControl>
                                        </div>
                                        <div className="form-group ">
                                            <div className="dropup ">
                                                <button type="button"
                                                        className={(this.state.errorsField['agency'] ? "error-filed dropup-btn dropdown-toggle" : 'dropup-btn dropdown-toggle')}
                                                        data-toggle="dropdown"
                                                        aria-haspopup="true" aria-expanded="false">
                                                    <span
                                                        className={(this.state.errorsField['agency'] ? "info db fs11" : 'info db fs11 default-color')}>Which Agency Management System are you using?</span>
                                                    <span
                                                        className={(this.state.agencySystem === 'Select' && !this.state.errorsField['agency']) ? 'default-color c-gray fs16 ' : 'fs16 c-gray'}>{this.state.agencySystem}</span>
                                                </button>
                                                <div className="dropdown-menu">
                                                    <p className="fs14  dropup-txt ">Select</p>
                                                    <p className="fs14 c-gray dropup-txt" onClick={() => {
                                                        this.setAgencySyste('Ezlynx')
                                                    }}>Ezlynx</p>
                                                    <p className="fs14 c-gray dropup-txt" onClick={() => {
                                                        this.setAgencySyste('AMS 360')
                                                    }}>AMS 360</p>
                                                    <p className="fs14 c-gray dropup-txt" onClick={() => {
                                                        this.setAgencySyste('QQ Catalyst')
                                                    }}>QQ Catalyst</p>
                                                    <p className="fs14 c-gray dropup-txt" onClick={() => {
                                                        this.setAgencySyste('Applied')
                                                    }}>Applied</p>
                                                    <p className="fs14 c-gray dropup-txt" onClick={() => {
                                                        this.setAgencySyste('Hawksoft')
                                                    }}>Hawksoft</p>
                                                    <p className="fs14 c-gray dropup-txt" onClick={() => {
                                                        this.setAgencySyste('Agency Matrix')
                                                    }}>Agency Matrix</p>
                                                    <p className="fs14 c-gray dropup-txt" onClick={() => {
                                                        this.setAgencySyste('Other')
                                                    }}>Other</p>
                                                    <p className="fs14 c-gray dropup-txt" onClick={() => {
                                                        this.setAgencySyste('Not using any AMS')
                                                    }}>Not using any AMS</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <textarea rows="5" className="form-control " name='message'
                                                      value={this.state.message} onChange={this.handleInputChange}
                                                      placeholder="Message">{this.state.message}</textarea>
                                        </div>
                                        <div className="form-group text-center">
                                            <input type="submit" id='btnPriceSubmit'
                                                    className="btn btn__demo submit-btn fs16 bgc-green c-white" value="Request pricing" />
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <ThankYouModal title='pricing'/>
            </section>
        );
    }
};

export default PricingForm;
