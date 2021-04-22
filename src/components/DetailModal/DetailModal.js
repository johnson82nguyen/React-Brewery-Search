import React, { useState} from 'react';
import './DetailModal.css';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

function DetailModal({showModal, setShowModal, selectedBrewery}) {


{/* DetailModal component takes in brewery information and Boolean props to determine if Modal is displayed or not */}
{/* Brewery information Assigned to divs for alignment on render */}
    return (
        <div className="my-modal" >
            <Modal isOpen={showModal}>

                <div>
                    {selectedBrewery.name}
                </div>
                <div>
                    {selectedBrewery.street}
                </div>
                <div>
                    {selectedBrewery.phone}
                </div>
                <div>
                    {selectedBrewery.website_url}
                </div>

                <button onClick={() => setShowModal(false)}>Close</button>
            </Modal>
        </div>


    ); {/* if showModal then return div element of brewery address, phone and website */}
};

export default DetailModal;
