import React from 'react';
import "./Add.css";

const EditPage = () => {
  return (
    <div className='cls-1'>
      <div className='cls2'>
        <span className='cls3'>Edit Role</span>
      </div>
      <div className='cls4'>
        <form className="center-form">
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="roleInput"><span className='text-2'>Role</span></label>
              <input type="text" className="form-control-2" placeholder="Enter" />
            </div>
            <div className="form-group col-md-6">
              <input type="text" className="form-control-1" placeholder="" /><span className='text-2'>Is Active</span>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group ">
              <button type="button" className="trow-1">
                Update
              </button>
            </div>
            <div className="form-group ">
              <button type="button" className="trow-2">
                Cancle
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPage;
