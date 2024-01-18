import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <div>
        <h1>
          supabase auth Demo
        </h1>
      </div>
      <div>
       
          <Link href={'/signup'}>
            <button style={{border:'2px solid black',borderRadius:'12px', backgroundColor:'white'}}>
            click me to sign up
            </button>
          </Link>
      
      </div>

    </div>











  )
}
