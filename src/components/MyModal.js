import React from 'react';
import './MyModal.css';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

{/* MyModal component takes in brewery information and Boolean props to determine if Modal is displayed or not */}
{/* Brewery information Assigned to divs for vertical alignment */}
const MyModal = ({showModal, setShowModal, brewery }) => {
    const breweryAddress = brewery.street
    const breweryPhone =<div> phone: {brewery.phone} </div>
    const breweryWebsite = <div> <a href= {brewery.website_url}> {brewery.website_url} </a> </div>
    return <> {showModal ? <div key={brewery.id} id={brewery.id}> {breweryAddress} {breweryPhone} {breweryWebsite} </div> : null } </>; {/* if showModal then return div element of brewery address, phone and website */}
};


export default MyModal;
