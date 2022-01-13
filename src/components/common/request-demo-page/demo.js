import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './_demo.css';
import logo_mini from '../../../assets/images/logo-mini.svg';
import ThankYouModal from '../modals/ThankYouModal';
import $ from "jquery";
import {TextField, Select} from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';

let error_messages = [];
let success_message = [];

class Demo extends Component {

    initialState = {
        name: '',
        email: '',
        phone: '',
        company: '',
        agencySystem: 'Select',
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


    componentDidMount() {
        window.scrollTo(0, 0);
    }


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

    checkValidation = (ev) => {
        ev.preventDefault();
        error_messages = [];
        success_message = [];
        let errors = [];
        let hasError = false;
        const {name, email, phone, company, agencySystem} = this.state;
        this.setState({hasError: hasError});
        this.setState({errorsField: errors});
        if (!name || name === '') {
            errors['name'] = 1;
            error_messages.push(<p key='name'>
                <span className="font-bold">Full name: </span>
                Required field
            </p>);
            hasError = true;
        }

        if (email) {
            if (!this.validateEmail(email)) {
                errors['email'] = 1;
                error_messages.push(<p>
                    <span className="font-bold">Email: </span>
                    Must be a valid email:example@company.com
                </p>)
                hasError = true;
            }
        } else {
            errors['email'] = 1;
            error_messages.push(<p>
                <span className="font-bold">Email: </span>
                Required field
            </p>);
            hasError = true;
        }

        if (phone) {
            if (!this.validatePhone(phone)) {
                errors['phone'] = 1;
                error_messages.push(<p>
                    <span className="font-bold">Phone number: </span>
                    Must be more than 5 characters:123456
                </p>)
                hasError = true;
            }
        } else {
            errors['phone'] = 1;
            error_messages.push(<p>
                <span className="font-bold">Phone number: </span>
                Required field
            </p>);
            hasError = true;
        }

        if (!company) {
            errors['company'] = 1;
            error_messages.push(<p>
                <span className="font-bold">Agency Name: </span>
                Required field
            </p>);
            hasError = true;
        }

        if (agencySystem === 'Select') {
            errors['agencySystem'] = 1;
            error_messages.push(<p>
                <span className="font-bold">Agency Management System: </span>
                Required field
            </p>);
            hasError = true;
        }
        this.setState({errorsField: errors});
        this.setState({hasError: hasError});
        return hasError
    };

    sendData = async (e) => {
        const {name, email, company, phone,agencySystem} = this.state;
        e.preventDefault();
        let hasError = await  this.checkValidation(e);
        if (hasError) {
            return false
        }

        const request = new Request('https://us-central1-agentero-website.cloudfunctions.net/app/send-contact', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({name, email, company, phone,agencySystem}),
        });

        fetch(request)
            .then(data => {
                if (data.status < 400) {

                    this.setState(this.initialState);
                    this.setState({errorsField: []})
                    $('#thankYouModal').modal('show');

                }
                else {
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
            <div id="demoModal" className="roboto-font">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content position-relative">
                        <div className="modal-header">

                            <Link id='btnDemoLogo'  to="/" >
                                <img src={logo_mini} alt="agentero" className="modal-header__logo"/>
                            </Link>


                            <h5 className="modal-title c-gray fs28 font-light">Agentero helps you grow your insurance
                                agency.</h5>
                        </div>

                        <div className="modal-body">
                            <form onSubmit={this.sendData} className="new-form-demo">
                                <div
                                    className={(this.state.hasError ? "error-message" : '') + " fs16 c-white"}>{error_messages[0]}</div>

                                <div className="form-group">
                                    <FormControl className='w-100 form-control-style'>
                                        <TextField
                                            style={{border: 'none'}}
                                            label="Full name"
                                            placeholder="Full Name"
                                            className={(this.state.errorsField['name'] ? "error-filed " + textFiledClasses : textFiledClasses)}
                                            margin="normal"
                                            variant="outlined"
                                            name="name"
                                            onChange={this.handleInputChange}
                                            value={this.state.name}
                                        />
                                    </FormControl>

                                </div>
                                <div className="form-group">
                                    <FormControl className='w-100 form-control-style'>
                                        <TextField
                                            style={{border: 'none'}}
                                            label="Email"
                                            placeholder="Email"
                                            className={(this.state.errorsField['email'] ? "error-filed " + textFiledClasses : textFiledClasses)}
                                            margin="normal"
                                            variant="outlined"
                                            type="email"
                                            name="email"
                                            onChange={this.handleInputChange}
                                            value={this.state.email}
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
                                            name="phone"
                                            onChange={this.handleInputChange}
                                            value={this.state.phone}
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
                                            name="company"
                                            onChange={this.handleInputChange}
                                            value={this.state.company}
                                        />
                                    </FormControl>
                                </div>

                                <div className="form-group ">
                                    <div className="dropup">
                                        <button type="button"
                                                className={(this.state.errorsField['agencySystem'] ? "error-filed dropup-btn dropdown-toggle" : 'dropup-btn dropdown-toggle')}
                                                data-toggle="dropdown"
                                                aria-haspopup="true" aria-expanded="false">
                                            <span className={(this.state.errorsField['agencySystem'] ? "info db fs11" : 'info db fs11 default-color')}>Which Agency Management System are you using?</span>
                                            <span
                                                className={(this.state.agencySystem === 'Select' && !this.state.errorsField['agencySystem']) ? 'default-color c-gray fs16 ' : 'fs16 c-gray'}>{this.state.agencySystem}</span>
                                        </button>
                                        <div className="dropdown-menu">
                                            <p className="fs14  dropup-txt default-color">Select</p>
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
                                <div className="form-group text-center">
                                    <input id='btnDemoSubmit' type="submit"
                                            className="btn btn__demo submit-btn fs16 bgc-green c-white" value="Request a demo" />
                                </div>
                            </form>
                        </div>

                    </div>
                </div>

                <ThankYouModal title='a demo'/>
            </div>
        );
    }
}

export default Demo;
