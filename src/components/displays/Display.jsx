import React from 'react'
import PropTypes from 'prop-types'

function Display({result}) {
  return (
    <>
    Response
    <pre>
      {result}
    </pre>
    </>
  )
}

Display.propTypes = {
  result: PropTypes.string.isRequired
}

export default Display

