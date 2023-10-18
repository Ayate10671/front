import React from "react";
import Navbar from "../components/Navebar";

const AdminHome = () => {
  return (
    <div>
      <Navbar />
      <div className="w-100 pt-10 mt-1043">
        <p className="w-1/2 mx-auto text-gray-500 dark:text-gray-600 text-center border-2 ">
          بخصوص الدعم الفنى للنظام يتم التواصل من خلال ارسال رسالة على النظام
          تتضمن المشكلة المراد الاستفسار عنها وسوف يتم الرد فى اقرب وقت فى حالة
          عدم الرد على الرسالة او وجود حالة طارئة يمكنك الاتصال مع احد ممثلى
          خدمة الدعم الفنى للنظام من خلال الارقام التالية خلال اوقات العمل
          الرسمية 01150999840 - 01022417111 - 0502223692/3/4 - 0502223686/7/8/9
          خارج اوقات العمل الرسمية 01022417799
        </p>
      </div>
    </div>
  );
};

export default AdminHome;

//
