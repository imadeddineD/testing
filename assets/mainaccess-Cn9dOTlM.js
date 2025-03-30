import{r as n,j as e}from"./index-C-dIx3h7.js";import{N as h}from"./Nav-dE3tON6K.js";import{a as u,C as f}from"./VideoPlayer-CZJ1ndQS.js";import{a as j,b as v,c as b,d as w}from"./index-YwZT234B.js";import{a as N}from"./index-t9ZKq96Y.js";import{G as g}from"./iconBase-BLAVBpAq.js";import{R as y}from"./Ratings-Bcedem1l.js";import"./avatar-_ercWtCq.js";import"./clsx-B-dksMZM.js";import"./logo-DGBvTCOr.js";import"./index-CFmgn65b.js";import"./index-CcEsSFu0.js";import"./index-Dbr_PCnl.js";function o(s){return g({attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M8.38 14.72H7.67L6 13H3.53L3 12.5V10.08L1.31 8.36004V7.65004L3 5.93004V3.50004L3.53 3.00004H6L7.67 1.29004H8.38L10.1 3.00004H12.53L13.03 3.49004V5.93004L14.74 7.65004V8.36004L13 10.08V12.5L12.5 13H10.1L8.38 14.72ZM6.73004 10.4799H7.44004L11.21 6.71L10.5 6L7.09004 9.41991L5.71 8.03984L5 8.74984L6.73004 10.4799Z"},child:[]}]})(s)}const k=()=>{var c,d;const[s,r]=n.useState(0),[l,m]=n.useState(0),[x,p]=n.useState("");return e.jsxs("div",{className:"w-[95%] md:w-[86%] py-4 m-auto",children:[e.jsx(u,{}),e.jsxs("div",{className:"w-full flex items-center justify-between my-3",children:[e.jsxs("div",{className:`text-white  !w-[unset] !min-h-[40px] !py-[unset] ${s===0&&"!cursor-no-drop opacity-[.8]"}`,onClick:()=>r(s===0?0:s-1),children:[e.jsx("span",{className:" inline-block ml-2",children:e.jsx(j,{})}),"الدرس السابق"]}),e.jsxs("div",{className:` !w-[unset] text-white  !min-h-[40px] !py-[unset] ${a.length-1===s&&"!cursor-no-drop opacity-[.8]"}`,onClick:()=>r(a&&a.length-1===s?s:s+1),children:["الدرس القادم",e.jsx("span",{className:" inline-block mr-2 leading-[16px]",children:e.jsx(v,{})})]})]}),e.jsx("h1",{className:"pt-2 text-[25px] font-[600] text-white ",children:a[s].title}),e.jsx("br",{}),e.jsx("div",{className:"w-full p-4 flex items-center justify-between bg-slate-500 bg-opacity-20 backdrop-blur shadow-[bg-slate-700] rounded shadow-inner",children:["نظرة عامة","الموارد","الأسئلة والأجوبة","المراجعات"].map((t,i)=>e.jsx("h5",{className:`md:text-[20px] cursor-pointer ${l===i?"text-[#084cfc]":"text-white "}`,onClick:()=>m(i),children:t},i))}),e.jsx("br",{}),l===0&&e.jsx("p",{className:"text-[18px] whitespace-pre-line mb-3 text-white ",children:(c=a[s])==null?void 0:c.description}),l===1&&e.jsx("div",{children:(d=a[s])==null?void 0:d.links.map((t,i)=>e.jsxs("div",{className:"mb-5",children:[e.jsx("h2",{className:"md:text-[20px] md:inline-block text-white ",children:t.title&&t.title+" :"}),e.jsx("a",{className:"inline-block text-[#4395c4] md:text-[20px] md:pl-2",href:t.url,children:t.url})]},i))}),l===2&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex w-full",children:[e.jsx("img",{src:"https://res.cloudinary.com/dshp9jnuy/image/upload/v1665822253/avatars/nrxsg8sd9iy10bbsoenn.png",width:50,height:50,alt:"",className:"w-[50px] h-[50px] rounded-full object-cover"}),e.jsx("textarea",{name:"",value:x,onChange:t=>p(t.target.value),id:"",cols:40,rows:5,placeholder:"أكتب سؤالك...",className:"outline-none bg-transparent mr-3 border text-white   border-[#ffffff57] 800px:w-full p-2 rounded w-[90%] md:text-[18px] "})]}),e.jsx("div",{className:"w-full flex justify-end",children:e.jsx("div",{className:" !w-[120px] !h-[40px] text-[18px] mt-5 flex flex-row justify-center items-center py-2 px-4 rounded-full cursor-pointer bg-[#084cfc] min-h-[45px] font-semibold ",children:"عرض"})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("div",{className:"w-full h-[1px] bg-[#ffffff3b]"}),e.jsx("div",{children:e.jsx(C,{activeVideo:s})})]}),l===3&&e.jsx("div",{className:"w-full",children:e.jsxs(e.Fragment,{children:[e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex w-full",children:[e.jsx("img",{src:"https://res.cloudinary.com/dshp9jnuy/image/upload/v1665822253/avatars/nrxsg8sd9iy10bbsoenn.png",width:50,height:50,alt:"",className:"w-[50px] h-[50px] rounded-full object-cover"}),e.jsxs("div",{className:"w-full",children:[e.jsxs("h5",{className:"pr-3 text-[20px] font-[500] text-white",children:["إعطاء تقييم ",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx("div",{className:"flex w-full mr-2 pb-3",children:[1,2,3,4,5].map(t=>4.5>=t?e.jsx("span",{className:" inline-block ml-1 cursor-pointer text-[rgb(246,186,0)]",onClick:()=>{},children:e.jsx(b,{size:25},t)},t):e.jsx("span",{className:" inline-block ml-1 cursor-pointer text-[rgb(246,186,0)]",onClick:()=>{},children:e.jsx(w,{size:25},t)}))}),e.jsx("textarea",{name:"",value:"",onChange:t=>{},id:"",cols:40,rows:5,placeholder:"أكتب تعليقك...",className:"outline-none bg-transparent md:mr-3 text-white border border-[#ffffff57] w-[95%] md:w-full p-2 rounded text-[16px]"})]})]}),e.jsx("div",{className:"w-full flex justify-end",children:e.jsx("div",{className:" !w-[120px] !h-[40px] text-[18px] mt-5 flex flex-row justify-center items-center py-2 px-4 rounded-full cursor-pointer bg-[#084cfc] min-h-[45px] font-semibold",onClick:()=>{},children:"عرض"})})]}),e.jsx("br",{}),e.jsx("div",{className:"w-full h-[1px] bg-[#ffffff3b]"}),e.jsx("div",{className:"w-full",children:e.jsxs("div",{className:"w-full my-5 text-white ",children:[e.jsxs("div",{className:"w-full flex",children:[e.jsx("div",{children:e.jsx("img",{src:"https://res.cloudinary.com/dshp9jnuy/image/upload/v1665822253/avatars/nrxsg8sd9iy10bbsoenn.png",width:50,height:50,alt:"",className:"w-[50px] h-[50px] rounded-full object-cover"})}),e.jsxs("div",{className:"mr-2",children:[e.jsx("h1",{className:"text-[18px]",children:"Imad Eddine"}),e.jsx(y,{rating:4.5}),e.jsx("p",{children:"Thanks For this content"}),e.jsxs("small",{className:"text-[#ffffff83]",children:["22 jun 2025"," •"]})]})]}),e.jsx("span",{className:"!mr-10 cursor-pointer",onClick:()=>{},children:"أضف الرد"}),e.jsxs("div",{className:"w-full flex relative",children:[e.jsx("input",{type:"text",placeholder:"أضف الرد...",value:"",onChange:t=>{},className:"block md:ml-12 mt-2 outline-none bg-transparent border-b border-[#fff] p-[5px] w-[95%]"}),e.jsx("button",{type:"submit",className:"absolute left-0 bottom-1 text-[16px] mb-2 flex flex-row justify-center items-center py-2 px-4 rounded-full cursor-pointer bg-[#084cfc]  font-semibold",onClick:()=>{},children:"عرض"})]}),e.jsxs("div",{className:"w-full flex md:mr-16 my-5",children:[e.jsx("div",{className:"w-[50px] h-[50px]",children:e.jsx("img",{src:"https://res.cloudinary.com/dshp9jnuy/image/upload/v1665822253/avatars/nrxsg8sd9iy10bbsoenn.png",width:50,height:50,alt:"",className:"w-[50px] h-[50px] rounded-full object-cover"})}),e.jsxs("div",{className:"pr-2",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("h5",{className:"text-[20px]",children:"Ameer"})," ",e.jsx("span",{className:" inline-block text-[#0095F6] mr-2 text-[20px]",children:e.jsx(o,{})})]}),e.jsx("p",{children:"You are welcome"}),e.jsxs("small",{className:"text-[#ffffff83]",children:["24 jun 2025"," •"]})]})]})]})})]})})]})},a=[{_id:"video1",title:"مقدمة في JavaScript",videoUrl:"https://example.com/video1",description:"تعلم أساسيات برمجة JavaScript.",links:[{title:"مواد الدورة",url:"https://example.com/docs1"}],questions:[{_id:"q1",question:"ما هو الإغلاق (Closure) في JavaScript؟",user:{_id:"user1",name:"جون دو",avatar:"https://example.com/avatar1.png"},createdAt:"2025-03-26T10:00:00Z",questionReplies:[{_id:"a1",answer:"الإغلاق هو وظيفة تتذكر النطاق الذي تم إنشاؤها فيه.",user:{_id:"admin1",name:"المحاضر",avatar:"https://example.com/admin.png",role:"admin"},createdAt:"2025-03-26T12:00:00Z"}]}],reviews:[{_id:"r1",review:"دورة رائعة! الشروحات واضحة.",rating:5,user:{_id:"user2",name:"جين سميث",avatar:"https://example.com/avatar2.png"},createdAt:"2025-03-26T14:00:00Z",commentReplies:[{_id:"cr1",comment:"شكرًا لك على ملاحظاتك!",user:{_id:"admin1",name:"المحاضر",avatar:"https://example.com/admin.png",role:"admin"},createdAt:"2025-03-26T15:00:00Z"}]}]},{_id:"video2",title:"أساسيات React.js",videoUrl:"https://example.com/video2",description:"فهم أساسيات React.js وبناء واجهات تفاعلية.",links:[{title:"توثيق React",url:"https://example.com/docs2"}],questions:[{_id:"q2",question:"ما هي React Hooks؟",user:{_id:"user3",name:"إميلي ديفيس",avatar:"https://example.com/avatar3.png"},createdAt:"2025-03-26T11:00:00Z",questionReplies:[{_id:"a2",answer:"React Hooks هي دوال تتيح لك استخدام الحالة والميزات الأخرى في المكونات الوظيفية.",user:{_id:"admin1",name:"المحاضر",avatar:"https://example.com/admin.png",role:"admin"},createdAt:"2025-03-26T13:00:00Z"}]}],reviews:[{_id:"r2",review:"مفيد جدًا وسهل الفهم!",rating:4.8,user:{_id:"user4",name:"مايكل براون",avatar:"https://example.com/avatar4.png"},createdAt:"2025-03-26T16:00:00Z",commentReplies:[]}]},{_id:"video3",title:"Node.js المتقدم",videoUrl:"https://example.com/video3",description:"تعلم مفاهيم متقدمة في Node.js لتطوير الخلفيات.",links:[{title:"توثيق Node.js",url:"https://example.com/docs3"}],questions:[{_id:"q3",question:"كيف تعمل بنية الأحداث في Node.js؟",user:{_id:"user5",name:"كريس ويلسون",avatar:"https://example.com/avatar5.png"},createdAt:"2025-03-26T12:30:00Z",questionReplies:[{_id:"a3",answer:"يستخدم Node.js حلقة الأحداث لمعالجة العمليات غير المتزامنة بكفاءة.",user:{_id:"admin1",name:"المحاضر",avatar:"https://example.com/admin.png",role:"admin"},createdAt:"2025-03-26T14:30:00Z"}]}],reviews:[{_id:"r3",review:"ساعدتني هذه الدورة كثيرًا في فهم تطوير الخلفيات!",rating:4.9,user:{_id:"user6",name:"صوفيا مارتينيز",avatar:"https://example.com/avatar6.png"},createdAt:"2025-03-26T17:00:00Z",commentReplies:[]}]}],C=({activeVideo:s})=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"w-full my-3",children:a[s].questions.map((r,l)=>e.jsx(_,{}))})}),_=({})=>{const[s,r]=n.useState(!1);return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"my-4",children:[e.jsxs("div",{className:"flex mb-2",children:[e.jsx("div",{children:e.jsx("img",{src:"https://res.cloudinary.com/dshp9jnuy/image/upload/v1665822253/avatars/nrxsg8sd9iy10bbsoenn.png",width:50,height:50,alt:"",className:"w-[50px] h-[50px] rounded-full object-cover"})}),e.jsxs("div",{className:"pr-3 text-white ",children:[e.jsx("h5",{className:"text-[20px]",children:"Imad Eddine"}),e.jsx("p",{children:"Hello there"}),e.jsxs("small",{className:"text-[#ffffff83]",children:["22 jun 2025"," •"]})]})]}),e.jsxs("div",{className:"w-full flex",children:[e.jsx("span",{className:"md:pr-16 text-[#ffffff83] cursor-pointer ml-2",onClick:()=>{},children:"All Replies"}),e.jsx("span",{className:"text-[#ffffff83] cursor-pointer ",children:e.jsx(N,{size:20})}),e.jsx("span",{className:"pr-1 mt-[-4px] cursor-pointer text-[#ffffff83]",children:"2"})]}),e.jsxs("div",{className:"w-full flex 800px:ml-16 my-5 text-white",children:[e.jsx("div",{children:e.jsx("img",{src:"https://res.cloudinary.com/dshp9jnuy/image/upload/v1665822253/avatars/nrxsg8sd9iy10bbsoenn.png",width:50,height:50,alt:"",className:"w-[50px] h-[50px] rounded-full object-cover"})}),e.jsxs("div",{className:"pr-3",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("h5",{className:"text-[20px]",children:"Ameer"})," ",e.jsx("span",{className:"text-[#0095F6] mr-2 text-[20px]",children:e.jsx(o,{})})]}),e.jsx("p",{children:'"Thanks for Replies'}),e.jsxs("small",{className:"text-[#ffffff83]",children:["24 jun 2025"," •"]})]})]},"1"),e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"w-full flex relative text-white ",children:[e.jsx("input",{type:"text",placeholder:"أدخل إجابتك...",value:"",onChange:()=>{},className:"block md:mr-12 mt-2 outline-none bg-transparent border-b  text-white  border-[#fff] p-[5px] w-[95%] "}),e.jsx("button",{type:"submit",className:"absolute left-0 bottom-1 flex flex-row justify-center items-center py-1 px-3 mb-1 rounded-full cursor-pointer bg-[#084cfc] font-semibold",onClick:()=>{},disabled:()=>{},children:"عرض"})]}),e.jsx("br",{})]})]})})},M=()=>e.jsxs("div",{children:[e.jsx(h,{}),e.jsxs("div",{className:"w-full grid md:grid-cols-10",children:[e.jsx("div",{className:"hidden md:block md:col-span-3 col",children:e.jsx(f,{})}),e.jsx("div",{className:"col-span-7",children:e.jsx(k,{})})]})]});export{M as default};
