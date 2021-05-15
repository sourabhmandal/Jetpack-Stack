import Head from 'next/head'
import Image from 'next/image'
import TopNavbar from '../components/Navbar/TopNavbar'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <>
    <TopNavbar/>
      <section className="section container-fluid mt-n3 pb-3 pb-5 header-color">
        <div className="row justify-content-center">
          <div className="col-lg-12 text-center">
            <h1 className="mt-0">"Title"</h1>
          </div>
          <div className="col-lg-9 col-xl-8 text-center">
            <p className="lead">"Params.lead"</p>
            <a className="btn btn-primary btn-lg px-4 mb-2" href="/jetpack/" role="button">Get started</a>
          </div>
        </div>
      </section>     
    </> 
  )
}
