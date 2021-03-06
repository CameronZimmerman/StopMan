import React from 'react'
import PropTypes from 'prop-types'

function HistoryList({historyList}) {
  return (
    <>
    History
    <ul>
      {
        historyList.map(history => (
          <li key={history.timeCreated}>
            <p><span style={{color: 'red'}}>{history.method}</span> {history.url}</p>
          </li>
        ))
      }
    </ul>
    </>
  )
}

HistoryList.propTypes = {
  historList: PropTypes.arrayOf(PropTypes.shape({
    method: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    timeCreated: PropTypes.number.isRequired
  }))
}

export default HistoryList

