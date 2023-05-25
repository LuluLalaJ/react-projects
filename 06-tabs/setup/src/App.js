import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'

function App() {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [value, setValue] = useState(0)

  const fetchJobs = async () => {
    const result = await fetch(url)
    const data = await result.json()
    setJobs(data)
    setLoading(false)

  }

  useEffect(()=>{
    fetchJobs()
  },[])

  if (loading) {
    return <h2>Page is loading...</h2>
  }

  const {title, dates, duties, company} = jobs[value]
  return(
    <div className="section">
      <div className="titl">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <section className="jobs-center">
        <div className="btn-container">
          {jobs.map((job, index) => {
            return (
              <button
                className={index === value ? "job-btn active-btn" : "job-btn"}
                key={job.id}
                onClick={()=>setValue(index)}
              >
                {job.company}
              </button>
            )
          })}
        </div>
        <article className="job-info">
          <h3>{title}</h3>
          <span className="job-company">{company}</span>
          <p className="job-date">{dates}</p>

          {duties.map( duty => {
            return(
              <div className="job-desc">
                <FaAngleDoubleRight />
                <p>{duty}</p>
              </div>
            )
          })}
        </article>
      <button type="button" className="btn">
        more info
      </button>
      </section>
    </div>
  )
}

export default App
