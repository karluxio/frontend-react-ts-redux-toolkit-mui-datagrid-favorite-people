import { People } from '@/data';
import { Person } from '@/models';
import { addFavorites, PersonStore } from '@/redux';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { Checkbox, Grid, List, ListItem, Tooltip, Typography } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams, GridToolbar } from '@mui/x-data-grid';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HomeLayout } from '../../HomeLayout';

export interface PeopleTableProps { }

const PeopleTable: React.FC<PeopleTableProps> = () => {
	const [selectedPeople, setSelectedPeople] = useState<Array<Person>>([])

	const dispatch = useDispatch()

	const statePeople = useSelector((store: PersonStore) => store.people)
	const stateFavorites = useSelector((store: PersonStore) => store.favorites)

	const pageSize = 5

	const findPerson = (person: Person) => !!stateFavorites.find(p => p.id === person.id);
	const filterPerson = (person: Person) => stateFavorites.filter(p => p.id !== person.id);


	const handleChange = (person: Person) => {
		const filteredPeople = findPerson(person) ? filterPerson(person) : [...selectedPeople, person];
		dispatch(addFavorites(filteredPeople));
		setSelectedPeople(filteredPeople);
	};


	const handleAllSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
		const checked = e.target.checked
		setSelectedPeople(checked ? [...People] : [])
		checked ? dispatch(addFavorites([...People])) : dispatch(addFavorites([]))
	}

	const columns: GridColDef[] = [
		{
			field: 'actions',
			type: "actions",
			disableColumnMenu: true,
			description: "Select favorites",
			renderHeader: () =>
				<Tooltip title="Select favorites">
					<Checkbox
						color='error'
						size='medium'
						icon={<FavoriteBorder />}
						checkedIcon={<Favorite />}
						onChange={handleAllSelection}
					/>
				</Tooltip>,
			filterable: false,
			sortable: false,
			width: 75,
			renderCell: (params: GridRenderCellParams) => <>
				<Checkbox
					color='error'
					size='medium'
					checked={findPerson(params.row)}
					icon={<FavoriteBorder />}
					checkedIcon={<Favorite />}
					onChange={() => handleChange(params.row)}
				/>
			</>
		},
		{
			field: 'name',
			headerName: 'Name',
			flex: 1,
			minWidth: 150,
			renderCell: (params: GridRenderCellParams) => <>{params.value}</>
		},
		{
			field: 'category',
			headerName: 'Category',
			flex: 1,
			minWidth: 150,
			renderCell: (params: GridRenderCellParams) => <>{params.value}</>
		},
		{
			field: 'company',
			headerName: 'Company',
			flex: 1,
			minWidth: 150,
			renderCell: (params: GridRenderCellParams) => <>{params.value}</>
		},
	];

	const getRowId = useCallback(
		(row: any) => row.id,
		[],
	)

	useEffect(() => {
		setSelectedPeople(stateFavorites);
	}, [stateFavorites]);

	return (
		<>
			<HomeLayout>
				<DataGrid
					// localeText translate DataGrid Text
					// localeText={{ columnMenuSortAsc: 'Ordenar ascendentemente', }}
					components={{
						Toolbar: GridToolbar,
					}}
					columns={columns}
					rows={statePeople}
					disableColumnSelector
					disableSelectionOnClick
					autoHeight
					pageSize={pageSize}
					rowsPerPageOptions={[pageSize]}
					getRowId={getRowId}
					sx={{ width: "100%" }}
				/>
			</HomeLayout>

			{/* TODO: make a new table for favorites only or a modal */}
			<Grid container width="80%" margin="auto" display="flex" justifyContent="center" sx={{ mt: 10, border: "solid 1px #ddd" }}>
				<Grid item>
					<Typography variant='h5' align='center'>Favorites</Typography>
					<List sx={{ width: '100%', margin: "auto", maxWidth: 360, backgroundColor: 'error' }}>
						{stateFavorites.map((item: Person) => (
							<ListItem key={item.id}>{item.name}</ListItem>
						))}
					</List>
				</Grid>
			</Grid>


		</>
	);
};

export default PeopleTable;
