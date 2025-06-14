import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { RiDeleteBin6Line } from "react-icons/ri";
import SearchBar from "./SearchBar";



export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer();
	const counter = store.favorites.length;

	const removeFav = (name) => {
		dispatch({
			type: 'SET_FAVORITES',
			payload: store.favorites.filter(fav => fav.name !== name)
		})
	}

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-granate-claro rounded-4 shadow-sm nav-hover px-4 py-2">
			<div className="container">
				<Link to="/">
					<img src="https://i.ebayimg.com/images/g/mbwAAOSwzwxlN-wH/s-l1200.jpg" alt="Bootstrap" width="100" height="100" />
				</Link>
				<SearchBar />
				<div className="ml-auto">
					<div className="dropdown">
						<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favoritos <span className=" badge bg-info text-dark ms-2">{counter}</span>
						</button>

						<ul className="dropdown-menu dropdown-menu-negro">

							{
								store.favorites.map((fav, index) => (
									<li key={index}>
										<Link
											to={`/detail/${fav.type}/${fav.uid}`}
											className="dropdown-item p-0 m-0"
										>
											{fav.name}
										</Link>
										<button
											className="btn botonbtn btn-dark text-white "
											type="button"
											onClick={() => removeFav(fav.name)}
										>
											<RiDeleteBin6Line />
										</button>
									</li>


								))
							}

						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
//indice buscar (mirar proyecto)
//tener 3 card distintas
//solo hacer gets
//vehiculos planetas personas 3 gets para info de 3 cosas
//solo queremos el result de la api
//para la store