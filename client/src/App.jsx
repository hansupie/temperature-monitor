import './App.css'
import { useState, useEffect } from 'react'
import { useAxios } from '../hooks/useAxios'
import Chart from './components/Chart'

const testData = [{name: '25.4.', temperature: 7}, {name: '26.4.', temperature: 10}]

function App() {
  const [temperature, setTemperature] = useState(null)
  const [temperatureList, setTemperatureList] = useState([])
  const [data, isError, isLoading] = useAxios({
    url: '/temperature',
    method: 'get',
    body: {},
    headers: {}
  })

  useEffect(() => {
    if(data && data.data.length > 0) {
      setTemperatureList(data.data)
      const lastTemp = data.data.slice(-1)
      console.log('lastTemp', lastTemp[0].temperature);
      setTemperature(lastTemp[0].temperature)
    }
  }, [data])


  return (
    <>
      <div className="d-flex flex-column justify-content-center gap-3">
        { isLoading
          ? <div>Loading...</div>
          : <div>
              { isError &&
                <div className="alert alert-danger" role="alert">
                  {isError.message}
                </div>
              }
              { temperature && temperatureList
                ? <div>
                    <div className='card mx-auto' style={{ width: '20rem' }}>
                      <div className='card-body'>
                        <h5 className='card-title'>Temperature now: {temperature}°C</h5>
                      </div>
                    </div>
                    <Chart
                      data={temperatureList}
                    />
                  </div>
                : <div className="alert alert-light" role="alert">
                    No data
                  </div>
              }
            </div>
        }
      </div>
    </>
  )
}

export default App
