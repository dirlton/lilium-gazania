(window.webpackJsonp=window.webpackJsonp||[]).push([[45,3,4],{260:function(e,t,n){"use strict";n.r(t);n(28);var o={data:function(){return{enquiry:"",name:"",mobile:"",email:"",message:"",isAppointment:"",errors:"",success:!1,policyIsAgree:"",send_brochure:"",email_2:"dave@singhaiyi.com",new:""}},methods:{send:function(){var e=this;this.errors=[],this.isAppointment||this.errors.push({isAppointment:"The make appt field is required."}),!1!==this.send_brochure&&(this.new="Yes",!0!==this.send_brochure&&(this.new="No")),this.errors.length||this.$axios.post("https://theliliumofficial.com.sg/send_mail.php",{To:"sales@theliliumofficial.com.sg",From:this.email,Subject:"The Lilium & The Gazania - Receipt Acknowledgement",Body:"<h3>Dear "+this.name+'<h3><h4>Thank you for your interest in The Lilium & The Gazania. You will be posted on all latest updates for the new upcoming condominium.</h4><h4>If you have left an inquiry, our staff will be in touch with you as soon as we can. </h4><h4>If you would like to view the show flat and get direct developer price with discounts, you need to Book an Appointment here before coming down. </h4><h4>Please check back our website for The Lilium & The Gazania as updates are uploaded regulary: <a href="https://theliliumofficial.com.sg/"> <b>theliliumofficial.com.sg</b></a></h4><h4>Should you have any queries, simply call us at <a href="tel:+65 6100 3337"><b>+65 6100 3337</b></a> or reply to this email: <a href="mailto:dave@singhaiyi.com"><b>dave@singhaiyi.com</b></a></h4><h4>Have a nice day ahead!</h4><br><h4>Thanks,</h4><h4>The Lilium & The Gazania</h4>'}).then((function(){e.$axios.post("https://theliliumofficial.com.sg/send_mail.php",{To:"sales@theliliumofficial.com.sg",From:e.email_2,Subject:"The Lilium & The Gazania - New Appointment Submission ["+e.name+"]",Body:"<h3>Dear Dave, </h3><h4>Below are the details for the New Appointment Submission, do check it out: </h4><h4>Enquiry: "+e.enquiry+"</h4><h4>Name: "+e.name+"</h4><h4>Mobile: "+e.mobile+"</h4><h4>Email: "+e.email+"</h4><h4> Message: "+e.message+"</h4><h4>Appointment: "+e.isAppointment+"</h4><h4>Send Brochure: "+e.new+"</h4><br><h4>Thanks,</h4><h4>The Lilium & The Gazania</h4>"}),e.success=!0,e.reset()})).catch((function(){}))},reset:function(){this.enquiry="",this.name="",this.mobile="",this.email="",this.message="",this.isAppointment="",this.errors="",this.policyIsAgree="",this.send_brochure=""}}},r=n(15),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"space-y-6"},[n("form",{staticClass:"space-y-4",on:{submit:function(t){return t.preventDefault(),e.send.apply(null,arguments)}}},[n("div",{staticClass:"grid grid-cols-1 gap-4 sm:grid-cols-2"},[n("div",{staticClass:"sm:col-span-2"},[n("label",{staticClass:"\n            inline-flex\n            items-center\n            w-full\n            p-4\n            font-medium\n            text-gray-600\n            border\n            rounded-lg\n            border-theme-100\n            bg-theme-50\n          ",attrs:{for:"send_brochure"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.send_brochure,expression:"send_brochure"}],staticClass:"\n              border-gray-300\n              rounded\n              shadow-sm\n              text-theme-600\n              focus:border-theme-300\n              focus:ring\n              focus:ring-theme-200\n              focus:ring-opacity-50\n            ",attrs:{id:"send_brochure",type:"checkbox"},domProps:{checked:Array.isArray(e.send_brochure)?e._i(e.send_brochure,null)>-1:e.send_brochure},on:{change:function(t){var n=e.send_brochure,o=t.target,r=!!o.checked;if(Array.isArray(n)){var l=e._i(n,null);o.checked?l<0&&(e.send_brochure=n.concat([null])):l>-1&&(e.send_brochure=n.slice(0,l).concat(n.slice(l+1)))}else e.send_brochure=r}}}),e._v(" "),n("span",{staticClass:"ml-2"},[e._v("Send me E-Brochure, Floor Plan & Pricing now")])])]),e._v(" "),n("div",[e._m(0),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.enquiry,expression:"enquiry"}],staticClass:"form-input",attrs:{id:"enquiry",required:"required"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.enquiry=t.target.multiple?n:n[0]}}},[n("option",[e._v("Financing")]),e._v(" "),n("option",[e._v("Purchase")]),e._v(" "),n("option",[e._v("View Showflat")]),e._v(" "),n("option",[e._v("I want to purchase, but I have an existing property to sell")]),e._v(" "),n("option",[e._v("Decoupling")]),e._v(" "),n("option",[e._v("CPF Fund Usage")]),e._v(" "),n("option",[e._v("Loan Eligibility (LTV)")]),e._v(" "),n("option",[e._v("Total Debt Servicing Ratio (TDSR)")]),e._v(" "),n("option",[e._v("Additional Buyer Stamp Duty (ABSD)")]),e._v(" "),n("option",[e._v("I want updates only")]),e._v(" "),n("option",[e._v("Others")])])]),e._v(" "),n("div",[e._m(1),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form-input",attrs:{id:"name",type:"text",required:"required"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),e._v(" "),n("div",[e._m(2),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.mobile,expression:"mobile"}],staticClass:"lowercase form-input",attrs:{id:"mobile",type:"number",required:"required"},domProps:{value:e.mobile},on:{input:function(t){t.target.composing||(e.mobile=t.target.value)}}}),e._v(" "),e._l(e.errors,(function(t,o){return n("div",{key:o},e._l(t,(function(t,o){return n("div",{key:o},["mobile"===o?n("p",{staticClass:"mt-2 text-sm text-red-500"},[e._v("\n              "+e._s(t)+"\n            ")]):e._e()])})),0)}))],2),e._v(" "),n("div",[e._m(3),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-input",attrs:{id:"email",type:"email",required:"required"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),e._v(" "),n("div",{staticClass:"sm:col-span-2"},[n("label",{staticClass:"block font-medium text-gray-500",attrs:{for:"message"}},[e._v("Message")]),e._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],staticClass:"form-input",domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}})]),e._v(" "),n("div",{staticClass:"sm:col-span-2"},[e._m(4),e._v(" "),n("div",{staticClass:"space-y-2"},[n("label",{staticClass:"flex items-center"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.isAppointment,expression:"isAppointment"}],staticClass:"mr-2",attrs:{type:"radio",value:"Would like to make an appointment."},domProps:{checked:e._q(e.isAppointment,"Would like to make an appointment.")},on:{change:function(t){e.isAppointment="Would like to make an appointment."}}}),e._v("\n            I have some questions and I would like to make an appointment to\n            discuss in details.\n          ")]),e._v(" "),n("label",{staticClass:"flex items-center"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.isAppointment,expression:"isAppointment"}],staticClass:"mr-2",attrs:{type:"radio",value:"No appointment required."},domProps:{checked:e._q(e.isAppointment,"No appointment required.")},on:{change:function(t){e.isAppointment="No appointment required."}}}),e._v("\n            No appointment required for now.\n          ")]),e._v(" "),e._l(e.errors,(function(t,o){return n("div",{key:o},e._l(t,(function(t,o){return n("div",{key:o},["isAppointment"===o?n("p",{staticClass:"mt-2 text-sm text-red-500"},[e._v("\n                "+e._s(t)+"\n              ")]):e._e()])})),0)}))],2)]),e._v(" "),n("div",{staticClass:"sm:col-span-2"},[e._m(5),e._v(" "),n("label",{staticClass:"inline-flex items-center"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.policyIsAgree,expression:"policyIsAgree"}],staticClass:"\n              border-gray-300\n              rounded\n              shadow-sm\n              text-theme-600\n              focus:border-theme-300\n              focus:ring\n              focus:ring-theme-200\n              focus:ring-opacity-50\n            ",attrs:{type:"checkbox",value:"1",required:"required"},domProps:{checked:Array.isArray(e.policyIsAgree)?e._i(e.policyIsAgree,"1")>-1:e.policyIsAgree},on:{change:function(t){var n=e.policyIsAgree,o=t.target,r=!!o.checked;if(Array.isArray(n)){var l=e._i(n,"1");o.checked?l<0&&(e.policyIsAgree=n.concat(["1"])):l>-1&&(e.policyIsAgree=n.slice(0,l).concat(n.slice(l+1)))}else e.policyIsAgree=r}}}),e._v(" "),n("span",{staticClass:"ml-2"},[e._v("I have read and agree to the\n            "),n("NuxtLink",{staticClass:"font-medium underline text-theme-600",attrs:{to:"/privacy-policy"}},[e._v("Privacy Policy")])],1)])])]),e._v(" "),n("button",{staticClass:"\n        inline-flex\n        items-center\n        px-4\n        py-2\n        text-xs\n        font-medium\n        tracking-widest\n        text-white\n        uppercase\n        transition\n        bg-gray-800\n        border border-transparent\n        rounded-md\n        hover:bg-gray-700\n        active:bg-gray-900\n        focus:outline-none focus:border-gray-900 focus:shadow-outline-gray\n        disabled:opacity-25\n      "},[e._v("\n      Submit\n    ")]),e._v(" "),n("button",{staticClass:"\n        inline-flex\n        items-center\n        px-4\n        py-2\n        text-xs\n        font-medium\n        tracking-widest\n        uppercase\n        transition\n        border border-transparent border-gray-800\n        rounded-md\n        hover:border-theme-700 hover:text-theme-700\n        focus:outline-none focus:shadow-outline-gray\n        disabled:opacity-25\n      ",on:{click:function(t){return t.preventDefault(),e.reset.apply(null,arguments)}}},[e._v("\n      Reset\n    ")])]),e._v(" "),n("div",[e.errors.length?n("div",{staticClass:"flex items-center p-4 border rounded-lg bg-red-100"},[n("svg",{staticClass:"w-8 h-8 mr-2 text-red-500",attrs:{fill:"currentColor",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M4 12a8 8 0 1116 0 8 8 0 01-16 0zm8-10C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1.793 6.793a1 1 0 00-1.414 1.414L10.586 12l-1.793 1.793a1 1 0 101.414 1.414L12 13.414l1.793 1.793a1 1 0 001.414-1.414L13.414 12l1.793-1.793a1 1 0 00-1.414-1.414L12 10.586l-1.793-1.793z"}})]),e._v(" "),n("div",{staticClass:"select-none"},[e._v("\n        The given data was invalid.\n        "),e._l(e.errors,(function(t,o){return n("div",{key:o},e._l(t,(function(t,o){return n("div",{key:o},[n("p",[e._v(e._s(t))])])})),0)}))],2)]):e.success?n("div",{staticClass:"flex items-center p-4 border rounded-lg bg-green-100"},[n("svg",{staticClass:"w-8 h-8 mr-2 text-green-500",attrs:{fill:"currentColor",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M12 4a8 8 0 100 16 8 8 0 000-16zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12z"}}),e._v(" "),n("path",{attrs:{d:"M15.707 9.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414L11 12.586l3.293-3.293a1 1 0 011.414 0z"}})]),e._v(" "),e._m(6)]):e._e()])])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"block font-medium text-gray-500",attrs:{for:"enquiry"}},[e._v("Enquiry"),n("span",{staticClass:"text-red-500"},[e._v("*")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"block font-medium text-gray-500",attrs:{for:"name"}},[e._v("Name"),n("span",{staticClass:"text-red-500"},[e._v("*")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"block font-medium text-gray-500",attrs:{for:"mobile"}},[e._v("Mobile"),n("span",{staticClass:"text-red-500"},[e._v("*")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"block font-medium text-gray-500",attrs:{for:"email"}},[e._v("Email"),n("span",{staticClass:"text-red-500"},[e._v("*")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"block font-medium text-gray-500",attrs:{for:"make_appt"}},[e._v("Make an Appointment?"),n("span",{staticClass:"text-red-500"},[e._v("*")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"block font-medium text-gray-500",attrs:{for:"message"}},[e._v("Acceptance of Privacy Policy"),n("span",{staticClass:"text-red-500"},[e._v("*")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"select-none"},[e._v("\n        Thank you for your enquiry, we will respond to your request soon.\n        "),n("div")])}],!1,null,null,null);t.default=component.exports},261:function(e,t,n){e.exports=n.p+"img/book-an-appointment.02f0f96.jpg"},262:function(e,t,n){"use strict";n.r(t);var o=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"p-4 prose bg-gray-200 sm:order-2 md:w-1/2"},[o("img",{staticClass:"w-full",attrs:{src:n(261),alt:"Book An Appointment"}}),e._v(" "),o("p",[e._v("\n            Book An Appointment to view ShowFlat & get VVIP Discounts\n            (Limited Time), Direct Developer Price, & Hardcopy E-Brochure.\n            Guaranteed with Best Price Possible.\n          ")]),e._v(" "),o("p",[e._v("OR")]),e._v(" "),o("p",[e._v("\n            Fill up the form on the left and get a copy of Price, E-Brochure,\n            and Latest Updates!\n          ")]),e._v(" "),o("p",[e._v("Strictly no spam policy.")])])}],r={components:{FormBookAppoinment:n(260).default}},l=n(15),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"pb-12"},[n("div",{staticClass:"bg-theme-300 pb-96"}),e._v(" "),n("div",{staticClass:"max-w-6xl px-4 mx-auto -mt-80"},[n("div",{staticClass:"overflow-hidden bg-white rounded-md shadow-lg"},[n("div",{staticClass:"flex flex-wrap"},[e._m(0),e._v(" "),n("div",{staticClass:"p-4 md:order-1 md:w-1/2"},[n("section",{staticClass:"space-y-6"},[n("form-book-appoinment")],1)])])])])])}),o,!1,null,null,null);t.default=component.exports;installComponents(component,{FormBookAppoinment:n(260).default})},318:function(e,t,n){e.exports=n.p+"img/press-4.01.442bbe0.jpg"},319:function(e,t,n){e.exports=n.p+"img/press-4.02.414eb30.png"},433:function(e,t,n){"use strict";n.r(t);var o=n(15),component=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[e._m(0),e._v(" "),o("section",[o("div",{staticClass:"max-w-6xl px-4 py-12 mx-auto space-y-6"},[o("img",{staticClass:"mx-auto",attrs:{src:n(318),alt:"New Home Sales Set To Rise After Falling In Oct On Fewer Launches, Options Curb"}}),e._v(" "),o("br"),e._v(" "),o("h1",{staticClass:"max-w-5xl mx-auto text-justify"},[e._v("\n                DEVELOPERS' private home sales halved in October over the preceding month amid a paucity of new launches and an official clampdown on the re-issuance of \n                options to purchase (OTPs) by developers. However, property consultants are predicting a recovery in primary-market private home sales in November and December \n                with upcoming launches.\n                ")]),e._v(" "),o("h1",{staticClass:"max-w-5xl mx-auto text-justify"},[e._v("\n                These include The Landmark in Chin Swee Road, Ki Residences at Brookvale in the Sunset Way locale, Phoenix Residences in Phoenix Avenue (off Choa Chu Kang Road) \n                and Clavon in Clementi Avenue 1. Even without the re-issuance of options, a large number of homebuyers have the financial means and are in a position to exercise \n                the option within the normal validity period, said ERA Realty's head of research and consultancy, Nicholas Mak.\n                ")]),e._v(" "),o("h1",{staticClass:"max-w-5xl mx-auto text-justify"},[e._v("\n                Data released by the Urban Redevelopment Authority (URA) on Monday based on its survey of licensed housing developers showed that 642 new private homes were sold in October, \n                51.7 per cent fewer than the 1,329 units sold in September. Year on year, developers' private home sales shrank 31.1 per cent from 932 units in October 2019. The drop was \n                partly due to the high base in the previous month, where new launches such as Penrose, Verdale and Myra helped to draw buyers, noted PropNex Realty. The sole project launched \n                in October, Hyll on Holland, saw five units being sold at a median price of S$2,729 psf.\n                ")]),e._v(" "),o("br"),e._v(" "),o("img",{staticClass:"mx-auto",attrs:{src:n(319),alt:"New Home Sales Set To Rise After Falling In Oct On Fewer Launches, Options Curb"}}),e._v(" "),o("br"),e._v(" "),o("h1",{staticClass:"max-w-5xl mx-auto text-justify"},[e._v('\n                 In all, developers released just 423 new units last month, a drop of 68.4 per cent from the 1,340 units in September and the lowest monthly figure since December 2019, when 370 units \n                 were released. Besides Hyll on Holland, the 423 units put on the market last month included newly unveiled units in projects that have been on the market for some time, such as The \n                 Garden Residences in Serangoon North View, One Pearl Bank and Kent Ridge Hill Residences. The curbs on re-issuance of OTPs by developers - unveiled on Sept 28 - were also behind the \n                 sharp slowdown in developers\' sales last month. "Some buyers, though they belong to the group who do not need re-issuance of OTP to make their purchase, waited on the sidelines to see \n                 if developers will adjust their prices," said Huttons Asia research director, Lee Sze Teck.\n                ')]),e._v(" "),o("h1",{staticClass:"max-w-5xl mx-auto text-justify"},[e._v('\n                  Colliers International\'s Singapore research head, Tricia Song, said: "The projects most affected by the tightened rules are likely those targeted at HDB upgraders; these buyers must now \n                  sell their public housing flat first, and then rent a home while waiting for their new private home to be ready. "In fact, 72 per cent of the total developer sales in October 2020 were \n                  at the median price of S$1,000-S$2,000 psf, compared with 88 per cent in September 2020, showing a decreased proportion of HDB upgraders." On a more optimistic note, Huttons\' Mr Lee \n                  said: "Buyers who aspire to upgrade their lifestyle took advantage of the buoyant conditions in both the HDB and private resale segments to market their properties for sale. "There was a \n                  noticeable increase in resale activities in October vis-a-vis September, and this will translate to higher new private home sales once the resale transactions are completed and funds are \n                  in."\n                ')]),e._v(" "),o("h1",{staticClass:"max-w-5xl mx-auto text-justify"},[e._v("\n                  JLL Singapore's senior director of research and consultancy, Ong Teck Hui, said while the clampdown on the re-issuance of OTPs may have some impact on the market, \"there is still firm \n                  interest from buyers due to a positive market outlook as the economy is expected to recover next year with a vaccine becoming available as well\". Colliers' Ms Song highlighted the Ministry \n                  of National Development's written answer on Nov 2 to a question in Parliament that disclosed the level of re-issuance of OTPs. Since January 2019, some 5,500 private housing transactions \n                  had OTPs for the same units re-issued to the same purchasers. Close to 70 per cent of these re-issued OTPs have been exercised, on average less than six months from the date when the first \n                  OTP was issued. Only about 1 per cent of the re-issued OTPs eventually lapsed. Knight Frank Singapore research head Leonard Tay said that as the market adjusts to the OTP re-issuance \n                  curbs, developers' private home sales volume should return to \"fairly normal levels\".\n                ")]),e._v(" "),o("h1",{staticClass:"max-w-5xl mx-auto text-justify"},[e._v('\n                  Edmund Tie & Co chief executive Ong Choon Fah said the current high liquidity and low interest rate environment - fuelled by governments pumping money into pandemic-hit economies - leaves \n                  fewer alternatives to property investment, not just in Singapore but in other cities as well. "That said, we should be mindful of our own risk capacity when investing in property."\n                ')]),e._v(" "),o("h1",{staticClass:"max-w-5xl mx-auto text-justify"},[e._v("\n                  In the first 10 months of this year, developers have sold 8,021 private homes, 4.5 per cent fewer than the 8,401 units sold in the first 10 months of last year. Property consultants' forecasts \n                  for full-year 2020 range from about 8,900 to 9,500 units - below last year's 9,912 units. Christine Sun, head of research and consultancy at OrangeTee & Tie, said: \"Given that fewer new projects \n                  could be launched next year, especially mega-projects, we estimate that around 8,500 to 9,500 new homes could be sold in 2021.\"\n                ")]),e._v(" "),o("h3",{staticClass:"text-center"},[e._v(" Source: Kalpana Rashiwala , Nov 17 , 2021")]),e._v(" "),o("section",{staticClass:"py-6"},[o("NuxtLink",{staticClass:"\n            inline-flex\n            items-center\n            justify-center\n            w-full\n            px-3\n            py-3\n            text-white\n            transition\n            rounded\n            sm:px-0\n            hover:bg-theme-900\n            bg-theme-700\n          ",attrs:{to:"/press/press-five"}},[e._v("\n          Continue To New Private Home Sales Hit A High In September\n          "),o("svg",{staticClass:"w-5 h-5",attrs:{fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[o("path",{attrs:{d:"M13 6l6 6-6 6M5 6l6 6-6 6",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])])],1)])]),e._v(" "),o("BookAppointment")],1)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"py-12 select-none bg-theme-700"},[n("div",{staticClass:"text-xl font-semibold text-center text-white sm:text-4xl"},[e._v("\n      New Home Sales Set To Rise After Falling In Oct On Fewer Launches, Options Curb\n    ")])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{BookAppointment:n(262).default})}}]);