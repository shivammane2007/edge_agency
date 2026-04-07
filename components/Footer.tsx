
import React from 'react';
import { TwitterIcon, GithubIcon, DribbbleIcon } from './Icons';

const Footer: React.FC = () => {
  const socialLinks = [
    { Icon: TwitterIcon, href: "#" },
    { Icon: GithubIcon, href: "#" },
    { Icon: DribbbleIcon, href: "#" },
  ];
  
  const footerLinks = {
    "Platform": ["Services", "Pricing", "Work", "FAQ"],
    "Company": ["About Us", "Careers", "Blog", "Contact"],
    "Resources": ["Documentation", "API", "Community", "Status"],
    "Legal": ["Privacy", "Terms", "Security", "Licenses"],
  };

  return (
    <footer id="faq" className="bg-gray-100 dark:bg-gray-900/50">
      <div className="container mx-auto max-w-6xl px-4 py-24">
        <div className="text-center">
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter">Let's Build.</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 border-t border-black/10 dark:border-white/10 pt-12">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold">{title}</h4>
              <ul className="mt-4 space-y-2">
                {links.map(link => (
                  <li key={link}><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-16 border-t border-black/10 dark:border-white/10 pt-8">
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Edge Agency. All rights reserved.</p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            {socialLinks.map(({ Icon, href }, index) => (
              <a key={index} href={href} className="text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
