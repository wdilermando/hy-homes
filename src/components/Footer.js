import Image from 'next/image';
import React from 'react';

import { FaFacebookF, FaRegBuilding, FaInstagram } from 'react-icons/fa';
import { MdDesktopWindows } from 'react-icons/md';
import { FiSmartphone, FiMail } from 'react-icons/fi';
import { AiOutlineWhatsApp } from 'react-icons/ai';

const ContactInfo = ({ icon, info }) => (
  <span className="flex items-center mb-2">
    {icon}
    <p className="subtitle-footer ml-2">3755 Commercial OR 97302</p>
  </span>
);

const SocialInfo = ({ icon, link }) => (
  <a href="#" className="p-3 rounded-md bg-gray-600 mr-2">
    {icon}
  </a>
);

export default function Footer() {
  const contactInfo = [
    { icon: <FaRegBuilding />, info: '3755 Commercial OR 97302' },
    { icon: <FiSmartphone />, info: '3755 Commercial OR 97302' },
    { icon: <FiMail />, info: '3755 Commercial OR 97302' },
    { icon: <AiOutlineWhatsApp />, info: '3755 Commercial OR 97302' },
    { icon: <MdDesktopWindows />, info: '3755 Commercial OR 97302' },
  ];

  const socialInfos = [
    { icon: <FaFacebookF color="#fff" /> },
    { icon: <FaInstagram color="#fff" /> },
  ];

  return (
    <div className="w-full text-white">
      <footer className="bg-gray-800 px-6 md:px-24 xl:px-48 py-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <div className="flex-col items-start mb-4">
            <h4 className="title-footer">Quem somos</h4>
            <p className="subtitle-footer">
              HY homes está empenhada em fornecer um alto nível de
              especialização, atendimento ao cliente e atenção aos detalhes.
            </p>
          </div>
          <div className="flex-col items-start mb-4">
            <h4 className="title-footer">Contato</h4>
            <div className="flex-col items-start">
              {contactInfo.map((item, index) => (
                <ContactInfo key={index} icon={item.icon} info={item.info} />
              ))}
            </div>
          </div>
          <div className="flex-col items-start mb-4">
            <h4 className="title-footer">Imoveis em destaque</h4>
            <div className="flex items-center cursor-pointer hover:bg-gray-700">
              <span className="w-1/4">
                <Image
                  src={
                    'https://pt-wpresidence.b-cdn.net/wp-content/uploads/2021/05/decor2-1110x623.jpg'
                  }
                  layout="responsive"
                  alt=""
                  width={10}
                  height={10}
                  objectFit="cover"
                  className="w-2/5"
                />
              </span>
              <p className="subtitle-footer line-clamp-2 ml-2">
                Espaco comercial a venda em carneiros
              </p>
            </div>
          </div>
          <div className="flex-col items-start mb-4">
            <h4 className="title-footer">Links sociais</h4>
            <div className="flex items-start">
              {socialInfos.map((item, index) => (
                <SocialInfo key={index} icon={item.icon} />
              ))}
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-gray-900 px-6 md:px-24 xl:px-48 py-4 mx-auto">
        <div className="flex items-center justify-between">
          <p className="subtitle-footer">Todos os direitos reservados.</p>
          <p className="subtitle-footer">Termos e Condições</p>
        </div>
      </div>
    </div>
  );
}
