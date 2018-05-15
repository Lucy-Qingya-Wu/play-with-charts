import Layout from '../components/Layout'
import Link from 'next/link'
const Index = () => (
    <Layout>

        <p>Welcome to index page</p>
        <p>Please check out React chart libraries comparison on <Link href='/about'><a>About</a></Link> page</p>

    </Layout>
)
export default Index