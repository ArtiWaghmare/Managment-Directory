import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Reporting.css"
import Pagination from './Pagination';
const RolePermission= () => {
  const navigate = useNavigate();

  const handleAddClick = () => {

    navigate('/add');
  };


  const handleEditClick = () => {

    navigate('/edit');
  };
  return (


    <div className='container '>
<div className='my-custom-dashboard'>
      <div className="row header-row">

        <div className="col-md-5">
          <h3 className='mmm'>Manage Profile</h3>
        </div>
        <div className="col-md-7 text-end">
          <h6 className='mmm'>ADMINISTRATOR</h6>
        </div>
      </div>


      <div className=' container content-2'>
        <div className="text-Role">

          <span className=''>Role Permission</span>
        </div>
        <div className="row  space-1 mt-1">
          <div className="col-5 center ">

            <span>Website Application</span>
          </div>
          <div className="col-5  text-end ">

            <span className=' center '>Mobile App Application</span>
          </div>
        </div>


        <div className=" text-end">
          <button className="logo-5 ">  <img src="images/arrow.png" alt="Logo 1" className="" /></button>
        </div>


        <div className="row  mt-4">
          <div className="col-md-12 ">
            <div className="">

              <span className=''> <div className='row  align-items-center'><div className='col-2' ><span className=''> Sellect All</span></div>
                <div className='col-8'> <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label" for="flexCheckDefault">

                  </label>
                </div></div></div></span>
            </div>
            <table className="table-1 ">
              <thead>
                <tr>
                  <th>S No</th>
                  <th>Permission Name</th>
                  <th>
                    <div className='row  align-items-center'><div className='col-3' ><span>View </span></div>
                      <div className='col-2'> <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" for="flexCheckDefault">

                        </label>
                      </div></div></div>
                  </th>

                  <th>
                    <div className='row  align-items-center'><div className='col-3' ><span>View </span></div>
                      <div className='col-2'> <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" for="flexCheckDefault">

                        </label>
                      </div></div></div>
                  </th>

                  <th>
                    <div className='row  align-items-center'><div className='col-3' ><span>View </span></div>
                      <div className='col-2'> <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" for="flexCheckDefault">

                        </label>
                      </div></div></div>
                  </th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>

                  <td>qweertfc</td>
                  <td >
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      <label className="form-check-label" for="flexCheckDefault">

                      </label>
                    </div></td>
                  <td><div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" for="flexCheckDefault">

                    </label>
                  </div></td>
                  <td><div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" for="flexCheckDefault">

                    </label>
                  </div></td>

                </tr>
                <tr>
                  <td>1</td>

                  <td>qweertfc</td>
                  <td >
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      <label className="form-check-label" for="flexCheckDefault">

                      </label>
                    </div></td>
                  <td><div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" for="flexCheckDefault">

                    </label>
                  </div></td>
                  <td><div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" for="flexCheckDefault">

                    </label>
                  </div></td>

                </tr>
                <tr>
                  <td>1</td>

                  <td>qweertfc</td>
                  <td >
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      <label className="form-check-label" for="flexCheckDefault">

                      </label>
                    </div></td>
                  <td><div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" for="flexCheckDefault">

                    </label>
                  </div></td>
                  <td><div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" for="flexCheckDefault">

                    </label>
                  </div></td>

                </tr>
                <tr>
                  <td>1</td>

                  <td>qweertfc</td>
                  <td >
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      <label className="form-check-label" for="flexCheckDefault">

                      </label>
                    </div></td>
                  <td><div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" for="flexCheckDefault">

                    </label>
                  </div></td>
                  <td><div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" for="flexCheckDefault">

                    </label>
                  </div></td>

                </tr>
                <tr>
                  <td>1</td>

                  <td>qweertfc</td>
                  <td >
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      <label className="form-check-label" for="flexCheckDefault">

                      </label>
                    </div></td>
                  <td><div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" for="flexCheckDefault">

                    </label>
                  </div></td>
                  <td><div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" for="flexCheckDefault">

                    </label>
                  </div></td>

                </tr>
                <tr>
                  <td>1</td>

                  <td>qweertfc</td>
                  <td >
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      <label className="form-check-label" for="flexCheckDefault">

                      </label>
                    </div></td>
                  <td><div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" for="flexCheckDefault">

                    </label>
                  </div></td>
                  <td><div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label" for="flexCheckDefault">

                    </label>
                  </div></td>

                </tr>

              </tbody>


              <tfoot>

              </tfoot>

            </table>
            <div className="form-row">
              <div className="form-group ">
                <button type="button" className="trow-one">
                  Back
                </button>
              </div>
              <div className="form-group ">
                <button type="button" className="trow-two">
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    </div>
  );
};

export default RolePermission;
