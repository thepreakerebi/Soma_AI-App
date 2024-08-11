import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import 'bootstrap-icons/font/bootstrap-icons.css'; // Bootstrap Icons

const Header = () => {
    return (
        <header className="absolute top-4 left-4">
        <button className=" text-bla p-2 rounded-full">
            <i className="bi bi-play-circle text-4xl"></i> {/* Music play icon */}
        </button>
        </header>
    );
};

export default Header;
