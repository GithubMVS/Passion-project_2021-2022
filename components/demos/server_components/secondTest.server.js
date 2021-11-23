import React from 'react'

export const testMessages = [
  { id: 1, message: 'heyhoi', user: 'Bart' }, { id: 2, message: 'bruh', user: 'Thomas' }
]

const secondTest = () => {
  return (
    <div>
      {testMessages.map(message => {
        <div key={message.id}>
          <p>{message.id}</p>
          <p>{message.message}</p>
          <p>{message.user}</p>
        </div>

      })}
    </div>
  )
}

export default secondTest
