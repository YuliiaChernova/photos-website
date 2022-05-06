import styled from 'styled-components';

export const ContactsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  >div:first-child {
    text-align: center;
  }
`;

export const ContactsContainer = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 70px 0 70px 0;
  margin-top: 20px;
  border-top: 1px solid ${({ theme }) => theme.colors.text};
  border-bottom: 1px solid ${({ theme }) => theme.colors.text};
`;

export const ContactsGroup = styled.div`
  display: flex;
  padding: 20px 0 20px 0;

  ul {
    margin: 0;
  }

  li {
    list-style: none;
  }

  .contacts-group-icon {
    padding: 0 0 0 30px;
    display: flex;
    align-items: center;
  }

  @media ${({ theme }) => theme.mediaQueries.phones} {
		flex-wrap: wrap;
    margin-bottom: 50px;

    .contacts-group-icon {
      width: 100%;
      justify-content: center;
      padding: 0 0 10px 0;
    }
    .contacts-group-items {
      width: 100%;
      text-align: center;
    }
    ul {
      padding: 0;
    }
	}
`;