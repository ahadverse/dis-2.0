"use client";
import React, { useEffect, useState } from "react";
import style from "./header.module.css";
import Link from "next/link";
import { Menu, Drawer } from "@mantine/core";
import { HiOutlineMenu } from "react-icons/hi";
import { FaChevronDown } from "react-icons/fa";

const Header = () => {
  const [theme, setTheme] = useState("light");
  const [drawerOpened, setDrawerOpened] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("theme");
      if (stored) setTheme(stored);
      else if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      )
        setTheme("dark");
    } catch (e) {}
  }, []);

  useEffect(() => {
    try {
      if (theme === "dark") document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", theme);
    } catch (e) {}
  }, [theme]);

  const servicesLinks = [
    {
      href: "/services/website-design-and-development",
      label: "Website Design & Development",
    },
    { href: "/services/digital-marketing", label: "Digital Marketing" },
    {
      href: "/services/search-engine-optimization",
      label: "Search Engine Optimization (SEO)",
    },
    {
      href: "/services/social-media-marketing",
      label: "Social Media Marketing",
    },
    { href: "/services/lead-generation", label: "Lead Generation" },
    { href: "/services/training", label: "Training" },
  ];

  return (
    <div className={`sticky top-0 z-50 backdrop-blur-[20px]`}>
      <div className='xl:w-[1200px] w-11/12 m-auto flex items-center justify-between h-[75px]'>
        <div>
          <Link href='/'>
            <img
              alt='DIS Private LTD logo'
              className='w-[60px]'
              src={"/logo.png"}
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className='hidden md:flex'>
          <ul className='items-center justify-between font-semibold w-[450px] text-[#DB355B] flex gap-4'>
            <li>
              <Link className='text-[18px] hover:opacity-70' href={"/about"}>
                About
              </Link>
            </li>

            <Menu
              position='bottom-start'
              withArrow
              trigger='hover'
              className={"bg-transparent"}
            >
              <Menu.Target>
                <li className='text-[18px] cursor-pointer hover:opacity-70'>
                  Services
                </li>
              </Menu.Target>

              <Menu.Dropdown
                styles={{
                  dropdown: {
                    backdropFilter: "blur(10px)",
                    backgroundColor: "rgba(255, 255, 255, 0.3)",
                    borderRadius: "8px",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                  },
                }}
              >
                {servicesLinks.map((service) => (
                  <Menu.Item key={service.href}>
                    <Link
                      href={service.href}
                      className='py-2 text-[16px] w-[300px]'
                    >
                      {service.label}
                    </Link>
                  </Menu.Item>
                ))}
              </Menu.Dropdown>
            </Menu>

            <li>
              <Link
                className='text-[18px] hover:opacity-70'
                href={"/portfolios"}
              >
                Portfolios
              </Link>
            </li>
            <li>
              <Link className='text-[18px] hover:opacity-70' href={"/pricing"}>
                Pricing
              </Link>
            </li>
            <li>
              <Link className='text-[18px] hover:opacity-70' href={"/blogs"}>
                Blogs
              </Link>
            </li>
          </ul>
        </div>
        <div className='md:block  hidden'>
          <Link href={"/login"} className={style.login}>
            Login
          </Link>{" "}
        </div>
        {/* Mobile Menu Button */}
        <button
          className='md:hidden block p-2 text-[#DB355B]'
          aria-label='Open menu'
          onClick={() => setDrawerOpened(true)}
        >
          <HiOutlineMenu size={24} />
        </button>

        {/* Mobile Drawer */}
        <Drawer
          opened={drawerOpened}
          onClose={() => setDrawerOpened(false)}
          position='right'
          padding='md'
          size='75%'
          styles={{
            content: {
              backgroundColor: theme === "dark" ? "#0b1221" : "#ffffff",
              color: theme === "dark" ? "#e6eef8" : "#0f172a",
            },
          }}
        >
          <nav className='flex flex-col gap-1'>
            {/* About Link */}
            <Link
              href='/about'
              onClick={() => setDrawerOpened(false)}
              className={`px-4 py-3 text-[16px] font-semibold rounded ${
                theme === "dark"
                  ? "text-blue-400 hover:bg-gray-800"
                  : "text-[#DB355B] hover:bg-gray-100"
              }`}
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div className='flex flex-col'>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`px-4 py-3 text-[16px] font-semibold rounded flex items-center justify-between ${
                  theme === "dark"
                    ? "text-blue-400 hover:bg-gray-800"
                    : "text-[#DB355B] hover:bg-gray-100"
                }`}
              >
                Services
                <FaChevronDown
                  size={12}
                  className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {servicesOpen && (
                <ul className='ml-4 flex flex-col gap-2 bg-opacity-50 py-2'>
                  {servicesLinks.map((service) => (
                    <li key={service.href}>
                      <Link
                        href={service.href}
                        onClick={() => {
                          setDrawerOpened(false);
                          setServicesOpen(false);
                        }}
                        className={`text-sm block px-2 py-1 rounded ${
                          theme === "dark"
                            ? "text-gray-300 hover:bg-gray-700"
                            : "text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {service.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Portfolios Link */}
            <Link
              href='/porfolios'
              onClick={() => setDrawerOpened(false)}
              className={`px-4 py-3 text-[16px] font-semibold rounded ${
                theme === "dark"
                  ? "text-blue-400 hover:bg-gray-800"
                  : "text-[#DB355B] hover:bg-gray-100"
              }`}
            >
              Portfolios
            </Link>

            {/* Pricing Link */}
            <Link
              href='/pricing'
              onClick={() => setDrawerOpened(false)}
              className={`px-4 py-3 text-[16px] font-semibold rounded ${
                theme === "dark"
                  ? "text-blue-400 hover:bg-gray-800"
                  : "text-[#DB355B] hover:bg-gray-100"
              }`}
            >
              Pricing
            </Link>

            {/* Blogs Link */}
            <Link
              href='/blogs'
              onClick={() => setDrawerOpened(false)}
              className={`px-4 py-3 text-[16px] font-semibold rounded ${
                theme === "dark"
                  ? "text-blue-400 hover:bg-gray-800"
                  : "text-[#DB355B] hover:bg-gray-100"
              }`}
            >
              Blogs
            </Link>

            <hr
              className={`my-3 ${theme === "dark" ? "border-gray-700" : "border-gray-300"}`}
            />

            {/* Login Button */}
            <Link
              href='/login'
              onClick={() => setDrawerOpened(false)}
              className={`px-4 py-3 text-[16px] font-semibold border border-[#DB355B] rounded text-center ${
                theme === "dark"
                  ? "bg-blue-600 text-white border-blue-400 hover:bg-blue-700"
                  : "text-[#DB355B] bg-white hover:bg-gray-100"
              }`}
            >
              Login
            </Link>
          </nav>
        </Drawer>
      </div>
    </div>
  );
};

export default Header;
