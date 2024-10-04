import { useEffect } from "react";
import { selectError, selectIsLoadingPage } from "../../redux/contacts/selectors";
import { useDispatch, useSelector } from "react-redux";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { fetchContacts } from "../../redux/contacts/operations";
import ContactForm from "components/PhoneBook/ContactForm/ContactForm";
import Filter from "../../components/PhoneBook/Filter/Filter";
import ContactList from "components/PhoneBook/ContactList/ContactList";
import Loader from "components/Loader/Loader";

import {
    BookFormSection,
    Container,
    Message,
    FilterSection,
    FilterContainer,
} from "./PhonebookPage.styled";

function PhonebookPage() {
    const error = useSelector(selectError);
    const isLoadingPage = useSelector(selectIsLoadingPage);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
      
    return (
        <HelmetProvider>
            <Helmet>
                <title>Phonebook</title>
            </Helmet>
            <BookFormSection>
                <Container>
                    <ContactForm/>  
               </Container> 
            </BookFormSection>  
            <FilterSection>
                <FilterContainer>
                    <Filter />
                    {isLoadingPage && !error && <Loader message="Wait! Loading saved contacts..."/>}
                    {error && <Message>Something went wrong.</Message>}  
                    <ContactList />
                </FilterContainer>
            </FilterSection>
        </HelmetProvider>    
    )
}

export default PhonebookPage; 