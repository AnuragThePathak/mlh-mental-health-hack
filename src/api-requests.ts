import ogs from "open-graph-scraper"
import { Article } from "./models"
export default async function getArticles() {
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': process.env.X_RAPIDAPI_KEY as string,
			'X-RapidAPI-Host': process.env.X_RAPIDAPI_HOST as string
		}
	}

	const response = await fetch(
		`https://${process.env.X_RAPIDAPI_HOST}/news/dna`, options)
	const articles = await response.json()
	console.log(articles)

	const data = [] as Article[]
	for (let i = 0; i < articles.length; i++) {
		const x = articles[i]
		console.log(x)
		const opts = {
			url: x.url as string
		}
		let meta: any 
		await ogs(opts)
		.then(val => { meta = val.result})
		.catch(e => console.error(e))
		data.push({
			url: x.url as string,
			title: x.title as string,
			source: x.source as string,
			imageUrl: meta?.ogImage ? meta?.ogImage?.url :null
		})
	}
	return data
}