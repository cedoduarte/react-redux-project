import { useSelector, useDispatch } from "react-redux";
import { changeEmail } from "../../redux/userSlice";

export const Email = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    const handleChange = (event) => {
        dispatch(changeEmail(event.target.value));
    }

    return (
        <>
            <input type="email" value={user.email} placeholder="Email" onChange={handleChange} />
        </>
    );
}