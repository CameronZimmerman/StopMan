import React from 'react'
import PropTypes from 'prop-types'

function HistoryList({historyList}) {
  return (
    <ul>
      {
        historyList.map(history => (
          <li>
            <p><span style={{color: 'red'}}>{history.method}</span> {history.url}</p>
          </li>
        ))
      }
    </ul>
  )
}

HistoryList.propTypes = {
  historList: PropTypes.arrayOf(PropTypes.shape({
    method: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }))
}

export default HistoryList

