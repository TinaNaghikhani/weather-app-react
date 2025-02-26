import { Route, Routes } from "react-router-dom"
import LoginPage from "./pages/loginPage/loginPage"
import SingUpPage from "./pages/sinUpPage/singUpPage"
import MainPage from "./pages/mainPage/mainPage"

function App() {

  return (
    <>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signUp' element={<SingUpPage />} />
        <Route path="/weatherApp" element={<MainPage/>}/>
      </Routes>
    </>
  )
}

export default App
