import Navbar from "./Navbar";
import Head from 'next/head';
const Layout = (props) => {
    console.log("here is props for layout component", props)
    return (
        <div>
            <Head>
                <title>Hi Lucy</title>
                <link 
                    rel="stylesheet"
                    href="https://bootswatch.com/4/cerulean/bootstrap.min.css"
                />
                <link rel="stylesheet" href="https://unpkg.com/react-vis/dist/style.css"/>
            </Head>
            <Navbar />
            <div className="container">
                {props.children}
            </div>
        </div>
    )
}
export default Layout