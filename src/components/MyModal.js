import React from 'react';
import './MyModal.css';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

{/* My Modal takes in brewery information and Modal boolean to determine if Modal is displayed or not */}
{/* Assigned to divs for alignment */}
const MyModal = ({showModal, setShowModal, brewery }) => {
    const breweryAddress = brewery.street
    const breweryPhone =<div> phone: {brewery.phone} </div>
    const breweryWebsite = <div> <a href= {brewery.website_url}> {brewery.website_url} </a> </div>
    return <>{showModal ? <div> {breweryAddress} {breweryPhone} {breweryWebsite}  </div> : null }</>; {/* if showModal then return div element of brewery address, phone and website */}
    };


export default MyModal;
