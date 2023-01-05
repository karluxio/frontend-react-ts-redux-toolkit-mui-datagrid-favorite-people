import { People } from '@/data';
import { addPeople } from '@/redux/states';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { PeopleTable } from './components/PeopleTable';

export interface HomeProps { }

const Home: React.FC<HomeProps> = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(addPeople(People))
	}, [])

	return (
		<PeopleTable />
	)
}
export default Home;
