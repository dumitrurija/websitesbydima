import { useState } from "react";
import { homeImgs } from "../../assets/assets"
import AboutSection from "../../components/AboutSection"

// components
import Icon from "../../components/Icon";

// icons
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

const data = [
  {
    id: 1,
    question: "What services does SquareUp provide?",
    answer: "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.",
    isActive: true
  },
  {
    id: 2,
    question: "How can SquareUp help my business?",
    answer: "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.",
    isActive: false
  },
  {
    id: 3,
    question: "What industries does SquareUp work with?",
    answer: "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.",
    isActive: false
  },
  {
    id: 4,
    question: "How long does it take to complete a project with SquareUp?",
    answer: "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.",
    isActive: false
  },
  {
    id: 5,
    question: "Do you offer ongoing support and maintenance after the project is completed?",
    answer: "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.",
    isActive: false
  },
  {
    id: 6,
    question: "How involved will I be in the project development process?",
    answer: "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.",
    isActive: false
  },
  {
    id: 7,
    question: "Can you help with website or app maintenance and updates?",
    answer: "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.",
    isActive: false
  },
  {
    id: 8,
    question: "Can you work with existing design or development frameworks?",
    answer: "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.",
    isActive: false
  },
]

const FAQ = () => {
  const [questions, setQuestions] = useState(data)

  const handleActiveQuestion = (id) => {
    setQuestions(prev => prev.map(item => item.id === id ? {...item, isActive: !item.isActive } : item))
  }


  return (
    <div className="flex flex-col gap-6">
      <AboutSection title="Frequently Asked Questions" description="Still you have any questions? Contact our Team via hello@squareup.com" image={homeImgs.faq_img} />

      <div id="container" className="grid grid-cols-2 p-12 gap-12">
        {
          questions.map(el => 
            <div className="flex justify-between gap-6">
              <div className={`h-16 w-20 text-4xl bg-gradient-to-t from-zinc-900 to-zinc-800 flex justify-center items-center rounded-md ${el.isActive ? 'text-lime-400' : ''}`}>
                { el.id < 10 ? '0' + el.id : el.id }
              </div>
              <div className="w-full">
                <div className="flex justify-between items-center mt-3">
                  <h2 className={`${el.isActive ? 'text-lime-400' : ''} font-medium text-xl`}>{ el.question }</h2>
                  <span onClick={() => handleActiveQuestion(el.id)} className={`${el.isActive ? 'text-lime-400' : ''} cursor-pointer`}>
                    { el.isActive ? <CloseIcon /> : <AddIcon /> }
                  </span>
                </div>
                {/* answer */}
                {
                  el.isActive && <p className="py-6 text-gray-200 text-sm tracking-wide">{ el.answer }</p>
                }
              </div>
            </div>
          )
        }
        
      </div>
    </div>
  )
}

export default FAQ