import { useState } from 'react'

export const useForm = (props) => {
  const [state, setState] = useState(props)

  // Update states on Input change
  const handleChange = (e) => {
    e.persist()
    setState((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }))
  }
  // Print out the states on Submit

  console.log(state)

  return state
}
