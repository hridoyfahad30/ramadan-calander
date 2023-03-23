
import { useRef } from 'react';
import Calanders from '../Calanders/Calanders';

const Header = ({setSearchValue, searchValue}) => {

  const value = useRef()

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    setSearchValue(value.current.value)
  };

  
  
  return (

    <div className='container mx-auto my-6'>

        <div className="navbar bg-base-100">

          <div className="flex-1">
            <h1 className="btn btn-ghost normal-case text-3xl text-white">RAMADAN CALANDER</h1>
          </div>
          
        </div>

         
        
        

    </div>

    );
};

export default Header;