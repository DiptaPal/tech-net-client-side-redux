import { useAppSelector } from "@/redux/hooks";
import { is } from "date-fns/locale";
import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

interface IProps{
    children: ReactNode;
}

const PrivateRoutes = ({children} : IProps) => {

    const {user, isLoading} = useAppSelector((state) => state.user)
    const location = useLocation();

    if(isLoading){
        return <div>Loading...</div>
    }

    if( !user.email && !isLoading){
        return <Navigate to='/login' state={{from: location}} replace ></Navigate>
    }
    
    return children;
};

export default PrivateRoutes;