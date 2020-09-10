import React, { useEffect, useState } from 'react';
import { Grid, useMediaQuery, useTheme, createStyles, Theme, makeStyles, Typography, Fade } from "@material-ui/core";
import pan from "../images/pan.png";
import bckg from "../images/fondo.png";

const Home = () => {
	const theme = useTheme();
	const mobile = useMediaQuery(theme.breakpoints.down('sm'));
	const useStyles = makeStyles((theme: Theme) => createStyles({
		root: {
			background: `linear-gradient(346deg, #ffffff, #fff4ba)`,
			backgroundSize: "400% 400%",
			height: "100%",
			color: "#ffdb57",
			textShadow: `2px 2px #000`,
			animation: "$backgroundColorAnimation 3s infinite",
			overflowY: "hidden"
		},
		"@keyframes backgroundColorAnimation": {
			"0%": { backgroundPosition: "0% 34%" },
			"50%": { backgroundPosition: "100% 67%" },
			"100%": { backgroundPosition: "0% 34%" }
		},
		title:{
			textTransform: "uppercase", 
			fontWeight: "bold",
			fontSize: mobile? "15vw" : ""
		},
		"@keyframes backgroundPhotoAnimation": {
			"0%": {
				right: "calc(0px - 100%)"
			},
			"70%": {
				right: 0
			},
			"80%": {
				right: -10
			},
			"100%": {
				right: 0
			}
		},
		backgroundImage: {
			width: "100%",
			height: "100%",
			position: "fixed",
			right: 0,
			zIndex: 0,
			animation: "$backgroundPhotoAnimation 1300ms"
		},
		"@keyframes underlineAnimation": {
			from: {
				borderBottomWidth: 0,
				boxShadow: "none"
			},
			to: {
				borderBottomWidth: "1vh",
				boxShadow: `0px 8px 7px -9px`
			}
		},
		buyHereText: {
			cursor: "pointer",
			textTransform: "uppercase",
			fontWeight: "bold",
			fontStyle: "italic",
			fontSize: mobile? "10vw" : "",
			width: "max-content",
			color: "black",
			textShadow: `2px 2px #ffdb57`,
			transitionProperty: "textDecoration",
			transitionDuration: "400ms",
			margin: "0 auto",
			textDecoration: "none",
			display: "block",
			"&:hover": {
				borderBottom: "solid 1vh #ffdb57",
				animation: "$underlineAnimation 400ms",
				boxShadow: `0px 8px 7px -9px`
			}
		},
		"@keyframes spinningBreadAnimation": {
			"100%": {
				transform: "rotate(360deg)"
			}
		},
		breadImage: {
			animation: "$spinningBreadAnimation 2s",
		}
	})
	);

	const classes = useStyles();
	return (
		<Grid
			container
			direction="column"
			justify="center"
			alignItems="center"
			classes={{
				root: classes.root
			}}
		>
			<img
				className={classes.backgroundImage}
				src={bckg}
				alt="yellow background"
			/>
			<Grid item style={{ height: "max-content", width: "100%", zIndex: 999 }}>
				<Fade in={true} timeout={1800}>
					<div>
						<Typography align="center" variant="h1" className={classes.title}>
							Vendopan
        </Typography>
					</div>
				</Fade>
			</Grid>
			<Grid item style={{ position: "relative" }}>
				<img
					className={classes.breadImage}
					src={pan}
					style={{ width: mobile ? "90vw" : "50vw" }}
					alt="sourdough bread Vendopan"
				/>
				<div style={{ width: "100%", position: "absolute", bottom: 40, }}>
					<Typography
						variant="h2"
						align="center"
						component="a"
						className={classes.buyHereText}
						target="_blank"
						href="https://clynk.me/vendopan/nOrfKT8WpN"
					>
						Compra Aqui
                </Typography>
				</div>
			</Grid>
			<Grid item container xs={12} style={{position: "absolute", bottom: 10}} justify="center">
				<Typography target="_blank" href="https://www.gregorioospina.com" component="a" style={{textDecoration: "none", textShadow: "none"}} variant="overline">
					By Grego
				</Typography>
			</Grid>
		</Grid>
	);
};
export default Home;