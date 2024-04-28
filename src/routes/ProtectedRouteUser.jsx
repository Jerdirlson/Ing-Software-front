import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import Loader2 from "../components/Loader2";

const ProtectedRouteUser = () => {
    const { userLogin, loading } = useAuth();
    // const pepe = userLogin
    console.log(userLogin)
    // console.log(pepe)
    // console.log(userLogin.user.nameUser);
    useEffect(() => {
        // console.log(user.user.id)
        if (userLogin && userLogin.user.idRol !== undefined) {
            // Aquí puedes realizar cualquier acción una vez que tengas acceso a user.idRol
            console.log('User role:', userLogin.user.idRol);
        }
    }, [userLogin]); // Solo observamos cambios en user

    if (loading) {
        // Muestra un indicador de carga mientras se obtiene la información del usuario
        return (
            <>
                <div className="h-screen flex items-center justify-center">
                    <Loader2 />
                </div>
            </>)
    }

    if (!userLogin) {   //todos los user pueden agendar citas (medicos, pacientes etc...)
        return <Navigate to={'/login'} replace />;
    }
    console.log('sksksk')
    return <Outlet />;
};

export default ProtectedRouteUser;