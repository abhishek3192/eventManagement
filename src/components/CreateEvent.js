import React, { Component } from 'react';
import './style.css'
import {Form, Container, Grid, Segment,Button, Dropdown} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import EventList from './EventList';
import {setEvent} from '../Redux/Action/index'
import {connect} from 'react-redux'


const options = [
    {key: 'A', text: 'All', value: 'all'},
    {key: 'F', text: 'Free', value: 'free'},
    {key: 'D', text: 'Discount', value: 'discount'},
    {key: 'ND', text: 'No Discount', value: 'nodiscount'}
]
class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            isOpen: false,
            showEvent: false,
            event_name: '',
            venue: '',
            price: 0,
            description: '',
            success_message: '',
            discount: 'select',
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value 
        })
    }

    handleDiscount = (event) => {
        this.setState({
            discount: event.target.value
        })
    }
    

    showEventButton = (event) => {
        if(event.target.name === 'add'){
            this.setState({
                isOpen: true,
                showEvent: false,
            })
        }
        else{
            this.setState({
                isOpen: false,
                showEvent: true
            })
        }
    }

    eventSubmit = (e) => {
        e.preventDefault()
        let event_name = this.state.event_name
        let price = this.state.price
        let venue = this.state.venue
        let description = this.state.description
        let discount = this.state.discount
        this.props.setEvent({
            event_name,
            venue,
            price,
            description,
            discount
        })
        this.setState({
            success_message: "Event Created Successfully",
            event_name: "",
            venue: "",
            price: "",
            description: "",
            discount: ""
        })
    }

    clearButton = () => {
        this.setState({
            event_name: "",
            venue: "",
            price: "",
            description: "",
            discount: ""
        })
    }

    render() {
        return (
            <div>
                <div className='flex'><h3>Event Management</h3></div>
                <div className='flex'>
                    <div className='flex-item'><button className="button" onClick={this.showEventButton} name='add'>Add event</button></div>
                    <div className='flex-item'><button className="button" onClick={this.showEventButton} name='show'>Show events</button></div>
                </div>
                {
                    this.state.isOpen ?
                    <Container>
                        <Grid verticalAlign='middle' columns={1} centered>
                            <Grid.Column>
                                <Segment raised>
                                <Form onSubmit={this.eventSubmit}>  
                                    <Form.Group widths='equal'>
                                        <Form.Input fluid label='Event Name' placeholder='event name' value={this.state.event_name} name='event_name'onChange={this.handleChange} required/>
                                        <Form.Input fluid label='Venue' placeholder='venue' name='venue' value={this.state.venue} onChange={this.handleChange} required/>
                                        <Form.Input fluid label='Price' placeholder='price' type='number' value = {this.state.price} name='price' onChange={this.handleChange} required/>
                                        <Form.Input fluid label='Discount' required>
                                            <select style={{padding: '0px', height: '38px'}} onChange={this.handleDiscount} value={this.state.discount}>
                                            <option value="select">Select</option>
                                            <option value="all">All</option>
                                            <option value="free">Free</option>
                                            <option value="discount">Discount</option>
                                            <option value='nodiscount'>No Discount</option>
                                        </select>
                                        </Form.Input>
                                    </Form.Group>
                                    <Form.TextArea label='Description' placeholder='Tell us more...' name='description' value = {this.state.description} onChange={this.handleChange} required/>
                                    {
                                        this.state.success_message ? 
                                        <p className="success_message">{this.state.success_message}</p>: null
                                    }
                                    <Grid>
                                        <Grid.Column>
                                            <Button
                                                type="submit"
                                                className='primary'
                                                style={{margin: '10px'}}
                                                >Proceed
                                            </Button>
                                            <Button
                                                style={{marginLeft: "5px"}} 
                                                onClick={() => this.clearButton()}>Clear
                                            </Button>
                                        </Grid.Column>
                                     </Grid>
                                </Form>
                                </Segment>
                            </Grid.Column>
                        </Grid>
                    </Container> 
                    : null
                }
                {
                    this.state.showEvent ? <EventList 
                    event={this.props.event}
                    /> : null
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        event: state.event
    }
}

export default connect(mapStateToProps, {setEvent})(App)