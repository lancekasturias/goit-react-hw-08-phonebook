import { addContact } from "../../../redux/contacts/operations";
import { useDispatch, useSelector } from "react-redux";
import { Report } from "notiflix";
import { Watch } from "react-loader-spinner";
import { BsFillPersonFill, BsFillPersonPlusFill, BsFillTelephoneFill } from "react-icons/bs";
import {
    Form,
    FormField,
    Label,
    Input,
    InputSection,
    SubmitButton,
    FormTitle,
} from "./ContactForm.styled";
import {
    selectContacts,
    selectIsLoadingAdd,
} from "../../../redux/contacts/selectors";

export default function ContactForm() {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts); 
    const isLoadingAdd = useSelector(selectIsLoadingAdd);
    const handleSubmitForm = (event) => {
        event.preventDefault(); 
        const form = event.target; 
        const name = form.elements.contactName.value; 
        const number = form.elements.contactNumber.value; 
        if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
            return Report.info(
                "Enter a unique name!",
                `Contact's name "${name}" already exists.`,
                "OK",
                {
                    fontFamily: 'inherit',
                    borderRadius: '10px',
                    info: {
                        svgColor: '#f8b400',
                        buttonBackground: '#2c786c', 
                        titleColor: '#323232',
                        messageColor: '#323232',
                        buttonColor: '#faf5e4',                        
                        backOverlayColor: 'rgba(43, 117, 106, 0.2)',              
                    }               
                },
            );
        }
        dispatch(addContact({ name, number }));
        form.reset();
    }

    return (
        <Form onSubmit={handleSubmitForm}> 
            <FormTitle>Create a contact</FormTitle>
            <FormField>
                <Label>Name</Label>
                <InputSection>
                    <Input
                        type="text"
                        name="contactName"
                        placeholder="Name Surname"
                        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces."
                        required
                    />
                    <BsFillPersonFill />
                </InputSection>                    
            </FormField>
            <FormField>
                <Label>Number </Label>
                    <InputSection>
                        <Input
                            type="tel"
                            name="contactNumber"
                            placeholder="+xx (xxx) xxx-xx-xx"
                            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                        />
                        <BsFillTelephoneFill />
                    </InputSection>                    
            </FormField>                               
            <SubmitButton type="submit">Save
                {isLoadingAdd ? <Watch color="#f8b400"/> : <BsFillPersonPlusFill />}                
            </SubmitButton>
        </Form>        
    )
}