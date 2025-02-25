import React from "react";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="mx-10 py-5 mt-auto bg-black text-white text-center font-mono">
      © {date.getFullYear()}{" "}
      <a className="underline" href="https://snaptikmm.com">
        Orgpg™
      </a>
      . All Rights Reserved.
    </footer>
  );
};

export default Footer;

// mt-auto - footer ကို အောက်ဆုံးထိယူ
// index.html မှာ -  class="flex flex-col h-screen" ပေးထားသည်။