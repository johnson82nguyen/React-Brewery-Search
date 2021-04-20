import React from 'react';
import './MyModal.css';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const MyModal = ({showModal, setShowModal, brewery }) => {
    const breweryAddress = brewery.street
    const breweryPhone =<div> {brewery.phone} </div>
    const breweryWebsite = <div> <a href= {brewery.website_url}> {brewery.website_url} </a> </div>
    return <>{showModal ? <div> {breweryAddress} {breweryPhone} {breweryWebsite}  </div> : null }</>;
    };

export default MyModal;
