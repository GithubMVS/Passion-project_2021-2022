import React from 'react'

export const testMessages = [
  { id: 1, message: 'heyhoi', user: 'Bart' }
]

const SecondTest = () => {

  return (
    <div>
      <p>test server components</p>

      <div>
        {testMessages.map(seperate => {
          <li key={seperate.id}>
            {seperate.message}
          </li>
        })}
        <p>{testMessages.id}</p>
      </div>

    </div>
  )
}

export default SecondTest
