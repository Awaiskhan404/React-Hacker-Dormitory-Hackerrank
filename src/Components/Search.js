import React from 'react';
import { Search as useSearch } from '../services/search';



function Search({ db, state, setState, errors }) {


	const [query, setQuery] = React.useState({
		name: '',
		joiningDate: '',
	});


	const SearchHandler = (e) => {
		e.preventDefault();
		const results = useSearch(db, query, errors);
		if (results && !state.find((resident) => resident.name.toLowerCase() === results.name.toLowerCase())) {
			setState([...state, results]);
			document.getElementById('studentName').value = "";
			document.getElementById('joiningDate').value = "";
		}
	}

	return (
		<div className="my-50 layout-row align-items-end justify-content-end">
			<label htmlFor="studentName">Student Name:
				<div>
					<input
						id="studentName"
						data-testid="studentName"
						type="text"
						className="mr-30 mt-10"
						onChange={(e) => setQuery({ ...query, name: e.target.value })}
					/>
				</div>
			</label>
			<label htmlFor="joiningDate">Joining Date:
				<div>
					<input
						id="joiningDate"
						data-testid="joiningDate"
						type="date"
						className="mr-30 mt-10"
						onChange={(e) => setQuery({ ...query, joiningDate: e.target.value })}
					/>
				</div>
			</label>
			<button
				type="button"
				data-testid="addBtn"
				className="small mb-0"
				onClick={SearchHandler}
			>Add</button>
		</div>
	);
}

export default Search;
