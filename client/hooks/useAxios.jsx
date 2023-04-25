import { useEffect, useState } from "react";
import axios from 'axios';

export const useAxios = (configParams) => {
  axios.defaults.baseURL = 'http://localhost:3000'
  const [res, setRes] = useState('')
  const [err, setErr] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchData(configParams)
  }, [])

  const fetchData = async() => {
    await axios.request(configParams)
    .then(res => setRes(res))
    .catch(err => setErr(err))
    .finally(() => setLoading(false))
  }

  return [res, err, loading];
};