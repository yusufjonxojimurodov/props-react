import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Api = () => {
  const [data, setData] = useState([])

  const fetchData = async () => {
    try {
      const response = await axios.get('https://7e9c30727203.ngrok-free.app/users', {
        headers: {
          "ngrok-skip-browser-warning": "true"
        }
      })
      setData(response.data)
    } catch (err) {
      console.error('Xatolik:', err)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    console.log(data)
  }, [data])

  return null
}

export default Api
