import React, { Component } from 'react';
import {Table, Container, Button} from 'semantic-ui-react'
import './style.css'

class EventList extends Component{
    constructor(props){
        super(props)
        this.state = {
            filter_disocunt: "",
            filteredList: [],
            isOpen: false
        }
    }

    filterList = () => {
        const uniqueFilter = this.props.event.filter((result) => {
            return result.discount === this.state.filter_disocunt
        })
        this.setState({
            isOpen: true,
            filteredList: uniqueFilter
        })
    }

    handleChange = () => {
        this.setState({
            filter_disocunt: event.target.value
        })
    }
    render() {
        console.log(this.state.filteredList)
    return (
        <div>
            <div className='container'>
                <select style={{marginRight: '10px'}}value={this.state.filter_disocunt} onChange = {this.handleChange}>
                    <option value="select">Select</option>
                    <option value="free">Free</option>
                    <option value="discount">Discount</option>
                    <option value="nodiscount">No Discount</option>
                </select>
                <Button type='submit' onClick={this.filterList}>Filter</Button>
            </div>
            {
                this.state.isOpen ? this.state.filteredList.map((data, index) => {
                    return (
                        <Container>
                        <Table key={index} style={{margin: '20px auto'}}>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Event Name</Table.HeaderCell>
                                    <Table.HeaderCell>Venue</Table.HeaderCell>
                                    <Table.HeaderCell>Price</Table.HeaderCell>
                                    <Table.HeaderCell>Discount</Table.HeaderCell>
                                    <Table.HeaderCell>Description</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
    
                            <Table.Body>
                                <Table.Row>
                                <Table.Cell>{data.event_name}</Table.Cell>
                                <Table.Cell>{data.venue}</Table.Cell>
                                <Table.Cell>{data.price}</Table.Cell>
                                <Table.Cell>{data.discount}</Table.Cell>
                                <Table.Cell>{data.description}</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                        </Container>
                        )
                }) :
                this.props.event.map((data, index) => {
                    return (
                    <Container>
                    <Table key={index} style={{margin: '20px auto'}}>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Event Name</Table.HeaderCell>
                                <Table.HeaderCell>Venue</Table.HeaderCell>
                                <Table.HeaderCell>Price</Table.HeaderCell>
                                <Table.HeaderCell>Discount</Table.HeaderCell>
                                <Table.HeaderCell>Description</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                            <Table.Cell>{data.event_name}</Table.Cell>
                            <Table.Cell>{data.venue}</Table.Cell>
                            <Table.Cell>{data.price}</Table.Cell>
                            <Table.Cell>{data.discount}</Table.Cell>
                            <Table.Cell>{data.description}</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                    </Container>
                    )
                })
            }
        </div>
    );
    }
}

export default EventList;