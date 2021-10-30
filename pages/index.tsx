import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Template from '../components/structures/Template'
import HomePageBanner from '../components/banners/HomePageBanner'

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Polarbear - Live your life with crypto.</title>
            </Head>
            <Template>
                <HomePageBanner />
            </Template>
        </>
    )
}

export default Home;

