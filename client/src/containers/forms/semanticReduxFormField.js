import React from 'react'
import { Input } from 'semantic-ui-react'

/*
  https://stackoverflow.com/questions/42032708/how-to-use-semantic-ui-react-with-redux-form
*/

export default function SemanticReduxFormField ({ input, label, meta: { touched, error, warning }, as: As = Input, ...props }) {
  function handleChange (e, { value }) {
    return input.onChange(value)
  }

  return (
    <div>
      <As {...input} value={input.value} {...props} onChange={handleChange} />
    </div>
  )
}
