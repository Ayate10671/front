import React from "react";
import Navbar from "../components/Navebar";
import StData from "../components/Slider";

const SDasasy = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-row-reverse">
        <StData />
        <form className="flex flex-col m-6 ">
          <label
            class="block  tracking-wide text-gray-700 text-lg font-bold mb-2"
            for="years"
          >
            العام الاكاديمى
          </label>
          <div class="relative">
            <select
              class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="years"
            >
            <option>2023-2024</option>
            <option>2022-2023</option>
              <option>2021-2022</option>
              <option>2020-2021</option>
              <option>2019-2020</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>

            
          </div>

          <label
          class="block  tracking-wide text-gray-700 text-lg font-bold mb-2"
          for="years"
        >الكلية
        </label>
        <div class="relative">
          <select
            class="block appearance-none w-full  bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="years"
          >
          <option>معهد التمريض</option>
          <option>2022-2023</option>
            <option>الاداب</option>
            <option>الاقتصاد المنزلى</option>
            <option>التربيه الفنيه</option>
            <option>التربيه الموسيقيه</option>
          <option>التربيه</option>
          <option>التعليم الصناعى</option>
            <option>التكنولوجيا والتعليم</option>
            <option>التمريض</option>
            <option>الحاسبات والمعلومات</option>
            <option>الحقوق</option>
          <option>الخدمه الاجتماعيه</option>
            <option>السياحه والفنادق</option>
            <option>الصيدله</option>
            <option>العلوم</option>
          <option>الفنون التطبيقيه</option>
            <option>الفنون الجميله</option>
            <option>الهندسه بالمطريه</option>
            <option>الهندسه بحلوان</option>
            <option>تربيه رياضيه بنات</option>
          <option>تربيه رياضيه بنين</option>
            <option>كليه التجاره وادراة الاعمال</option>
            <option>كليه الدراسات العليا والبحوث</option>
            <option>كليه الطب</option>
            <option>كليه تجربيه</option>
            <option>معهد الملكيه الفكريه</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>

          
        </div>

        <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
          <input
            className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
            type="radio"
            name="flexRadioDefault"
            id="radioDefault01"
          />
          <label
            className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
            htmlFor="radioDefault01"
          >
          مصرى
          </label>
      </div>
      <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
          <input
            className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
            type="radio"
            name="flexRadioDefault"
            id="radioDefault02"
            defaultChecked
          />
          <label
            className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
            htmlFor="radioDefault02"
          >
          وافد
          </label>
      </div>
      
      <div>
      <input id="flowbite" aria-describedby="flowbite" type="checkbox"/>
      <label for="flowbite">قدامى</label>
</div>
<div>
      <input id="flowbite" aria-describedby="flowbite" type="checkbox"/>
      <label for="flowbite">جدد</label>
</div>
<div>
      <input id="flowbite" aria-describedby="flowbite" type="checkbox"/>
      <label for="flowbite">سكن عادى</label>
</div>
<div>
      <input id="flowbite" aria-describedby="flowbite" type="checkbox"/>
      <label for="flowbite">سكن مميز</label>
</div>
<div>
      <input id="flowbite" aria-describedby="flowbite" type="checkbox"/>
      <label for="flowbite">غير ساكنين</label>
</div>
<div>
      <input id="flowbite" aria-describedby="flowbite" type="checkbox"/>
      <label for="flowbite">ساكنين</label>
</div>
<div>
      <input id="flowbite" aria-describedby="flowbite" type="checkbox"/>
      <label for="flowbite">اخلاء</label>
</div>
        </form>
      </div>
    </div>
  );
};

export default SDasasy;
