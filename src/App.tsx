import { Route, Routes } from "react-router-dom"
import LoginPage from "./pages/loginPage/loginPage"
import SingUpPage from "./pages/sinUpPage/singUpPage"
import MainPage from "./pages/mainPage/mainPage"
import 'aos/dist/aos.css'; // استایل‌های پیش‌فرض AOS
import AOS from 'aos'; 
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      // تنظیمات اختیاری (مثال)
      duration: 1000, // مدت زمان انیمیشن (میلی‌ثانیه)
      offset: 100, // فاصله از پایین صفحه برای شروع انیمیشن
      easing: 'ease-in-out', // نوع افکت
      delay: 200, // تأخیر قبل از شروع انیمیشن
      once: false, // آیا انیمیشن فقط یک بار اجرا شود؟
    });
  }, []);
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
