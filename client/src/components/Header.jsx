import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div >
      <div className="bg-purple-600 text-white text-center py-2">
        Lorem ipsum dolor sit amet consectetur adipisicing.
      </div>

      <div className="flex justify-between items-center mx-auto mt-5 w-11/12 text-white py-5 ">
        <div className="flex items-center">   
          <Link  className="text-2xl font-bold text-gray-400">
            Tequed Editor
          </Link>
        </div>

        <div className="space-x-4">
          <Link to="/editor" target="blank"className="text-lg text-gray-400 hover:text-gray-500">
           Editor
          </Link>
          
          <Link
            className="text-lg text-gray-400 hover:text-white"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
