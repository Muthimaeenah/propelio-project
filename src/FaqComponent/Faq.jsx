import React, { useState } from 'react'
import './Accordion.css'
import { HiChevronDown } from "react-icons/hi";
import { HiChevronUp } from "react-icons/hi";

const Faq = () => {
    let [isActive, setIsActve] = useState(null);


    let  items = [

        { id: 1,
         title: 'What does Propelio do?',
         content: 'Propelio is a Real Estate technology-focused platform designed to assist the millennials, Gen Zs and underserved communities in Nigeria who aspire to own a property but face financial constraints and barriers while trying to make entry into the traditional real estate market, and also help real estate investors in streamlining their operations.' 
        },
        { id: 2, 
         title: 'How can Propelio Real Estate help me sell or buy properties?', 
         content: 'For sellers, Propelio can assist with everything from staging and marketing your home to navigating offers and closing the deal. For buyers, Propelio can help find properties that match your criteria, arrange viewings, and handle negotiations.' 
        },
        { id:3,
          title: 'What benefits can I get when listing or buying a home through Propelio?', 
         content: 'Access to an extensive network of buyers and sellers, professional staging and photography services, advanced marketing tactics, local market expertise, and exceptional customer service.' 
        },
        { id: 4,
          title: 'What can Propelio do to sell my Property faster?',
         content: 'Propelio provides staging advice, professional photography, marketing plans, and open houses.'
         },
        { id: 5,
          title: 'Does Propelio own the listed properties?', 
         content: 'Propelio does not own all the listed properties. But all the properties listed on our platform have been vetted by professionals, and are completely safe to buy, rent, lease or invest in.' 
        },
    ];

    let toggle = (id) => {
        setIsActve(isActive == id ? null : id);
    }

  return (
    <div>
        <section className='section_7'>
        <h2>Frequently Asked Questions</h2>

        <div className='accordion'>
           {
            items.map((item) =>(
                <div className="accordion-item" onClick={() => toggle(item.id)}>
                <div className="accordion-header">{item.title}
                    {
                        isActive == item.id ? <HiChevronUp className='icon' /> : <HiChevronDown  className='icon'/> 
                    }
                </div>
                {
                    isActive == item.id ? 
                    <div className="accordion-content">
                      <h4>{item.title}</h4>
                      <p>{item.content}</p>
                   </div> : null
                }
               
          </div>
            ))
           }

          
        </div>

        </section>
    </div>
  )
}

export default Faq