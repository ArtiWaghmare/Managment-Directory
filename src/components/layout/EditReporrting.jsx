import React from 'react';
import "./AddReport.css";

const EditReportin = () => {
    return (
        <div className='clss-1'>
            <div className='clss2'>
                <span className='clss3'>Edit Reporting To</span>
            </div>
            <div className='clss4'>
                <form className="center-form">
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="roleInput"><span className='text-2'>Region </span></label>
                            <select className="form-control-2" aria-label="Default select example">
                                <option selected>select</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>

                        <div className="form-group col-md-6">
                            <label htmlFor="roleInput"><span className='text-2'>Role</span></label>
                            <select className="form-control-2" aria-label="Default select example">
                                <option selected>select</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <input type="text" className="forrm-control-1" placeholder="" /><span className='texxt-2'>Is Active</span>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group ">
                            <button type="button" className="trrow-1">
                                Submit
                            </button>
                        </div>
                        <div className="form-group ">
                            <button type="button" className="trrow-2">
                                Cancle
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditReportin;
