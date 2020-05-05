import React, { useState } from 'react';
import './inbox.css';

import { orderBy } from '@progress/kendo-data-query';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import { Card, CardHeader, CardBody, CardTitle, CardActions} from '@progress/kendo-react-layout';

const Inbox = ({emails}) => {

    const [dataState, setDataState] = useState({ take: 10, skip: 0, sort: [{ field: "date", dir: "des" }], });
    const [isSelecteedRow, setRowSelected] = useState(false);
    const [clickedRow, setClickedRow] = useState({});

    const handleGridDataStateChange = (e) => {
        setDataState(e.data);
    }

    const handleBackButtonClick = () => {
        setRowSelected(false);
    }

    const handleGridRowClick = (e) => {
        setRowSelected(true);
        setClickedRow(e.dataItem);
    }
    return (
      <div className="inbox">
         <div className="site-grid-container">
            {isSelecteedRow === false 
            ? <Grid
                onRowClick={handleGridRowClick}
                data={orderBy(emails, dataState.sort)}
                pageable={true}
                sortable={true}
                sort={dataState.sort}
                skip={dataState.skip}
                take={dataState.take}
                total={emails.length}
                onDataStateChange={handleGridDataStateChange}
                className="site-grid">
                <GridColumn field="sender" width="320px" title="SENDER" />
                <GridColumn field="clippedSubject" width="350px" title="SUBJECT" />
                <GridColumn field="clippedContent" title="CONTENT"/>
                <GridColumn field="date" width="230px" title="DATE" filter="date" format="{0:d-MMM-yyyy}"/>
            </Grid>
            : <Card>
              <CardHeader>{clickedRow.sender}</CardHeader>
              <CardBody>
                  <CardTitle>{clickedRow.subject}</CardTitle>
                  <p>{clickedRow.date.toString()}</p>
                  <p>{clickedRow.content}</p>
                  <p>{clickedRow.clippedContent}</p>
              </CardBody>
              <CardActions>
                  <span className="k-button k-flat k-primary" onClick={handleBackButtonClick} >Back</span>
                  <span className="k-button k-flat k-primary">Reply</span>
              </CardActions>
            </Card>}
        </div>
      </div>
    );
  }
  export default Inbox;