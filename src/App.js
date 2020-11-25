import React, { Component } from 'react';
import './App.css';
import Hello from './components/Hello';
import Welcome from './components/Welcome';
import Greet from './components/Greet';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import PersonList from './components/PersonList';
import Form from './components/Form';
import Table from './components/Table';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRparentInput from './components/FRparentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundry from './components/ErrorBoundry';
import Clickcounter from './components/Clickcounter';
import Hovercounter from './components/Hovercounter';



 class App extends Component {
  render() {
    return (
      <div className ='App'>
  <Clickcounter/>
  <Hovercounter/>
        
        {/*
        <PortalDemo/>
        <FRparentInput/>
        <FocusInput/>
        <RefsDemo/>
        <Table/>
        <Form/>
        <NameList/>
       <PersonList/>
       <UserGreeting/>
       <ParentComponent/>
       <EventBind/>
       <Message/>
         <ClassClick/>
         <Counter/>
         <FunctionClick/>
         <Hello name='Tovar' heroName='Superman'/>
      <Hello name='Mazga' heroName='Batwoman'/>
      <Welcome name='Konj' heroName='Batman'/>
      <Welcome name='Tovar' heroName='Superman'/>
    <Welcome name='Mazga' heroName='Batwoman'/>
      <Greet/>*/}
      </div>
    );
  }
}

export default App;

 