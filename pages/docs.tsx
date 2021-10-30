import marked from "marked";
import Template from "../components/structures/Template";
import { readFileSync } from 'fs';
import { NextPage } from "next";
import Head from "next/head";
import Article from "../components/structures/Article";

// marked extension
const customHeadingId = require("marked-custom-heading-id");
marked.use(customHeadingId());

interface IDocs {
    content: string
}

const Docs: NextPage<IDocs> = ({ content }) => {
    return (
        <>
            <Head>
                <title>Documentation - Polarbear</title>
            </Head>
            <Template>
                <div className="my-5 container">
                    <Article>
                        <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
                    </Article>
                </div>
            </Template>
        </>
    )
}
export default Docs

export async function getStaticProps() {
    const content = readFileSync(__dirname.replace("/.next/server/pages", "") + "/docs/polarbear.md", 'utf8');
    return {
        props: {
            content: content
        }
    }
}