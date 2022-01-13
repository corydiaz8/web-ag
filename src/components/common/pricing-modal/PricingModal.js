import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import './_PricingModal.css';
class PricingModal extends Component {

    render() {
        return (
            <div className="modal fade" id="pricingRequestModal" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title c-green fs30 font-bold">Pricing Request Confirmed!</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body text-center">
                            <div className="subtitle fs20 font-semi-bold c-darkBlue">
                                <p>We'll reach out to you shortly</p>
                                <p>Thank you</p>
                            </div>
                            <button type="button" className="btn btn-ok bgc-darkBlue c-white font-medium fs15"
                                    data-dismiss="modal">OK
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
};

export default PricingModal;