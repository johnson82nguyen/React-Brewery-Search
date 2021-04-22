import React, { useState} from 'react';
import './DetailModal.css';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { Button } from '../Button/Button';


{/* DetailModal component takes in brewery information and Boolean props to determine if Modal is displayed or not */}
{/* Brewery information Assigned to divs for alignment on render */}
{/* If modal is open then display brewery information within the Modal */}
function DetailModal({showModal, setShowModal, selectedBrewery}) {

    return (
        <div className="modal-div" >
            <Modal className="my-modal" isOpen={showModal}>
                <div className="modal-contents">
                  <div className="breweryname">
                    <i class="fas fa-beer"></i>  Name: {selectedBrewery.name}
                  </div>
                  <div className="street">
                    <i class="fas fa-location-arrow"></i> Street: {selectedBrewery.street}
                  </div>
                  <div className="country">
                    <i class="fas fa-flag-usa"></i> Country: {selectedBrewery.country}
                  </div>
                  <div className="phone">
                    <i class="fas fa-phone-square-alt"></i>Phone: {selectedBrewery.phone}
                  </div>
                  <div className="website">
                    <i class="fas fa-globe-americas"></i> Website: <a href={selectedBrewery.website_url} target="_blank"> {selectedBrewery.website_url}</a>
                  </div>
                  <div className="button-div">
                      <Button className="closeModal" onClick={() => setShowModal(false)}> Close </Button>
                  </div>
                </div>
            </Modal>
        </div>


    );
};

export default DetailModal;
