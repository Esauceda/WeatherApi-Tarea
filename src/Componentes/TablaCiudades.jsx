import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Row, Text, Container, Table } from '@nextui-org/react';

const TablaCiudades = () => {

    const [tegus, setTegus] = useState([])
    const [sps, setSPS] = useState([])
    const [sigua, setSigua] = useState([])
    const Tegus = `http://api.openweathermap.org/data/2.5/forecast?q=Tegucigalpa&appid=3df80f89d17476a507c15a750c034b1e&units=metric`
    const SPS = `http://api.openweathermap.org/data/2.5/forecast?q=San Pedro Sula&appid=3df80f89d17476a507c15a750c034b1e&units=metric`
    const Sigua = `http://api.openweathermap.org/data/2.5/forecast?q=Siguatepeque&appid=3df80f89d17476a507c15a750c034b1e&units=metric`
   
    useEffect (()=>{
       getTegus();
       getSPS();
       getSigua();
    },[])

    const getTegus = async () => {

        const response = await axios.get(Tegus)
        setTegus(response.data)
        console.log(response.data)
    }

    const getSPS = async () => {

        const response = await axios.get(SPS)
        setSPS(response.data)
        console.log(response.data)
    }

    const getSigua = async () => {

      const response = await axios.get(Sigua)
      setSigua(response.data)
      console.log(response.data)
  }
 

    return(
    <div> 
        <div>
            <Container>
            <Card css={{ $$cardColor: '$gray500'}}>
                <Card.Body>
                <Row justify="center" align="center">
                    <Text h6 size={25} color="white">
                    Temperaturas en ciudades de Honduras
                    </Text>
                    </Row>
                </Card.Body>
            </Card>
            </Container>
        </div>   
        <div className='table'>
        <Table  
        bordered
        shadow={true}
        headerLined
        css={{backgroundColor: '$gray500'}}>
            <Table.Header>
              <Table.Column css={{textAlign: 'center'}}>Ciudad</Table.Column>
              <Table.Column css={{textAlign: 'center'}}>Temperatura</Table.Column>
              <Table.Column css={{textAlign: 'center'}}>Humedad</Table.Column>
              <Table.Column css={{textAlign: 'center'}}>Vientos</Table.Column>
            </Table.Header>
            <Table.Body>
              <Table.Row key="1">
                <Table.Cell css={{textAlign: 'center'}}>{tegus.city ? tegus.city.name : null}</Table.Cell>
                <Table.Cell css={{textAlign: 'center'}}>C°{tegus.list ? tegus.list[0].main.temp : null}</Table.Cell>
                <Table.Cell css={{textAlign: 'center'}}>{tegus.list ? tegus.list[0].main.humidity : null}</Table.Cell>
                <Table.Cell css={{textAlign: 'center'}}>{tegus.list ? tegus.list[0].wind.speed : null} MPH</Table.Cell>
              </Table.Row>
              <Table.Row key="2">
                <Table.Cell css={{textAlign: 'center'}}>{sps.city ? sps.city.name : null}</Table.Cell>
                <Table.Cell css={{textAlign: 'center'}}>C°{sps.list ? sps.list[0].main.temp : null}</Table.Cell>
                <Table.Cell css={{textAlign: 'center'}}>{sps.list ? sps.list[0].main.humidity : null}</Table.Cell>
                <Table.Cell css={{textAlign: 'center'}}>{sps.list ? sps.list[0].wind.speed : null} MPH</Table.Cell>
              </Table.Row>
              <Table.Row key="3">
                <Table.Cell css={{textAlign: 'center'}}>{sigua.city ? sigua.city.name : null}</Table.Cell>
                <Table.Cell css={{textAlign: 'center'}}>C°{sigua.list ? sigua.list[0].main.temp : null}</Table.Cell>
                <Table.Cell css={{textAlign: 'center'}}>{sigua.list ? sigua.list[0].main.humidity : null}</Table.Cell>
                <Table.Cell css={{textAlign: 'center'}}>{sigua.list ? sigua.list[0].wind.speed : null} MPH</Table.Cell>
              </Table.Row>
            </Table.Body>
        </Table>
        </div>
    </div>
    );
}

export default TablaCiudades