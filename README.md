# Mental Health Latest

- The site is deployed in [Vercel](https://mlh-mental-health-hack.vercel.app/) but not working because the collection of the Open-Graph tags using scraping takes quite a lot of time and that makes Heroku functions time out on Hobby plan. The webscraping process takes place just before server-side rendering.
- Right now the scraper looks for all Open-Graph tags, we can modify the process and make it faster by scraping only the og:image tag. Any contributions on that or other fields are welcomed.
