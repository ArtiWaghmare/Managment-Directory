import React,{useState} from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

import LoginForm from './components/login/LoginForm';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';

import Dashboard from './components/table/Dashboard';
import AddPage from './components/layout/AddPage';
import EditPage from './components/layout/EditPage';
import "./App.css"

import AddReportin from './components/layout/AddReportin';
import EditReportin from './components/layout/EditReporrting';
import Resion from './components/table/Resion';
import AddResion from './components/layout/AddResion';
import EditResion from './components/layout/EditResion';
import State from './components/table/State';
import AddState from './components/layout/AddState';
import EditState from './components/layout/EditState';

import AddDistrict from './components/layout/AddDistrict';

import City from './components/table/City';
import AddCity from './components/layout/AddCity';
import EditCity from './components/layout/EditCity';
import EditDistrict from './components/layout/EditDistrict';
import District from './components/table/District';
import TerritoryDash from './components/table/TerritoryDash';
import AddTerratory from './components/layout/AddTerratory';
import EditTerratory from './components/layout/EditTerratory';
import BlodGroup from './components/table/BlodGroup';
import AddBloodGroup from './components/layout/AddBloodGroup';
import EditBloodGroup from './components/layout/EditBloodGroup';
import Dealer from './components/table/Dealer';
import AddDealer from './components/layout/AddDealer';
import EditDealer from './components/layout/EditDealer';
import WeekClose from './components/table/WeekClose';
import AddWeekClose from './components/layout/AddWeekClose';
import EditWeekClose from './components/layout/EditWeekClose';
import GenderDash from './components/table/GenderDash';
import AddGender from './components/layout/AddGender';
import EditGender from './components/layout/EditGender';
import Vehicle from './components/table/Vehicle';
import AddVehicle from './components/layout/AddVehicle';
import EditVehicle from './components/layout/EditVehiclee';
import GSMPage from './components/table/GSMPage';
import AddGSM from './components/layout/AddGSM';
import EditGSM from './components/layout/EditGSM';
import BrustFactor from './components/table/BrustFactor';
import AddFactor from './components/layout/AddFactor';
import EditFactor from './components/layout/EditFactor';
import HSNType from './components/table/HSNType';
import AddHsn from './components/layout/AddHsn';
import EditHsn from './components/layout/EditHsn';
import SaleOrder from './components/table/SaleOrder';
import ReportingTable from './components/table/ReportingTable';
import RolePermission from './components/table/RolePermission';
function App() {
  

  return (
    <Router>
       
    <div className="container-fluid">
     
    <div className="col-md-1">
          <Sidebar />
        </div>
      <div className="col-md-10">
      <div className="">
            <Navbar />
          </div>
          <div className="col">
        <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add" element={<AddPage />} />
          <Route path="/edit" element={<EditPage />} />
          <Route path="/roleper" element={<RolePermission />} />
          <Route path="/reporting" element={<ReportingTable />} />
          <Route path="/addreportin" element={<AddReportin />} />
          <Route path="/editreportin" element={<EditReportin />} />
          <Route path="/resion" element={<Resion />} />
          <Route path="/addresion" element={<AddResion />} />
          <Route path="/editresion" element={< EditResion/>} />
          <Route path="/state" element={< State/>} />
          <Route path="/addstate" element={< AddState/>} />
          <Route path="/editstate" element={< EditState/>} />
          <Route path="/district" element={< District/>} />
          <Route path="/adddistrict" element={< AddDistrict/>} />
          <Route path="/editdistrict" element={< EditDistrict/>} />
          <Route path="/city" element={< City/>} />
          
          <Route path="/addcity" element={< AddCity/>} />
          <Route path="/editcity" element={< EditCity/>} />
       
          <Route path="/terrytory" element={< TerritoryDash/>} />
          <Route path="/addterrytory" element={< AddTerratory/>} />
          
          <Route path="/editterrytory" element={< EditTerratory/>} />
          <Route path="/blodgroupdash" element={< BlodGroup/>} />
          <Route path="/addblodgroupdash" element={< AddBloodGroup/>} />
          <Route path="/editblodgroupdash" element={< EditBloodGroup/>} />
          
          <Route path="/adddealer" element={< AddDealer/>} />
          <Route path="/editdealer" element={< EditDealer/>} />
          <Route path="/dealer" element={< Dealer/>} />
          <Route path="/Weekclose" element={< WeekClose/>} />
          <Route path="/addWeekclose" element={< AddWeekClose/>} />
          <Route path="/editWeekclose" element={< EditWeekClose/>} />
          <Route path="/gender" element={< GenderDash/>} />
          <Route path="/addgender" element={< AddGender/>} />
          <Route path="/editgender" element={< EditGender/>} />
          <Route path="/vehicle" element={< Vehicle/>} />
          <Route path="/addvehicle" element={< AddVehicle/>} />
          <Route path="/Editvehicle" element={< EditVehicle/>} />
          <Route path="/gsm" element={< GSMPage/>} />
          <Route path="/Addgsm" element={< AddGSM/>} />
          <Route path="/editgsm" element={< EditGSM/>} />
          <Route path="/factor" element={< BrustFactor/>} />
          <Route path="/addfactor" element={< AddFactor/>} />
          <Route path="/editfactor" element={< EditFactor/>} />
          <Route path="/hsnpage" element={< HSNType/>} />
          <Route path="/addhsn" element={< AddHsn/>} />
          <Route path="/edithsn" element={< EditHsn/>} />
          <Route path="/saleorder" element={< SaleOrder/>} />
                   
        </Routes>
        </div>
        </div>
      </div>
    </Router>


   
  );
}

export default App;



