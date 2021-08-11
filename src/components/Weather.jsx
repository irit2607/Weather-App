import React, { useEffect, useState } from 'react';
import { Card, Button, Container } from 'react-bootstrap';

const Weather = () => {
    const [city, setCity] = useState('');
    const [search, setSearch] = useState('mumbi')
    const inputEvent = (event) => {
        setSearch(event.target.value)
    }

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=734295c62d3d254be135ba69f420e7ec`;
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main)
        }
        fetchApi();
    },[])

    return (
        <div>
            <>
                <Container style={{ marginTop: 150, width: 390 }}>
                    <Card className="text-center" style={{ height: 350 }}>
                        <Card.Header>
                            <input
                                type="serach"
                                value={search}
                                onChange={inputEvent}>

                            </input>
                        </Card.Header>
                        <Card.Body>
                        {!city ? (
                            <p>Data not found</p>
                        ) : (
                            <div>
                            <Card.Title>Location</Card.Title>
                            <i class="fa-solid fa-street-view"></i>{search}
                            <Card.Text>
                               {city.temp}
                            </Card.Text>
                            <Card.Text>
                               {city.temp_min} Cel | {city.temp_max} Cel
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                            </div>
                        )}
                            
                        </Card.Body>
                        <Card.Footer className="text-muted">2 days ago</Card.Footer>
                    </Card>
                </Container>
            </>
        </div>
    )
}

export default Weather
