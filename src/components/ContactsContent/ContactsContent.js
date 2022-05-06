import * as React from 'react';
import { useContactsData } from '../../hooks/useContactsData';
import { textAreaParser } from '../../utils';

import { AiOutlineMobile } from '@react-icons/all-files/ai/AiOutlineMobile';
import { AiOutlineMail } from '@react-icons/all-files/ai/AiOutlineMail';
import { AiOutlineInstagram } from '@react-icons/all-files/ai/AiOutlineInstagram';

import { MainContainer } from '../theme/global-styles';
import {
  ContactsWrapper,
  ContactsContainer,
  ContactsGroup
} from './style';
import { HeaderContainer } from '../theme/style';

const ContactsContent = () => {

  const data = useContactsData();
  const {
    emails,
    phones,
    socialMedia,
    contactPageHeader
  } = data.allWpPage.edges[0].node.contactPageAcf;

  const emailsArr = textAreaParser(emails);
  const phonesArr = textAreaParser(phones);
  const socialMediaArr = textAreaParser(socialMedia);

  const listMapper = (list) => (
    <ul>
      {
        list.map(contact => (
          <li key={contact}>{contact}</li>
        ))
      }
    </ul>
  );

  return (
    <MainContainer>
      <ContactsWrapper>
        <HeaderContainer>
          <h2>{contactPageHeader}</h2>
        </HeaderContainer>
        <ContactsContainer>
          <ContactsGroup>
            <div className="contacts-group-icon">
              <AiOutlineMobile />
            </div>
            <div className="contacts-group-items">
              {listMapper(phonesArr)}
            </div>
          </ContactsGroup>
          <ContactsGroup>
            <div className="contacts-group-icon">
              <AiOutlineMail />
            </div>
            <div className="contacts-group-items">
                {listMapper(emailsArr)}
            </div>
          </ContactsGroup>
          <ContactsGroup>
            <div className="contacts-group-icon">
              <AiOutlineInstagram />
            </div>
            <div className="contacts-group-items">
                {listMapper(socialMediaArr)}
            </div>
          </ContactsGroup>
        </ContactsContainer>
      </ContactsWrapper>
    </MainContainer>
  )
};

export default ContactsContent;