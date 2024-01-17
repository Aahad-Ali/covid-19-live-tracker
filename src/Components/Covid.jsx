import React, { useEffect, useState } from 'react';

export const Covid = () => {

    const [data, setData] = useState([]);
    const getCovidData = async () => {
        try {
            const res = await fetch("https://data.covid19india.org/data.json");
            // console.log(res);
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0])
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getCovidData();

        return () => {

        }
    }, [])



    return (
        <><section>
            <h1>Live Tracker</h1>
            <ul className='main-container'>
                <li>
                    <div className='card_main' >
                        <div>
                            <p><span>Active Cases </span><br />{data.active}</p>
                            <p>
                                Pakistan</p>
                        </div>

                    </div>
                </li>
                <li>
                    <div className='card_main' >
                        <div>
                            <p><span>Confirmed Cases </span><br />{data.confirmed}</p>
                            <p>
                                Pakistan</p>
                        </div>

                    </div>
                </li>
                <li>
                    <div className='card_main' >
                        <div>
                            <p><span>Deaths Cases </span><br />{data.deaths}</p>
                            <p>
                                Pakistan</p>
                        </div>

                    </div>
                </li>
                <li>
                    <div className='card_main' >
                        <div>
                            <p><span>Recovered Cases </span><br />{data.recovered}</p>
                            <p>
                                Pakistan</p>
                        </div>

                    </div>
                </li>


            </ul>
        </section>
        </>
    )
}
export default Covid;