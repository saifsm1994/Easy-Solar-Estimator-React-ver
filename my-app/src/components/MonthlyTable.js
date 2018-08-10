import React from 'react';
import { Table , Col, Row, Container} from 'reactstrap';
import TableHeader from './TableHeader';
import TableCol from './TableCol';

export default class MonthlyTable extends React.Component {

    // eslint-disable-next-line
    constructor(props) {
        super(props);
      }


  render() {
    return (
    <Container>
        <Row>
            <Col lg={{size:"10", offset:"1"}} md={{size:"8", offset:"2"}} sm="12">
                <Table>
                    <thead>
                    <tr>
                    {this.props.dataObjMonthly.headings &&
                        this.props.dataObjMonthly.headings.map((dataEntry) => (
                        <TableHeader
                            key={dataEntry}
                            dataEntry={dataEntry}
                        />
                        ))
                    }
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.dataObjMonthly.percent &&
                        this.props.dataObjMonthly.percent.map((dataEntry,i) => (
                            
                            <TableCol
                            key={this.props.dataObjMonthly.months[i]}
                            Month={this.props.dataObjMonthly.months[i]}
                            Percent={this.props.dataObjMonthly.percent[i]}
                            Total={this.props.dataObjMonthly.gross[i]}
                            Capture={this.props.dataObjMonthly.attainable[i]}
                        />
                        ))
                     
                    }
                    </tbody>
                </Table>
            </Col>
        </Row>
      </Container>
    );
  }
}