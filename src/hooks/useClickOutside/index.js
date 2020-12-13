import { useEffect } from 'react'

export const useClickOutside = (ref, callback) => {
  function handleClickOutside(event) {
    if (!ref?.current.contains(event.target)) {
      callback && callback()
    }
  }

  useEffect(() => {
    // Bind the event listener
    document.addEventListener('click', handleClickOutside)

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('click', handleClickOutside)
    }
  })
}
