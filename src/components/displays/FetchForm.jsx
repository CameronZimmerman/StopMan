import React from 'react'
import PropTypes from 'prop-types'

function FetchForm({method, url, body, onChange, onSubmit}) {
  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor="url">
          <input id="url" value={url} type="text"/>
          <button></button>
        </label>
        <div onChange={event => onChange(event)}>
          <input type="radio" checked={method === "GET"} value="GET" defaultChecked name="method"/> GET
          <input type="radio" checked={method === "POST"} value="POST" name="method"/> POST
          <input type="radio" checked={method === "DELETE"} value="DELETE" name="method"/> DELETE
          <input type="radio" checked={method === "PUT"} value="PUT" name="method"/> PUT
        </div>
        <label htmlFor="body">
          <textarea id="body" rows="4" cols="50" value={body} onChange={onChange}></textarea>
        </label>
      </form>
    </>
  )
}

FetchForm.propTypes = {
  method: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,

}

export default FetchForm

