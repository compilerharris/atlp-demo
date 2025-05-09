"use client";

import { useEffect, useRef, useState } from 'react';
import $ from 'jquery';
import Image from 'next/image';
import Link from 'next/link';
import Products from './Products';
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { Fancybox } from "@fancyapps/ui";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { apiCategoryRes, apiProductRes } from '@/app/page';
import { useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

export default function LP({ products, categories }: { products: apiProductRes[]; categories: apiCategoryRes[] }) {
    const router = useRouter();

    // banner images

    // const [deviceWidth, setDeviceWidth] = useState<number>(0);
    // const bannerImages = {
    //     banner1: "/assets/images/super-sale.png",
    //     mBanner1: "/assets/images/super-sale-mobile.png",
    //     banner2: "/assets/images/banner2.png",
    //     mBanner2: "/assets/images/banner-mobile2.png",
    //     banner3: "/assets/images/banner.png",
    //     mBanner3: "/assets/images/banner-01-mobile.jpg",
    //     banner4: "/assets/images/super-sale.png",
    //     mBanner4: "/assets/images/super-sale-mobile.png",
    //     banner5: "/assets/images/banner.png",
    //     mBanner5: "/assets/images/banner-01-mobile.jpg",
    //     banner6: "/assets/images/banner.png",
    //     mBanner6: "/assets/images/banner-01-mobile.jpg",
    // }

    const redirectToWhatsapp = (msg: string) => {
        const phoneNumber = '+919599090603';
        const message = encodeURIComponent(`${msg}`);
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    }

    // contact us
    const [isOpen, setIsOpen] = useState(false);
    // const [redirectTo, setRedirectTo] = useState("/thankyou");
    const [formSubmitted, setFormSubmitted] = useState(typeof window !== "undefined" && localStorage.getItem("formSubmitted") === "true");
    const popupInterval = useRef<NodeJS.Timeout | null>(null);
    // const [utmSource, setUtmSource] = useState<string | null>("");

    useEffect(() => {
        // disable by google and facebook traffic
        // const urlParams = new URLSearchParams(window.location.search);
        // const source = urlParams.get('utm_source');
        // setUtmSource(source);
        if (formSubmitted) return; // Stop popup if form was submitted

        // First popup appears after 5 seconds
        const firstPopupTimeout = setTimeout(() => {
            setIsOpen(true);
        }, 5000);

        // $(".enquire-button-fixed, .eq-btn-mobile, .dwnBro, .header .enquire-button, .brochure-btn").click(function () {
        //     if(typeof disableEnquire === "undefined" || !disableEnquire){
        //         $(".sec-eq").addClass("show");
        //         $(".sec-eq").removeClass("static");
        //     }
        // });
        // const handleClick = (e: JQuery.ClickEvent) => {
        const handleClick = () => {
            // if (!disableEnquire) {
                $(".sec-eq").addClass("show").removeClass("static");
            // } else {
            //     e.preventDefault(); // prevent showing popup
            // }
        };

        const buttons = $(".enquire-button-fixed, .eq-btn-mobile, .dwnBro, .header .enquire-button, .brochure-btn");

        buttons.on("click", handleClick);

        return () => {
            clearTimeout(firstPopupTimeout);
            buttons.off("click", handleClick);
        }
    }, [formSubmitted]);

    useEffect(() => {
        // setDeviceWidth(window.innerWidth);

        if (typeof window === "undefined") return;
        // click on tab scroll to that section
        $(".navbar-menu .navbar-start a, #anchorage-nav").on("click", function (event) {
            event.preventDefault();

            const sectionId = $(this).attr("data-tab");
            if (!sectionId) return; // Stop if no ID

            const targetElement = $("#" + sectionId);
            const headerHeight = $("header").innerHeight() || 0;

            if (targetElement.length) {
                const targetOffset = targetElement.offset()?.top;

                if (typeof targetOffset === "number") {
                    $("html, body").animate(
                        {
                            scrollTop: targetOffset - headerHeight - 50,
                        },
                        500
                    );
                }
            }
        });

        $(".navbar-burger").click(function () {
            $(".navbar-burger").toggleClass("is-active");
            $(".navbar-menu").toggleClass("is-active");
        });

        $(".navbar-item").click(function () {
            $(".navbar-burger").removeClass("is-active");
            $(".navbar-menu").removeClass("is-active");
        });

        $(".closeIcon").click(function () {
            $(".sec-eq").removeClass("show");
            $(".navbar-burger").removeClass("is-active");
            $(".navbar-menu").removeClass("is-active");
            $(".sec-eq").addClass("static");
        });

        const handleScroll = () => {
            if (window.scrollY > 50) {
                document.querySelector(".header")?.classList.add("active");
            } else {
                document.querySelector(".header")?.classList.remove("active");
            }
        };

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        // video
        Fancybox.bind("[data-fancybox]", {});

        // Accordion
        $('.tab-accordion .accordion-section-title').click(function (e) {
            const currentAttrValue = $(this).attr('data-acc');

            if ($(e.target).is('.active')) {
                $(this).removeClass('active');
                $(this).siblings().slideUp(300).removeClass('open');
            } else {
                $(this).parent().siblings().children('.accordion-section-title').removeClass('active');
                $(this).parent().siblings().children('.accordion-section-content').slideUp(300).removeClass('open');

                $(this).addClass('active');
                $('#' + currentAttrValue).slideDown(300).addClass('open');
            }
        });

        function allAnimation() {
            gsap.utils.toArray<HTMLElement>(".text-line-section").forEach((section) => {
                const textLines = section.querySelectorAll(".text-line");
                gsap.set(textLines, { opacity: 0, y: 50 });
                const customDelay = section.dataset.delay || 0.3;

                gsap.to
                    (textLines, {
                        opacity: 1,
                        y: 0,
                        stagger: 0.3,
                        duration: 1,
                        ease: "power2.out",
                        delay: customDelay,
                        scrollTrigger: {
                            trigger: section,
                            start: "top 80%",
                            toggleActions: "play none none none",
                            once: true,
                        }
                    });
            });

            gsap.utils.toArray<HTMLElement>(".fade-in-anim").forEach((fadeElement) => {
                gsap.set(fadeElement, { opacity: 0 });
                const customDelay = fadeElement.dataset.delay || 0.3;

                gsap.to
                    (fadeElement, {
                        opacity: 1,
                        duration: 1,
                        ease: "power2.out",
                        delay: customDelay,
                        scrollTrigger: {
                            trigger: fadeElement,
                            start: "top 80%",
                            toggleActions: "play none none none",
                            once: true,
                        }
                    });
            });

            gsap.utils.toArray<HTMLElement>(".scale-up").forEach((video) => {
                gsap.set(video, { scale: 0.7 });

                gsap.to
                    (video, {
                        scale: 1,
                        duration: 1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: video,
                            start: "top 80%",
                            end: "top 30%",
                            scrub: true,
                            toggleActions: "play none none none",
                            once: true,
                        }
                    });
            });

            gsap.utils.toArray<HTMLElement>(".scale-down").forEach((video) => {
                gsap.set(video, { scale: 1.5 });

                gsap.to
                    (video, {
                        scale: 1,
                        duration: 1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: video,
                            start: "top 80%",
                            end: "top 30%",
                            scrub: true,
                            toggleActions: "play none none none",
                            once: true,
                        }
                    });
            });

            const why_mm = gsap.matchMedia();
            why_mm.add("(min-width: 768px)", () => {

                gsap.to
                    (".why-bond-layout-bg", {
                        width: "31vw",
                        ease: "power1.out",
                        scrollTrigger: {
                            trigger: ".why-bond-layout-bg",
                            start: "top center",
                            end: "bottom bottom",
                            toggleActions: "play none none none",
                            once: true,
                        }
                    });
            });

            why_mm.add("(max-width: 767px)", () => {

                gsap.to
                    (".why-bond-layout-bg", {
                        width: "0vw",
                        ease: "power1.out",
                        scrollTrigger: {
                            trigger: ".why-bond-layout-bg",
                            start: "top center",
                            end: "bottom bottom",
                            toggleActions: "play none none none",
                            once: true,
                        }
                    });
            });


            gsap.to
                (".two-parts-text-wrp", {
                    width: "100%",
                    ease: "power1.out",
                    scrollTrigger: {
                        trigger: ".two-parts-text-wrp",
                        start: "top center",
                        end: "bottom bottom",
                        toggleActions: "play none none none",
                        once: true,
                    }
                });


            gsap.to
                (".animated-text", {
                    letterSpacing: "20px",
                    scrollTrigger: {
                        trigger: ".animated-text",
                        start: "top center",
                        end: "bottom top",
                        scrub: 2,
                        toggleActions: "play none none none",
                        once: true,
                    }
                });
        }

        function setParallaxEffect() {
            document.querySelectorAll(".object").forEach(image => {
                const movementDesktop = image.getAttribute("data-movement-desktop");
                const movementMobile = image.getAttribute("data-movement-mobile");
                const movement = window.innerWidth > 768 ? movementDesktop : movementMobile;
                const scrubSpeed = window.innerWidth > 768 ? 2 : 1;

                const animationProps = image.classList.contains("horizontal") ? { x: movement + "px" } : { y: movement + "px" };


                gsap.to
                    (image, {
                        ...animationProps,
                        scrollTrigger: {
                            trigger: image,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: scrubSpeed,
                        }
                    });
            });
        }

        allAnimation();
        setParallaxEffect();

        const handleResize = () => {
            ScrollTrigger.refresh();
            setParallaxEffect();
            allAnimation();
            // setDeviceWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        const handleWAScroll = () => {
            const button = document.getElementById("df-btn-cont");
            if (button) {
                if (window.scrollY > 300) {
                    button.classList.add("show");
                } else {
                    button.classList.remove("show");
                }
            }
        };
        window.addEventListener("scroll", handleWAScroll);


        return () => {
            $(".navbar-burger").off("click");
            $(".navbar-item").off("click");
            $(".enquire-button-fixed, .eq-btn-mobile, .dwnBro, .header .enquire-button, .brochure-btn").off("click");
            $(".closeIcon").off("click");
            $(".navbar-menu .navbar-start a, #anchorage-nav").off("click");
            window.removeEventListener("scroll", handleScroll);
            Fancybox.destroy();
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleWAScroll);
        };
    }, []);

    // contact form

    const openContactForm = (redirectTo: string) => {
        // setRedirectTo(redirectTo)
        localStorage.setItem("redirectTo",redirectTo)
        setIsOpen(true);
    }

    const closeContactPopup = () => {
        setIsOpen(false);
        if (!formSubmitted) startPopupInterval();
    }

    const startPopupInterval = () => {
        if (!popupInterval.current) {
            popupInterval.current = setInterval(() => {
                setIsOpen(true);
            }, 300000);
        }
    };

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        contact: "",
        msg: "",
    });

    // Handle input change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formD = new FormData();
        formD.append('name', formData.name)
        formD.append('contact', formData.contact)
        formD.append('email', formData.email)
        formD.append('requirement', formData.msg)
        // formD.append('utm_source', utmSource || '')

        try {
            // const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_LIVE}/post_contact_us`, {
            const response = await fetch(`https://www.antservices.in/post_contact_us`, {
                method: "POST",
                body: formD,
            });

            const data = await response.json();

            if (response.ok) {
                console.log("Thank you for contacting us. We will get back to you soon.");
                setFormData({
                    name: "",
                    email: "",
                    contact: "",
                    msg: "",
                })
                // Save submission status in localStorage
                localStorage.setItem("formSubmitted", "true");
                setFormSubmitted(true);
                setIsOpen(false);

                // Stop future popups after form submission
                if (popupInterval.current) {
                    clearInterval(popupInterval.current);
                    popupInterval.current = null;
                }
                router.push("/thankyou");
                // router.push(redirectTo || "/thankyou");
            } else {
                console.log(data.message || "Something went wrong. Please try again.");
            }
        } catch (error) {
            console.log(`Network error: ${error}. Please try again later.`);
        } finally {
            // setLoading(false);
        }
    };
    // contact form end

    return (
        <>

            {/* Header*/}
            <nav className="navbar header">
                <div className="navbar-brand">
                    <Link className="navbar-item hass-text-centered" href="/">
                        <Image src="/assets/images/logo.webp" alt="Logo | A&T Services Inc." width={100} height={100} sizes="(max-width: 768px) 100px, 100px" priority />
                    </Link>
                </div>

                <div id="main_navigation" className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item" href="javascript:void(0)" data-tab="usp">USP</a>
                        <a className="navbar-item desktop-item" href="javascript:void(0)" data-tab="products">Products</a>
                        <a className="navbar-item" href="javascript:void(0)" data-tab="video">Video</a>
                        <a className="navbar-item desktop-item" href="javascript:void(0)" data-tab="categories">Categories</a>
                        <a className="navbar-item desktop-item" href="javascript:void(0)" data-tab="about">About Us</a>
                        <a className="navbar-item" href="javascript:void(0)" data-tab="shop">Shop By</a>
                        <a className="navbar-item" href="javascript:void(0)" data-tab="testimonials">Testimonials</a>
                        <a className="navbar-item" href="javascript:void(0)" data-tab="contact">Contact Us</a>
                        <a className="navbar-item" href="javascript:void(0)" data-tab="faq">FAQ&apos;s</a>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="field is-grouped">
                                <p className="navbar-phone-icon control">
                                    {/* <a href="javascript:void(0)" onClick={() => openContactForm("/thankyou")}> */}
                                    <a href="tel:+919599090603">
                                        <span className="call-icon">
                                            <Image src="/assets/images/call-icon.webp" alt="Call Icon | A&T Services Inc." width={10} height={10} />
                                        </span>
                                        <span>+91 95 9909 0603</span>
                                    </a>
                                </p>
                                <p className="nav-divider">+</p>
                                <p className="control">
                                    <a className="enquire-button" href="javascript:void(0)">
                                        <span>Enquire Now</span>
                                    </a>
                                </p>
                                <p className="nav-divider">+</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar-burger text-circle">
                    <p>Menu</p>
                    <p>Close</p>
                </div>
            </nav>

            {/* slider banner */}
            <Swiper
                modules={[Autoplay]}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 5000 }}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    768: { slidesPerView: 1 },
                    1200: { slidesPerView: 1 },
                }}
                className="counter-wrp margin-t-1 anim_fade_in_wrp"
            >
                <SwiperSlide>
                    {/* style={{backgroundImage: `url(${deviceWidth <= 1023 ? bannerImages.mBanner6 : bannerImages.banner6})`, backgroundPosition: `${deviceWidth <= 1023 ? '20%' : 'center'}`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}} */}
                    <div className="banner">
                        <div className="text-content">
                            <h1 className="heading-02">Affordable & Trusted <br /> That’s A&T!</h1>
                            <p className="p1">Your Partner in Quality Without Compromise!</p>
                            <p className="p2">Hassle-Free 1-Year Warranty <br /> Affordable Prices, No Hidden Costs <br /> Quick Support, Always Ready</p>
                            <div>
                                <button onClick={() => openContactForm("https://www.antservices.in/shop")} className="btn btn-red">SHOP NOW</button>
                                {/* <button onClick={() => openContactForm("https://www.antservices.in/shop")} className="btn">CHAT NOW</button> */}
                                <button onClick={() => redirectToWhatsapp(`Hey A&T Services Inc. Team,\n\nPlease provide more details.`)} className="btn">CHAT NOW</button>
                            </div>
                        </div>
                        <Image src="/assets/images/laptop.webp" alt="Affordable & Trusted That’s A&T!" width={500} height={300} priority className="laptop-image floatAnim fadeInAnim" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    {/* style={{backgroundImage: `url(${deviceWidth <= 1023 ? bannerImages.mBanner2 : bannerImages.banner2})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}} */}
                    <div className="banner">
                        <div className="text-content">
                            <h1 className="heading-02">Refurbished MacBook <br /> Air 2020 M1</h1>
                            <p className="p1">Apple M1 chip - delivering lightning - fast performance</p>
                            <p className="p2">Apple M1 Chip – Superfast & efficient <br /> 13.3&quot; Retina Display – Stunning clarity <br /> Touch ID & Backlit Keyboard</p>
                            <div>
                                <button onClick={() => openContactForm("https://www.antservices.in/shop/refurbished-macbook-air-2020-m1-545#attr=620,621,630")} className="btn btn-red">SHOP NOW</button>
                                {/* <button onClick={() => openContactForm("https://www.antservices.in/shop")} className="btn">CHAT NOW</button> */}
                                <button onClick={() => redirectToWhatsapp(`Hey A&T Services Inc. Team,\n\nPlease provide more details.`)} className="btn">CHAT NOW</button>
                            </div>
                        </div>
                        <Image src="/assets/images/Macbook-Air-m1.webp" alt="Macbook Air m1" width={500} height={300} className="laptop-image bannerTwo topToDown" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    {/* style={{backgroundImage: `url(${deviceWidth <= 1023 ? bannerImages.mBanner3 : bannerImages.banner3})`, backgroundPosition: `${deviceWidth <= 1023 ? '20%' : 'center'}`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}} */}
                    <div className="banner">
                        <div className="text-content bannerTwoText">
                            <h1 className="heading-02">India’s Best Quality & Price: Premium Refurbished PC</h1>
                            <p className="p1">Refurbished Laptops, Desktops & <br />Workstations – Quality You Can Trust, <br />Prices You’ll Love!</p>
                            <p className="p2">Priority Corporate Support <br /> Enterprise-Grade Quality <br /> Customized for Your Needs</p>
                            <div>
                                <button onClick={() => openContactForm("https://www.antservices.in/shop")} className="btn btn-red">SHOP NOW</button>
                                {/* <button onClick={() => openContactForm("https://www.antservices.in/shop")} className="btn">CHAT NOW</button> */}
                                <button onClick={() => redirectToWhatsapp(`Hey A&T Services Inc. Team,\n\nPlease provide more details.`)} className="btn">CHAT NOW</button>
                            </div>
                        </div>
                        <Image src="/assets/images/laptop4.webp" alt="Laptop Collection" width={500} height={300} className="laptop-image bannerThree topToDown" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    {/* style={{backgroundImage: `url(${deviceWidth <= 1023 ? bannerImages.mBanner5 : bannerImages.banner5})`, backgroundPosition: `${deviceWidth <= 1023 ? '20%' : 'center'}`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}} */}
                    <div className="banner">
                        <div className="text-content">
                            <h1 className="heading-02">High-Performance Workstation Servers</h1>
                            <p className="p1">Built for Speed, Reliability, and Scalability</p>
                            <p className="p2">Dual Xeon 8-Core | 96GB RAM | 1TB SSD <br /> Built for Heavy Workloads <br /> Bulk Pricing & Custom Configurations</p>
                            <div>
                                <button onClick={() => openContactForm("https://www.antservices.in/shop")} className="btn btn-red">SHOP NOW</button>
                                {/* <button onClick={() => openContactForm("https://www.antservices.in/shop")} className="btn">CHAT NOW</button> */}
                                <button onClick={() => redirectToWhatsapp(`Hey A&T Services Inc. Team,\n\nPlease provide more details.`)} className="btn">CHAT NOW</button>
                            </div>
                        </div>
                        <Image src="/assets/images/Server1.webp" alt="Server" width={500} height={300} className="laptop-image bannerOne topToDown" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    {/* style={{backgroundImage: `url(${deviceWidth <= 1023 ? bannerImages.mBanner1 : bannerImages.banner1})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}} */}
                    <div className="banner">
                        <div className="text-content">
                            <h1 className="heading-02">Premium Refurbished Laptops for Startups & Enterprises</h1>
                            <p className="p1">Power Your Business with Refurbished Excellence</p>
                            <p className="p2">Top-Quality Refurbished Systems <br /> 1-Year On-Site Warranty <br /> Quick Support for Corporate Clients</p>
                            <div>
                                <button onClick={() => openContactForm("https://www.antservices.in/shop/dell-latitude-5420-i5-11th-gen-1966#attr=888,891,1491")} className="btn btn-red">SHOP NOW</button>
                                {/* <button onClick={() => openContactForm("https://www.antservices.in/shop")} className="btn">CHAT NOW</button> */}
                                <button onClick={() => redirectToWhatsapp(`Hey A&T Services Inc. Team,\n\nPlease provide more details.`)} className="btn">CHAT NOW</button>
                            </div>
                        </div>
                        <Image src="/assets/images/dell-latitude-5420.webp" alt="Dell Latitude 5420" width={500} height={300} className="laptop-image bannerOne topToDown" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    {/* style={{backgroundImage: `url(${deviceWidth <= 1023 ? bannerImages.mBanner4 : bannerImages.banner4})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}} */}
                    <div className="banner">
                        <div className="text-content bannerTwoText">
                            <h1 className="heading-02">High-Performance Business Series <br />Desktops</h1>
                            <p className="p1">Tested & Certified | 1-Year On-Site Warranty | <br />Special Corporate Support</p>
                            <p className="p2">Your Dream Desktop – Refurbished <br /> New Monitor, Keyboard, Mouse, RAM & SSD <br /> 1-Year Warranty – Affordable Price</p>
                            <div>
                                <button onClick={() => openContactForm("https://www.antservices.in/shop")} className="btn btn-red">SHOP NOW</button>
                                {/* <button onClick={() => openContactForm("https://www.antservices.in/shop")} className="btn">CHAT NOW</button> */}
                                <button onClick={() => redirectToWhatsapp(`Hey A&T Services Inc. Team,\n\nPlease provide more details.`)} className="btn">CHAT NOW</button>
                            </div>
                        </div>
                        <Image src="/assets/images/Dell-Optiplex-3040.webp" alt="Dell Optiplex 3040" width={500} height={300} className="laptop-image bannerOne topToDown" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    {/* style={{backgroundImage: `url(${deviceWidth <= 1023 ? bannerImages.mBanner4 : bannerImages.banner4})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}} */}
                    <div className="banner">
                        <div className="text-content bannerTwoText">
                            <h1 className="heading-02">Expert Laptop Replacement with 100% Original Parts</h1>
                            <p className="p1">Screen, Keyboard, RAM, Battery, Fan & More – We Replace Only Business series laptops</p>
                            <p className="p2">Original parts Replacement <br /> Fast, reliable service by certified techs <br /> Affordable pricing, free diagnostics</p>
                            <div>
                                <button onClick={() => openContactForm("https://www.antservices.in/shop")} className="btn btn-red">SHOP NOW</button>
                                {/* <button onClick={() => openContactForm("https://www.antservices.in/shop")} className="btn">CHAT NOW</button> */}
                                <button onClick={() => redirectToWhatsapp(`Hey A&T Services Inc. Team,\n\nPlease provide more details.`)} className="btn">CHAT NOW</button>
                            </div>
                        </div>
                        <Image src="/assets/images/spare-parts-new.webp" alt="Dell Optiplex 3040" width={500} height={300} className="laptop-image bannerOne topToDown" />
                    </div>
                </SwiperSlide>
            </Swiper>

            {/* usp */}
            <section className="overview-section top-bottom-padding" id="usp">
                <div className="object object-01" data-movement-desktop="-80" data-movement-mobile="-80">
                    <Image src="/assets/images/object-01.svg" alt="Laptop" width={500} height={300} className="laptop-image" />
                </div>
                <div className="object object-02" data-movement-desktop="120" data-movement-mobile="120">
                    <Image src="/assets/images/object-02.svg" alt="Laptop" width={500} height={300} className="laptop-image" />
                </div>
                <div className="wrp-1 is-bg-red inner-top-bottom-padding fade-in-anim">
                    <div className="container">
                        <div className="heading-wrapper pt-0 is-relative">
                            <h3 className="heading-01 margin-b fade-in-anim">Unique Selling Proposition</h3>
                            <h2 className="heading-02 text-line-section">
                                <span className="text-line-wrp mob-2-line">
                                    <span className="text-line">WE ARE SPECIALIZED IN </span>
                                </span>
                            </h2>
                        </div>
                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={30}
                            slidesPerView={3}
                            loop={true}
                            autoplay={{ delay: 3000 }}
                            breakpoints={{
                                0: { slidesPerView: 2, spaceBetween: 10 },
                                768: { slidesPerView: 3, spaceBetween: 20 },
                                1200: { slidesPerView: 4, spaceBetween: 30 },
                            }}
                            className="counter-wrp margin-t-1 anim_fade_in_wrp swiper-dot"
                        >
                            {/* <div className="counter-innr">
                                    <p className="p1 is-white">1</p>
                                    <p className="p2 para-01 is-white font-300-space-0">Year Warranty</p>
                                </div> */}
                            <SwiperSlide>
                                <div className="counter-innr">
                                    <Image src="/assets/images/1-year-warranty.webp" alt="" width={500} height={300} />
                                    {/* <p className="p1 is-white">1</p> */}
                                    <p className="p2 is-white">1 Year Warranty</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="counter-innr">
                                    <Image src="/assets/images/72-Qualitty-check.webp" alt="" width={500} height={300} />
                                    {/* <p className="p1 is-white">72</p> */}
                                    <p className="p2 is-white">72 Quality Checks</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="counter-innr">
                                    <Image src="/assets/images/10-day-replacement.webp" alt="" width={500} height={300} />
                                    {/* <p className="p1 is-white">10</p> */}
                                    <p className="p2 is-white">10 Day Replacement</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="counter-innr">
                                    <Image src="/assets/images/amc.webp" alt="" width={500} height={300} />
                                    <p className="p2 is-white">Reliable After-Sales Service</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="counter-innr">
                                    <Image src="/assets/images/free-delivery.webp" alt="" width={500} height={300} />
                                    <p className="p2 is-white">Free Delivery</p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
            {/* usp end */}

            {/* products */}
            <Products products={products} openContactForm={openContactForm} />
            {/* products ends */}

            {/* video */}
            <div className="wrp-2 anim_fade_in_wrp anim_fade_in" id="video">
                <a href="https://www.youtube.com/embed/xcWIX0uGv7I" className="normal-video" data-fancybox="project_overview">
                    <div className="video-thumb active">
                        <div className="img-wrp ">
                            <Image src="/assets/images/video-thumbnail.webp" width={1920} height={1000} sizes="(max-width: 768px) 400px" className="thumb ls-is-cached" alt="Introductory Video Thumbnail | A&T Services Inc." title="Introductory Video Thumbnail | A&T Services Inc." />
                        </div>
                        <div className="play-btn-wrp anim_b_t_t_wrp anim_b_t_t">
                            <span className="play-btn-circle circle-fade-in is-gradient-fill"><span></span></span>
                        </div>
                    </div>
                </a>
            </div>
            {/* video end */}

            {/* categories */}
            <section className="category overview-section top-bottom-padding" id="categories">
                <div className="object object-05" data-movement-desktop="-120" data-movement-mobile="-120">
                    <Image src="/assets/images/object-02.svg" width={1920} height={1000} alt='Element' />
                </div>
                <div className="wrp-1 is-bg-red inner-top-bottom-padding">
                    <div className="container">
                        <div className="heading-wrapper pt-0 is-relative">
                            <h3 className="heading-01 margin-b fade-in-anim">Categories</h3>
                            <h2 className="heading-02 text-line-section">
                                <span className="text-line-wrp mob-2-line">
                                    <span className="text-line">TRENDING CATEGORIES</span>
                                </span>
                            </h2>
                        </div>
                        <Swiper
                            modules={[Autoplay, Pagination]}
                            loop={true}
                            spaceBetween={30}
                            slidesPerView={2}
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 3000 }}
                            breakpoints={{
                                0: { slidesPerView: 1, spaceBetween: 10 },
                                601: { slidesPerView: 1, spaceBetween: 30 },
                                1000: { slidesPerView: 2, spaceBetween: 30 },
                                1500: { slidesPerView: 2, spaceBetween: 50 },
                            }}
                            className="counter-wrp margin-t-1 fade-in-anim swiper-dot"
                        >
                            {
                                categories.sort((a, b) => a.sequence - b.sequence).map((category, index) => {
                                    return (
                                        <SwiperSlide key={index}>
                                            <div className="counter-innr" style={{ backgroundImage: `url('/assets/images/Cat${index + 1}.webp')` }}>
                                                <div className="category-card">
                                                    <h2>{category.name}</h2>
                                                    {/* <p>Office Laptop one liner</p> */}
                                                    <button onClick={() => openContactForm(`https://www.antservices.in${category.categoryPageUrl}`)} className="btn btn-red">SHOP NOW</button>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    </div>
                </div>
            </section>
            {/* categories end */}

            {/* about */}
            <section className="about overview-section top-bottom-padding" id="about">
                <div className="object object-06" data-movement-desktop="-100" data-movement-mobile="-100">
                    <Image src="/assets/images/object-01.svg" width={1920} height={1000} alt='Element' />
                </div>
                <div className="wrp-1 is-bg-red inner-top-bottom-padding">
                    <div className="container">
                        <div className="leftImage fade-in-anim">
                            <Image src="/assets/images/about-01.jpeg" width={1920} height={1000} alt="About Us | A&T Services Inc." title="About Us | A&T Services Inc." />
                        </div>
                        <div className="rightContent">
                            <h2 className="heading-02 text-line-section">
                                <span className="text-line-wrp">
                                    <span className="text-line">ABOUT US</span>
                                </span>
                            </h2>
                            <p className="fade-in-anim">At <strong>A&T Services Inc.</strong>, we take pride in providing high-quality refurbished computers and laptops at unbeatable prices With years of experience in the Indian IT industry, we’ve built a strong reputation for offering reliable hardware solutions, backed by prompt, expert support. Our clients trust us not only for our exceptional products but also for our outstanding customer service, often referring us to others for their hardware needs.</p>
                            <a href={`https://www.antservices.in/about-us`} target='_blank' className="btn btn-red">READ MORE</a>
                        </div>
                    </div>
                </div>
            </section>
            {/* about end */}

            {/* shop */}
            <section className="shop overview-section top-bottom-padding" id="shop">
                <div className="object object-07" data-movement-desktop="-120" data-movement-mobile="-120">
                    <Image src="/assets/images/object-02.svg" width={1920} height={1000} alt='Element' />
                </div>
                <div className="object object-08" data-movement-desktop="120" data-movement-mobile="120">
                    <Image src="/assets/images/object-02.svg" width={1920} height={1000} alt='Element' />
                </div>
                <div className="wrp-1 is-bg-red inner-top-bottom-padding">
                    <div className="container">
                        <div className="heading-wrapper pt-0 is-relative">
                            <h3 className="heading-01 margin-b fade-in-anim">SHOP BY</h3>
                            <h2 className="heading-02 text-line-section">
                                <span className="text-line-wrp">
                                    <span className="text-line">BRANDS</span>
                                </span>
                            </h2>
                        </div>
                        {/* by brands */}
                        <div className="shopCard brands">
                            <div className="shopItem fade-in-anim">
                                <Image src="/assets/images/dell.webp" width={1920} height={1000} alt='Dell Refurbished Laptops' />
                                <h2>Dell Refurbished Laptops</h2>
                                <button onClick={() => openContactForm(`https://www.antservices.in/shop?search=dell`)} className="btn btn-red">SHOP NOW</button>
                            </div>
                            <div className="shopItem fade-in-anim">
                                <Image src="/assets/images/hp.webp" width={1920} height={1000} alt='HP Refurbished Laptops' />
                                <h2>HP Refurbished Laptops</h2>
                                <button onClick={() => openContactForm(`https://www.antservices.in/shop?search=hp`)} className="btn btn-red">SHOP NOW</button>
                            </div>
                            <div className="shopItem fade-in-anim">
                                <Image src="/assets/images/lenovo.webp" width={1920} height={1000} alt='Lenovo Refurbished Laptops' />
                                <h2>Lenovo Refurbished Laptops</h2>
                                <button onClick={() => openContactForm(`https://www.antservices.in/shop?search=lenovo`)} className="btn btn-red">SHOP NOW</button>
                            </div>
                        </div>

                        {/* by price */}
                        <div className="heading-wrapper pt-0 is-relative priceHeading">
                            <h2 className="heading-02 text-line-section">
                                <span className="text-line-wrp">
                                    <span className="text-line">PRICE</span>
                                </span>
                            </h2>
                        </div>
                        <div className="shopCard price">
                            <div className="shopItem fade-in-anim">
                                <h2>Budget-friendly options with great performance. Find Laptops Under <span>₹20,000</span></h2>
                                <button onClick={() => openContactForm(`https://www.antservices.in/shop?max_price=20000.00`)} className="btn btn-red">SHOP NOW</button>
                            </div>
                            <div className="shopItem fade-in-anim">
                                <h2>Perfect balance of affordability and power. Find Laptops Under <span>₹30,000</span></h2>
                                <button onClick={() => openContactForm(`https://www.antservices.in/shop?max_price=30000.00`)} className="btn btn-red">SHOP NOW</button>
                            </div>
                            <div className="shopItem fade-in-anim">
                                <h2>High-performance laptops for all your needs. Find Laptops Above <span>₹30,000</span></h2>
                                <button onClick={() => openContactForm(`https://www.antservices.in/shop?min_price=30000.00`)} className="btn btn-red">SHOP NOW</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* shop end */}

            {/* testimonials */}
            <section className="testimonials overview-section top-bottom-padding" id="testimonials">
                <div className="object object-01" data-movement-desktop="-80" data-movement-mobile="-80">
                    <Image src="/assets/images/object-01.svg" width={1920} height={1000} alt='Element' />
                </div>
                <div className="wrp-1 is-bg-red inner-top-bottom-padding">
                    <div className="container">
                        <div className="heading-wrapper pt-0 is-relative">
                            <h3 className="heading-01 margin-b fade-in-anim">Customer&apos;s</h3>
                            <h2 className="heading-02 text-line-section">
                                <span className="text-line-wrp">
                                    <span className="text-line">TESTIMONIALS</span>
                                </span>
                            </h2>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <Swiper
                                modules={[Navigation, Pagination, Autoplay]}
                                spaceBetween={30}
                                slidesPerView={2}
                                navigation={false}
                                loop={true}
                                pagination={{ clickable: true }}
                                autoplay={{ delay: 3000 }}
                                breakpoints={{
                                    0: { slidesPerView: 1, spaceBetween: 10 },
                                    768: { slidesPerView: 2, spaceBetween: 20 },
                                    1500: { slidesPerView: 2, spaceBetween: 50 },
                                }}
                                className="swiper-dot"
                            >
                                <SwiperSlide>
                                    <div className="testimonial-card">
                                        <div className="stars">★★★★★</div>
                                        <h3>I recently purchased a refurbished laptop from A&T Services Inc., and I am thoroughly impressed! The quality of the product was outstanding, and the price was incredibly affordable. Their expert technical team provided excellent support, answering all my queries and ensuring a smooth setup.What stood out the most was their timely service and genuine focus on customer satisfaction. It&apos;s clear that they value their clients and strive to deliver the best experience possible. I highly recommend A&T Services Inc. to anyone looking for reliable IT solutions at great prices!</h3>
                                        <div className="user-info">
                                            <Image src="/assets/images/test4.webp" alt="Customer Review | A&T Services Inc." title="Customer Review | A&T Services Inc." width={1000} height={1000} />
                                            <div>
                                                <h4>Yogesh Kumar</h4>
                                                {/* <p>CEO Universal</p> */}
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial-card">
                                        <div className="stars">★★★★★</div>
                                        <h3>I purchase laptops and desktops both from A & T Services Inc. regularly, All systems are good in performance and conditions. And also service is too good delivery and support. Thanks A & T SERVICES for best price and good service</h3>
                                        <div className="user-info">
                                            <Image src="/assets/images/test5.webp" alt="Customer Review | A&T Services Inc." title="Customer Review | A&T Services Inc." width={1000} height={1000} />
                                            <div>
                                                <h4>Aspirants Classes</h4>
                                                {/* <p>CEO Universal</p> */}
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial-card">
                                        <div className="stars">★★★★★</div>
                                        <h3>I recently tried out their service, and honestly, they&apos;re pretty solid! Their tech team knows their stuff—quick fixes, smooth setups and all-around good support. As for their refurbished products? Total win. Everything I got was in great condition and worked perfectly Plus, it&apos;s budget-friendly, which is always a bonus. Their customer service was super friendly and helpful, answering all my random questions without a hitch. If you&apos;re looking for affordable tech solutions and solid service, I&apos;d definitely recommend checking them out.</h3>
                                        <div className="user-info">
                                            <Image src="/assets/images/test1.webp" alt="Customer Review | A&T Services Inc." title="Customer Review | A&T Services Inc." width={1000} height={1000} />
                                            <div>
                                                <h4>Moses Jena</h4>
                                                {/* <p>CEO Universal</p> */}
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial-card">
                                        <div className="stars">★★★★★</div>
                                        <h3>A& Tservices is very customer friendly and providing best quality products in reasonable price.there sales person or It person is very humble for their customers.</h3>
                                        <div className="user-info">
                                            <Image src="/assets/images/test2.webp" alt="Customer Review | A&T Services Inc." title="Customer Review | A&T Services Inc." width={1000} height={1000} />
                                            <div>
                                                <h4>Fatma sara khan</h4>
                                                {/* <p>CEO Universal</p> */}
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial-card">
                                        <div className="stars">★★★★★</div>
                                        <h3>Quality is very good of laptops and desktops. It&apos;s really good products.</h3>
                                        <div className="user-info">
                                            <Image src="/assets/images/test3.webp" alt="Customer Review | A&T Services Inc." title="Customer Review | A&T Services Inc." width={1000} height={1000} />
                                            <div>
                                                <h4>Inderdeep Kaur</h4>
                                                {/* <p>CEO Universal</p> */}
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
            {/* testimonials end */}

            {/* enquire now */}
            <section className="enquire-now-section top-bottom-padding" id="contact">
                <div className="object object-04" data-movement-desktop="-150" data-movement-mobile="-150">
                    <Image src="/assets/images/object-03.svg" width={1920} height={1000} alt='Element' />
                </div>
                <span className="golden-bg"></span>
                <div className="container">
                    <div className="heading-wrapper pt-0">
                        <h3 className="heading-01 margin-b fade-in-anim">enquire now</h3>
                        <h2 className="heading-02 text-line-section">
                            <span className="text-line-wrp mob-2-line">
                                <span className="text-line">Write A MESSAGE TO US</span>
                            </span>
                        </h2>
                    </div>
                    {/* form */}
                    <section className={`sec-eq ${isOpen ? 'show' : 'static'}`}>
                        <div className="container">
                            <div className="closeIcon hover-target" onClick={closeContactPopup}>+</div>
                            <form id="enquirynow" onSubmit={handleSubmit} method="POST">
                                <h4 className="eqTitle">Enquire Now</h4>
                                <div className="formControl">
                                    <input type="text" name="name" id="name" placeholder="Company Name" value={formData.name} onChange={handleChange} required />
                                </div>
                                <div className="formControl">
                                    <input type="email" name="email" id="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
                                </div>
                                <div className="formControl">
                                    <input type="text" name="contact" id="contact" pattern="\d{10}" minLength={10} maxLength={10}
                                        placeholder="Phone number" value={formData.contact} onChange={handleChange} required title="Please enter a valid 10-digit phone number" />
                                </div>
                                <div className="formControl">
                                    <input type="text" name="msg" id="msg"
                                        placeholder="Messages" value={formData.msg} onChange={handleChange} required />
                                </div>
                                <div className="formControl btn-wrp">
                                    <button type="submit" name="submit" id="submit" className="subBtn hover-target btn">submit now</button>
                                </div>
                            </form>
                        </div>
                    </section>
                    {/* form ends  */}
                </div>
            </section>
            {/* enquire now ends  */}

            {/* faq  */}
            <section className="faq-section is-bg-red top-bottom-padding is-bg-white" id="faq">
                <div className="container extra-hd">
                    <div className="heading-wrapper pt-0 is-relative">
                        {/* <h3 className="heading-01 margin-b">FAQs</h3>  */}
                        <h2 className="heading-02 text-line-section">
                            <span className="text-line-wrp">
                                <span className="text-line">FAQ&apos;s</span>
                            </span>
                        </h2>
                    </div>
                    <div id="faqDiv">
                        <div className="tab-accordion question plus-minus-bg fade-in-anim">
                            <div className="accordion-section-title title-2" data-acc="faq_1">
                                <div className="para-03 is-white font-300-space-0 para-big">What types of products do you offer at A&T Services Inc.?</div>
                                <span className="icon"></span>
                            </div>
                            <div className="accordion-section-content" id="faq_1">
                                <p className="para-03 is-white">We offer high-quality refurbished laptops, desktops, and IT equipment, available at affordable prices. All of our products undergo rigorous testing to ensure optimal performance and reliability.</p>
                            </div>
                        </div>
                        <div className="tab-accordion question plus-minus-bg fade-in-anim">
                            <div className="accordion-section-title title-2" data-acc="faq_2">
                                <div className="para-03 is-white font-300-space-0 para-big">Are your refurbished laptops and desktops covered by a warranty?</div>
                                <span className="icon"></span>
                            </div>
                            <div className="accordion-section-content" id="faq_2">
                                <p className="para-03 is-white">Yes, all of our refurbished computers and laptops come with a warranty. We ensure that our products meet international quality standards, and you’ll receive the peace of mind that comes with our warranty coverage.</p>
                            </div>
                        </div>
                        <div className="tab-accordion question plus-minus-bg fade-in-anim">
                            <div className="accordion-section-title title-2" data-acc="faq_3">
                                <div className="para-03 is-white font-300-space-0 para-big">What is the process for receiving technical support?</div>
                                <span className="icon"></span>
                            </div>
                            <div className="accordion-section-content" id="faq_3">
                                <p className="para-03 is-white">Our support team is available 24/7 to assist with any technical issues you may encounter. Simply reach out to us via phone, email, or remote support, and our skilled technicians will guide you through the troubleshooting process or provide necessary repairs.</p>
                            </div>
                        </div>
                        <div className="tab-accordion question plus-minus-bg fade-in-anim">
                            <div className="accordion-section-title title-2" data-acc="faq_4">
                                <div className="para-03 is-white font-300-space-0 para-big">What does the Annual Maintenance Contract (AMC) cover?</div>
                                <span className="icon"></span>
                            </div>
                            <div className="accordion-section-content" id="faq_4">
                                <p className="para-03 is-white">Our AMC service ensures that your computers and IT systems receive regular maintenance to avoid breakdowns and extend their lifespan. It includes system checks, hardware repairs, software updates, and troubleshooting.</p>
                            </div>
                        </div>
                        <div className="tab-accordion question plus-minus-bg fade-in-anim">
                            <div className="accordion-section-title title-2" data-acc="faq_5">
                                <div className="para-03 is-white font-300-space-0 para-big">How can I purchase a refurbished laptop or desktop?</div>
                                <span className="icon"></span>
                            </div>
                            <div className="accordion-section-content" id="faq_5">
                                <p className="para-03 is-white">You can purchase our refurbished systems directly from us, either by contacting our sales team or through our online platform. We offer a range of laptops and desktops for different business needs at competitive prices.</p>
                            </div>
                        </div>
                        <div className="tab-accordion question plus-minus-bg fade-in-anim">
                            <div className="accordion-section-title title-2" data-acc="faq_6">
                                <div className="para-03 is-white font-300-space-0 para-big">Do you provide emergency IT support?</div>
                                <span className="icon"></span>
                            </div>
                            <div className="accordion-section-content" id="faq_6">
                                <p className="para-03 is-white">Yes, we offer emergency IT support with on-site service for any critical hardware or software issues. We are committed to resolving IT breakdowns promptly to minimize downtime for your business</p>
                            </div>
                        </div>
                        <div className="tab-accordion question plus-minus-bg fade-in-anim">
                            <div className="accordion-section-title title-2" data-acc="faq_7">
                                <div className="para-03 is-white font-300-space-0 para-big">How can I get a quote for your services or products?</div>
                                <span className="icon"></span>
                            </div>
                            <div className="accordion-section-content" id="faq_7">
                                <p className="para-03 is-white">Getting a quote is easy! Simply reach out to our sales team with your requirements, and we’ll provide you with a customized quote for your needs, whether it’s for purchasing equipment, renting, or technical support services.</p>
                            </div>
                        </div>
                        <div className="tab-accordion question plus-minus-bg fade-in-anim">
                            <div className="accordion-section-title title-2" data-acc="faq_8">
                                <div className="para-03 is-white font-300-space-0 para-big">How do I contact A&T Services Inc. for support or inquiries?</div>
                                <span className="icon"></span>
                            </div>
                            <div className="accordion-section-content" id="faq_8">
                                <p className="para-03 is-white">You can reach us by phone, email, or through our website’s contact form. Our customer support team is always available to assist you with any inquiries or technical issues</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* faq ends  */}

            {/* footer  */}
            <footer className="fade-in-anim">
                <div className="container">
                    <div className="wrp-1">
                        <a href="">
                            {/* <p>CSR Initiatives</p>  */}
                            <Image src="/assets/images/logo.webp" width={70} height={70} alt='Logo | A&T Services Inc.' />
                        </a>
                        <div className="social-wrp">
                            <a rel="nofollow" href="https://www.antservices.in/website/social/facebook" target="_blank">
                                <i className="fa fa-facebook rounded-circle shadow-sm"></i>
                            </a>
                            <a rel="nofollow" href="https://www.antservices.in/website/social/linkedin" target="_blank">
                                <i className="fa fa-linkedin rounded-circle shadow-sm"></i>
                            </a>
                            <a rel="nofollow" href="https://www.antservices.in/website/social/youtube" target="_blank">
                                <i className="fa rounded-circle shadow-sm fa-youtube"></i>
                            </a>
                            <a rel="nofollow" href="https://www.antservices.in/website/social/instagram" target="_blank">
                                <i className="fa rounded-circle shadow-sm fa-instagram"></i>
                            </a>
                            <a rel="nofollow" href="https://www.antservices.in/website/social/twitter" target="_blank">
                                <i className="fa fa-twitter rounded-circle shadow-sm"></i>
                            </a>
                        </div>
                    </div>
                    <div className="wrp-2">
                        <div>
                            {/* <p className="name">A&T Services Inc.</p> */}
                            <address>
                                <p><strong>Head Office:</strong> E-246/1, Allama Shibli Nomani Road, Abul Fazal Enclave, Shaheen Bagh, Jasola Vihar, New Delhi, Delhi 110025</p>
                                <br />
                                <p><strong>Branches:</strong></p>
                                <div className="branches-wrp">
                                    <p><strong>Delhi:</strong><br /> G-167, Ground Floor, Hari Nagar Jail Road Street, 1, Mother Dairy Road, New Delhi, Delhi 110058</p>
                                    <p><strong>Mumbai:</strong><br /> Plot No. 70, AL-Hudibia Apartment, Opp Bharat Gear, Kausa, Mumbra, Thane,Maharashtra, India – 400612</p>
                                    <p><strong>Bangalore:</strong><br /> 29 Roshan Nagar 3rd Cross, Near Salmaniya Masjid, Deepanjali Nagar, Bangalore, Karnataka - 560026, India</p>
                                    <p><strong>Hyderabad:</strong><br /> Plot No. 761, Road No. 39, CBI Colony, Jubilee Hills, Hyderabad, Telangana, India - 500033</p>
                                </div>
                                <br />
                                <p><strong>Phone:</strong>
                                    <a href="tel:+919599090603">+91 95 9909 0603</a>
                                </p>
                                <p><strong>Email:</strong>
                                    <a href="mailto:support@antservicesmail.com">support@antservicesmail.com</a>
                                </p>
                            </address>
                        </div>
                    </div>
                    <div className="wrp-3">
                        <div className="copyRight">
                            <p>Copyright &copy; A&T Services Inc.</p>
                            <a href="https://www.antservices.in/term-condition">Terms & Conditions</a> -
                            <a href="https://www.antservices.in/privacy-policy">Privacy Policy</a> -
                            <a href="https://www.antservices.in/blog">Blogs</a>
                        </div>
                        {/* <div className="poweredBy">
                            <a href="https://www.linkedin.com/company/hardreload" target="_blank">Developed by HardReload</a>
                        </div> */}
                    </div>
                </div>
            </footer>
            {/* footer end */}

            <div className="eq-btn-mobile">Enquire Now</div>
            {/* <a  href="javascript:void(0)" onClick={() => openContactForm("/thankyou")} className="call-btn-mobile"><span>+91 95 9909 0603</span></a> */}
            <a href="tel:+919599090603" className="call-btn-mobile"><span>+91 95 9909 0603</span></a>
        </>
    );
}
