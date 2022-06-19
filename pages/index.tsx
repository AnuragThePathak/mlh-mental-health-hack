import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import MuiLink from '@mui/material/Link'
import Typography from "@mui/material/Typography"
import type { NextPage } from 'next'
import Head from "next/head"
import ResponsiveAppBar from "../components/ResponsiveAppBar"
import Copyright from "../components/Copyright"
import SourceCode from "../components/SourceCode"
import heroImage from "../public/health-img.jpg"
import Image from "next/image"
import getArticles from "../src/api-requests"
import ArticleList from "../components/ArticleList"

const Home: NextPage = (props: any) => {
  return (
    <div>
      <Head>
        <title>Mental Health Latest</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <main>
        <Container maxWidth="xl">
          <Box
            sx={{
              my: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <ResponsiveAppBar />
            <Typography variant="h3" component="h1" gutterBottom sx={{
              m: 6,
            }}>
              Read recent news related to metal health.
            </Typography>

            <Image src={heroImage} alt="share-image" placeholder="blur"
              height={450} width={600} />

            <Typography variant="body2" >
              <MuiLink color="inherit" href="https://www.freepik.com/vectors/self-care"
                target="_blank">
                Self care vector created by freepik - www.freepik.com
              </MuiLink>
            </Typography>

            <ArticleList articles={props.data} />

            <Typography variant="h4" m={4}>
              {"This website was created by "}
              <MuiLink href="https://twitter.com/AnuragThePathak"
                target="_blank">
                Anurag Pathak
              </MuiLink>{" for MLH Mental Health Hacks II."}
            </Typography>

            <Container maxWidth="xl" sx={{
              // m: 5,
              display: "flex",
              justifyContent: "space-evenly",
              flexWrap: { xs: "wrap", sm: "nowrap" },
              bgcolor: "whitesmoke"
            }}>
              <SourceCode />
              <Copyright />
            </Container>
          </Box>
        </Container>
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  try {
    const data = await getArticles()

    // Pass data to the page via props
    return { props: { data } }
  } catch (e) {
    console.error(e)
    return { props: { data: [] } }
  }
}

export default Home