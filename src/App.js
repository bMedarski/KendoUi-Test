import React, { useState } from 'react';
import config from './config.js';

import { TabStrip, TabStripTab } from '@progress/kendo-react-layout';
import { Button } from '@progress/kendo-react-buttons'

import Inbox from './Components/Inbox/Inbox';
import Calendar from './Components/Calendar/Calendar';
import Contacts from './Components/Contacts/Contacts';

import '../node_modules/@progress/kendo-theme-bootstrap/dist/all.scss';
import './App.css';
import './tabs.css';

const App = () => {

  const [selected, setSelected] = useState(0);

  const [emails, setEmails] = useState([]);
  const [events, setEvents] = useState([]);
  const [contacts, setContacts] = useState([]);

  const handleSelect = (e) => {
    setSelected(e.selected )
  }

  const handleAuth = () => {
    window.gapi.client.setApiKey(config.API_KEY);
    authorize();
  }
  const authorize = () => {
        setTimeout( ()=> {
          window.gapi.auth.authorize({ client_id: config.CLIENT_ID, scope: `${config.SCOPE_GMAIL} ${config.SCOPE_CALENDAR} ${config.SCOPE_CONTACTS}`, immediate: false }, handleGmailAuthorization);
    });
  }
  const handleGmailAuthorization = (result) => {
    getEmails(result.access_token);
    getCalendarEvents(result.access_token);
    getContacts(result.access_token);
  }
  const getEmails = (access_token) => {
      fetch(`https://www.googleapis.com/gmail/v1/users/me/messages?access_token=${access_token}&maxResults=30`)
          .then((response) => {
              return response.json();
          })
          .then((res) => {
              res.messages.forEach(email => {
                fetch(`https://www.googleapis.com/gmail/v1/users/me/messages/${email.id}?access_token=${access_token}`)
                  .then((response) => {
                      return response.json();
                  })
                  .then((emailResponse) => {
                    if(emailResponse.labelIds.includes("INBOX")){
                      
                      let newEmail = {};
                      let messageHeaders = emailResponse.payload.headers;
                      newEmail.sender = messageHeaders.find(h => h.name === 'From').value;
                      let subject = messageHeaders.find(h => h.name === 'Subject').value;
                      newEmail.subject = subject;
                      newEmail.date = new Date(messageHeaders.find(h => h.name === 'Date').value);
                      newEmail.content = emailResponse.snippet;
                      newEmail.clippedContent = emailResponse.snippet.substr(0, 50);
                      newEmail.clippedSubject = subject.substr(0, 50);

                      setEmails(oldEmails => [...oldEmails, newEmail]);
                    }

                  })
              });
              return res;
          })
          .catch((err) => {
              console.log(err);
          })
      }
  const getCalendarEvents = (access_token) => {
      fetch(`https://www.googleapis.com/calendar/v3/calendars/primary/events?access_token=${access_token}`)
          .then((response) => {
              return response.json();
          })
          .then((res) => {
            res.items.forEach(event => {
              let newEvent = {};

              if(event.start && event.end){
                newEvent.id = event.id;
                newEvent.start = new Date(event.start.dateTime);
                newEvent.end = new Date(event.end.dateTime);
                newEvent.title = event.summary;
                
                setEvents(oldEvents => [...oldEvents, newEvent]);
              }

            });
          })
          .catch((err) => {
              console.log(err);
          })
    }

  const getContacts = (access_token) => {
      fetch(`https://www.google.com/m8/feeds/contacts/default/full?alt=json&access_token=${access_token}&max-results=25&v=3.0`)
          .then((response) => {
              return response.json();
          })
          .then((res) => {
            res.feed.entry.forEach(contact => {
              let newContact = {};

              contact.title ?  newContact.title = contact.title.$t : newContact.title = "";
              contact.gd$phoneNumber ? newContact.phone = contact.gd$phoneNumber[0].$t : newContact.phone = "";
              contact.gd$email ? newContact.email = contact.gd$email[0].address : newContact.email = "";
              contact.photo = "";
              
              let photo = contact.link[0].href;
              if(photo){
                fetch(`${photo}&access_token=${access_token}`)
                  .then((response) => {
                    newContact.photo = response.url;
                  })
                  .catch((err) => {
                    console.log(err);
                  })
              }

              setContacts(oldContacts => [...oldContacts, newContact]);
            })
              return res;
          })
          .catch((err) => {
              console.log(err);
          })
    }
  return (
    <div className="App">
          {emails.length > 0 
          ?<div className="tabs">
            <TabStrip selected={selected} onSelect={handleSelect}>
                <TabStripTab title="Inbox">
                    <Inbox emails={emails}/>
                </TabStripTab>
                <TabStripTab title="Calendar">
                    <Calendar events={events}/>
                </TabStripTab>
                <TabStripTab title="Contacts">
                    <Contacts contacts={contacts}/>
                </TabStripTab>
            </TabStrip>
          </div> 
        : <div >
            <p>Please login</p>
            <Button onClick={handleAuth} className="auth-btn">Login</Button>
          </div>}
    </div>
  );
}
export default App;
