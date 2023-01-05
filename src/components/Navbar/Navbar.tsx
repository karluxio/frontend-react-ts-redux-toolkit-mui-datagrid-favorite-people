import { AppBar, Grid, Toolbar, Typography } from "@mui/material";

export interface NavbarInterface { }

const Navbar: React.FC<NavbarInterface> = () => {
	return (

		<AppBar position="fixed">
			<Toolbar>
				<Grid container display="flex" flexDirection="column" justifyContent="center" alignItems="center">
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						Lumusitech
					</Typography>
				</Grid>
			</Toolbar>
		</AppBar>

	)
};

export default Navbar;
