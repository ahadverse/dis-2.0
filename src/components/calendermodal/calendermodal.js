"use client";
import { Checkbox, em, Modal, Textarea, TextInput } from "@mantine/core";
import { Calendar } from "@mantine/dates";
import dayjs from "dayjs";
import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight, FaCalendarDays } from "react-icons/fa6";
import { MdOutlineWatchLater } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { AiOutlineSchedule } from "react-icons/ai";

const generateTimes = () => {
  const times = [];
  let hour = 10; // Start at 10 am

  for (let i = 0; i <= 12; i++) {
    // 12 hours from 10 am to 10 pm
    const period = hour < 12 || hour === 24 ? "am" : "pm";
    const displayHour = hour % 12 === 0 ? 12 : hour % 12;
    times.push(`${displayHour}:00 ${period}`);
    hour++;
  }

  return times;
};

const times = generateTimes();

const Calender_Modal = () => {
  const [openModal, setOpenModal] = useState(false);
  const [mTime, setMTime] = useState("");
  const [tab, setTab] = useState("1");
  const [selected, setSelected] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [modalSize, setModalSize] = useState("50%");

  useEffect(() => {
    const updateSize = () => {
      const w = window.innerWidth;
      if (w < 640) setModalSize("90%");
      else if (w < 1024) setModalSize("50%");
      else setModalSize("50%");
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const handleSelect = (date) => {
    const newDate = new Date(date);
    const day = newDate.getDate();
    const month = newDate.toLocaleString("en-US", { month: "long" });
    const year = newDate.getFullYear();
    return setSelected(() => [`${day} ${month} ${year}`]);
  };

  const handleCheck = () => {
    setTab("2");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitStatus(null);

    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const message = e.target.message.value;

    const data = {
      name,
      email,
      phone,
      message,
      date: selected[0] || "",
      time: mTime,
    };

    try {
      const response = await fetch("/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message: "Consultation booked successfully! We'll contact you soon.",
        });
        e.target.reset();
        setTimeout(() => {
          setOpenModal(false);
          setTab("1");
          setSelected([]);
          setMTime("");
          setSubmitStatus(null);
        }, 2000);
      } else {
        setSubmitStatus({
          type: "error",
          message: result.error || "Failed to submit. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        type: "error",
        message: "An error occurred. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div data-aos='fade-up'>
      {" "}
      <Modal
        size={modalSize}
        opened={openModal}
        onClose={() => setOpenModal(false)}
        title=''
      >
        {tab == 2 ? (
          <FaArrowLeft
            className='mb-2 text-3xl border p-1 rounded-full cursor-pointer text-sky-600'
            onClick={() => setTab("1")}
          />
        ) : (
          ""
        )}
        <div className='mb-5 p-2 border'>
          <h1 className='text-xl text-center'>Website Consultation Meeting</h1>
          <div className='flex justify-center my-5 gap-5 items-center'>
            <p className='flex items-center gap-2'>
              <MdOutlineWatchLater /> 30 min
            </p>{" "}
            <p className='flex items-center gap-2'>
              {" "}
              <FiPhone /> Phone call
            </p>
            {tab == 2 && (
              <p className='text-center flex items-center gap-2'>
                <AiOutlineSchedule />
                {selected.length ? selected : "Select Date"}
                {mTime ? `, ${mTime}` : ""}
              </p>
            )}
          </div>
        </div>

        {/* tab 1 */}
        {tab == 1 ? (
          <div>
            <p className='text-center font-bold text-xl my-6 text-red-600'>
              {selected.length ? selected : "Select Date"}
              {mTime ? `, ${mTime}` : ""}
            </p>
            <div className='flex flex-col md:flex-row items-start gap-5 justify-center w-full'>
              <div className='w-full md:w-7/12 flex justify-center'>
                <Calendar
                  className='w-full w-auto'
                  getDayProps={(date) => ({
                    selected: selected.some((s) =>
                      dayjs(date).isSame(s, "date"),
                    ),
                    onClick: () => handleSelect(date),
                  })}
                />
              </div>

              {selected?.length > 0 && (
                <div className='w-8/12 m-auto md:w-5/12 mt-4 md:mt-0 h-[350px] overflow-y-auto'>
                  {times?.map((a) => (
                    <div
                      className={`border-t-2 cursor-pointer font-bold hover:bg-sky-600 hover:text-white p-2 ${
                        mTime == a ? "bg-sky-600 text-white" : "text-sky-600"
                      }`}
                      key={a}
                      onClick={() => setMTime(a)}
                    >
                      {a}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className='flex justify-center'>
              {selected?.length > 0 ? (
                <button
                  onClick={() => handleCheck()}
                  className='text-xl group mt-6 hover:border-[#0997e9] flex items-center w-fit gap-5 rounded-r-[50px] duration-500 mb-5 bg-[#0997e9] text-white sm:px-5 px-3 py-2'
                >
                  Next{" "}
                  <FaArrowRight className='group-hover:ml-20  ease-in duration-300' />
                </button>
              ) : (
                <button
                  disabled
                  className='text-xl group mt-6  flex items-center w-fit gap-5 rounded-r-[50px] duration-500 mb-5 bg-gray-500 text-white sm:px-5 px-3 py-2'
                >
                  Next{" "}
                  <FaArrowRight className='group-hover:ml-20  ease-in duration-300' />
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className='w-full md:w-8/12 m-auto px-4'>
            <h2 className='text-xl font-semibold'>Enter Details : </h2>
            <form onSubmit={handleSubmit}>
              {" "}
              <TextInput
                mt={10}
                name='name'
                label='Name'
                required
                placeholder='Name'
              />
              <TextInput
                mt={10}
                name='email'
                label='Email'
                type='email'
                required
                placeholder='Email'
              />
              <TextInput
                mt={10}
                pattern='^\+?[1-9]\d{1,14}$'
                name='phone'
                label='Phone Number'
                required
                placeholder='Phone Number'
              />
              <Textarea
                mt={10}
                label='Please share anything that will help prepare for our meeting.'
                placeholder=''
                name='message'
              />
              <div>
                <Checkbox
                  className='mt-4'
                  defaultChecked
                  label="By proceeding, you confirm that you have read and agree to
                Calendly's Terms of Use and Privacy Notice."
                />
              </div>
              {submitStatus && (
                <div
                  className={`mt-4 p-3 rounded-lg ${
                    submitStatus.type === "success"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}
              <button
                type='submit'
                disabled={loading}
                className={`text-xl my-5 text-white sm:px-12 px-5 py-1 rounded-lg ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#0997e9] hover:bg-[#0886d0]"
                }`}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        )}
      </Modal>
      <div
        className='flex items-center justify-center gap-1 mt-5'
        onClick={() => setOpenModal(true)}
      >
        <FaCalendarDays className='bg-[#0997e9] sm:text-5xl text-4xl p-2 text-white rounded-lg' />
        <button className='sm:text-2xl text-md my-5 bg-[#0997e9] text-white sm:px-12 px-5 py-2 rounded-lg'>
          30 Min Free Consultation
        </button>
      </div>
    </div>
  );
};

export default Calender_Modal;
