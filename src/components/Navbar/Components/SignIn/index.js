import React, { useRef, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'

export const SignIn = ({ signIn, setSignIn }) => {
  const ref = useRef()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    ref.current = document.querySelector('body')
    setMounted(true)
  }, [])

  return createPortal(<Modal> CLICK ME!!!!</Modal>, ref.current)
}

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
