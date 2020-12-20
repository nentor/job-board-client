import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

export const SignIn = () => {
  let signInRoot

  useEffect(() => {
    signInRoot = document.querySelector('#__next')
    ReactDOM.createPortal(<Button> CLICK ME!!!!</Button>, signInRoot)
  })

  return <></>
}

const Button = styled.div`
  position: fixed;
  width: 5rem;
  height: 5rem;
  background: red;
  display: ${(props) => (props.isActive ? 'block' : 'none')};
`

// const ModalRoot = document.querySelector('body')

// export class SignIn extends Component {
//   state = { open: false }

//   handleOpenButtonClick = () => this.setState({ open: true })

//   handleCloseButtonClick = () => this.setState({ open: false })

//   render() {
//     return ReactDOM.createPortal(this.openSignIn(), ModalRoot)
//   }

//   openSignIn() {
//     return (
//       <>
//         {!this.state.open && (
//           <Button onClick={this.handleOpenButtonClick}>CLICK ME !!</Button>
//         )}
//         {this.state.open && <></>}
//       </>
//     )
//   }
// }
