import { BsBoxArrowRight } from "react-icons/bs";
import { useAuth } from "hooks/useAuth";
import { Watch } from "react-loader-spinner";
import {
    useDispatch,
    useSelector,
} from "react-redux";
import { logOut } from "../../redux/auth/operation";
import { selectIsLoadingLogout } from "../../redux/auth/selectors";
import {
    Button,
    UserInfo,
    Menu,
} from "./UserMenu.styled";

function UserMenu() {
    const dispatch = useDispatch();
     const isLoading = useSelector(selectIsLoadingLogout);
    const { user } = useAuth(); 
    const handleClick = () => {
        dispatch(logOut());
    }

    return (
        < Menu>
            <UserInfo>{user.email}</UserInfo>
            <Button onClick={handleClick} type="button">Logout
                {isLoading ? <Watch color="#f8b400" /> : <BsBoxArrowRight />}
            </Button>
        </ Menu>
    )
}

export default UserMenu;