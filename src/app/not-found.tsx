import Link from 'next/link'
import "./not-found.css" 
export default function NotFound() {
  return (
    <div className='not'>
      <h2 className='s-para'>Not Found</h2>
      <p >Could not find requested resource</p>
      <button className='btns'>
      <Link href="/">Return Home</Link></button>
    </div>
  )
}