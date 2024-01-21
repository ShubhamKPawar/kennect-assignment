import React,{useState} from 'react';
import { TextField,Button } from '@mui/material';

const SearchPostComment = ({onSearch}) => {
    const [searchQuery, setSearchQuery] = useState('');
      
    const handleSearchChange = (event) => {
      setSearchQuery(event.target.value);
    };
      
    const handleSearch = () => {
      onSearch(searchQuery);
    };
      
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height:'50vh' , justifyContent: 'center'}}>
        <TextField
              label="Search Posts and Comments"
              variant="outlined"
              value={searchQuery}
              onChange={handleSearchChange}
              style={{ marginBottom: '20px', width: '300px' }}
            />
            <Button variant="contained" onClick={handleSearch} style={{width:"16px"}}>
              Search
            </Button>
        </div>
    );
};
    
export default SearchPostComment
