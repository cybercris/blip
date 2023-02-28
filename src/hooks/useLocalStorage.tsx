import { useState } from 'react'

type StorageKey = string

function useLocalStorage<T>(
  key: StorageKey,
  initialValue: T,
): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    const item = window.localStorage.getItem(key)

    if (item) {
      return JSON.parse(item)
    }

    return initialValue
  })

  const setValue = (value: T) => {
    setStoredValue(value)
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  return [storedValue, setValue]
}

export default useLocalStorage
