import React from 'react';
import './contacts.css';

import { ListView, ListViewHeader } from '@progress/kendo-react-listview';
import { Avatar } from '@progress/kendo-react-layout';

const ContactItem = props => {
    let item = props.dataItem;
    return (
        <div className='row p-2 border-bottom list-item'>
            <div className='col-2 avatar'>
                <Avatar shape='circle' type='img' className='picture-avatar'>
                    <img src={item.photo} alt='' className='photo'/>
                </Avatar>
            </div>
            <div className='col-3 contact-name'>
                <div>{item.title}</div>
            </div>
            <div className='col-3 contact-email'>
                <div>{item.email}</div>
            </div>
            <div className='col-4 contact-phone'>
                    <div className='k-chip-content'>
                        {item.phone}
                    </div>
            </div>
        </div>
    );
}

const ContactsHeader = () => {
    return (
        <ListViewHeader className='contacts-header list-item'>
            <div className='col-2 avatar'></div>
            <div className='col-3 contact-name'>
                NAME
            </div>
            <div className='col-3 contact-email'>
                EMAIL
            </div>
            <div className='col-4 contact-phone'>
              PHONE
            </div>
        </ListViewHeader>
    );
}


const Contancts = ({contacts}) => {

    return (
      <div className="Contacts">
        <ListView
          data={contacts}
          item={ContactItem}
          header={ContactsHeader}
          style={{ width: "100%" }}
        />
      </div>
    );
  }
  export default Contancts;