//Landing page
import Link from "next/link"
import Image from "next/image"

export default function Landing() {
  return (
    <main className="landing" >
        <div className="enterBox">
          <Image src={'/logoFull.svg'} width={600} height={470} alt="logo" />
          <Link href={'/home'} className="button-01">Enter</Link>
        </div>
    </main>
  )
}
