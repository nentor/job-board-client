import { useState } from 'react'

export const useForm = (props) => {
  const [formState, setFormState] = useState(props)

  // Update states on Input change
  const handleChange = (e) => {
    e.persist()
    setFormState((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }))
  }
  // Print out the states on Submit
  const onSubmit = () => {
    console.log(formState)
  }

  return { formState, handleChange, onSubmit }
}
