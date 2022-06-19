import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Article } from "../src/models"
import { Button, CardActions } from "@mui/material"

export default function ActionAreaCard({ article}: {article: Article}) {
  return (
    <Card sx={{ maxWidth: 345, m: "10px" }}>
        <CardMedia
          component="img"
          height="140"
          image={article.imageUrl as string}
          alt="Can't load image"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {article.title}
          </Typography>
        </CardContent>
				<CardActions>
					<Button href={article.url} target="_blank">
						Read
					</Button>
				</CardActions>
    </Card>
  );
}
