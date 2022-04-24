import React from 'react'
import { connect, useSelector } from 'react-redux';
import {Container, Row, Col} from "react-bootstrap"
import FlowItem from '../../containers/FlowItem';
import {FlowWrapper} from './Dashboard.styles'

function BookingFlow() {
    const progress = useSelector(state => state.progress);
  return (
    <FlowWrapper>
        <Container>
            <Row>
            <div className="bookingFlow">
        <ul>
                    <FlowItem 
                        flowNumber={1} 
                        isCompleted={progress > 1 ? true : false} 
                        title={'Create Request'} 
                        isActive={progress ===1 ? true : false} 
                    />
                    <FlowItem 
                        flowNumber={2} 
                        isCompleted={progress > 2 ? true : false} 
                        title={'Choose a Car'} 
                        isActive={progress ===2 ? true : false}
                    />
                    <FlowItem 
                        flowNumber={3} 
                        isCompleted={progress > 3 ? true : false} 
                        title={'Choose Extras'} 
                        isActive={progress ===3 ? true : false} 
                    />
                    <FlowItem 
                        flowNumber={4} 
                        isCompleted={progress > 4 ? true : false} 
                        title={'Review & Book'} 
                        isActive={progress ===4 ? true : false} 
                    />
                </ul>
        </div>
            </Row>
        </Container>
    </FlowWrapper>
  )
}

export default BookingFlow;