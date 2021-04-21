import React, { useState} from 'react';
import './SearchBeers.css';
import HomePage from './HomePage';
import Footer from './Footer';
import MyModal from './MyModal';
import { Button } from './Button';

function SearchBeers() {

  const [input, setInput] = useState(""); {/*input set to empty initially, setInput later updates when user searches for a brewery*/}
  const [breweries, setBreweries] = useState([]); {/*breweries initially empty, once breweries fetched, setBreweries will be filled */}
  const [emptyResult, setEmptyResult] = useState(false); {/* Used to check if input is empty */}
  const [showModal, setShowModal] = useState(false); {/* Used to check state of modal, whether we want to display or not */}

  {/*** Opens Modal
    Each click sets previous to previous
    meaning open and then close

  ***/}
  const openModal = () => {
    setShowModal(prev => !prev)
  }

   {/***
   Makes a fetch call to Openbrewerydb api
   Fetches the data

   ***/}
   const getBreweries = () => {
     fetch(`https://api.openbrewerydb.org/breweries/search?query=${input}`)
     .then((response) => response.json())
     .then((data) => { if (data.length < 1) { setEmptyResult(true); }
     {/* checks if empty, if so, then set the fetched elements into the breweries array */}
     setBreweries(data);
     })
     };

  {/* Used to clear Breweries Array */}
  const clearResults = () => {
    setBreweries([]);
    setEmptyResult(false);
    setInput("");
  };

  {/* Map breweries to BreweriesList
    Dynamically sorts breweries by name
    Makes all breweries into Div tags containing name, city, and state
    Also contains a hidden modal only shown onClick down below
  */}
  const breweriesList = breweries
    .sort(function (a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;})
    .map((brewery) => (
    <>
    <li>

      <div>
        <h3 className="cash">{brewery.name}</h3>
        <p> {brewery.city + ", " + brewery.state} </p>
      </div>

    </li>
    <MyModal showModal={showModal} setShowModal={setShowModal} brewery={brewery}/>
    </>
    ));

    return (
    <>
    {/* This will output the results of what brewery we seach for */ }
    <div className='Home-container2'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
        <p className="p10">
          Search for breweries{'    '}
          <i class="fas fa-beer"></i>
        </p>
      <div className='center'>
        <input
         className='input'
         type='text'
         value={input}
         placeholder='Search for a brewery'
         onChange={(e) => setInput(e.target.value)}/>

        {/*Search button, onClick return array of Breweries */}
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={getBreweries}>
          <i class="fas fa-search"></i>
        </Button>

        {/*Clear button, onClick clear all breweries from array if any */}
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={clearResults}>
          <i class="fas fa-eraser"></i>
        </Button>

        {/* Modal button, onClick show details of that brewery*/}
        <Button
          className='btns3'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={openModal}>
          Brewery Details
        </Button>
    </div>

        {/*Unordered list of breweries
          if emptyResult then return N/A */}
        <ul className='Content'> {breweriesList}
        {emptyResult === true && ( <p className="p10">N/A</p> ) }
        </ul>
    </div>

    </>
    );

}
export default SearchBeers;
