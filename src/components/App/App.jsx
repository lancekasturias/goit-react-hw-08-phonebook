import { Route, Routes} from "react-router-dom";
import Layout from "components/Layout/Layout";
import { useDispatch } from "react-redux";
import { useEffect, lazy } from "react";
import { refreshUser } from "../../redux/auth/operation";
import { useAuth } from "../../hooks/useAuth";
import { RestrictedRoute } from "components/RestrictedRoute";
import { PrivateRoute } from "components/PrivateRoute";

const HomePage = lazy(() => import("pages/HomePage/HomePage"));
const PhonebookPage = lazy(() => import("pages/PhonebookPage/PhonebookPage"));
const RegisterPage = lazy(() => import("pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("pages/LoginPage/LoginPage"));

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth(); 
  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage/>}/>
          <Route path="/login" element={<RestrictedRoute component={LoginPage} redirectTo="/contacts" />}/>
          <Route path="/register" element={<RestrictedRoute component={RegisterPage} redirectTo="/" />} />
          <Route path="/contacts" element={<PrivateRoute component ={PhonebookPage} redirectTo="/login"/>} />
        </Route>
      </Routes>
    )
  )
}