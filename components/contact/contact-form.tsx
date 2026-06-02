"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "@/images/logo.png";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        countryCode: "+234",
        subject: "",
        message: "",
        preferredContact: "",
        hearAboutUs: "",
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showThankYou, setShowThankYou] = useState(false);
    const [showRedirectModal, setShowRedirectModal] = useState(false);
    const [showDraftModal, setShowDraftModal] = useState(false);
    const [copyButtonText, setCopyButtonText] = useState("📋 Copy link");

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >,
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
    };

    const validateForm = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.fullName.trim()) newErrors.fullName = "Required";
        if (!formData.email.trim()) newErrors.email = "Required";
        if (!formData.subject.trim()) newErrors.subject = "Required";
        if (!formData.message.trim()) newErrors.message = "Required";
        if (!formData.preferredContact) newErrors.preferredContact = "Required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsSubmitting(true);
        await new Promise((resolve) => setTimeout(resolve, 1800));

        setIsSubmitting(false);
        setShowThankYou(true);

        setTimeout(() => setShowRedirectModal(true), 1000);
    };

    const redirectToSite = () =>
        (window.location.href = "https://theslayt.com/");

    const handleCancelRedirect = () => {
        setShowRedirectModal(false);
        setTimeout(redirectToSite, 2000);
    };

    const copyDraftLink = () => {
        const draftLink =
            "https://wkf.ms/49Zo6VI?r=ap&draft_submission=79b044e1-6b31-49...";
        navigator.clipboard.writeText(draftLink).then(() => {
            setCopyButtonText("✅ Copied!");
            setTimeout(() => setCopyButtonText("📋 Copy link"), 1500);
        });
    };

    // ==================== THANK YOU + REDIRECT ====================
    if (showThankYou) {
        return (
            <section className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">
                <div className="max-w-lg w-full bg-white rounded-3xl shadow-xl p-10 text-center">
                    <Image
                        src={Logo}
                        alt="slayt"
                        width={110}
                        height={40}
                        className="mx-auto mb-8"
                    />

                    <div className="relative w-36 h-36 mx-auto mb-6">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <svg
                                width="323"
                                height="250"
                                viewBox="0 0 253 170"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M132.572 97.8887C124.018 109.633 102.576 133.201 85.2409 133.518C63.5724 133.914 56.1139 120.767 63.0904 108.747C70.0669 96.7271 96.6445 104.128 100.278 115.242C103.911 126.355 92.6347 155.015 85.5725 163.536"
                                    stroke="#C3C6D4"
                                    stroke-dasharray="3 6"
                                ></path>
                                <path
                                    opacity="0.3"
                                    d="M122.41 28.4835C122.41 28.4835 123.97 26.8785 126.422 27.1906C126.422 27.1906 125.575 21.6179 122.767 22.6433C120.002 23.6687 122.41 28.4835 122.41 28.4835Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M142.075 26.6399H116.414V30.8504H142.075V26.6399Z"
                                    fill="#FFEEF2"
                                ></path>
                                <path
                                    d="M116.266 30.8678C119.727 30.8678 122.532 28.0624 122.532 24.6018C122.532 21.1411 119.727 18.3357 116.266 18.3357C112.805 18.3357 110 21.1411 110 24.6018C110 28.0624 112.805 30.8678 116.266 30.8678Z"
                                    fill="url(#paint0_linear_1481_37218)"
                                ></path>
                                <path
                                    d="M129.809 30.8678C136.227 30.8678 141.43 25.6651 141.43 19.2474C141.43 12.8296 136.227 7.62695 129.809 7.62695C123.391 7.62695 118.189 12.8296 118.189 19.2474C118.189 25.6651 123.391 30.8678 129.809 30.8678Z"
                                    fill="url(#paint1_linear_1481_37218)"
                                ></path>
                                <path
                                    d="M142.143 30.8675C146.482 30.8675 150 27.3496 150 23.01C150 18.6705 146.482 15.1526 142.143 15.1526C137.803 15.1526 134.285 18.6705 134.285 23.01C134.285 27.3496 137.803 30.8675 142.143 30.8675Z"
                                    fill="url(#paint2_linear_1481_37218)"
                                ></path>
                                <path
                                    d="M71.107 57.799L199.545 0.892463L111.804 69.9307L71.107 57.799Z"
                                    fill="url(#paint3_linear_1481_37218)"
                                ></path>
                                <path
                                    d="M111.982 69.7816L199.544 0.892114L127.844 106.776L111.982 69.7816Z"
                                    fill="#BC8DC2"
                                ></path>
                                <path
                                    d="M111.982 69.7816L199.544 0.892114L127.844 106.776L111.982 69.7816Z"
                                    fill="url(#paint4_linear_1481_37218)"
                                ></path>
                                <path
                                    d="M127.846 106.776L199.545 0.892411L130.196 78.9391L127.846 106.776Z"
                                    fill="#DEADCE"
                                ></path>
                                <path
                                    d="M130.196 78.9391L199.545 0.892411L177.481 94.6619L130.196 78.9391Z"
                                    fill="url(#paint5_linear_1481_37218)"
                                ></path>
                                <path
                                    d="M119.166 51.3541L121.484 50.8191C121.573 50.7745 121.573 50.6408 121.484 50.5962L119.166 50.0612C119.121 50.0612 119.076 50.0166 119.076 49.972L118.541 47.6538C118.497 47.5646 118.363 47.5646 118.318 47.6538L117.783 49.972C117.783 50.0166 117.739 50.0612 117.694 50.0612L115.376 50.5962C115.287 50.6408 115.287 50.7745 115.376 50.8191L117.694 51.3541C117.739 51.3541 117.783 51.3986 117.783 51.4432L118.318 53.7615C118.363 53.8506 118.497 53.8506 118.541 53.7615L119.076 51.4432C119.121 51.3986 119.166 51.3541 119.166 51.3541Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M99.8099 63.5266L103.644 62.5904C103.822 62.5458 103.822 62.2783 103.644 62.2338L99.8099 61.2975C99.7653 61.2975 99.6762 61.253 99.6762 61.1638L98.74 57.3298C98.6954 57.1515 98.4279 57.1515 98.3833 57.3298L97.4471 61.1638C97.4471 61.2084 97.4025 61.2975 97.3133 61.2975L93.4793 62.2338C93.301 62.2783 93.301 62.5458 93.4793 62.5904L97.3133 63.5266C97.3579 63.5266 97.4471 63.5712 97.4471 63.6604L98.3833 67.4944C98.4279 67.6727 98.6954 67.6727 98.74 67.4944L99.6762 63.6604C99.7207 63.6158 99.7653 63.5712 99.8099 63.5266Z"
                                    fill="white"
                                ></path>
                                <path
                                    d="M86.2625 75.3855H17.2502V86.7092H86.2625V75.3855Z"
                                    fill="#FFEEF2"
                                ></path>
                                <path
                                    d="M16.8518 86.7542C26.1588 86.7542 33.7037 79.2094 33.7037 69.9024C33.7037 60.5954 26.1588 53.0505 16.8518 53.0505C7.54482 53.0505 0 60.5954 0 69.9024C0 79.2094 7.54482 86.7542 16.8518 86.7542Z"
                                    fill="url(#paint6_linear_1481_37218)"
                                ></path>
                                <path
                                    d="M53.2743 86.7534C70.5341 86.7534 84.526 72.7615 84.526 55.5017C84.526 38.2419 70.5341 24.25 53.2743 24.25C36.0145 24.25 22.0226 38.2419 22.0226 55.5017C22.0226 72.7615 36.0145 86.7534 53.2743 86.7534Z"
                                    fill="url(#paint7_linear_1481_37218)"
                                ></path>
                                <path
                                    d="M86.4436 86.7531C98.1142 86.7531 107.575 77.2921 107.575 65.6214C107.575 53.9507 98.1142 44.4897 86.4436 44.4897C74.7729 44.4897 65.3119 53.9507 65.3119 65.6214C65.3119 77.2921 74.7729 86.7531 86.4436 86.7531Z"
                                    fill="url(#paint8_linear_1481_37218)"
                                ></path>
                                <path
                                    d="M239.132 54.7913H194.225V62.1597H239.132V54.7913Z"
                                    fill="#FFEEF2"
                                ></path>
                                <path
                                    d="M193.966 62.1883C200.022 62.1883 204.931 57.2788 204.931 51.2227C204.931 45.1666 200.022 40.2571 193.966 40.2571C187.909 40.2571 183 45.1666 183 51.2227C183 57.2788 187.909 62.1883 193.966 62.1883Z"
                                    fill="url(#paint9_linear_1481_37218)"
                                ></path>
                                <path
                                    d="M217.666 62.188C228.897 62.188 238.002 53.0834 238.002 41.8523C238.002 30.6212 228.897 21.5166 217.666 21.5166C206.435 21.5166 197.33 30.6212 197.33 41.8523C197.33 53.0834 206.435 62.188 217.666 62.188Z"
                                    fill="url(#paint10_linear_1481_37218)"
                                ></path>
                                <path
                                    d="M239.249 62.1873C246.844 62.1873 253 56.031 253 48.4368C253 40.8426 246.844 34.6863 239.249 34.6863C231.655 34.6863 225.499 40.8426 225.499 48.4368C225.499 56.031 231.655 62.1873 239.249 62.1873Z"
                                    fill="url(#paint11_linear_1481_37218)"
                                ></path>
                                <defs>
                                    <linearGradient
                                        id="paint0_linear_1481_37218"
                                        x1="116.921"
                                        y1="23.4595"
                                        x2="122.422"
                                        y2="13.9847"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stop-color="#FFEDF1"></stop>
                                        <stop
                                            offset="1"
                                            stop-color="white"
                                            stop-opacity="0"
                                        ></stop>
                                    </linearGradient>
                                    <linearGradient
                                        id="paint1_linear_1481_37218"
                                        x1="129.931"
                                        y1="19.1186"
                                        x2="142.607"
                                        y2="6.89951"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stop-color="#FFEEF2"></stop>
                                        <stop
                                            offset="1"
                                            stop-color="white"
                                            stop-opacity="0"
                                        ></stop>
                                    </linearGradient>
                                    <linearGradient
                                        id="paint2_linear_1481_37218"
                                        x1="142.149"
                                        y1="23.0052"
                                        x2="156.994"
                                        y2="12.7275"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stop-color="#FFEEF2"></stop>
                                        <stop
                                            offset="1"
                                            stop-color="white"
                                            stop-opacity="0"
                                        ></stop>
                                    </linearGradient>
                                    <linearGradient
                                        id="paint3_linear_1481_37218"
                                        x1="141.318"
                                        y1="50.0412"
                                        x2="35.037"
                                        y2="72.4557"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stop-color="#FFE3EA"></stop>
                                        <stop
                                            offset="1"
                                            stop-color="white"
                                        ></stop>
                                    </linearGradient>
                                    <linearGradient
                                        id="paint4_linear_1481_37218"
                                        x1="161.153"
                                        y1="74.8514"
                                        x2="234.89"
                                        y2="-21.7016"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stop-color="#FFCDDA"></stop>
                                        <stop
                                            offset="1"
                                            stop-color="#401694"
                                        ></stop>
                                    </linearGradient>
                                    <linearGradient
                                        id="paint5_linear_1481_37218"
                                        x1="179.946"
                                        y1="69.2727"
                                        x2="127.104"
                                        y2="48.0256"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stop-color="#F3C4D0"></stop>
                                        <stop
                                            offset="1"
                                            stop-color="white"
                                        ></stop>
                                    </linearGradient>
                                    <linearGradient
                                        id="paint6_linear_1481_37218"
                                        x1="18.613"
                                        y1="66.8303"
                                        x2="33.4086"
                                        y2="41.3489"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stop-color="#FFEDF1"></stop>
                                        <stop
                                            offset="1"
                                            stop-color="white"
                                            stop-opacity="0"
                                        ></stop>
                                    </linearGradient>
                                    <linearGradient
                                        id="paint7_linear_1481_37218"
                                        x1="53.6026"
                                        y1="55.1553"
                                        x2="87.6928"
                                        y2="22.2936"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stop-color="#FFEEF2"></stop>
                                        <stop
                                            offset="1"
                                            stop-color="white"
                                            stop-opacity="0"
                                        ></stop>
                                    </linearGradient>
                                    <linearGradient
                                        id="paint8_linear_1481_37218"
                                        x1="86.4596"
                                        y1="65.6084"
                                        x2="126.385"
                                        y2="37.9677"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stop-color="#FFEEF2"></stop>
                                        <stop
                                            offset="1"
                                            stop-color="white"
                                            stop-opacity="0"
                                        ></stop>
                                    </linearGradient>
                                    <linearGradient
                                        id="paint9_linear_1481_37218"
                                        x1="195.112"
                                        y1="49.2237"
                                        x2="204.739"
                                        y2="32.6428"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stop-color="#FFEDF1"></stop>
                                        <stop
                                            offset="1"
                                            stop-color="white"
                                            stop-opacity="0"
                                        ></stop>
                                    </linearGradient>
                                    <linearGradient
                                        id="paint10_linear_1481_37218"
                                        x1="217.88"
                                        y1="41.6269"
                                        x2="240.062"
                                        y2="20.2436"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stop-color="#FFEEF2"></stop>
                                        <stop
                                            offset="1"
                                            stop-color="white"
                                            stop-opacity="0"
                                        ></stop>
                                    </linearGradient>
                                    <linearGradient
                                        id="paint11_linear_1481_37218"
                                        x1="239.26"
                                        y1="48.4283"
                                        x2="265.24"
                                        y2="30.4424"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stop-color="#FFEEF2"></stop>
                                        <stop
                                            offset="1"
                                            stop-color="white"
                                            stop-opacity="0"
                                        ></stop>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>

                    <h2 className="text-4xl font-bold mb-2">Thank you!</h2>
                    <p className="text-gray-600 mb-8">
                        You’re about to be redirected in 2s
                    </p>

                    {/*<div className="bg-gray-50 rounded-2xl p-6 text-left mb-8">
                        <p className="font-medium mb-2">
                            It’s time to create yours
                        </p>
                        <p className="text-sm text-gray-600">
                            It’s effortless, free and customizable
                        </p>
                    </div>*/}

                    {/*<div className="flex justify-end">
                        <button
                            onClick={() => setShowRedirectModal(true)}
                            className="px-8 py-3 bg-[#E91E63] hover:bg-[#d81b60] text-white rounded-xl font-medium transition"
                        >
                            Create a WorkForm
                        </button>
                    </div>*/}
                </div>

                {/* Redirect Modal - No Logo */}
                {showRedirectModal && (
                    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
                        <div className="bg-white rounded-3xl max-w-[38rem] w-full p-10 shadow-2xl">
                            <div className="flex justify-end mb-2">
                                <button
                                    onClick={handleCancelRedirect}
                                    className="text-4xl text-gray-400 hover:text-gray-600 leading-none"
                                >
                                    ×
                                </button>
                            </div>

                            <h3 className="text-2xl font-semibold mb-4">
                                You are being redirected
                            </h3>
                            <p className="text-gray-600 mb-4">
                                You’re about to leave our site and be redirected
                                to
                                <br />
                                <strong>https://theslayt.com/</strong>
                                <br />
                                <br />
                                Are you sure you want to continue?
                            </p>

                            <div className="flex justify-end gap-4 pt-6">
                                <button
                                    type="button"
                                    onClick={handleCancelRedirect}
                                    className="px-5 py-3  rounded-[0.5rem] font-medium hover:bg-gray-50 hover:border border-gray-400 transition text-sm"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    onClick={redirectToSite}
                                    className="px-5 py-3 bg-blue text-white rounded-[0.5rem] font-medium hover:bg-blue/90 transition disabled:opacity-70 text-sm"
                                >
                                    Yes, continue
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        );
    }

    // ==================== MAIN FORM ====================
    return (
        <section className="px-6 py-16 md:py-24 bg-gray-50">
            <div className="mx-auto max-w-2xl">
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
                    <div className="flex justify-between mb-10">
                        <div>
                            <Image
                                src={Logo}
                                alt="slayt"
                                width={110}
                                height={38}
                            />
                            <h1 className="text-4xl font-bold mt-6">
                                Contact Us
                            </h1>
                            <p className="mt-3 text-muted_foreground">
                                We’d love to hear from you. Please fill out the
                                form below and our team will get back to you as
                                soon as possible.
                            </p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Form fields remain unchanged */}
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Full Name{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:border-blue-500"
                            />
                            {errors.fullName && (
                                <p className="text-red-500 text-sm mt-1">
                                    Required
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Email Address{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <p className="text-sm text-gray-500 mb-1">
                                We’ll use this to contact you.
                            </p>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:border-blue-500"
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">
                                    Required
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Phone Number (Optional)
                            </label>
                            <div className="flex gap-3">
                                <select
                                    name="countryCode"
                                    value={formData.countryCode}
                                    onChange={handleChange}
                                    className="px-4 py-3 border rounded-xl focus:outline-none focus:border-blue-500 w-28"
                                >
                                    <option value="+234">+234</option>
                                    <option value="+1">+1</option>
                                    <option value="+44">+44</option>
                                </select>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="flex-1 px-4 py-3 border rounded-xl focus:outline-none focus:border-blue-500"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Subject <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:border-blue-500"
                            />
                            {errors.subject && (
                                <p className="text-red-500 text-sm mt-1">
                                    Required
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">
                                How can we help you?{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <p className="text-sm text-gray-500 mb-2">
                                Please describe your inquiry or message in
                                detail so we can assist you effectively.
                            </p>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={6}
                                maxLength={2000}
                                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:border-blue-500 resize-y"
                            />
                            <div className="text-right text-sm text-gray-400 mt-1">
                                {formData.message.length}/2000
                            </div>
                            {errors.message && (
                                <p className="text-red-500 text-sm mt-1">
                                    Required
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Preferred Contact Method{" "}
                                <span className="text-red-500">*</span>
                            </label>
                            <select
                                name="preferredContact"
                                value={formData.preferredContact}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:border-blue-500"
                            >
                                <option value=""></option>
                                <option value="Email">Email</option>
                                <option value="Phone">Phone</option>
                                <option value="Both">Both</option>
                            </select>
                            {errors.preferredContact && (
                                <p className="text-red-500 text-sm mt-1">
                                    Required
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">
                                How did you hear about us?
                            </label>
                            <select
                                name="hearAboutUs"
                                value={formData.hearAboutUs}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:border-blue-500"
                            >
                                <option value=""></option>
                                <option value="Google">Google</option>
                                <option value="Social media">
                                    Social media
                                </option>
                                <option value="Referral">Referral</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        {/* Buttons - Right Aligned */}
                        <div className="flex justify-end gap-4 pt-6">
                            <button
                                type="button"
                                onClick={() => setShowDraftModal(true)}
                                className="px-6 py-3 border border-gray-400 rounded-[0.3rem] font-medium hover:bg-gray-50 transition text-sm"
                            >
                                Save as draft
                            </button>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="px-8 py-3 bg-blue text-white rounded-[0.3rem] font-medium hover:bg-blue/90 transition disabled:opacity-70 text-sm"
                            >
                                {isSubmitting ? "Processing..." : "Submit"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* ==================== SAVE AS DRAFT MODAL ==================== */}
            {showDraftModal && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl max-w-[38rem] w-full p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-semibold">
                                Save as draft
                            </h3>
                            <button
                                onClick={() => setShowDraftModal(false)}
                                className="text-3xl leading-none"
                            >
                                ×
                            </button>
                        </div>

                        <p className="text-sm text-gray-600 mb-4">
                            Fill the form later or share it with someone else to
                            complete
                        </p>

                        {/* Link + Copy Button Side by Side */}
                        <div className="flex gap-3 items-center bg-gray-100 p-3 rounded-lg mb-4">
                            <p className="text-sm break-all select-none flex-1 pointer-events-none">
                                https://wkf.ms/49Zo6VI?r=ap&draft_submission=79b044e1-6b31-49...
                            </p>
                            <button
                                onClick={copyDraftLink}
                                className="shrink-0 px-5 py-2 border border-gray-300 rounded-lg hover:bg-white font-medium text-sm whitespace-nowrap"
                            >
                                {copyButtonText}
                            </button>
                        </div>

                        <p className="text-xs text-gray-500">
                            Signatures and connect boards answers will not save
                            when saving as draft
                        </p>
                    </div>
                </div>
            )}
        </section>
    );
}
