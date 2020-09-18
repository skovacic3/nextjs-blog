import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>My name is Sven Kovacic and I'm a student at the University of Applied Sciences in Zagreb.</p>
        <p>
          This is a site where i'm trying out next.js{' '}
        </p>
      </section>
    </Layout>
  )
}