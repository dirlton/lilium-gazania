(window.webpackJsonp=window.webpackJsonp||[]).push([[49,3,4],{260:function(e,t,n){"use strict";n.r(t);n(28);var o={data:function(){return{enquiry:"",name:"",mobile:"",email:"",message:"",isAppointment:"",errors:"",success:!1,policyIsAgree:"",send_brochure:"",email_2:"dave@singhaiyi.com",new:""}},methods:{send:function(){var e=this;this.errors=[],this.isAppointment||this.errors.push({isAppointment:"The make appt field is required."}),!1!==this.send_brochure&&(this.new="Yes",!0!==this.send_brochure&&(this.new="No")),this.errors.length||this.$axios.post("https://theliliumofficial.com.sg/send_mail.php",{To:"sales@theliliumofficial.com.sg",From:this.email,Subject:"The Lilium & The Gazania - Receipt Acknowledgement",Body:"<h3>Dear "+this.name+'<h3><h4>Thank you for your interest in The Lilium & The Gazania. You will be posted on all latest updates for the new upcoming condominium.</h4><h4>If you have left an inquiry, our staff will be in touch with you as soon as we can. </h4><h4>If you would like to view the show flat and get direct developer price with discounts, you need to Book an Appointment here before coming down. </h4><h4>Please check back our website for The Lilium & The Gazania as updates are uploaded regulary: <a href="https://theliliumofficial.com.sg/"> <b>theliliumofficial.com.sg</b></a></h4><h4>Should you have any queries, simply call us at <a href="tel:+65 6100 3337"><b>+65 6100 3337</b></a> or reply to this email: <a href="mailto:dave@singhaiyi.com"><b>dave@singhaiyi.com</b></a></h4><h4>Have a nice day ahead!</h4><br><h4>Thanks,</h4><h4>The Lilium & The Gazania</h4>'}).then((function(){e.$axios.post("https://theliliumofficial.com.sg/send_mail.php",{To:"sales@theliliumofficial.com.sg",From:e.email_2,Subject:"The Lilium & The Gazania - New Appointment Submission ["+e.name+"]",Body:"<h3>Dear Dave, </h3><h4>Below are the details for the New Appointment Submission, do check it out: </h4><h4>Enquiry: "+e.enquiry+"</h4><h4>Name: "+e.name+"</h4><h4>Mobile: "+e.mobile+"</h4><h4>Email: "+e.email+"</h4><h4> Message: "+e.message+"</h4><h4>Appointment: "+e.isAppointment+"</h4><h4>Send Brochure: "+e.new+"</h4><br><h4>Thanks,</h4><h4>The Lilium & The Gazania</h4>"}),e.success=!0,e.reset()})).catch((function(){}))},reset:function(){this.enquiry="",this.name="",this.mobile="",this.email="",this.message="",this.isAppointment="",this.errors="",this.policyIsAgree="",this.send_brochure=""}}},r=n(15),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"space-y-6"},[n("form",{staticClass:"space-y-4",on:{submit:function(t){return t.preventDefault(),e.send.apply(null,arguments)}}},[n("div",{staticClass:"grid grid-cols-1 gap-4 sm:grid-cols-2"},[n("div",{staticClass:"sm:col-span-2"},[n("label",{staticClass:"\n            inline-flex\n            items-center\n            w-full\n            p-4\n            font-medium\n            text-gray-600\n            border\n            rounded-lg\n            border-theme-100\n            bg-theme-50\n          ",attrs:{for:"send_brochure"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.send_brochure,expression:"send_brochure"}],staticClass:"\n              border-gray-300\n              rounded\n              shadow-sm\n              text-theme-600\n              focus:border-theme-300\n              focus:ring\n              focus:ring-theme-200\n              focus:ring-opacity-50\n            ",attrs:{id:"send_brochure",type:"checkbox"},domProps:{checked:Array.isArray(e.send_brochure)?e._i(e.send_brochure,null)>-1:e.send_brochure},on:{change:function(t){var n=e.send_brochure,o=t.target,r=!!o.checked;if(Array.isArray(n)){var l=e._i(n,null);o.checked?l<0&&(e.send_brochure=n.concat([null])):l>-1&&(e.send_brochure=n.slice(0,l).concat(n.slice(l+1)))}else e.send_brochure=r}}}),e._v(" "),n("span",{staticClass:"ml-2"},[e._v("Send me E-Brochure, Floor Plan & Pricing now")])])]),e._v(" "),n("div",[e._m(0),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.enquiry,expression:"enquiry"}],staticClass:"form-input",attrs:{id:"enquiry",required:"required"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.enquiry=t.target.multiple?n:n[0]}}},[n("option",[e._v("Financing")]),e._v(" "),n("option",[e._v("Purchase")]),e._v(" "),n("option",[e._v("View Showflat")]),e._v(" "),n("option",[e._v("I want to purchase, but I have an existing property to sell")]),e._v(" "),n("option",[e._v("Decoupling")]),e._v(" "),n("option",[e._v("CPF Fund Usage")]),e._v(" "),n("option",[e._v("Loan Eligibility (LTV)")]),e._v(" "),n("option",[e._v("Total Debt Servicing Ratio (TDSR)")]),e._v(" "),n("option",[e._v("Additional Buyer Stamp Duty (ABSD)")]),e._v(" "),n("option",[e._v("I want updates only")]),e._v(" "),n("option",[e._v("Others")])])]),e._v(" "),n("div",[e._m(1),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form-input",attrs:{id:"name",type:"text",required:"required"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),e._v(" "),n("div",[e._m(2),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.mobile,expression:"mobile"}],staticClass:"lowercase form-input",attrs:{id:"mobile",type:"number",required:"required"},domProps:{value:e.mobile},on:{input:function(t){t.target.composing||(e.mobile=t.target.value)}}}),e._v(" "),e._l(e.errors,(function(t,o){return n("div",{key:o},e._l(t,(function(t,o){return n("div",{key:o},["mobile"===o?n("p",{staticClass:"mt-2 text-sm text-red-500"},[e._v("\n              "+e._s(t)+"\n            ")]):e._e()])})),0)}))],2),e._v(" "),n("div",[e._m(3),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-input",attrs:{id:"email",type:"email",required:"required"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),e._v(" "),n("div",{staticClass:"sm:col-span-2"},[n("label",{staticClass:"block font-medium text-gray-500",attrs:{for:"message"}},[e._v("Message")]),e._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],staticClass:"form-input",domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}})]),e._v(" "),n("div",{staticClass:"sm:col-span-2"},[e._m(4),e._v(" "),n("div",{staticClass:"space-y-2"},[n("label",{staticClass:"flex items-center"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.isAppointment,expression:"isAppointment"}],staticClass:"mr-2",attrs:{type:"radio",value:"Would like to make an appointment."},domProps:{checked:e._q(e.isAppointment,"Would like to make an appointment.")},on:{change:function(t){e.isAppointment="Would like to make an appointment."}}}),e._v("\n            I have some questions and I would like to make an appointment to\n            discuss in details.\n          ")]),e._v(" "),n("label",{staticClass:"flex items-center"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.isAppointment,expression:"isAppointment"}],staticClass:"mr-2",attrs:{type:"radio",value:"No appointment required."},domProps:{checked:e._q(e.isAppointment,"No appointment required.")},on:{change:function(t){e.isAppointment="No appointment required."}}}),e._v("\n            No appointment required for now.\n          ")]),e._v(" "),e._l(e.errors,(function(t,o){return n("div",{key:o},e._l(t,(function(t,o){return n("div",{key:o},["isAppointment"===o?n("p",{staticClass:"mt-2 text-sm text-red-500"},[e._v("\n                "+e._s(t)+"\n              ")]):e._e()])})),0)}))],2)]),e._v(" "),n("div",{staticClass:"sm:col-span-2"},[e._m(5),e._v(" "),n("label",{staticClass:"inline-flex items-center"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.policyIsAgree,expression:"policyIsAgree"}],staticClass:"\n              border-gray-300\n              rounded\n              shadow-sm\n              text-theme-600\n              focus:border-theme-300\n              focus:ring\n              focus:ring-theme-200\n              focus:ring-opacity-50\n            ",attrs:{type:"checkbox",value:"1",required:"required"},domProps:{checked:Array.isArray(e.policyIsAgree)?e._i(e.policyIsAgree,"1")>-1:e.policyIsAgree},on:{change:function(t){var n=e.policyIsAgree,o=t.target,r=!!o.checked;if(Array.isArray(n)){var l=e._i(n,"1");o.checked?l<0&&(e.policyIsAgree=n.concat(["1"])):l>-1&&(e.policyIsAgree=n.slice(0,l).concat(n.slice(l+1)))}else e.policyIsAgree=r}}}),e._v(" "),n("span",{staticClass:"ml-2"},[e._v("I have read and agree to the\n            "),n("NuxtLink",{staticClass:"font-medium underline text-theme-600",attrs:{to:"/privacy-policy"}},[e._v("Privacy Policy")])],1)])])]),e._v(" "),n("button",{staticClass:"\n        inline-flex\n        items-center\n        px-4\n        py-2\n        text-xs\n        font-medium\n        tracking-widest\n        text-white\n        uppercase\n        transition\n        bg-gray-800\n        border border-transparent\n        rounded-md\n        hover:bg-gray-700\n        active:bg-gray-900\n        focus:outline-none focus:border-gray-900 focus:shadow-outline-gray\n        disabled:opacity-25\n      "},[e._v("\n      Submit\n    ")]),e._v(" "),n("button",{staticClass:"\n        inline-flex\n        items-center\n        px-4\n        py-2\n        text-xs\n        font-medium\n        tracking-widest\n        uppercase\n        transition\n        border border-transparent border-gray-800\n        rounded-md\n        hover:border-theme-700 hover:text-theme-700\n        focus:outline-none focus:shadow-outline-gray\n        disabled:opacity-25\n      ",on:{click:function(t){return t.preventDefault(),e.reset.apply(null,arguments)}}},[e._v("\n      Reset\n    ")])]),e._v(" "),n("div",[e.errors.length?n("div",{staticClass:"flex items-center p-4 border rounded-lg bg-red-100"},[n("svg",{staticClass:"w-8 h-8 mr-2 text-red-500",attrs:{fill:"currentColor",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M4 12a8 8 0 1116 0 8 8 0 01-16 0zm8-10C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1.793 6.793a1 1 0 00-1.414 1.414L10.586 12l-1.793 1.793a1 1 0 101.414 1.414L12 13.414l1.793 1.793a1 1 0 001.414-1.414L13.414 12l1.793-1.793a1 1 0 00-1.414-1.414L12 10.586l-1.793-1.793z"}})]),e._v(" "),n("div",{staticClass:"select-none"},[e._v("\n        The given data was invalid.\n        "),e._l(e.errors,(function(t,o){return n("div",{key:o},e._l(t,(function(t,o){return n("div",{key:o},[n("p",[e._v(e._s(t))])])})),0)}))],2)]):e.success?n("div",{staticClass:"flex items-center p-4 border rounded-lg bg-green-100"},[n("svg",{staticClass:"w-8 h-8 mr-2 text-green-500",attrs:{fill:"currentColor",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M12 4a8 8 0 100 16 8 8 0 000-16zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12z"}}),e._v(" "),n("path",{attrs:{d:"M15.707 9.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414L11 12.586l3.293-3.293a1 1 0 011.414 0z"}})]),e._v(" "),e._m(6)]):e._e()])])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"block font-medium text-gray-500",attrs:{for:"enquiry"}},[e._v("Enquiry"),n("span",{staticClass:"text-red-500"},[e._v("*")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"block font-medium text-gray-500",attrs:{for:"name"}},[e._v("Name"),n("span",{staticClass:"text-red-500"},[e._v("*")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"block font-medium text-gray-500",attrs:{for:"mobile"}},[e._v("Mobile"),n("span",{staticClass:"text-red-500"},[e._v("*")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"block font-medium text-gray-500",attrs:{for:"email"}},[e._v("Email"),n("span",{staticClass:"text-red-500"},[e._v("*")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"block font-medium text-gray-500",attrs:{for:"make_appt"}},[e._v("Make an Appointment?"),n("span",{staticClass:"text-red-500"},[e._v("*")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"block font-medium text-gray-500",attrs:{for:"message"}},[e._v("Acceptance of Privacy Policy"),n("span",{staticClass:"text-red-500"},[e._v("*")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"select-none"},[e._v("\n        Thank you for your enquiry, we will respond to your request soon.\n        "),n("div")])}],!1,null,null,null);t.default=component.exports},261:function(e,t,n){e.exports=n.p+"img/book-an-appointment.02f0f96.jpg"},262:function(e,t,n){"use strict";n.r(t);var o=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"p-4 prose bg-gray-200 sm:order-2 md:w-1/2"},[o("img",{staticClass:"w-full",attrs:{src:n(261),alt:"Book An Appointment"}}),e._v(" "),o("p",[e._v("\n            Book An Appointment to view ShowFlat & get VVIP Discounts\n            (Limited Time), Direct Developer Price, & Hardcopy E-Brochure.\n            Guaranteed with Best Price Possible.\n          ")]),e._v(" "),o("p",[e._v("OR")]),e._v(" "),o("p",[e._v("\n            Fill up the form on the left and get a copy of Price, E-Brochure,\n            and Latest Updates!\n          ")]),e._v(" "),o("p",[e._v("Strictly no spam policy.")])])}],r={components:{FormBookAppoinment:n(260).default}},l=n(15),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"pb-12"},[n("div",{staticClass:"bg-theme-300 pb-96"}),e._v(" "),n("div",{staticClass:"max-w-6xl px-4 mx-auto -mt-80"},[n("div",{staticClass:"overflow-hidden bg-white rounded-md shadow-lg"},[n("div",{staticClass:"flex flex-wrap"},[e._m(0),e._v(" "),n("div",{staticClass:"p-4 md:order-1 md:w-1/2"},[n("section",{staticClass:"space-y-6"},[n("form-book-appoinment")],1)])])])])])}),o,!1,null,null,null);t.default=component.exports;installComponents(component,{FormBookAppoinment:n(260).default})},324:function(e,t,n){e.exports=n.p+"img/press1-1.66a0aeb.jpg"},437:function(e,t,n){"use strict";n.r(t);var o=n(15),component=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[e._m(0),e._v(" "),o("section",[o("div",{staticClass:"max-w-6xl px-4 py-12 mx-auto space-y-6"},[o("img",{staticClass:"mx-auto",attrs:{src:n(324),alt:"Govt Cuts Private Housing Supply From Confirmed Land Sale Sites : Straight Times"}}),e._v(" "),o("br"),e._v(" "),o("h1",{staticClass:"max-w-5xl mx-auto text-justify"},[e._v("\n                SINGAPORE – The supply of private residential housing from confirmed sites under the government land sales (GLS) programme \n                for the second half of 2020 has been reduced to take into account the fallout from the global Covid-19 situation, the Ministry \n                of National Development (MND) announced on Wednesday morning (June 24).\n                ")]),e._v(" "),o("h1",{staticClass:"max-w-5xl mx-auto text-justify"},[e._v("\n                The private home supply of 1,370 units from three confirmed list sites is 405 units or nearly 23 per cent less than the 1,775 \n                units from such sites under the first half of 2020 GLS programme. It is also the lowest number since the second half of 2009 \n                during the global financial crisis when no confirmed list sites were released, said Christine Li, Cushman & Wakefield head of\n                research for Singapore and Southeast Asia, adding that the move .\n                ")]),e._v(" "),o("h1",{staticClass:"max-w-5xl mx-auto text-justify"},[e._v("\n                The confirmed list includes one executive condominium (EC) site that can yield 615 units. Together with eight reserve list sites \n                that can accommodate another 5,300 residential units, the total potential supply of private housing for the second half of this year \n                comes to 6,670 units, slightly more than the 6,490 units under the GLS programme for the first half-year. One hotel site at River \n                Valley Road, which can yield 530 hotel rooms, has been carried over from the first half-year GLS programme and rounds up the reserve list.\n                ")]),e._v(" "),o("h1",{staticClass:"max-w-5xl mx-auto text-justify"},[e._v("\n                As to residential supply, MND said it had “to calibrate the reduction carefully to avoid potential supply shortfalls over the medium to \n                longer-term”. “Hence we have maintained a good selection of sites with additional supply in the reserve list that developers can \n                initiate for development if they assess that there is demand,” it said. The authority also noted that it has provided a “moderate supply” \n                in the confirmed list this time round, as the number of the unsold inventory of private housing units has declined by a cumulative 20 per \n                cent between the first half of 2019 and this year. “Together with the supply of units already in the pipeline, this will cater to the housing \n                needs of the population when completed in about four to five years’ time,” it added.\n                ")]),e._v(" "),o("h1",{staticClass:"max-w-5xl mx-auto text-justify"},[e._v("\n                Ms Li said the “err on the side of caution” move is in line with the current market conditions where there is an expected demand shock to \n                the residential market coupled with ample unsold inventory due to dampened investment sentiment and employment prospects. But to ensure \n                sufficient supply in the event there is a V-shaped recovery in the residential property sector, the government is still putting the bulk\n                of the supply through the reserve list, at 5,300 units. As such, the combined total housing units is even higher than what was announced \n                in December last year for the first half-year of 2020, before the Covid-19 situation emerged. MND said sites on the confirmed list will \n                be launched only in the last quarter of this year. Each will also be given a longer tender period of about six months to allow developers\n                more time to make their assessment in view of the ongoing Covid-19 situation.\n                ")]),e._v(" "),o("h1",{staticClass:"max-w-5xl mx-auto text-justify"},[e._v("\n               More time has already been given to confirmed list sites in the first half-year. with the last of three sites to be launched for sale by end-June. \n               The tenders for the three sites will close progressively from October 2020 to March 2021. A total of four residential sites, three white sites and \n               the River Valley Road hotel site were carried over from the reserve list for the first half-year. It includes a multi-use white site in Woodlands \n               Avenue 2, which offers the bulk of new commercial space on the reserve list of 78,000 square metres, and a white site in Marina View, which can \n               yield 905 residential units and 540 hotel rooms.\n                ")]),e._v(" "),o("h1",{staticClass:"max-w-5xl mx-auto text-justify"},[e._v("\n                While a lowered housing supply could lead to higher prices in theory, PropNex head of research and content Wong Siew Ying said it is not necessarily \n                the case given the current market headwinds. “The cloudy economic outlook, a heightened level of uncertainty, and a pandemic with no end in sight will \n                exert pressure on prices,” she said.\n                ")]),e._v(" "),o("h1",{staticClass:"max-w-5xl mx-auto text-justify"},[e._v("\n                “Buyers also remain price sensitive, perhaps more so in the current economic climate. Developers would be well aware of these factors and are unlikely \n                to be overly bullish with their land bids.” MND noted that it has not introduced any new sites for predominantly commercial or hotel use given the \n                economic contraction and uncertain business outlook resulting from the pandemic.\n                ")]),e._v(" "),o("br"),e._v(" "),o("h3",{staticClass:"text-center"},[e._v(" Source: https://www.straitstimes.com/business/property/govt-cuts-private-housing-supply-from-confirmed-land-sale-sites-due-to-covid-19")]),e._v(" "),o("section",{staticClass:"py-6"},[o("NuxtLink",{staticClass:"\n            inline-flex\n            items-center\n            justify-center\n            w-full\n            px-3\n            py-3\n            text-white\n            transition\n            rounded\n            sm:px-0\n            hover:bg-theme-900\n            bg-theme-700\n          ",attrs:{to:"/press/press-seven"}},[e._v("\n          Continue To Easing Singapore Property Curbs Not On Radar Says DPM Heng\n          "),o("svg",{staticClass:"w-5 h-5",attrs:{fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[o("path",{attrs:{d:"M13 6l6 6-6 6M5 6l6 6-6 6",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])])],1)])]),e._v(" "),o("BookAppointment")],1)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"py-12 select-none bg-theme-700"},[n("div",{staticClass:"text-xl font-semibold text-center text-white sm:text-4xl"},[e._v("\n      Govt Cuts Private Housing Supply From Confirmed Land Sale Sites : Straight Times\n    ")])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{BookAppointment:n(262).default})}}]);