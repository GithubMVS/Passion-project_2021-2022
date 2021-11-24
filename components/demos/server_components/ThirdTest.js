import { format } from 'date-fns';

export default function ThirdTest() {

  const updatedAt = new Date(2014, 1, 11)
  const lastUpdateAt = format(updatedAt, 'M/d/yy')
  console.log(lastUpdateAt)

  return (
    <div>
      <p>Dit zou ook op de server moeten runnen (test 3)</p>
    </div>
  )
}