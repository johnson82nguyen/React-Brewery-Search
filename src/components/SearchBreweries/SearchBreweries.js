import React, { useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './SearchBreweries.css';
import HomePage from '../HomePage/HomePage';
import Footer from '../Footer/Footer';
import DetailModal from '../DetailModal/DetailModal';
import { Button } from '../Button/Button';
import { render } from '@testing-library/react';

{/* Function will search for breweries and return a list */}
function SearchBreweries() {

  {/* breweries initially empty, once breweries fetched, setBreweries will be filled */}
  const [breweries, setBreweries] = useState([]);

  {/* Used to check if input is empty */}
  const [emptyResult, setEmptyResult] = useState(false);

  {/* search input set to empty initially, setSearchInput later updates when user searches for a brewery*/}
  const [searchInput, setSearchInput] = useState("");

  {/* Used to check state of modal, whether we want to display or not */}
  const [showModal, setShowModal] = useState(false);

  const [selectedBrewery, setSelectedBrewery] = useState([]);


  {/* Used to clear Breweries Array
      Upon click, setBreweries back to Empty Array
  */}
  const clearResults = () => {
    setBreweries([]);
    setEmptyResult(false);
    setSearchInput("");
  };


  {/*
  Makes a fetch call to Openbrewerydb api
  Fetches the data into setBreweries []
  */}
  const fetchBreweries = () => {
    fetch(`https://api.openbrewerydb.org/breweries/search?query=${searchInput}`)
      .then((response) => response.json())
      .then((data) => { if (data.length < 1)
                          { setEmptyResult(true); }

        setBreweries(data);
    });

  };
  {/* Fetches single brewery for modal use */}
  const fetchSingleBrewery = (id) => {
    // setBreweryId(id);

    fetch(`https://api.openbrewerydb.org/breweries/${id}`)
    .then((response) => response.json())
    .then((data) => {
    {/* Sets the JSON objects to setBreweries array */}
    setSelectedBrewery(data);
    setShowModal(prev => !prev);

    // setIsFetchingBrewery(false);
    })
  };

  {/* Sorts list of breweries by name, then maps each brewery to html element
      Will be display a list of html elements
      Displayed when fetchBreweries is called later
  */}
  const breweriesList = breweries.sort(function (x, y) {
    if (x.name < y.name) { return -1;}
    if (x.name > y.name) { return 1; }
    return 0;})
  .map((brewery) => {
    return (<li>
    <div className="brewery" id={brewery.id} key={brewery.id}  >
      <h1 className="brewery-title">{brewery.name}</h1>
      <p> {brewery.city + ", " + brewery.state}
      </p>
      <Button
        className='btns3'
        buttonStyle='btn--outline'
        buttonSize='btn--large'
        onClick={() =>  fetchSingleBrewery(brewery.id) } >
        Brewery Details
      </Button>
    </div>
  </li>
    )});

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
         value={searchInput}
         placeholder='Search for a brewery'
         onChange={(e) => setSearchInput(e.target.value)}/>

        {/* Search button, onClick return array of Breweries */}
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={fetchBreweries}>
          <i class="fas fa-search"></i>
        </Button>

        {/* Clear button, onClick clear all breweries from array if any */}
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={clearResults}>
          <i class="fas fa-eraser"></i>
        </Button>

    </div>
        {/* List of breweries
            if emptyResult then return N/A */}
        <ul className='Content'>
        {breweriesList}

        {emptyResult === true &&
        ( <p className="p10">N/A
          </p> ) }
        </ul>

        {showModal ? <DetailModal showModal = {showModal} setShowModal = {setShowModal} selectedBrewery = {selectedBrewery} /> : null}
    </div>

    </>
    );


}
export default SearchBreweries;
