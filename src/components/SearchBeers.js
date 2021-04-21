import React, { useState} from 'react';
import './SearchBeers.css';
import HomePage from './HomePage';
import Footer from './Footer';
import MyModal from './MyModal';
import { Button } from './Button';

{/* Function will search for breweries and return a list */}
function SearchBeers() {

  {/* breweries initially empty, once breweries fetched, setBreweries will be filled */}
  const [breweries, setBreweries] = useState([]);

  {/* Used to check if input is empty */}
  const [emptyResult, setEmptyResult] = useState(false);

  {/* search input set to empty initially, setSearchInput later updates when user searches for a brewery */}
  const [searchInput, setSearchInput] = useState("");

  {/* Used to check state of modal, whether we want to display or not */}
  const [showModal, setShowModal] = useState(false);

  {/* Opens Modal
      Each click flips the boolean
      meaning open and then close upon each click/call
  */}
  const openModal = () => {
    setShowModal(prev => !prev)
  }

  {/* Used to clear Breweries Array
      Upon click, setBreweries back to Empty Array
      Clearing the result should also hide the modal
  */}
  const clearResults = () => {
    setSearchInput("");
    setBreweries([]);
    setEmptyResult(false);
    setShowModal(false);
  };

   {/*  Makes a fetch call to Openbrewerydb api
        Fetches the data
        If data results are less than one, then there are no JSON items
   */}
   const fetchBreweries = () => {
     fetch(`https://api.openbrewerydb.org/breweries/search?query=${searchInput}`)
       .then((response) => response.json())
       .then((data) => { if (data.length < 1) { setEmptyResult(true); }
     {/* Sets the JSON objects to setBreweries array */}
     setBreweries(data);
      })
    };

  {/* Map breweries to BreweriesList
      Dynamically sorts breweries by name
      Makes Div tags containing name, city, and state of brewery
      Also contains a hidden modal only shown onClick down below
  */}
  const breweriesList = breweries.sort(function (x, y) {
    if (x.name < y.name) { return -1;}
    if (x.name > y.name) { return 1; }
    return 0;})
    .map((brewery) => (
    <>
    <li>
      {/* Brewery name, city, and state mapped into a div */}
      <div> <h1 className="cash">{brewery.name}</h1> <p> {brewery.city + ", " + brewery.state} </p> </div>
    </li>
    {/* MyModal won't be triggered unless setShowModal is triggered to true by an onClick event */}
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

        {/* Modal button, onClick show details of that brewery */}
        <Button
          className='btns3'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={openModal}>
          Brewery Details
        </Button>
    </div>
        {/* List of breweries
            if emptyResult then return N/A */}
        <ul className='Content'> {breweriesList}
        {emptyResult === true &&
        ( <p className="p10">N/A
          </p> ) }
        </ul>
    </div>

    </>
    );

{/* End of code */ }
}
export default SearchBeers;
