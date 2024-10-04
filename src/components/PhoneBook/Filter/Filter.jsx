import { BsSearch } from "react-icons/bs";
import {
    useSelector,
    useDispatch,
} from "react-redux";
import { setFilter } from "../../../redux/filter/slice";
import {
    selectContacts,
    selectError,
    selectIsLoadingPage,
} from "../../../redux/contacts/selectors";
import { selectFilter } from "../../../redux/filter/selectors";
import Notification from "../Notification/Notification";
import { Section} from "./Filter.styled";
import {
    FormField,
    Label,
    Input,
    InputSection,
} from "../ContactForm/ContactForm.styled";

function ContactSearch() { 
    const contacts = useSelector(selectContacts); 
    const filterValue = useSelector(selectFilter); 
    const loader = useSelector(selectIsLoadingPage);
    const error = useSelector(selectError);
    const dispatch = useDispatch(); 
    const onChange = event => {
        dispatch(setFilter(event.currentTarget.value.trim()));
    }
    
    return (
        <>
            {contacts.length > 0 
                ? <Section>
                    <FormField>
                        <Label>Find contacts by name</Label>
                        <InputSection>
                            <Input  type="text" name="name" value={filterValue} onChange={(onChange)} />   
                            <BsSearch/>   
                        </InputSection>               
                    </FormField>
                </Section>
                :<>
                    {!loader && !error && <Notification message="There is no contacts" />}                    
                </>
            } 
        </>      
    )
}

export default ContactSearch; 