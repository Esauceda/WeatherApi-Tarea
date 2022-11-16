import { useState } from 'react';
import './BuscarCiudad.css';
import axios from 'axios';
import { Table } from '@nextui-org/react';

const BuscarCiudad = () => {

    const [data, setData] = useState({})
    const [buscar, setCiudad] = useState('')
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${buscar}&appid=3df80f89d17476a507c15a750c034b1e&units=metric`

    const getCiudad = (e) => {
        if (e.key === 'Enter'){
        axios.get(url).then((response) => {
            setData(response.data)
            console.log(response.data)
            })
            setCiudad('')
        }
    }

    return(
    <div>    
        <div className='input-group'>
            <input
                value={buscar}
                onChange={e => setCiudad(e.target.value)} 
                onKeyPress={getCiudad} 
                placeholder="Ingresar Ciudad"
                name="text"
                type="input"
                className="input"
                autoComplete="off"
            />
        </div>
        <div className='table'>
        <Table  
        bordered
        shadow={true}
        css={{backgroundColor: '$gray500'}}>
            <Table.Header>
              <Table.Column css={{textAlign: 'center'}}>Ciudad</Table.Column>
              <Table.Column css={{textAlign: 'center'}}>Temperatura</Table.Column>
              <Table.Column css={{textAlign: 'center'}}>Humedad</Table.Column>
              <Table.Column css={{textAlign: 'center'}}>Vientos</Table.Column>
            </Table.Header>
            <Table.Body>
              <Table.Row key="1">
                <Table.Cell css={{textAlign: 'center'}}>{data.city ? data.city.name : null}</Table.Cell>
                <Table.Cell css={{textAlign: 'center'}}>C°{data.list ? data.list[0].main.temp : null}</Table.Cell>
                <Table.Cell css={{textAlign: 'center'}}>{data.list ? data.list[0].main.humidity : null}</Table.Cell>
                <Table.Cell css={{textAlign: 'center'}}>{data.list ? data.list[0].wind.speed : null} MPH</Table.Cell>
              </Table.Row>
            </Table.Body>
        </Table>
        </div>
    </div>
    );
}

export default BuscarCiudad