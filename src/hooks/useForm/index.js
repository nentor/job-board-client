import { useState } from 'react'

export const useForm = (props) => {
  const [state, setState] = useState(props)

  const handleChange = (e) => {
    e.persist()
    setState((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = () => {
    console.log(state)
  }
  return props
}
