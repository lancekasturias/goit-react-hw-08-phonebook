import { BsFillTrash3Fill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Watch } from "react-loader-spinner";
import { deleteContact } from "../../../redux/contacts/operations";
import {
    selectDeleteContactId,
    selectIsLoadingDelete,
} from "../../../redux/contacts/selectors";
import {
    ContactInfo,
    Name,
    RemoveButton,
} from "./ContactItem.styled";

function ContactItem({ contact }) {
    const dispatch = useDispatch(); 
    const isLoadingDelete = useSelector(selectIsLoadingDelete);
    const deleteId = useSelector(selectDeleteContactId);
    const onDeleteContact = () => {
        dispatch(deleteContact(contact.id));           
    }
    const contactToDelete = isLoadingDelete && contact.id === deleteId; 
    
    return (
        <>            
            <ContactInfo>
                <Name>{contact.name}</Name> 
                <p>{contact.number}</p>  
            </ContactInfo>                          
            <RemoveButton onClick={onDeleteContact} type="button"> 
                {contactToDelete ? <Watch color="#f8b400"/> : <BsFillTrash3Fill /> }
            </RemoveButton>                       
        </>              
    )
}

export default ContactItem;