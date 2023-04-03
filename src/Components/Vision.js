import React, { Component } from 'react'

export class Vision extends Component {
    constructor(props){
        super(props);
            console.log(this.props)
      }

  render() {
    return (
      <>
        
        <h1 className='heading'>EMPLOYEE FEEDBACK DATA</h1>
              <div className='conatiner2'>
                {this.props.value.map((item,index) => {
                    console.log(item.Name)
                return(
                    <div key={index} className='conatiner3'>
                    <h2 key={index}>
                    Name:{item.Name} |
                    Department:{item.Department} |
                    Rating: {item.Rating}
                  </h2>
                  </div>
                )
             })}
            
            </div>
            <button onClick={this.props.toggleFunc}>Go Back</button>
      </>
    )
  }
}

export default Vision
