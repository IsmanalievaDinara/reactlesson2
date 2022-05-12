import React from 'react'

class App extends React.Component{
constructor(){
  super()
  this.state=({isOn:false})
}
onChange(){
  this.setState({isOn: !this.state.isOn})
}

  render(){
    const isLight = this.state.isOn
    if(!isLight){
      document.body.style.backgroundColor=('pink')
    }else{
      document.body.style.backgroundColor=('green')
    }
    return(
      <>
      <div>
        <button onClick={()=> this.onChange()}>{isLight ? 'on' : 'off'}</button>
      </div>
      
      
      </>
    )
  }
 }


export default App