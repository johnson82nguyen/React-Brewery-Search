import React, { useState} from 'react';
import './SearchBeers.css';
import HomePage from './HomePage';
import Footer from './Footer';
import MyModal from './MyModal';
import { Button } from './Button';

function SearchBeers() {


    const [input, setInput] = useState("");
    const [breweries, setBreweries] = useState([]);
    const [emptyResult, setEmptyResult] = useState(false);

    const [showModal, setShowModal] = useState(false);


    const openModal = () => {
      setShowModal(prev => !prev)
    }

    const getBreweries = () => {
        fetch(`https://api.openbrewerydb.org/breweries/search?query=${input}`)
            .then((response) => response.json())
            .then((data) => {
              if (data.length < 1) {
                  setEmptyResult(true);
              }
              setBreweries(data);
            })
    };

    const clearResults = () => {
        setBreweries([]);
        setEmptyResult(false);
        setInput("");
    };

    const breweriesArr = breweries
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
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <Button
                          className='btns'
                          buttonStyle='btn--outline'
                          buttonSize='btn--large'
                          onClick={getBreweries}

                        >
                        <i class="fas fa-search"></i>
                        </Button>
                        <Button
                          className='btns'
                          buttonStyle='btn--outline'
                          buttonSize='btn--large'
                          onClick={clearResults}

                        >
                        <i class="fas fa-eraser"></i>
                        </Button>
                    </div>
                    <div class="buttondiv">
                    <Button
                      className='btns'
                      buttonStyle='btn--outline'
                      buttonSize='btn--large'
                      onClick={openModal}

                    >
                    Toggle detailed view
                    </Button>
                    </div>
                    <ul className='Content'> {breweriesArr} </ul>
                    {emptyResult === true && ( <p className="p10">N/A</p> ) }
                  </div>
        </>
    );
}
export default SearchBeers;
