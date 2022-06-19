import { Box } from "@mui/material"
import { Article } from "../src/models"
import ActionAreaCard from "./Article"

export default function Articles({ articles }: { articles: Article[] }) {
	return (
		<Box sx={{
			display: "flex",
			flexWrap: "wrap",
			justifyItems: "left"
		}}>
			{articles?.map(article => {
				return (
					<ActionAreaCard article={article} key={article.url} />
				)
			})}
		</Box >
	)
}