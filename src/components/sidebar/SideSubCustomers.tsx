import * as React from 'react';
import {  Route, Switch,withRouter } from "react-router-dom";
//import{navItems,nav} from '../../Models/NavItems';
//import { styled } from '@fluentui/react/lib/Utilities';
import CustomerLocator from '../customerSearch/CustomerSearch';
import CustomerDetails from '../customerDetails/CustomerDetails';
import Contact from '../Contact/Contact';
import Representatives from '../Representatives';
import Obligo from '../Obligo';
import Security from '../Security';
import PriceList from '../PriceList';
import BankAccounts from '../BankAccounts';
import Loans from '../Loans';
import Documents from '../Documents';
import MoneyLaundering from '../MoneyLaundering';
import ConcentrationOfActions from '../ConcentrationOfActions';
import LogChanges from '../LogChanges';
import HomePage from '../HomePage';







  const SideCustomers: React.FunctionComponent = (props:any) => {
    
    
    return (
        
        <div>
    
       
          
     
       
     
      </div>
    );
  };
  export default withRouter(SideCustomers)