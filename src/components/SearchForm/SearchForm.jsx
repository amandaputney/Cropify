import React, { useState} from 'react';
import axios from 'axios';
import MyModal from '../MyModal/MyModal';
import Image from 'react-bootstrap/Image';


export default function SpeciesSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedSpeciesData, setSelectedSpeciesData] = useState(null);

  const apiUrl = 'https://perenual.com/api/species-list?&key=sk-U1XV64f8bef48b9d62094&q=';

  const fetchSpeciesData = async () => {
    setLoading(true);

    try {
      const response = await axios.get(apiUrl + searchTerm);
      const filteredData = response.data.data.filter((species) =>
        species.common_name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(filteredData);
      setLoading(false);
      console.log('API Response:', response.data);
      console.log('Filtered Data:', filteredData);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      setSearchResults([]); // Clear results when search term is empty
      return;
    }

    fetchSpeciesData();
  };

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };


  return (
    <div>
      <input
        className="searchInput"
        type="text"
        placeholder="Search crop..."
        value={searchTerm}
        onChange={handleSearchInputChange}
      />
      <button onClick={handleSearch}>Search</button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {searchResults.map((species) => (
          <li key={species.id}>
            <b>{species.common_name}</b>
            <div></div>
            <i>{species.scientific_name}</i>
            <div></div>
            {species.default_image === null || species.default_image.original_url === 
              "https://perenual.com/storage/image/upgrade_access.jpg" ? (
              <p>Image not available</p>
            ) : (
           <Image src={species.default_image.original_url} alt="image" rounded /> 
            )}
            <div></div>
            <div></div>
              <MyModal selectedSpeciesData={species} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// export default function SpeciesSearch() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const apiUrl = 'https://perenual.com/api/species-list?&key=sk-U1XV64f8bef48b9d62094&q=';

//   const fetchSpeciesData = async () => {
//     setLoading(true);

//     try {
//       const response = await axios.get(apiUrl);
//       const filteredData = response.data.data.filter((species) =>
//         species.common_name.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//       setSearchResults(filteredData);
//       setLoading(false);
//       console.log('API Response:', response.data);
//       console.log('Filtered Data:', filteredData);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (searchTerm.trim() === '') {
//       setSearchResults([]); // Clear results when search term is empty
//       return;
//     }

//     fetchSpeciesData();
//   }, [searchTerm]);

//   const handleSearchInputChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <div>
//       <h2>Species Search</h2>
//       <input
//         type="text"
//         placeholder="Search species..."
//         value={searchTerm}
//         onChange={handleSearchInputChange}
//       />
//       <button onClick={fetchSpeciesData}>Search</button>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <ul>
//           {searchResults.map((species) => (
//             <li key={species.id}>{species.common_name}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }



// import { useState } from 'react';
// import * as usersService from '../../utilities/users-service';

// export default function LoginForm({ setUser }) {
//   const [credentials, setCredentials] = useState({
//     email: '',
//     password: ''
//   });
//   const [error, setError] = useState('');

//   function handleChange(evt) {
//     setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
//     setError('');
//   }

//   async function handleSubmit(evt) {
//     // Prevent form from being submitted to the server
//     evt.preventDefault();
//     try {
//       // The promise returned by the signUp service method 
//       // will resolve to the user object included in the
//       // payload of the JSON Web Token (JWT)
//       const user = await usersService.login(credentials);
//       setUser(user);
//     } catch {
//       setError('Log In Failed - Try Again');
//     }
//   }

//   return (
//     <div>
//       <div className="form-container">
//         <form autoComplete="off" onSubmit={handleSubmit}>
//           <label>Email</label>
//           <input type="text" name="email" value={credentials.email} onChange={handleChange} required />
//           <label>Password</label>
//           <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
//           <button type="submit">LOG IN</button>
//         </form>
//       </div>
//       <p className="error-message">&nbsp;{error}</p>
//     </div>
//   );
// }
