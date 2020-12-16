import React from 'react';
import ChatBot from 'react-simple-chatbot';
import {Segment} from 'semantic-ui-react';
import './App.css';

function App() {

  const steps= [
    {
      id:'greet',
      message:'Hello! Welcome to our website',
      trigger:'Ask name'
    },
    {
      id:'Ask name',
      message:'Please enter your name',
      trigger:'waiting!'
    },
    {
      id:'waiting!',
      user:true,
      trigger:'Name'
    },
    {
      id:'Name',
      message:'Hello {previousValue},Please select your issue',
      trigger:'issues'
    },
    {
      id:'issues',
      options:[
        {value:'React',label:'React',trigger:'React'},
        {value:'Angular',label:'Angular',trigger:'Angular'}
      ]
    },
    {
      id:'React',
      message:'Thank you for contactin,We will inform you as soon as possible',
      end:true
    },
    {
      id:'Angular',
      message:'Thank you for contactin,We will inform you as soon as possible',
      end:true
    }
  ]

  return (
      <Segment floated = "right">
          <ChatBot steps = {steps}/>
      </Segment>
  );
}

export default App;
