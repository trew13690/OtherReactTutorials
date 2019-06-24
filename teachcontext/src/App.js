import React, {Component} from 'react';
import './App.css';

// first we will make a new context

const MyContext = React.createContext();


// Then create a provider component 
class MyProvider extends Component
{
  state = 
  {
    name: 'Alex',
    age: 27,
    cool: true
  }
  render()
  {
      return (
        <MyContext.Provider value="I'm the value">
          {this.props.children}
        </MyContext.Provider>
      )
  }
}

const Family = (props) =>
{
  return(
  <div className="family">
    <Person />
  </div>
  )
}

class Person extends Component{
  render(){
    return (
      <div className='person'>
        <p><MyContext.Consumer>
              {(context) =>  (
                <p>I'm inside the {context}</p>
              )}
            </MyContext.Consumer>
        </p>
      </div>
    )
  }
}
class App extends Component{
  
  render(){
  return (
    <MyProvider>
      <div>
       <p>I'm the app</p>
       <Family  />
      </div>
      </MyProvider>
  );
  }
}

export default App;
