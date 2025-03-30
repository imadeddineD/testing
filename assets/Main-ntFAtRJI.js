import{j as t}from"./index-C-dIx3h7.js";import{N as a}from"./Nav-dE3tON6K.js";import"./avatar-_ercWtCq.js";import"./clsx-B-dksMZM.js";import"./logo-DGBvTCOr.js";import"./index-CFmgn65b.js";import"./iconBase-BLAVBpAq.js";const e={title:"أساسيات تطوير الويب باستخدام React",shortDescription:"تعرف على أساسيات React وكيفية بناء واجهات مستخدم تفاعلية بسهولة.",longDescription:`React هي واحدة من أكثر المكتبات شهرة في تطوير الواجهات الأمامية، وهي مكتبة JavaScript مفتوحة المصدر تُستخدم لإنشاء واجهات مستخدم تفاعلية. منذ إطلاقها من قِبل Facebook، أصبحت React الخيار الأول للعديد من المطورين بسبب بساطتها، أدائها العالي، وإمكانية إعادة استخدام المكونات.
  
    1. لماذا React؟
    React توفر أسلوبًا مختلفًا عن المكتبات التقليدية من خلال التركيز على بناء المكونات (Components). هذه المكونات هي وحدات مستقلة يمكن إعادة استخدامها بسهولة، مما يجعل تطوير التطبيقات الكبيرة أكثر تنظيمًا وسهولة في الصيانة.
  
    2. تثبيت React والبدء بالمشروع
    للبدء مع React، يمكنك استخدام أداة Create React App لإنشاء بيئة عمل جاهزة بسهولة:
    \`\`\`bash
    npx create-react-app my-app
    cd my-app
    npm start
    \`\`\`
    بعد تشغيل الأمر، سيتم فتح متصفح الويب تلقائيًا، وسترى صفحة React الافتراضية.
  
    ## 3. فهم JSX
    JSX هي طريقة لكتابة عناصر React باستخدام صيغة مشابهة لـ HTML داخل JavaScript:
    \`\`\`jsx
    const element = <h1>مرحبًا بك في React!</h1>;
    \`\`\`
    يقوم React بترجمة JSX إلى كود JavaScript عادي بحيث يمكن للمتصفح قراءته.
  
     4. إدارة الحالة باستخدام useState
    React يوفر Hook يُدعى useState لإدارة الحالة داخل المكونات:
    jsx
    import React, { useState } from "react";
  
    function Counter() {
      const [count, setCount] = useState(0);
  
      return (
        <div>
          <p>القيمة الحالية: {count}</p>
          <button onClick={() => setCount(count + 1)}>زيادة</button>
        </div>
      );
    }
    \`\`\`
    هنا، يتم تحديث الحالة (count) عند الضغط على الزر.
  
     5. جلب البيانات باستخدام useEffect
    في التطبيقات الحقيقية، ستحتاج إلى جلب بيانات من API خارجي. يمكنك استخدام Hook آخر يُدعى useEffect لهذا الغرض:
    
    import React, { useState, useEffect } from "react";
  
    function UsersList() {
      const [users, setUsers] = useState([]);
  
      useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then(response => response.json())
          .then(data => setUsers(data));
      }, []);
  
      return (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      );
    }
    
    يتم استدعاء API وجلب البيانات عند تحميل المكون.
  
     6. إنشاء مكونات قابلة لإعادة الاستخدام
    باستخدام React، يمكنك تقسيم الواجهة إلى مكونات صغيرة قابلة لإعادة الاستخدام:
    jsx
    function Button({ text, onClick }) {
      return <button onClick={onClick}>{text}</button>;
    }
  
    function App() {
      return <Button text="اضغط هنا" onClick={() => alert("مرحبًا!")} />;
    }
   
    هذا يسهل إدارة الأكواد ويجعل التطوير أسرع.
  
    ## 7. الخاتمة
    React أداة قوية لإنشاء تطبيقات ويب حديثة، وهي توفر ميزات مثل المكونات القابلة لإعادة الاستخدام، وإدارة الحالة بمرونة، والتفاعل مع المستخدم بسهولة. إذا كنت ترغب في احتراف React، ابدأ بممارسة المشاريع العملية واستكشاف مكتبات إضافية مثل React Router وRedux.`,author:"محمد أحمد"},p=()=>t.jsxs(t.Fragment,{children:[t.jsx(a,{}),t.jsxs("div",{className:" w-full max-w-6xl mx-auto mt-20",children:[t.jsx("h1",{className:"text-center text-[25px] leading-[35px]  lg:text-2xl text-[#2c67fc] md:!leading-[60px] font-[700] tracking-tight",children:e.author}),t.jsx("h1",{className:"text-center text-[25px] leading-[35px] sm:text-3xl lg:text-4xl text-white md:!leading-[60px] font-[700] tracking-tight",children:e.title}),t.jsx("div",{className:"text-center text-[18px] leading-[35px] lg:text-xl text-gray-400 md:!leading-[60px] tracking-tight",children:e.shortDescription}),t.jsx("div",{className:"max-w-5xl mx-auto text-center  leading-[35px]   text-gray-200 md:!leading-[60px] tracking-tight mt-10",children:e.longDescription})]})]});export{p as default};
